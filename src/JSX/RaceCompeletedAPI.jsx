import { useState, useEffect } from "react";
import moment from "moment-timezone";

function Compeleted() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = "https://api.openf1.org/v1/sessions";
        const proxy = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
        const response = await fetch(proxy);
        const wrapped = await response.json();
        const json = JSON.parse(wrapped.contents);
        setData(json);
      } catch (err) {
        console.error("Session fetch error:", err);
        setError(err);
      }
    }
    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  if (data) {
    let Today = moment();

    let ThisYearRaces = data.filter(
      (race) => moment(race.date_start).year() === 2025
    );
    ThisYearRaces = ThisYearRaces.filter((race) => race.session_name === "Race");

    let RaceSessionKey = ThisYearRaces.map((num) => num.session_key);

    let isRaceDown = ThisYearRaces.map(
      (race) =>
        race.session_name === "Race" && moment(race.date_end).isBefore(Today)
    );
    while (isRaceDown.length < 25) {
      isRaceDown.push(false);
    }

    console.log("ThisYearRaces", ThisYearRaces);
    console.log("isRaceDown", isRaceDown);
    return <FindRank sessionKeys={RaceSessionKey} />;
  }

  return <div>Loading...</div>;
}

function FindRank({ sessionKeys }) {
  const [Rankdata, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = "https://api.openf1.org/v1/session_result";
        const proxy = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
        const response = await fetch(proxy);
        const wrapped = await response.json();
        const json = JSON.parse(wrapped.contents);
        setData(json);
      } catch (err) {
        console.error("Result fetch error:", err);
        setError(err);
      }
    }
    fetchData();
  }, [sessionKeys]);

  if (error) return <div>Error: {error.message}</div>;

  if (Rankdata) {
    let FindRace = Rankdata.filter((num) =>
      sessionKeys.includes(num.session_key)
    );
    let Topthree = FindRace.filter(
      (ranknum) => ranknum.position <= 3 && ranknum.position != null
    );
    console.log("TopThree", Topthree);
  }

  return <div>Loading Results...</div>;
}

export default Compeleted;
