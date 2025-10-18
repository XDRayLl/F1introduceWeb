import { useState, useEffect } from "react";
import moment from "moment-timezone";
import ScheduleCards from "./ScheduleCards";

function Compeleted() {
  const [isRaceDown, setIsRaceDown] = useState([]);
  const [races, setRaces] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // 先檢查快取
        const cached = sessionStorage.getItem("f1sessions");
        const json = cached
          ? JSON.parse(cached)
          : await (await fetch("https://api.openf1.org/v1/sessions")).json();

        if (!cached) sessionStorage.setItem("f1sessions", JSON.stringify(json));

        const Today = moment();

        // 過濾今年賽事且只取 Race
        let ThisYearRaces = json.filter(
          (race) =>
            moment(race.date_start).year() === 2025 &&
            race.session_name === "Race"
        );
        console.log("This",ThisYearRaces)

        // 判斷是否已結束
        const result = ThisYearRaces.map((race) =>
          moment(race.date_end).isBefore(Today)
        );

        while (result.length < 25) result.push(false);

        // 只在父層打印一次
        console.log("isRaceDown 結果一次打印", result);

        setRaces(ThisYearRaces);
        setIsRaceDown(result);
      } catch (err) {
        console.error("Fetch Error:", err);
      }
    }

    fetchData();
  }, []);
  //   for (var i = 0; i < isRaceDown.length; i++) {
  //     console.log("isRaceDown",i,isRaceDown[i])
  return (
    <>
        
      <div>
        {isRaceDown.map((isDown, i) => (
          <ScheduleCards key={i} isStarted={isDown}
            
          />
        ))}
        
      </div>
    </>
  );
  //   }
}

export default Compeleted;
