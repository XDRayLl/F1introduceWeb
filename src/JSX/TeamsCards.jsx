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
        <div className="MclDriverCard DriverCard">
          <div className="leftSide">
            <div className="LeftTop">
              <div className="DriversName">Lando Norris</div>
              <div className="DriversTeams">McLaren</div>
              <div className="DriversNumber">
                <img
                  src="https://media.formula1.com/image/upload/c_fit,w_876,h_742/q_auto/v1740000000/common/f1/2025/mclaren/lannor01/2025mclarenlannor01numberwhitefrless.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="LeftDownCountry">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/250px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                alt=""
              />
            </div>
          </div>
          <div className="rightSide">
            <img
              className="DriversPicture"
              src="https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mclaren/lannor01/2025mclarenlannor01right.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    ),
    Fer: (
      <div>
        <div className="MerDriverCard DriverCard">
          <div className="leftSide">
            <div className="LeftTop">
              <div className="DriversName">George Russell</div>
              <div className="DriversTeams">Mercedes</div>
              <div className="DriversNumber">
                <img
                  src="https://media.formula1.com/image/upload/c_fit,w_876,h_742/q_auto/v1740000000/common/f1/2025/mercedes/georus01/2025mercedesgeorus01numberwhitefrless.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="LeftDownCountry">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/250px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                alt=""
              />
            </div>
          </div>
          <div className="rightSide">
            <img
              className="DriversPicture"
              src="https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mercedes/georus01/2025mercedesgeorus01right.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    ),
    RBR: (
      <div>
        <div className="MerDriverCard DriverCard">
          <div className="leftSide">
            <div className="LeftTop">
              <div className="DriversName">Kimi Antonelli</div>
              <div className="DriversTeams">Mercedes</div>
              <div className="DriversNumber">
                <img
                  src="https://media.formula1.com/image/upload/c_fit,w_876,h_742/q_auto/v1740000000/common/f1/2025/mercedes/andant01/2025mercedesandant01numberwhitefrless.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="LeftDownCountry">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACtCAMAAABhsvGqAAAAFVBMVEX///8AkkbOKzcAjz96tIjcfoHNIC7/Jth5AAAA5UlEQVR4nO3QSQEAIAADoHn2j2yKvYQIZDSsnYpzZ0MkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQcL3CQ86tbh+5X8kwAAAAABJRU5ErkJggg=="
                alt=""
              />
            </div>
          </div>
          <div className="rightSide">
            <img
              className="DriversPicture"
              src="https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mercedes/andant01/2025mercedesandant01right.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    ),
    Williams: (
      <div>
        <div className="FerDriverCard DriverCard">
          <div className="leftSide">
            <div className="LeftTop">
              <div className="DriversName">Charles Leclerc</div>
              <div className="DriversTeams">Ferrari</div>
              <div className="DriversNumber">
                <img
                  src="https://media.formula1.com/image/upload/c_fit,w_876,h_742/q_auto/v1740000000/common/f1/2025/ferrari/chalec01/2025ferrarichalec01numberwhitefrless.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="LeftDownCountry">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAADQCAMAAADWDu+1AAAAD1BMVEX////OESbOCiPQLDX99/fOx8iOAAAA6UlEQVR4nO3QsQ2EQADEwDPQf81I28FHTzBTgeUTnX8HfIEJmTAmZMKYkAljQiaMCZkwJmTCmJAJY0ImjAmZMCZkwpiQCWNCJowJmTAmZMKYkAljQiaMCZkwJmTCmJAJY0ImjAmZMCZkwpiQCWNCJowJmTAmZMKYkAljQiaMCZkwJmTCmJAJY0ImjAmZMCZkwpiQCWNCJowJmTAmZMKYkAljQiaMCZkwJmTCmJAJY0ImjAmZMCZkwpiQCWNCJowJmTAmZMKci+vc3OfhOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAv3sBgcRwvc2YXzQAAAAASUVORK5CYII="
                alt=""
              />
            </div>
          </div>
          <div className="rightSide">
            <img
              className="DriversPicture"
              src="https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/ferrari/chalec01/2025ferrarichalec01right.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    ),
    RB: (
      <div>
        <div className="FerDriverCard DriverCard">
          <div className="leftSide">
            <div className="LeftTop">
              <div className="DriversName">Lewis Hamilton</div>
              <div className="DriversTeams">Ferrari</div>
              <div className="DriversNumber">
                <img
                  src="https://media.formula1.com/image/upload/c_fit,w_876,h_742/q_auto/v1740000000/common/f1/2025/ferrari/lewham01/2025ferrarilewham01numberwhitefrless.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="LeftDownCountry">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
          </div>
          <div className="rightSide">
            <img
              className="DriversPicture"
              src="https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/ferrari/lewham01/2025ferrarilewham01right.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    ),
    AM: (
      <div>
        <div className="RBRDriverCard DriverCard">
          <div className="leftSide">
            <div className="LeftTop">
              <div className="DriversName">Max Verstappen</div>
              <div className="DriversTeams">Red bull Racing</div>
              <div className="DriversNumber">
                <img
                  src="https://media.formula1.com/image/upload/c_fit,w_876,h_742/q_auto/v1740000000/common/f1/2025/redbullracing/maxver01/2025redbullracingmaxver01numberwhitefrless.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="LeftDownCountry">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACtCAMAAABhsvGqAAAAFVBMVEX///+uHCghRoutEyG7Uli6wdQANoTnBA3RAAAA9klEQVR4nO3QgU0DARDEwN9LQv8lg9wEIM1UYPkZe3474C8wYSbEhJkQE2ZCTJgJMWEmxISZEBNmQkyYCTFhJsSEmRATZkJMmAkxYSbEhJkQE2ZCTJgJMWEmxISZEBNmQkyYCTFhJsSEmRATZkJMmAkxYSbEhJkQE2ZCnhev5837AQAAAAAAAAAAAAAAAADgH/nweb74eo4z4UyICWdCTDgTYsKZEBPOhJhwJsSEMyEmnAkx4UyICWdCTDgTYsKZEBPOhJhwJsSEMyEmnAkx4UyICWdCTDgTYsKZEBPOhJhwJsSEMyEmnAkx4UyICWdCTDgTYsKPb9huvOm8uYtrAAAAAElFTkSuQmCC"
                alt=""
              />
            </div>
          </div>
          <div className="rightSide">
            <img
              className="DriversPicture"
              src="https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/redbullracing/maxver01/2025redbullracingmaxver01right.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    ),
    KS: (
      <div>
        <div className="RBRDriverCard DriverCard">
          <div className="leftSide">
            <div className="LeftTop">
              <div className="DriversName">Yuki Tsunoda</div>
              <div className="DriversTeams">Red Bull Racing</div>
              <div className="DriversNumber">
                <img
                  src="https://media.formula1.com/image/upload/c_fit,w_876,h_742/q_auto/v1740000000/common/f1/2025/redbullracing/yuktsu01/2025redbullracingyuktsu01numberwhitefrless.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="LeftDownCountry">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACtCAMAAABhsvGqAAAAclBMVEX///+8AC28ACu6ACC7ACe3AAC4ABC5ABy6ACS5ABm4ABa6ACK4ABO4AA335ej67/H13+P9+fnVf4rGQ1XRb3zz2d7Ud4Xw0NblsrjajZfNZ3Lhpq/qwMftx83dlZ++GDTJS16/IzzCLEbKWWjEN03enqYhU4XlAAAEcElEQVR4nO3d25qqOgwAYNpyEAERRERREUff/xUXOtvT9oTStCmT/3ouaL7SJmllLIsQQgghhBBCCCGEEEIIIYQQQgghhJDeS0bj2dF4lOh+Fg2SaTFfbP3QjY7c0N8u5sX074Qime4n9nAoBpyzM84HYhjyzX6q+/FUmKW169tXw7/GbT/cpTPdzwgrXteOeBKAcyCEU61j3U8KZpQL/00E/ouDL/KR7qcFMcrfToKb6ZD1LwxxE4K2EfglorRnL0XJvc9CcJgNHi91P7dE40nU+kW4CUM0Get+dllKMfgmBAcD0Y/JkGTfTYPTZMh0D0CCUf35anDDq43fJma23S0GjNm24Snk0unwKpxwZ6l7HF0suywHV1GIDI7CMpQSgyYKobFRWMmZB8coRCvdo/nOOJAWgyYKgZFpU1x13heu2ZWJlcQkkBkDxoKJ7hF9Lg3lxoCxcK57TJ9aOrJjwJhp6ULMJC6KJ5yZtSxkHQuGxzyjiqllBBEDxozKFrZSd8cLe6t7ZO3thzAxaHaIve6xtZW0a6x/g/umnNStfagYMOavdY+unZiDTQRztkm4FeFgaEbnFSJPuuCV7vG1sZReNNxyTUieM8nV4/8FBqSNsbx20mPcxb9LFsBvQ5MwFbrH+Nbi6yO3tgYL3WN8J6mA34bD/oD9fZgB1Y/XIuwnUnOQRsItD3ufbQNURF+zN7pH+cYAfEk4XPTTPcrXYoD+6j0HdxG1UrAuou+yFYCthAsfd7qUfnhP7zsi1T3Ol+DzxQPkOeOPgh2y2SN/dI/zpYmaIKA+m022CtKEJlHY6R7oK0mtJgg15hJKQQ15DALqOpJmgqVuTdhiDoK1U7M7oF4YlVTS6GvpHzUZI+5kCfrQ4Rfyo4e9gu4aYx7uWwrQZ3C/kN90HqvpLOH+GUiiprOEOk1oEgUVjVbcaYJl5QpaSyLXPco3Chc+CC7uFqNlxR78WaSHu+Nuqegt4e4rHa3B0yUP/y0++EwBeZZwBP0+GPA2WFYJfAjlm3CREfjmFo/Q7w0HGWi+JHCX0SdT0HzJNeRDTJDtJeRNpYsp4C7pGDIRmqkA1mQLTJkIljVq/0Glz3BhQKJ0MgfKFXzsl/euJTVI2mijPn67A3OBC/mFrTspwG+AhrivKj0g/1QS+QnkIyNX8g7BXYN2hhNJX9Y5x8DML+zspdYQLu6jt6dyiWdyIfY2+1OZtCiEZhTQD8mKgskxaKIgJWky/XOE8+57BI9MqhgeKrt+h487JnRW31ixTt2FgBlWMDwWbzrUEcONEc3lFtbOl4WE7eA/cmttvPumkuDuzshP7z1VDj49s+feoAcr4q0k9T7pPHLhpUa1kVqKUz5sGYbmD/v2IfezuKyi95/r5EFUlX0NwdEsr9xXrwUXLsuw/yq+u2SV1pEv7v/jCbeF7/J81cel4JFxkW5qxwl9T4ggEMLzQ8epN2nRry2xhWRalOs0z7I8XZd/6d8fEUIIIYQQQgghhBBCCCGEEEIIIYSQP+sfk3FEOV7f3vAAAAAASUVORK5CYII="
                alt=""
              />
            </div>
          </div>
          <div className="rightSide">
            <img
              className="DriversPicture"
              src="https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/redbullracing/yuktsu01/2025redbullracingyuktsu01right.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    ),
    Haas: (
      <div>
        <div className="WilDriverCard DriverCard">
          <div className="leftSide">
            <div className="LeftTop">
              <div className="DriversName">Alexander Albon</div>
              <div className="DriversTeams">Williams</div>
              <div className="DriversNumber">
                <img
                  src="https://media.formula1.com/image/upload/c_fit,w_876,h_742/q_auto/v1740000000/common/f1/2025/williams/alealb01/2025williamsalealb01numberwhitefrless.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="LeftDownCountry">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACtCAMAAABhsvGqAAAAG1BMVEUtKkqlGTH09fikDyyxUVv3+/7GyM8OBTj4+PsRYjEEAAABD0lEQVR4nO3d220DMBADQZF+JP1XHIFN2AFmKhD2/8QTcj79gG8gQkQYESLCiBARRoSIMCJEhBEhIowIEWFEiAgjQkQYESLCiBARRoSIMCJc58HjPHmeF69TKkJFGBEqwohQEUaEijAiVIQRoSKMCBVhRKgII0JFGBEqwohQEUaEijAiXOeX3/PmfX74OQAAAAAAAAAAAAAAAADAv/Dpm8Rv4EL2cit9uZqvrwNGhIowIlSEEaEijAgVYUSoCCNCRRgRKsKIUBFGhIowIlSEEaEijAgVYSyHXjZkL2vCl13pGNceESLCiBARRoSIMCJEhBEhIowIEWFEiAgjQkQYESLCiBARRoSIMCJEhBHh+gNh/eOBx6gTtAAAAABJRU5ErkJggg=="
                alt=""
              />
            </div>
          </div>
          <div className="rightSide">
            <img
              className="DriversPicture"
              src="https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/williams/alealb01/2025williamsalealb01right.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    ),
    Alpine: (
      <div>
        <div className="WilDriverCard DriverCard">
          <div className="leftSide">
            <div className="LeftTop">
              <div className="DriversName">Carlos Sainz</div>
              <div className="DriversTeams">Williams</div>
              <div className="DriversNumber">
                <img
                  src="https://media.formula1.com/image/upload/c_fit,w_876,h_742/q_auto/v1740000000/common/f1/2025/williams/carsai01/2025williamscarsai01numberwhitefrless.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="LeftDownCountry">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
          </div>
          <div className="rightSide">
            <img
              className="DriversPicture"
              src="https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/williams/carsai01/2025williamscarsai01right.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    ),
  };

  return contentMap[value] || <div>未知</div>;
}

export default DriversCards;
