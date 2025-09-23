import "../CSS/DriversCardsCss.css";

function DriversCards({ value }) {
  const contentMap = {
    Pia: (
      <div>
        <div className="MclDriverCard DriverCard">
          <div className="leftSide">
            <div className="LeftTop">
              <div className="DriversName">Oscar Piastri</div>
              <div className="DriversTeams">McLaren</div>
              <div className="DriversNumber">
                <img
                  src="https://media.formula1.com/image/upload/c_fit,w_876,h_742/q_auto/v1740000000/common/f1/2025/mclaren/oscpia01/2025mclarenoscpia01numberwhitefrless.webp"
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
              src="https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mclaren/oscpia01/2025mclarenoscpia01right.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    ),
    Nor: (
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
    Rus: (
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
    Ant: (
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
    Lec: (
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
    Ham: (
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
    Ver: (
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
    Tsu: (
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
    Alb: (
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
    Sai: (
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
    Law: (
      <div>
        <div className="RBDriverCard DriverCard">
          <div className="leftSide">
            <div className="LeftTop">
              <div className="DriversName">Liam Lawson</div>
              <div className="DriversTeams">Racing Bull</div>
              <div className="DriversNumber">
                <img
                  src="https://media.formula1.com/image/upload/c_fit,w_876,h_742/q_auto/v1740000000/common/f1/2025/racingbulls/lialaw01/2025racingbullslialaw01numberwhitefrless.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="LeftDownCountry">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACCCAMAAACXSEZJAAAApVBMVEUAAIv/////AAAAAIj/EREAAIT/kZFtba9oaK3/s7Pv7/fX1+kaAIkAAIH9/f/7AA5CAIEaGo3/bW3/19f/aWn19fpCQpr/7e3/gYH/nJz/9vafn8mystP/4uKRkcH/jY3/UFD/YmL/yMioqM4hIZGIiLz/OTkVFY5cXKff3+3Cwtx5ebX/dHT/XFzLy+EpKZMwMJX/Q0NPT6E6Opv/LS1CFoUaN5re6y+2AAAHvklEQVR4nO2di3abOBCGUaZTU4joug3ebSHeTQ1rMI3jNbt9/0dbSfiGzUWIqwP/OT1NUxDi80gaRjNYe30mF7IdQK1caLJjPz1c6CP7hQESpwL1DXbstw+HE//9sZA4q2U9PPz19RIDWUlgUIYAuLQ4guNpf/8gZCHDrl3xrlTGoAghC8FgINxi0IoxKEHIRjAgCBUxKEBgCOwsBIOA8P1PBQyVIeQjGAQEQhQwVIRQhGAQEByigKEShGIExF23eXtyQlDAUAFCGYK5jF/SvhQwSEO4EwRcZRhu/AZJCKUDYTgIuCpagxSEPL9goAi4KmGQgFCGoLmBALumWtIqDYpSCABpBP+0aAXxplGTYhisIgynrpdAYAjsIgSNTocMd8OOhiSGQggoEHzPReA1hQAAQfQlAD78GvQ3Dhg+FmIogNAZAnbfKzem+MYapQiR2WhcQgJDLoQOETCBTUJ/yS68dy2ybHixKcVAsyHQkrmgWQQMgn5uPGx+wS3B4ISZELpFwEQ3p+bjOrMj5IhiGsPVLWVBIAXHu2uad6U6nUf70P6S1mhGm+VJ1/WtuK2nL1xPrx+/l0L48fTyJVEaQTgL9NwLecp9x314Nk6sQfP685VXliWoSDWeAN7mshk7Uh9udwsB9NBKtWO7j6ODoAGlMA8SEO5OQzpCS0hAxKwBxmFTa17UHnrXbzV6zz0F17Pqegl9I6gJYcmMABbErvcM1TeCehBws2U2AHtSL6bQN4K6liBMAPR9LVPoG0E9CBqk/hophGbUN4IJwgRhgjBBmCAMEcIHdaVuRb2VdiFIeRADeIpsk8FbJENhABBazFSByJR5vny3EESrdEPO/xghhIhv0oFFZqAh6nHhsXquAhFtPuv555PQy+uncgjfXl+So//4nSTR5jzN5q0wAJ9s9lTnQac3xygZFLn7DuDYKQQvx/sVt1VqCV/Tx7ez71Akyj7CMCTE5h+lUlgfNcfKvyWraAfqjO3p+J8/BYa3jjNT5uc7UInGFyMo2ot0BoQBo2M/ttXDsMk+ZD6CedGutNY8BsW8A8DZsRdu1TEngaAkP+EKw5eaGFAt2xMX5rkTdlRlkw5RAoFUpkomhmcFDGhLOX1X8lySUigdhMTHYgSeZM4Sas1g4B8f7IlIzKpm0RAsHXdzsAVj4zrLSPKS19Pha6YVSEDIwPBUHQPs3ZgCroiFgJrvVKMAgHSXXNyhKLkSFyOwVqmMM4k8xptBcYVBImUDN8SMwCBEX7gWeavCQIhvTxkbQmRT/G6mwysEV3mHUhmt9ecGYOfzJvgfhaUelsSKmc8kt0dXyQrECXK5zXUxXOQkKSz1bF3hzyVoyuzRlSHIyD6VznIvwCCzYNLjHG+pbK+gyRMcNQhLneaKA+HYvCSEWtYAGBnH09y1AoVDMpdXOp0oIKhY+VKGIbfG6NLdIbZfJympRJXmglP/qtVAFWPIiyesSFpheyEoBQQK1XA3GH6e54YcXw52i8UsSozB8qNgEbcTeOCqOBASKdRF5mP4L/ccgGO25rq9uAOXAgLFCtm8QVEUcseQkIBdrF76QakUEKjXSmdaQxEE5i7NEEKi8gxVQQoI6lTNZ2AoguBxTxE0Y9UuhGeG4DMXR2DZMggEBItB+HwSg2BZcu9PYBiss9gzRQEE9jAoniDf5CEo0aKPR/3y5vOSavmT5kzrxwut+W8kuwnzC3m/io49uEggnau69vsvOu5bENVM5rt78Y0Ck+jY6mo6cEHg+8zLDJe+r149cO+C/XHhcfvuSo8CTJzsGoUP70DwxhnUzHi/d0HEQ3FS7sr7FW5sHdyayd73LlgyhxEDfdymkKS8j5tBf5q4a1ocTBTAb/Y9FncpNEe+LHPNW4//DV/cR1uNfTzwPDljjBAurX/NN/Eud4ZGMjTW/pqe3iUkEsScoykAQlQ9l+IexStzdUx2R1FsEB2SIIAuXOmskHsXD13Yq1iYQxLLiYER8Jah5FuL34OS0AUJo0d6yCRZUpglyeDjcR/RT+7dcg9p8OHqEN3LzTV4h8LL7IkLjWYwcMEuG8J4BgPXcUCkNabBwJU1IEY1GLhgZ91AGNdg0Lhj5F4zMOnIINBFeGMIxAjGhAG0GzNItO26zKk3AfVv54OjnD7i3d1fku4zRsJZ9qzzMbHuerMF5psiBGKCjLsdExCE3e7AwswuY8DUWdpQ8ji/Iu2luuZdd7ePRH1RmOJhhSavNJrtdx1ugwU8rIEGz3IEGheXQzcrUdqLiDQ1N9jsN9hm1W9WT3zb2dGYV4TgbNuLwwpGagz0EVbjYV5zw0M8dk+Rfy89EfTTh/Ni3UvgH/bJxbcHx6nl7ONsncuhw16c1STQzC5+yMZ3+vgkaHxKWOvFZRffgyA+ABRBth7CzAAX7jt7cum8A0m03RBLtQgudOyxaOJdGSlta73EW0n8zo1D/rX4ueseQOC6W/OwRNnCTVF+ZbGqmI9ie6edqFDxjR11JJwVTNaHFUVssVouTx6xzuYHmtHPF3vBghEw1QpoG7l6ah92rfSWg/rdYGukTs02vthA5up6OqQIu16qLdgaxeuDQquHa2sZ2YK9eCu49UV9kDGA72DtTRCIcQBel4+Qg9OIQruTJk2aNGnSpEmTJk3qW/8DIsfAtNbsxFUAAAAASUVORK5CYII="
                alt=""
              />
            </div>
          </div>
          <div className="rightSide">
            <img
              className="DriversPicture"
              src="https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/racingbulls/lialaw01/2025racingbullslialaw01right.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    ),
    Had: (
      <div>
        <div className="RBDriverCard DriverCard">
          <div className="leftSide">
            <div className="LeftTop">
              <div className="DriversName">Isack Hadjar</div>
              <div className="DriversTeams">Racing bull</div>
              <div className="DriversNumber">
                <img
                  src="https://media.formula1.com/image/upload/c_fit,w_876,h_742/q_auto/v1740000000/common/f1/2025/racingbulls/isahad01/2025racingbullsisahad01numberwhitefrless.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="LeftDownCountry">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACtCAMAAABhsvGqAAAAFVBMVEX///8AJlTOESYAGk56fY/ce33NABrfQkIOAAAA5UlEQVR4nO3QSQEAIAADoHn2j2yKvYQIZDSsnYpzZ0MkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQcL3CQ86tbh+5X8kwAAAAABJRU5ErkJggg=="
                alt=""
              />
            </div>
          </div>
          <div className="rightSide">
            <img
              className="DriversPicture"
              src="https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/racingbulls/isahad01/2025racingbullsisahad01right.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    ),
    Str: (
      <div>
        <div className="AstDriverCard DriverCard">
          <div className="leftSide">
            <div className="LeftTop">
              <div className="DriversName">Lance Stroll</div>
              <div className="DriversTeams">Aston Martin</div>
              <div className="DriversNumber">
                <img
                  src="https://media.formula1.com/image/upload/c_fit,w_876,h_742/q_auto/v1740000000/common/f1/2025/astonmartin/lanstr01/2025astonmartinlanstr01numberwhitefrless.webp"
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
              src="https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/astonmartin/lanstr01/2025astonmartinlanstr01right.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    ),
    Alo: (
      <div>
        <div className="AstDriverCard DriverCard">
          <div className="leftSide">
            <div className="LeftTop">
              <div className="DriversName">Fernando Alonso</div>
              <div className="DriversTeams">Aston Martin</div>
              <div className="DriversNumber">
                <img
                  src="https://media.formula1.com/image/upload/c_fit,w_876,h_742/q_auto/v1740000000/common/f1/2025/astonmartin/feralo01/2025astonmartinferalo01numberwhitefrless.webp"
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
              src="https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/astonmartin/feralo01/2025astonmartinferalo01right.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    ),
    Hul: (
      <div>
        <div className="SauDriverCard DriverCard">
          <div className="leftSide">
            <div className="LeftTop">
              <div className="DriversName">Nico Hulkenberg</div>
              <div className="DriversTeams">Kick Sauber</div>
              <div className="DriversNumber">
                <img
                  src="https://media.formula1.com/image/upload/c_fit,w_876,h_742/q_auto/v1740000000/common/f1/2025/kicksauber/nichul01/2025kicksaubernichul01numberwhitefrless.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="LeftDownCountry">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACcCAMAAACulCWiAAAAElBMVEUAAAD/zgDdAADrAADZAAD/3AApfWWWAAAAz0lEQVR4nO3QwVEDQBAEsZu1yT9lqI6ChxSC3gMAAAAAAAAAAAAAAAD4xz583nESTkIknIRIOAmRcBIi4SREwkmIhJMQCSchEk5CJJyESDgJkXASIuEkRMJJiISTEAknIRJOQiSchEg4CZFwEiLhJETCSYiEkxAJJyES/rwv3/fDzxuTMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAmRMAn5BcTHpY30S2AzAAAAAElFTkSuQmCC"
                alt=""
              />
            </div>
          </div>
          <div className="rightSide">
            <img
              className="DriversPicture"
              src="https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/kicksauber/nichul01/2025kicksaubernichul01right.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    ),
    Bor: (
      <div>
        <div className="SauDriverCard DriverCard">
          <div className="leftSide">
            <div className="LeftTop">
              <div className="DriversName">Gabriel Bortoleto</div>
              <div className="DriversTeams">Kick Sauber</div>
              <div className="DriversNumber">
                <img
                  src="https://media.formula1.com/image/upload/c_fit,w_876,h_742/q_auto/v1740000000/common/f1/2025/kicksauber/gabbor01/2025kicksaubergabbor01numberwhitefrless.webp"
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
              src="https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/kicksauber/gabbor01/2025kicksaubergabbor01right.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    ),
    Oco: (
      <div>
        <div className="HaasDriverCard DriverCard">
          <div className="leftSide">
            <div className="LeftTop">
              <div className="DriversName">Esteban Ocon</div>
              <div className="DriversTeams">Haas</div>
              <div className="DriversNumber">
                <img
                  src="https://media.formula1.com/image/upload/c_fit,w_876,h_742/q_auto/v1740000000/common/f1/2025/haas/estoco01/2025haasestoco01numberwhitefrless.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="LeftDownCountry">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACtCAMAAABhsvGqAAAAFVBMVEX///8AJlTOESYAGk56fY/ce33NABrfQkIOAAAA5UlEQVR4nO3QSQEAIAADoHn2j2yKvYQIZDSsnYpzZ0MkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQcL3CQ86tbh+5X8kwAAAAABJRU5ErkJggg=="
                alt=""
              />
            </div>
          </div>
          <div className="rightSide">
            <img
              className="DriversPicture"
              src="https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/haas/estoco01/2025haasestoco01right.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    ),
    Bea: (
      <div>
        <div className="HaasDriverCard DriverCard">
          <div className="leftSide">
            <div className="LeftTop">
              <div className="DriversName">Oliver Bearman</div>
              <div className="DriversTeams">Haas</div>
              <div className="DriversNumber">
                <img
                  src="https://media.formula1.com/image/upload/c_fit,w_876,h_742/q_auto/v1740000000/common/f1/2025/haas/olibea01/2025haasolibea01numberwhitefrless.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="LeftDownCountry">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACCCAMAAACXSEZJAAAAnFBMVEXIEC7///8BIWnICyz++/vIGjEAAF3MzdjEAA/MO0r35ucAAFcAAGGvr8H09PbvzM7EAAAAFmXGACDHACcAGmYACGEAEGPFABXm6O5bY47dho788vT13eDy0tVsdJrZ2+SNk6/qt7zSUV/BxdN0e57QSFjKJTo3RHvMMENAS3/jnqTWaHPmp63TWWYtO3a0uMoAAEkAAE/rwcLgkphlE29pAAAF70lEQVR4nO3d7XbaRhAG4BXCigxujMEO8UfqYLeJW8dNS+7/3gqKQax2NTszO7PCOTu/fIKPEI/fGXQiaWWe74r+ur+eXozE6uy33XZPS+OvevL6G++ncu97Wf3zfffOn14W9juWS7Myi9kDxPDxdzmGYRA2BI97gofZokNwsiqKzQ/JGIZAsAj+9BI0CA3DJ5ChEmFIj4AieEVIlIbUCIFGMKvdi/t/DKfhw9tCQKbAQkCkIZYhJQKBwELANEUUQzqEQCN8WdkfzNi7o9oUqRACKegSbBC+LB0GrTSkQSA1witCsTpxGXTSkAKBnIKfCIWP4UWDQR/hsvpKmQWHCF4GhTRoI7BS0CKkYdBFsFJAIdgg3O9+WhltBk0Edgq272Wm1y2Dchr0EAIpeIIIxp8rM7qoUjFoIRwSnOPH4SvB2dXIbDZyMb3+mIJBB8EiIDZCQzBqEBqGNg2ewyeQ4Q8sgwYCTFCDjfD+J8EOYbRtCvU0yCMIpOAQIUUapBECBIEUVFf7DZmDjVojUoFBFkGkEVyEyDQEm0ISIS4FFkEXQbcp5BAEU+BD0GwKKQSboI5LgR9BLw0yCJfVX3KN0I+glQYJBJiA3AgQgk4a4hHAWbAIpeDKT9CP0GF4qgUYYhECKTiFCXpSACOEmqImM8QhxI3D3hSEELppiG2KGAQwBQvmLMAhdNLgMITScGYx8BFsgm4KQgQVTBBGkPym4CKopgCH0E0DdUS2aeAhqI1DGoJUU3AQNgTvWoJa6kuRgyAzIukINgH1uACVAgpCqCnqh3OQYZsGKgKcgvp0DRIgU0BDCDXFLMBQfaAhBFIgR0BDCI9ImGFKQfgX/EYIEKAbgYMQHpEgw/4vi0DoPy6QbAQegsPQ2UE4DXiElsBNwQokCB4aSSDEjUgawpqcAgbBBqHi1PS/dmhtGOyazcAdRSOM10+zWWfb4JY3U2fK+jjmHbMe96cpinOn1t1UcxDu1s52oaORYvz4yPwsBtqsWuFnQpLKCEVGaCojFBmhqYxQZISmzHiA6kdYTooB9secDFF9BqYcZHdMOUT1GZhj251cuXLlypUrV65cuXLlypUrV65cuXLlypULXUf2f9zD7M4gZzuO7eTLAGe9ju803BAnQI/uhOwQb5oRtpURiozQVEYoMkJTx4YgcFmvp+7cK30PL/vmIozdK33Pb/cv8i/rjb7A20fwXDsXff+4PfgFdhImz8413/P9lvkXeEde6u8nmFufrFyWf4+tX4loh8nNsrP1ecvAvdRfgaB7G/OiQxA5EyY3XeT5/CaKIeb2Hy9B9+90QMC7/cfLAKZB+fafmBSQbwSDpk4gDYo3gtEJygOCmFsCPXXrScMNMw28m0PpBLE3h3rK1xQ8Bs5twjiChZWC7TbibhP2Msg0Bf2GcS/BMpQCHoJ9z7ynZJqCunSAlwBMgeTSAZ6SSANtEQkcQek0QgwCJw1L2nEDZTkROoHGciI4BtLhE35hGTqB1sIyXoaYpsAuMRRPILnEkJcBbArmEkOML8VvEIHsYlNeBm4aMMuO4QjgFEggINLgMKDSEF6ADkkQSIEMAj0NxmIgLEAn3whyCJymCDLAi1LiCMy33YvwEqUai1J6GcARiViUUisFkgj02RBoiv6FanEEJTIFsggchrqfoW/JYhzBoiUYdMliHENvGvyLV2MJsI2ggRDL4Fm8+nAZcx/BC3sc6iHQR+RhUzjLmOunQAdBqCm6jzbwEbw46wJTxqEuQtyI3D/agHN0yCFI85ALFoMJNIKbggWTINXjTrwMM4ihMkQC+jhMgWA/+MbL4KRh1s4G4NS85xuBnwJthKg09CKIjcNUCBFp6EFQIEj9WDQcQ5MGL4LoOEyJgEiDryk8CIEUvKVHJeLSsHQQlFKQDoGRhg5CgOAtPj4VwxAgiB+HQyBQmwIkmAsSDPlI5VAakCl46w/X9tS4TUMvgTUOf4HHrENpSJSCbaVHQKShYQh/IwgRDIOAY3AeumvKdrH8+2s5gqEQGobvEMOP/wHe4nq8CJ3baAAAAABJRU5ErkJggg=="
                alt=""
              />
            </div>
          </div>
          <div className="rightSide">
            <img
              className="DriversPicture"
              src="https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/haas/olibea01/2025haasolibea01right.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    ),
    Gas: (
      <div>
        <div className="AlpDriverCard DriverCard">
          <div className="leftSide">
            <div className="LeftTop">
              <div className="DriversName">Pierre Gasly</div>
              <div className="DriversTeams">Alpine</div>
              <div className="DriversNumber">
                <img
                  src="https://media.formula1.com/image/upload/c_fit,w_876,h_742/q_auto/v1740000000/common/f1/2025/alpine/piegas01/2025alpinepiegas01numberwhitefrless.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="LeftDownCountry">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACtCAMAAABhsvGqAAAAFVBMVEX///8AJlTOESYAGk56fY/ce33NABrfQkIOAAAA5UlEQVR4nO3QSQEAIAADoHn2j2yKvYQIZDSsnYpzZ0MkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQcL3CQ86tbh+5X8kwAAAAABJRU5ErkJggg=="
                alt=""
              />
            </div>
          </div>
          <div className="rightSide">
            <img
              className="DriversPicture"
              src="https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/alpine/piegas01/2025alpinepiegas01right.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    ),
    Col: (
      <div>
        <div className="AlpDriverCard DriverCard">
          <div className="leftSide">
            <div className="LeftTop">
              <div className="DriversName">Franco Colapinto</div>
              <div className="DriversTeams">Alpine</div>
              <div className="DriversNumber">
                <img
                  src="https://media.formula1.com/image/upload/c_fit,w_876,h_742/q_auto/v1740000000/common/f1/2025/alpine/fracol01/2025alpinefracol01numberwhitefrless.webp"
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
              src="https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/alpine/fracol01/2025alpinefracol01right.webp"
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
