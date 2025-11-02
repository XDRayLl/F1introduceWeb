import { useState, useEffect } from "react";
import moment from "moment-timezone";

function Compeleted() {
  const [data, setData] = useState(null); // 存API回傳資料
  //   const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.openf1.org/v1/sessions"); //比賽日期資訊
        const json = await response.json();
        setData(json); // 更新 state
        // console.log("xd: ", json);
      } catch (err) {
        setError(err);
      }
    }
    fetchData();
  }, []);

  //   if (error) {
  //     return <div>Error: {error.message}</div>;
  //   }
  if (data) {
    let Today = moment();

    let ThisYearRaces = data.filter(
      (race) => moment(race.date_start).year() === 2025
    );
    ThisYearRaces = ThisYearRaces.filter((race) => race.session_name == "Race");
    // console.log("Date",ThisYearRaces)

    let RaceSessionKey = ThisYearRaces.map((num) => num.session_key);

    // console.log(RaceSessionKey);

    let isRaceDown = ThisYearRaces.map(
      (race) =>
        race.session_name == "Race" && moment(race.date_end).isBefore(Today)
    );
    while (isRaceDown.length < 25) {
      isRaceDown.push(false);
    }
    
    console.log("This",ThisYearRaces)
   
    console.log("isRaceDown", isRaceDown);
    return <FindRank sessionKeys={RaceSessionKey} />;
  }
}

function FindRank({ sessionKeys, RaceDate }) {
  const [Rankdata, setData] = useState(null); // 存API回傳資料
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://corsproxy.io/?" + encodeURIComponent("https://api.openf1.org/v1/session_result") //比賽結果排名
        );
        const json = await response.json();
        setData(json); // 更新 state
        // console.log("sessionKeys:", sessionKeys);
        // console.log("result:", json);
      } catch (err) {
        setError(err);
        console.log("error", err);
      }
    }
    fetchData();
  }, [sessionKeys]);

  if (Rankdata) {
    let FindRace = Rankdata.filter((num) =>
      sessionKeys.includes(num.session_key)
    );
    // console.log("FindRace",FindRace)
    let Topthree = FindRace.filter(
      (ranknum) => ranknum.position <= 3 && ranknum.position != null
    );
    console.log("TopThree", Topthree);

    // console.log("FindRace",FindRace)
  }
}

export default Compeleted;
