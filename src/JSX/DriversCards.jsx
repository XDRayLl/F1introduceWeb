import "../CSS/DriversCardsCss.css";

function DriversCards({DriversName,DriversNum,DriversTeams,Driversimg,DriversContry}){
    return(
        <>
        <div className="DriverCard">
            <div className="leftSide">
                <div className="LeftTop">

                <div className="DriversName">{DriversName}</div>
                <div className="DriversTeams">{DriversTeams}</div>
                <div className="DriversNumber"><img src={DriversNum} alt="" /></div>
                </div>
                <div className="LeftDownCountry"><img src={DriversContry} alt="" /></div>
            </div>
            <div className="rightSide">
                <img className="DriversPicture" src={Driversimg} alt="" />
            </div>
        </div>
        </>
    )
}

export default DriversCards;