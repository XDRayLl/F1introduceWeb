import { useState, useEffect } from "react";
import moment from "moment-timezone";
import { FaCloudRain } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Weather({ RaceSessionKey }) {
  const [weather, setWeather] = useState(null);
  const [raceInfo, setRaceInfo] = useState(null);
  const [error, setError] = useState(null);
  const [rainChanges, setRainChanges] = useState([]);

  useEffect(() => {
    if (!RaceSessionKey) return;

    async function fetchWeather() {
      try {
        setWeather(null);
        setRaceInfo(null);
        setError(null);

        const sessionsCached = sessionStorage.getItem("f1sessions");
        const sessions = sessionsCached
          ? JSON.parse(sessionsCached)
          : await (await fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent("https://api.openf1.org/v1/sessions"))).json();

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

        const res = await fetch(
          "https://api.allorigins.win/raw?url=" + encodeURIComponent(`https://api.openf1.org/v1/weather?session_key=${RaceSessionKey}`)
        );
        const data = await res.json();

        if (!data.length) {
          setWeather([]);
          setRainChanges([{ note: "無天氣資料" }]);
          return;
        }

        const raceStart = moment(race.date_start);
        const raceEnd = moment(race.date_end);
        const duration = raceEnd.diff(raceStart, "minutes");

        const filtered = data.filter((w) => {
          const wTime = moment(w.date);
          return wTime.isBetween(raceStart, raceEnd, null, "[]");
        });

        // 建立降雨變化資料
        const changes = [];
        let prevRain = null;

        filtered.forEach((item) => {
          const rainNow = item.rainfall > 0 ? "rain" : "sun"; // 先用字串判斷
          if (rainNow !== prevRain) {
            changes.push({
              time: moment
                .utc(item.date)
                .tz("Asia/Taipei")
                .format("YYYY/MM/DD HH:mm"),
              rainfall: rainNow, // 儲存字串
            });
            prevRain = rainNow;
          }
        });

        setRainChanges(changes);

        // 建立平均分配時間軸
        const numPoints = 10; // 分成10段
        const step = duration / numPoints;
        const timeline = Array.from({ length: numPoints + 1 }, (_, i) =>
          raceStart.clone().add(i * step, "minutes")
        );

        // 找出最接近的時間點資料
        const averagedData = timeline.map((t) => {
          const nearest = filtered.reduce((prev, curr) =>
            Math.abs(moment(curr.date).diff(t)) <
            Math.abs(moment(prev.date).diff(t))
              ? curr
              : prev
          );
          return {
            time: t.tz("Asia/Taipei").format("HH:mm"),
            air_temperature: nearest.air_temperature ?? null,
            track_temperature: nearest.track_temperature ?? null,
            humidity: nearest.humidity ?? null,
            wind_speed: nearest.wind_speed ?? null,
          };
        });

        setWeather(averagedData);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchWeather();
  }, [RaceSessionKey]);

  if (error) return <p>Error: {error}</p>;
  if (!weather) return <p>Loading...</p>;

  const chartProps = {
    data: weather,
    margin: { top: 20, right: 30, left: 0, bottom: 20 },
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2 style={{padding:"20px",fontSize:"30pxnp"}}>{raceInfo?.location || "未知賽道"}</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 3fr 1fr",
          gridTemplateRows: "250px 300px",
          gap: "5px",
          marginBottom: "40px",
        }}
      >
        {/* 空氣溫度 */}
        <div>
          <h3>Air Temperature</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={weather}
              margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                type="category"
                interval="preserveStartEnd"
                tick={{ fontSize: 12 }}
              />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="air_temperature"
                stroke="#ff7300"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 賽道溫度 */}
        <div>
          <h3>Track Temperature</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={weather}
              margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                type="category"
                interval="preserveStartEnd"
                tick={{ fontSize: 12 }}
              />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="track_temperature"
                stroke="#0088FE"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 降雨表格 */}
        <div>
          <h3>Rainfall</h3>
          <table border="1" cellPadding="6" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Time</th>
                <th>Weather</th>
              </tr>
            </thead>
            <tbody>
              {rainChanges.map((item, i) => (
                <tr key={i}>
                  <td>{item.time}</td>
                  <td className="Weathericonblock">
                    {item.rainfall === "rain" ? <FaCloudRain color="#00a2ffff"/> : <IoMdSunny color="#ffee00ff"/>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 濕度 */}
        <div>
          <h3>Humidity</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={weather}
              margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                type="category"
                interval="preserveStartEnd"
                tick={{ fontSize: 12 }}
              />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="humidity"
                stroke="#00C49F"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 風速 */}
        <div>
          <h3>Windspeed</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={weather}
              margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                type="category"
                interval="preserveStartEnd"
                tick={{ fontSize: 12 }}
              />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="wind_speed"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Weather;
