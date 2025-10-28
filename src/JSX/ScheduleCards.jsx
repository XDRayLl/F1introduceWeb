import "../CSS/ScheduleCardsCss.css";

function ScheduleCard({
  GPName,
  GPContent,
  GPDateF,
  GPRoundF,
  Rank1F,
  Rank2F,
  Rank3F,
  imgSrcF,
  GPimgF,
  isStarted,
  clicked
}) {
  return (
    <>
      <div className="Cards" onClick={clicked}>
        {/* <button onClick={handleToggle}>切換</button> */}
        <GPstartOrnotTop
          isStartedTop={isStarted}
          GPRound={GPRoundF}
          GPDate={GPDateF}
          GPimg={GPimgF}
        />
        <div className="CardMid">
          <div className="GPName">
            <img className="GPimg" src={GPimgF} alt="" />
            {GPName}
          </div>
          <div className="GPContent">{GPContent}</div>
        </div>
        <GPstartOrnotDown
          isStartedDown={isStarted}
          Rank1={Rank1F}
          Rank2={Rank2F}
          Rank3={Rank3F}
          GPDate={GPDateF}
          imgSrc={imgSrcF}
        />
      </div>
    </>
  );
}

function GPstartOrnotDown({
  isStartedDown,
  GPDate,
  Rank1,
  Rank2,
  Rank3,
  imgSrc,
}) {
  if (isStartedDown === true) {
    return (
      <>
        <div className="CardDownRank">
          <div className="Rank">
            <div className="RankNum">
              <div className="Ranknum">1</div>
              <div className="RankText">ST</div>
            </div>
            <div id="Rank1">{Rank1}</div>
          </div>
          <div className="Rank RankMid" id="Rank2">
            <div className="RankNum">
              <div className="Ranknum">2</div>
              <div className="RankText">ND</div>
            </div>
            <div id="Rank1">{Rank2}</div>
          </div>
          <div className="Rank" id="Rank3">
            <div className="RankNum">
              <div className="Ranknum">3</div>
              <div className="RankText">RD</div>
            </div>
            <div id="Rank1">{Rank3}</div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="CardDown">
          <div className="Date">{GPDate}</div>
          <img className="trackimg" src={imgSrc} />
        </div>
      </>
    );
  }
  // <h1>{isLoggedIn ? "歡迎回來！" : "請先登入"}</h1>;
}

function GPstartOrnotTop({ isStartedTop, GPRound, GPDate, GPimg }) {
  if (isStartedTop === true) {
    return (
      <>
        <div className="CardTop">
          <div className="Round">{GPRound}</div>
          <div className="Date"> {GPDate}</div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="CardTop">
          <div className="Round">{GPRound}</div>
        </div>
      </>
    );
  }
  // <h1>{isLoggedIn ? "歡迎回來！" : "請先登入"}</h1>;
}

export default ScheduleCard;
