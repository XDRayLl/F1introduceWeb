import { useState, useEffect } from "react";
import moment from "moment"

function Sessions() {
  const [data, setData] = useState(null); // 存API回傳資料
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.jolpi.ca/ergast/f1/2025.json");
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
      <div>F1 Sessions 資料</div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre>顯示成json格式 pre:顯示文本原本的樣子 */}
      <div style={{ whiteSpace: "pre-line" }}>
        2025所有比賽:
        <br />
        {judgeYears(data).join("\n")}
      </div>
      <div>
        現在時間
        <ShowTime />
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
  const RaceDate = Races.map((e)=>e.date);
  const RaceName = Races.map((e)=>e.raceName);
  const RaceTime = Races.map((e)=>e.time);
 
  console.log("Race " ,Races)
  console.log("RaceDate " ,RaceDate)
  console.log("RaceName " ,RaceName)
  console.log("RaceTime " ,RaceTime)
  
  let ThisyearsRaces=[]
  for(var i=0; i<Races.length;i++){
    let componment = RaceName[i] +" "+ RaceDate[i] +" "+ RaceTime[i]
    ThisyearsRaces.push(componment)
  }
  
  return ThisyearsRaces;
}

function ShowTime() {
  // var Today=new Date();
  // var years = Today.getFullYear()
  // var mouth = Today.getMonth()+1
  // var date = Toady.getDate()
  // var hour = Today.getHours()
  // var min = Today.getMinutes()
  // var sec = Today.getSeconds()
  // console.log(NowTime)
  // return(
  //   <div>
  //     <div>
  //       現在時間<br/>
  //       <h3>{years}年</h3>
  //       <h3>{mouth}月</h3>
  //       <h3>{date}日</h3>
  //       <h3>{hour}點</h3>
  //       <h3>{min}分</h3>
  //       <h3>{sec}秒</h3>
  //     </div>
  //   </div>
  // )

  const [currentTime, setCurrentTime] = useState(new Date(),);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  var date = currentTime.getFullYear()+"-"+(currentTime.getMonth()+1)+"-"+currentTime.getDate();

  // if(date !=)

  var NowDay = moment(date)
  var RaceDay = moment()

  return (
    <div>
      <p>
        {currentTime.getFullYear()}/{currentTime.getMonth()+1}/
        {currentTime.getDate()}
      </p>
      <p>
        {currentTime.getHours()}:{currentTime.getMinutes()}:
        {currentTime.getSeconds()}
      </p>
    </div>
  );
}

function display() {}
export default Sessions;
