import "../CSS/TeamsCardsCss.css";

function DriversCards({
  value,
  DriverName1,
  Driverimg1,
  DriverName2,
  Driverimg2,
  TeamsName,
  Logosrc,
  Carimg,
}) {
  const contentMap = {
    Mcl: (
      <div>
        <div className="MclTeamsCard TeamsCard">
          <div className="CardsTop">
            <div className="TopLeft">
              <div className="TeamsName">{TeamsName}</div>
              <div className="Drivers">
                <div className="DriverLeft">
                  <div className="imgBackground">
                    <img src={Driverimg1} className="Driversimg"></img>
                  </div>
                  <div className="DriverName">{DriverName1}</div>
                </div>
                <div className="DriverRight">
                  <div className="imgBackground">
                    <img src={Driverimg2} className="Driversimg"></img>
                  </div>
                  <div className="DriverName">{DriverName2}</div>
                </div>
              </div>
            </div>
            <div className="TopRightLogo">
              <img src={Logosrc} alt="" />
            </div>
          </div>
          <div className="CardDownBackground">
            <div className="maskimg"></div>
            <img src={Carimg} alt="" />
            
          </div>
        </div>
      </div>
    ),
    Mer: (
      <div>
        <div className="MerTeamsCard TeamsCard">
          <div className="CardsTop">
            <div className="TopLeft">
              <div className="TeamsName">{TeamsName}</div>
              <div className="Drivers">
                <div className="DriverLeft">
                  <div className="imgBackground">
                    <img src={Driverimg1} className="Driversimg"></img>
                  </div>
                  <div className="DriverName">{DriverName1}</div>
                </div>
                <div className="DriverRight">
                  <div className="imgBackground">
                    <img src={Driverimg2} className="Driversimg"></img>
                  </div>
                  <div className="DriverName">{DriverName2}</div>
                </div>
              </div>
            </div>
            <div className="TopRightLogo">
              <img src={Logosrc} alt="" />
            </div>
          </div>
          <div className="CardDownBackground">
            <div className="maskimg"></div>
            <img src={Carimg} alt="" />
            
          </div>
        </div>
      </div>
    ),
    Fer: (
      <div>
        <div className="FerTeamsCard TeamsCard">
          <div className="CardsTop">
            <div className="TopLeft">
              <div className="TeamsName">{TeamsName}</div>
              <div className="Drivers">
                <div className="DriverLeft">
                  <div className="imgBackground">
                    <img src={Driverimg1} className="Driversimg"></img>
                  </div>
                  <div className="DriverName">{DriverName1}</div>
                </div>
                <div className="DriverRight">
                  <div className="imgBackground">
                    <img src={Driverimg2} className="Driversimg"></img>
                  </div>
                  <div className="DriverName">{DriverName2}</div>
                </div>
              </div>
            </div>
            <div className="TopRightLogo">
              <img src={Logosrc} alt="" />
            </div>
          </div>
          <div className="CardDownBackground">
            <div className="maskimg"></div>
            <img src={Carimg} alt="" />
            
          </div>
        </div>
      </div>
    ),
    RBR: (
      <div>
        <div className="RBRTeamsCard TeamsCard">
          <div className="CardsTop">
            <div className="TopLeft">
              <div className="TeamsName">{TeamsName}</div>
              <div className="Drivers">
                <div className="DriverLeft">
                  <div className="imgBackground">
                    <img src={Driverimg1} className="Driversimg"></img>
                  </div>
                  <div className="DriverName">{DriverName1}</div>
                </div>
                <div className="DriverRight">
                  <div className="imgBackground">
                    <img src={Driverimg2} className="Driversimg"></img>
                  </div>
                  <div className="DriverName">{DriverName2}</div>
                </div>
              </div>
            </div>
            <div className="TopRightLogo">
              <img src={Logosrc} alt="" />
            </div>
          </div>
          <div className="CardDownBackground">
            <div className="maskimg"></div>
            <img src={Carimg} alt="" />
            
          </div>
        </div>
      </div>
    ),
    Williams: (
      <div>
        <div className="WilliamsTeamsCard TeamsCard">
          <div className="CardsTop">
            <div className="TopLeft">
              <div className="TeamsName">{TeamsName}</div>
              <div className="Drivers">
                <div className="DriverLeft">
                  <div className="imgBackground">
                    <img src={Driverimg1} className="Driversimg"></img>
                  </div>
                  <div className="DriverName">{DriverName1}</div>
                </div>
                <div className="DriverRight">
                  <div className="imgBackground">
                    <img src={Driverimg2} className="Driversimg"></img>
                  </div>
                  <div className="DriverName">{DriverName2}</div>
                </div>
              </div>
            </div>
            <div className="TopRightLogo">
              <img src={Logosrc} alt="" />
            </div>
          </div>
          <div className="CardDownBackground">
            <div className="maskimg"></div>
            <img src={Carimg} alt="" />
            
          </div>
        </div>
      </div>
    ),
    RB: (
      <div>
        <div className="RBTeamsCard TeamsCard">
          <div className="CardsTop">
            <div className="TopLeft">
              <div className="TeamsName">{TeamsName}</div>
              <div className="Drivers">
                <div className="DriverLeft">
                  <div className="imgBackground">
                    <img src={Driverimg1} className="Driversimg"></img>
                  </div>
                  <div className="DriverName">{DriverName1}</div>
                </div>
                <div className="DriverRight">
                  <div className="imgBackground">
                    <img src={Driverimg2} className="Driversimg"></img>
                  </div>
                  <div className="DriverName">{DriverName2}</div>
                </div>
              </div>
            </div>
            <div className="TopRightLogo">
              <img src={Logosrc} alt="" />
            </div>
          </div>
          <div className="CardDownBackground">
            <div className="maskimg"></div>
            <img src={Carimg} alt="" />
            
          </div>
        </div>
      </div>
    ),
    AM: (
      <div>
        <div className="AMTeamsCard TeamsCard">
          <div className="CardsTop">
            <div className="TopLeft">
              <div className="TeamsName">{TeamsName}</div>
              <div className="Drivers">
                <div className="DriverLeft">
                  <div className="imgBackground">
                    <img src={Driverimg1} className="Driversimg"></img>
                  </div>
                  <div className="DriverName">{DriverName1}</div>
                </div>
                <div className="DriverRight">
                  <div className="imgBackground">
                    <img src={Driverimg2} className="Driversimg"></img>
                  </div>
                  <div className="DriverName">{DriverName2}</div>
                </div>
              </div>
            </div>
            <div className="TopRightLogo">
              <img src={Logosrc} alt="" />
            </div>
          </div>
          <div className="CardDownBackground">
            <div className="maskimg"></div>
            <img src={Carimg} alt="" />
            
          </div>
        </div>
      </div>
    ),
    KS: (
      <div>
        <div className="KSTeamsCard TeamsCard">
          <div className="CardsTop">
            <div className="TopLeft">
              <div className="TeamsName">{TeamsName}</div>
              <div className="Drivers">
                <div className="DriverLeft">
                  <div className="imgBackground">
                    <img src={Driverimg1} className="Driversimg"></img>
                  </div>
                  <div className="DriverName">{DriverName1}</div>
                </div>
                <div className="DriverRight">
                  <div className="imgBackground">
                    <img src={Driverimg2} className="Driversimg"></img>
                  </div>
                  <div className="DriverName">{DriverName2}</div>
                </div>
              </div>
            </div>
            <div className="TopRightLogo">
              <img src={Logosrc} alt="" />
            </div>
          </div>
          <div className="CardDownBackground">
            <div className="maskimg"></div>
            <img src={Carimg} alt="" />
            
          </div>
        </div>
      </div>
    ),
    Haas: (
      <div>
        <div className="HaasTeamsCard TeamsCard">
          <div className="CardsTop">
            <div className="TopLeft">
              <div className="TeamsName">{TeamsName}</div>
              <div className="Drivers">
                <div className="DriverLeft">
                  <div className="imgBackground">
                    <img src={Driverimg1} className="Driversimg"></img>
                  </div>
                  <div className="DriverName">{DriverName1}</div>
                </div>
                <div className="DriverRight">
                  <div className="imgBackground">
                    <img src={Driverimg2} className="Driversimg"></img>
                  </div>
                  <div className="DriverName">{DriverName2}</div>
                </div>
              </div>
            </div>
            <div className="TopRightLogo">
              <img src={Logosrc} alt="" />
            </div>
          </div>
          <div className="CardDownBackground">
            <div className="maskimg"></div>
            <img src={Carimg} alt="" />
            
          </div>
        </div>
      </div>
    ),
    Alpine: (
      <div>
        <div className="AlpineTeamsCard TeamsCard">
          <div className="CardsTop">
            <div className="TopLeft">
              <div className="TeamsName">{TeamsName}</div>
              <div className="Drivers">
                <div className="DriverLeft">
                  <div className="imgBackground">
                    <img src={Driverimg1} className="Driversimg"></img>
                  </div>
                  <div className="DriverName">{DriverName1}</div>
                </div>
                <div className="DriverRight">
                  <div className="imgBackground">
                    <img src={Driverimg2} className="Driversimg"></img>
                  </div>
                  <div className="DriverName">{DriverName2}</div>
                </div>
              </div>
            </div>
            <div className="TopRightLogo">
              <img src={Logosrc} alt="" />
            </div>
          </div>
          <div className="CardDownBackground">
            <div className="maskimg"></div>
            <img src={Carimg} alt="" />
            
          </div>
        </div>
      </div>
    ),
  };

  return contentMap[value] || <div>未知</div>;
}

export default DriversCards;
