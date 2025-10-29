import { useState, useEffect } from "react";
import moment from "moment-timezone";

function Weather({ RaceSessionKey }) {
  const [weather, setWeather] = useState(null);
  const [raceInfo, setRaceInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!RaceSessionKey) return;

    async function fetchWeather() {
      try {
        setWeather(null);
        setRaceInfo(null);
        setError(null);

        // 先找出該 session 的詳細資料
        const sessionsCached = sessionStorage.getItem("f1sessions");
        const sessions = sessionsCached
          ? JSON.parse(sessionsCached)
          : await (await fetch("https://api.openf1.org/v1/sessions")).json();

        if (!sessionsCached)
          sessionStorage.setItem("f1sessions", JSON.stringify(sessions));

        const race = sessions.find(
          (s) => String(s.session_key) === String(RaceSessionKey)
        );

        if (!race) {
          setError("找不到該場比賽資訊");
          return;
        }

        setRaceInfo(race);

        // 抓該場天氣資料
        const res = await fetch(
          `https://api.openf1.org/v1/weather?session_key=${RaceSessionKey}`
        );
        const data = await res.json();

        if (!data.length) {
          setWeather([{ note: "無天氣資料" }]);
          return;
        }

        const raceStart = moment(race.date_start);
        const raceEnd = moment(race.date_end);

        const filtered = data.filter((w) => {
          const wTime = moment(w.date);
          return wTime.isBetween(raceStart, raceEnd, null, "[]");
        });

        // 只顯示狀態變化
        const filteredByChange = [];
        let prevRain = null;

        filtered.forEach((item) => {
          const rainNow = item.rainfall > 0 ? "🌧️" : "☀️";
          if (rainNow !== prevRain) {
            filteredByChange.push(item);
            prevRain = rainNow;
          }
        });

        setWeather(filteredByChange);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchWeather();
  }, [RaceSessionKey]); // 👈 這裡一定要依賴 RaceSessionKey

  // ----------------------------
  // Render 區塊
  // ----------------------------
  if (error) return <p>Error: {error}</p>;
  if (!weather) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>
        🏁 {raceInfo?.location || "未知賽道"}
      </h2>

      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Time</th>
            <th>Temperature (°C)</th>
            <th>TrackTemperature (°C)</th>
            <th>humidity (%)</th>
            <th>WindSpeed (m/s)</th>
            <th>rainfall</th>
          </tr>
        </thead>
        <tbody>
          {weather.map((item, i) => (
            <tr key={i}>
              {item.note ? (
                <td colSpan="6">{item.note}</td>
              ) : (
                <>
                  <td>
                    {item.date
                      ? moment
                          .utc(item.date)
                          .tz("Asia/Taipei")
                          .format("YYYY/MM/DD HH:mm")
                      : "-"}
                  </td>
                  <td>{item.air_temperature ?? "-"}</td>
                  <td>{item.track_temperature ?? "-"}</td>
                  <td>{item.humidity ?? "-"}</td>
                  <td>{item.wind_speed ?? "-"}</td>
                  <td>{item.rainfall > 0 ? "🌧️" : "☀️"}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Weather;
