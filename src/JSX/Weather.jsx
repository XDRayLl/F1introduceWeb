import { useState, useEffect, useRef } from "react";
import moment from "moment-timezone";

function Weather() {
  const [races, setRaces] = useState([]);
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    async function fetchWeatherForRaces() {
      try {
        const cached = sessionStorage.getItem("f1sessions");
        const json = cached
          ? JSON.parse(cached)
          : await (await fetch("https://api.openf1.org/v1/sessions")).json();
        if (!cached) sessionStorage.setItem("f1sessions", JSON.stringify(json));

        const ThisYearRaces = json.filter(
          (race) =>
            moment(race.date_start).year() === 2025 &&
            race.session_name === "Race"
        );

        setRaces(ThisYearRaces);

        for (let race of ThisYearRaces) {
          const key = race.session_key;

          try {
            const res = await fetch(`https://api.openf1.org/v1/weather?session_key=${key}`);
            const data = await res.json();

            if (!data.length) {
              setWeather((prev) => [
                ...prev,
                { session_key: key, location: race.location, weather: [{ note: "無天氣資料" }] },
              ]);
              continue;
            }

            const raceStart = moment(race.date_start);
            const raceEnd = moment(race.date_end);

            // 過濾比賽時間段內資料
            const filtered = data.filter((w) => {
              const wTime = moment(w.date);
              return wTime.isBetween(raceStart, raceEnd, null, "[]");
            });

            // 只保留狀態改變的資料
            const filteredByChange = [];
            let prevRainStatus = null;

            filtered.forEach((item) => {
              const rainStatus = item.rainfall && item.rainfall > 0 ? "🌧️" : "☀️";
              if (prevRainStatus !== rainStatus) {
                filteredByChange.push(item);
                prevRainStatus = rainStatus;
              }
            });

            setWeather((prev) => [
              ...prev,
              { session_key: key, location: race.location, weather: filteredByChange },
            ]);
          } catch (err) {
            console.error(`查詢 session_key ${key} 失敗:`, err);
            setWeather((prev) => [
              ...prev,
              { session_key: key, location: race.location, weather: [{ note: "抓取失敗" }] },
            ]);
          }

          await new Promise((r) => setTimeout(r, 500));
        }
      } catch (err) {
        setError(err.message);
      }
    }

    fetchWeatherForRaces();
  }, []);

  if (error) return <p>⚠️ 錯誤：{error}</p>;
  if (!races.length) return <p>資料載入中...</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>🏁 F1 比賽期間天氣（只顯示狀態改變）</h2>
      {weather.length === 0 && <p>天氣資料載入中...</p>}
      {weather.map((w, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <h3>{w.location || "未知賽道"} (Session: {w.session_key})</h3>
          <table border="1" cellPadding="6">
            <thead>
              <tr>
                <th>時間</th>
                <th>氣溫 (°C)</th>
                <th>賽道溫度 (°C)</th>
                <th>濕度 (%)</th>
                <th>風速 (m/s)</th>
                <th>降雨</th>
              </tr>
            </thead>
            <tbody>
              {w.weather.map((item, j) => (
                <tr key={j}>
                  <td>{item.date ?? "-"}</td>
                  <td>{item.air_temperature ?? "-"}</td>
                  <td>{item.track_temperature ?? "-"}</td>
                  <td>{item.humidity ?? "-"}</td>
                  <td>{item.wind_speed ?? "-"}</td>
                  <td>{item.rainfall && item.rainfall > 0 ? "🌧️" : "☀️"}</td>
                  {item.note && <td colSpan={6}>{item.note}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Weather;

//  https://chatgpt.com/c/68b86454-a1e0-8332-9831-146b40721bf7