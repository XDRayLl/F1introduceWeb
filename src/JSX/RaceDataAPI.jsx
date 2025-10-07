import { useState, useEffect } from "react";
import moment from "moment";
import "../CSS/RaceDataAPICss.css"
// import Countdown from "react-countdown";

function Sessions() {
  const [data, setData] = useState(null); // 存API回傳資料
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.jolpi.ca/ergast/f1/2025.json"
        );
        const json = await response.json();
        setData(json); // 更新 state
        console.log("xd: ", json);
      } catch (err) {
        setError(err);
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {/* <div>F1 Sessions 資料</div> */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre>顯示成json格式 pre:顯示文本原本的樣子 */}
      <div style={{ whiteSpace: "pre-line" }}>
        {/* 2025所有比賽: */}
        {/* <br /> */}
        {/* {judgeYears(data).join("\n")} */}
      </div>
      <div>
        {/* 現在時間 */}
        <ShowTime races={data.MRData.RaceTable.Races} />
        {/* {setInterval(ShowTime,1000)} */}
      </div>

      {/* {data}  respone.text()*/}
    </div>
  );
}

function judgeYears(Data) {
  // const Races = Data.filter((e) => e.session_type == "Race" && e.meeting_key>=1253);
  // const RaceDate = Races.map((e) => e.date_start);
  // const RaceConutry = Races.map((e) => e.country_name)

  const Races = Data.MRData.RaceTable.Races;
  const RaceDate = Races.map((e) => e.date);
  const RaceName = Races.map((e) => e.raceName);
  const RaceTime = Races.map((e) => e.time);

  let ThisyearsRaces = [];
  for (var i = 0; i < Races.length; i++) {
    let componment = RaceName[i] + " " + RaceDate[i] + " " + RaceTime[i];
    ThisyearsRaces.push(componment);
  }

  return ThisyearsRaces;
}

function ShowTime({ races }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  let Today = moment();
  // console.log(races)

  let upcomingRaceDate = races.map((race) =>
    moment(race.date + "T" + race.time)
  ); //moment(,顯示格式)(讓每個日期是變數race = monment(race.date)並形成一個陣列)
  let upcomingRace = upcomingRaceDate.find((raceDate) =>
    raceDate.isAfter(Today)
  );

  // let upcomingDate = races.map((race) => moment(race.date))

  let upcomingRaceName;
  let RaceDate;
  let RaceRound
  for (var i = 0; i < upcomingRaceDate.length; i++) {
    if (upcomingRace == upcomingRaceDate[i]) {
      let AllRaceName = races.map((e) => e.raceName);
      let AllRaceDate = races.map((e) => e.date);
      let AllRaceRound = races.map((e)=>e.round)
      upcomingRaceName = AllRaceName[i];
      RaceDate = AllRaceDate[i];
      RaceRound = AllRaceRound[i]
    }
  }

  let Diff = moment.duration(upcomingRace.diff(Today)); //單位為毫秒
  let days = Math.floor(Diff.asDays());
  let hours = Diff.hours();
  let minutes = Diff.minutes();
  let seconds = Diff.seconds();
  // let RaceDate = moment(upcomingRace,"MMM Do YY")
  // console.log("RaceDate", RaceDate);

  return (
    <div>
      {/* <p>
        {currentTime.getFullYear()}/{currentTime.getMonth() + 1}/
        {currentTime.getDate()}
      </p>
      <p>
        {currentTime.getHours()}:{currentTime.getMinutes()}:
        {currentTime.getSeconds()}
      </p> */}
      <div className="PreviewArea">
        <p>{RaceRound}</p>
        <p>
          {upcomingRaceName} <br/>
          {days}D {hours}H {minutes}M {seconds}S
        </p>
        <p>{moment(RaceDate).format("MMM Do")}</p>
      </div>
    </div>
  );
}

function Counydown() {}

function display() {}
export default Sessions;
