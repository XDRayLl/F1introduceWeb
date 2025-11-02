import Nav from "../JSX/Nav.jsx";
import ScheduleCards from "../JSX/ScheduleCards.jsx";
import Footer from "../JSX/Footer.jsx";
import Sessions from "../JSX/RaceDataAPI.jsx";
import Weather from "../JSX/Weather.jsx";

import "../CSS/App.css";
import "../CSS/ScheduleCss.css";
import "../CSS/WeatherCss.css";
import { useState, useEffect } from "react";
import moment from "moment-timezone";

import { IoReturnUpBackOutline } from "react-icons/io5";

function Compeleted() {
  const [isRaceDown, setIsRaceDown] = useState([]);
  const [races, setRaces] = useState([]);
  const [sessionkey, setSessionkey] = useState([]);
  const [podiumName, setPodiumName] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const cached = sessionStorage.getItem("f1sessions");
        const json = cached
          ? JSON.parse(cached)
          : await (await fetch("https://api.openf1.org/v1/sessions")).json();
        if (!cached) sessionStorage.setItem("f1sessions", JSON.stringify(json));

        const Today = moment();
        let ThisYearRaces = json.filter(
          (race) =>
            moment(race.date_start).year() === 2025 &&
            race.session_name === "Race"
        );
        console.log("ThisYearrace", ThisYearRaces);

        const result = ThisYearRaces.map((race) =>
          moment(race.date_end).isBefore(Today)
        );
        const SessionKey = ThisYearRaces.map((race) => race.session_key);
        while (result.length < 24) result.push(false);

        setSessionkey(SessionKey);
        setRaces(ThisYearRaces);
        setIsRaceDown(result);
      } catch (err) {
        setError(err);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (sessionkey.length === 0) return;

    async function fetchRank() {
      try {
        const response = await fetch(
          "https://api.openf1.org/v1/session_result"
        );
        const json = await response.json();

        let Topthree = [];
        for (let key of sessionkey) {
          let thisRace = json.filter((num) => num.session_key === key);
          let top3 = thisRace
            .filter((r) => r.position <= 3 && r.position != null)
            .sort((a, b) => a.position - b.position);
          Topthree.push(...top3); //陣列元素攤平成一維陣列
        }

        let podium = Topthree.map((r) => r.driver_number);
        let names = podium.map((num) => getDriverName(num));

        while (names.length < 72) names.push("Unknown");

        setPodiumName(names);
      } catch (err) {
        setError(err);
      }
    }
    fetchRank();
  }, [sessionkey]);

  if (error) return <div>Error: {error.message}</div>;
  if (isRaceDown.length === 0 || podiumName.length === 0) return <div></div>;

  return (
    <Schedule
      isRaceDownList={isRaceDown}
      APIRank={podiumName}
      SessionKeys={sessionkey}
    />
  );
}

function getDriverName(number) {
  switch (number) {
    case 81:
      return "PIA";

    case 4:
      return "NOR";

    case 63:
      return "RUS";

    case 12:
      return "ANT";

    case 16:
      return "LEC";

    case 44:
      return "HAM";

    case 1:
      return "VER";

    case 22:
      return "TSU";

    case 23:
      return "ALB";

    case 55:
      return "SAI";

    case 30:
      return "LAW";

    case 6:
      return "HAD";

    case 18:
      return "STR";

    case 14:
      return "ALO";

    case 27:
      return "HUL";

    case 5:
      return "BOR";

    case 31:
      return "OCO";

    case 87:
      return "BEA";

    case 10:
      return "GAS";

    case 43:
      return "COL";
    default:
      return "Unknown";
  }
}

function Schedule({ isRaceDownList = [], APIRank = [], SessionKeys = [] }) {
  const [selectedCard, setSelectedCard] = useState(null);

  console.log("key", SessionKeys[0]);

  return (
    <>
      <Nav />
      <Sessions />
      <div className="CardAreas">
        <div className="SelectedGP">
          {selectedCard && (
            <div className="modal">
              <div className="modal-content">
                <div className="WeatherButtonArea">
                  <button
                    className="WeatherButton"
                    onClick={() => setSelectedCard(null)}
                  >
                   <IoReturnUpBackOutline />
                  </button>
                </div>
                <h2>{selectedCard.GPName}</h2>
                <p>{selectedCard.GPDate}</p>
                <Weather
                  RaceSessionKey={SessionKeys[selectedCard.RoundArray]}
                />
              </div>
            </div>
          )}
        </div>
        <div className="CardArea">
          <ScheduleCards
            GPName={"Sakhir"}
            GPContent={"FORMULA 1 ARAMCO PRE-SEASON TESTING 2025"}
            GPDateF={"26 - 28 FEB"}
            GPRoundF={"TESTING"}
            Rank1F={""}
            Rank2F={""}
            Rank3F={""}
            imgSrcF={""}
            GPimgF={
              "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg"
            }
          />
          <ScheduleCards
            GPName={"Australia"}
            GPContent={"FORMULA 1 LOUIS VUITTON AUSTRALIAN GRAND PRIX 2025"}
            GPDateF={"14 - 16 MAR"}
            GPRoundF={"Round1"}
            Rank1F={APIRank[0]}
            Rank2F={APIRank[1]}
            Rank3F={APIRank[2]}
            imgSrcF={
              "https://destinationformula1.com/wp-content/uploads/2024/09/Australia-carbon.png"
            }
            GPimgF={
              "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg"
            }
            isStarted={isRaceDownList[0]}
            clicked={() => {
              if (isRaceDownList[0])
                setSelectedCard({
                  RoundArray: 0,
                });
            }}
          />
          <ScheduleCards
            GPName={"China"}
            GPContent={"FORMULA 1 HEINEKEN CHINESE GRAND PRIX 2025"}
            GPDateF={"21 - 23 MAR"}
            GPRoundF={"Round2"}
            Rank1F={APIRank[3]}
            Rank2F={APIRank[4]}
            Rank3F={APIRank[5]}
            imgSrcF={
              "https://destinationformula1.com/wp-content/uploads/2024/09/China-carbon.png"
            }
            GPimgF={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAACnCAMAAAAPIrEmAAAAhFBMVEXuHCX//wD0Z23vKyP+8wL0cBf6wgr++AH/+wH80gf//QD1dxbyURzxPx/uIST4pA/xSR796wP4oBD1fxX5rA3zXBv4nRD7ywj95gTwOSDyVhzzYRr94gX83Ab6uwv3jhL2hhT0aBn5tAz3lBH80Qj5qg72ihP0Zhn1cxf6vwr+7wPxRB6u+eyuAAADoElEQVR4nO3baXeiMBQGYO5EUFQiiIq4L92m/v//N2wuHVETW5IG3udLPS303HvIdkm0LAAAAAAoxd91R6DNaqM7AuU+/OzHkGzNgah36Lg2tzZEY92RqDchmg66RL7uQNRjAWVi3YFoYOepuz2uO5IfJJYLa+e5U7Cuz5Pfi+TOIzqajmqTezATuGiXp/053NYmb8ua0eDxRckA33KSkW5XfTwKDSl4eM18FPrZSDdUEJA6U6K+4KURvVUaimL9pAdPBK89dHqVxqLYJB2zhS+eVxmKaot04BZdnjKv0ljU8rM5a687DB32WeqLJ+4MTZ/gl/lS5SB/Z7hk+QdDO8GhWJyu5W+dk5vm3jf1xc26SH0pf6uXlHGs71BgaCm3PNYk8q2Wd5LFbXKnoVO9dyrHnlimTfMR0tCH/nZK3ZW99d3NbzTjPSW74p5Sp8PVH+89zvnpTseIp263SMKI3fxH/M3tnK5bGZG7595J9avWg4bMve1rcenOiNz5uiuW+YvAUi0dI+2PiROMqg/8J4wDkcwnQq/rOrTKPrDbXeNXYX8fJh4IbrEsuqZtSISd+5k7og/RMaSlX/CXdxJvb4T/z8TA2o2Nbma+lGjDBmZu3Z7i70zmtRFHJYk/msxrgu+uR3YzW7C81VXqnQa09tRp5/RCM9q7tS3p6yvdQalx3dWTOb0RLZ6Xzm5b3WGp8F6WuewespnnB8/ruVbv5fxZrvR2RA4l/Dbn9p5U5hdVvNR2Imu/VhVfhebHXPPKfHas4qVqsblsK/kVipdLp8qcrZ5o8UMTx0X+mc/jF5NZUcWLHgRlLPYWRNHW7oUbk7r8OJvFwy+/y6t4gSNF1v+F3xMbdvoMqKQyZ+lvBXfQ4nMF0DJrigvKK/Nt8jBFG2+vePBLs/aYZ9QqH5+SKl74eFixP23Ym8nhzdfsfC18pKiYHw07i3LvdPNYtAEnU1sQSZy+qpEFRXHa402a2X6GR4O07cSRiYvZ7+kdB8pafTdASOMSbrBanRSVwh3DVjDfx4uePXnmWKXhXgfp1wXsJn7PLW6RG47bRI14Xf1VryhRmzinOcW7vOZ1dis+7tG5YdMavX1+LbNr1ljn5w+96+5nDevubFpsWOgORDnutJ2NHxI5uiNR7jDOWnnUlB34a167Xl/nlbER26GoI96Q0zYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuv1prH/vqyOt7ticiQAAAABJRU5ErkJggg=="
            }
            isStarted={isRaceDownList[1]}
            clicked={() => {
              if (isRaceDownList[1])
                setSelectedCard({
                  RoundArray: 1,
                });
            }}
          />
        </div>
        <div className="CardArea">
          <ScheduleCards
            GPName={"Japan"}
            GPContent={"FORMULA 1 LENOVO JAPANESE GRAND PRIX 2025"}
            GPDateF={"04 - 06 APR"}
            GPRoundF={"Round3"}
            Rank1F={APIRank[6]}
            Rank2F={APIRank[7]}
            Rank3F={APIRank[8]}
            imgSrcF={
              "https://i0.wp.com/www.cysnews-new.cz/wp-content/uploads/2025/03/Japan-carbon.png?ssl=1"
            }
            GPimgF={
              "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png"
            }
            isStarted={isRaceDownList[2]}
            clicked={() => {
              if (isRaceDownList[2])
                setSelectedCard({
                  RoundArray: 2,
                });
            }}
          />
          <ScheduleCards
            GPName={"Bahrain"}
            GPContent={"FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2025"}
            GPDateF={"11 - 13 APR"}
            GPRoundF={"Round4"}
            Rank1F={APIRank[9]}
            Rank2F={APIRank[10]}
            Rank3F={APIRank[11]}
            imgSrcF={
              "https://f1flow.ru/upload/iblock/28f/muhip10vwn9taehkulm5cq1lenc5n6yj.png"
            }
            GPimgF={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAUVBMVEXaKRz////ZIhPaJxnYDQDXAAD65OPZGgPxvLngV1DZGQDyvrzpkY3ojIj54eDgVEz65+bhXVbZHQv87+7+9/fwtLHrl5Pmf3nbMSXzxcLiZ2FU18ItAAAEF0lEQVR4nO2diW7jMAxEwzZJc2+21x7//6FrCUGdY2OpAIfBDPj+IA8MJY8peWZOvH/8WLw8zxTxUjRw2D/Nnx79ewA4KhpYKZaSryKzpV4peSsaWK21SgmgqHSljVApQRSZVFdCKSql9KxRSjhFptKVoIrKAsfflcCKTKCU8Irot90Riox7gQtSxLztDlNktF0pUlEppTlfKcUqslJKr4/+zd8kXJHZJ5mjaD/H3Wzz6N/8TWIFbRkbdqCf5Y5z2Q8TtP252NAVUCXGz5G0gCoRgoYC4utAI3A/y92Mt4AqYEHb9Zy0A40g/Rx3/HnaDKmIdwm7AuTnuBPJ9mcgRcwB2i3+fshj2Fu8Ba3Wc6ECqrj6UXgldIujINLctYmXn7dfigVU8VJE/IajhZsiE9osXuKpiDc1m8RXkZFmr5O4K6oJvlQpARSZWFfCKJIJQgooRVZKSeNZBKhIZa8EVWQSuQhaUSmlV+5Swisy9gfcEEXc8/xBioy4K8Upop3nj1RknF0pWFEJA36TOQpXZG/7HOSbZHjAJTMUq4hzzChQEGvYFuVnyfuSP0YQ9ZhRgB/KUw1nwAUxbhYvwfqRyNSQgmgfXC+B+TmwJ2lfgATxd6ARhJ/l/kWkgCr+gpQKqOLshzQ1m8RVkMgSdoWfH+YEfxIvQW/rxVyvgCpeinizjiZ+irRONZzhqcjEBotOOCsq2Zla13ZXZHWwSKmUEIoUTnuegVFkSgscTBHrK6FbgIpMZIHDKipdiT5ZQyuy2pWoSylAEfsCF6LIqC/FiFJUFjjSuDZOkbFuu0MVcR5YC1Y08OcvmaNU1CTYT/7RGmS7niYX/Qa5dZwmH0Aa5GPsNBmGNMhIbZoMZhtkvD8N9xJ2BUIQ5yb6Lu5+8oV1A4kl7ApPPzk800BnCbvCS1AO8nWQ46A95FBxBzma3kMecOggj8n0oFRKIEV5ZK8PkQUOqSiPD/fB35XgivIqgz7yQowO8lqVHljTkkBFrK+NQhVZXhTWRV431yIvLWzAuJGM9EOat8UJon2oDfLDnP2HCGLsQCN4P3mxfAPaDjQC9SORqOWnUtqg/OQHdxpIjRkB/OTHvxqwBmf38fXDeNysiacgqQ404uZHYw/0P7wM5ad1e+B+WL2Po6L8zHcf+bH4Dg5qfdtfkUkkIGdAFGmddQApMqGNJE6RTCCCVGTkg0UnwIoUzoDCFRn1ZRiFCEWsg0UnYhQZ8wIXpog3bwtUZKSpbayimv1vHv2bv0m0ooHPHOSbZrUmMxSsiPKsQ6Qg0uQ2zA/vG5IgQcwhW4Qf8qgWL4i0A42A/Si8NoIKoi+gCs4P6az+LShBzEvYFRA/zLP6twAEaXSgEW8/vJvou/gKEupAI45+yDfRd/Hy8/6hWECFfzwhWL11DxXdAAAAAElFTkSuQmCC"
            }
            isStarted={isRaceDownList[3]}
            clicked={() => {
              if (isRaceDownList[3])
                setSelectedCard({
                  RoundArray: 3,
                });
            }}
          />
          <ScheduleCards
            GPName={"Saudi Arabia"}
            GPContent={"FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2025"}
            GPDateF={"18 - 20 APR"}
            GPRoundF={"Round5"}
            Rank1F={APIRank[12]}
            Rank2F={APIRank[13]}
            Rank3F={APIRank[14]}
            GPimgF={
              "data:image/png;base64,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"
            }
            imgSrcF={
              "https://f1flow.ru/upload/iblock/982/16l1f6bi2xxsnrfvkgkn7belmsn9rg4b.png"
            }
            isStarted={isRaceDownList[4]}
            clicked={() => {
              if (isRaceDownList[4])
                setSelectedCard({
                  RoundArray: 4,
                });
            }}
          />
        </div>
        <div className="CardArea">
          <ScheduleCards
            GPName={"Miami"}
            GPContent={"FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2025"}
            GPDateF={"02 - 04 MAY"}
            GPRoundF={"Round6"}
            Rank1F={APIRank[15]}
            Rank2F={APIRank[16]}
            Rank3F={APIRank[17]}
            GPimgF={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
            }
            imgSrcF={
              "https://f1flow.ru/upload/iblock/ae6/s4ovtb44nlhzmy3fyjpeeulysnjzxmgr.png"
            }
            isStarted={isRaceDownList[5]}
            clicked={() => {
              if (isRaceDownList[5])
                setSelectedCard({
                  RoundArray: 5,
                });
            }}
          />
          <ScheduleCards
            GPName={"Emilia-Romagna"}
            GPContent={
              "FORMULA 1 AWS GRAN PREMIO DEL MADE IN ITALY E DELL'EMILIA-ROMAGNA 2025"
            }
            GPDateF={"16 - 18 MAY"}
            GPRoundF={"Round7"}
            Rank1F={APIRank[18]}
            Rank2F={APIRank[19]}
            Rank3F={APIRank[20]}
            GPimgF={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACtCAMAAABhsvGqAAAAFVBMVEX///8AkkbOKzcAjz96tIjcfoHNIC7/Jth5AAAA5UlEQVR4nO3QSQEAIAADoHn2j2yKvYQIZDSsnYpzZ0MkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQcL3CQ86tbh+5X8kwAAAAABJRU5ErkJggg=="
            }
            imgSrcF={
              "https://f1flow.ru/upload/iblock/810/2apne5toatqkeygjg4pkq25njn30kn3m.png"
            }
            isStarted={isRaceDownList[6]}
            clicked={() => {
              if (isRaceDownList[6])
                setSelectedCard({
                  RoundArray: 6,
                });
            }}
          />
          <ScheduleCards
            GPName={"Monaco"}
            GPContent={"FORMULA 1 TAG HEUER GRAND PRIX DE MONACO 2025"}
            GPDateF={"23 - 25 MAY"}
            GPRoundF={"Round8"}
            Rank1F={APIRank[21]}
            Rank2F={APIRank[22]}
            Rank3F={APIRank[23]}
            GPimgF={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAADQCAMAAADWDu+1AAAAD1BMVEX////OESbOCiPQLDX99/fOx8iOAAAA6UlEQVR4nO3QsQ2EQADEwDPQf81I28FHTzBTgeUTnX8HfIEJmTAmZMKYkAljQiaMCZkwJmTCmJAJY0ImjAmZMCZkwpiQCWNCJowJmTAmZMKYkAljQiaMCZkwJmTCmJAJY0ImjAmZMCZkwpiQCWNCJowJmTAmZMKYkAljQiaMCZkwJmTCmJAJY0ImjAmZMCZkwpiQCWNCJowJmTAmZMKYkAljQiaMCZkwJmTCmJAJY0ImjAmZMCZkwpiQCWNCJowJmTAmZMKci+vc3OfhOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAv3sBgcRwvc2YXzQAAAAASUVORK5CYII="
            }
            imgSrcF={
              "https://f1flow.ru/upload/iblock/099/vvfqax3s728m7mv8zxxzzgko8somg2z6.png"
            }
            isStarted={isRaceDownList[7]}
            clicked={() => {
              if (isRaceDownList[7])
                setSelectedCard({
                  RoundArray: 7,
                });
            }}
          />
        </div>
        <div className="CardArea">
          <ScheduleCards
            GPName={"Spain"}
            GPContent={"FORMULA 1 ARAMCO GRAN PREMIO DE ESPAÑA 2025"}
            GPDateF={"30MAY - 01JUN"}
            GPRoundF={"Round9"}
            Rank1F={APIRank[24]}
            Rank2F={APIRank[25]}
            Rank3F={APIRank[26]}
            GPimgF={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAABNCAMAAABAMbBwAAABm1BMVEWtFRn6vQD7vwCpABrrowv/wAD/wgD/xACcUBehICGaZA+PdACdORuOaQfvtAD/xgDyvACsKCOyACe8ACu5ACOfSlL1uACrFSSqmXfLlQnVrVKHaACthQCNdTjqsx7hsDS6mkXSpjFWV13BmjbHokSsjDeqkFC7khPfqgB1ZjPBlQDOnwuukUPotDDzuySghDrZhgKKhmi8eQCkgybOpT7jlxHJXBedZUupQheMg1SzMB2IZEaCQROWQhiJXgCPHxiKUg6gSTydQxGjQkqkNCWeSUaHPQuacwCGaB+BbQZlZxp5cBR9IxZ6SA9fSQBmOwtyKhCNLRebKBGBWhKANRG2cxOxaBZ5EhV7KjCLZGWDcF+PfV+ymWVwTAa3wL+sqaicm4qusr2qhJeok5S2WJC0aoOufJl5a021qpW1Z5nWV6mpkqKOl6ajeoJ9RjGDPiPFfqu4cT+McoerIgCQACpnYVFKMYl9AFTBawCENkhYSlcOSqBPU3M7Tn52H2OtcGMQOaSfDUBSOnOsJzdEZC2AfXVQaJdbaYVzioHWBi9OAAADPklEQVRoge3Y31fSUADAcYa7dw7wTjZh4DRBCxE00fJnDBbSEJPS+aNQ2kDLX0hWSFmWRaX1Z3fVB3sBPWdMXvblZWc8fLh34+7sWixmZmZmZmZmZjeupQlZyCZksTYhC9GEboiCJqCgC906CkD3HdDAwV6LAgB6fP7ePp+faJh7HYru3gv0o+BACIUDg76hxrDXoPeHg0w3Q0ZGRklmmEIPem4BBQ9DY+MTkyw7RbPTj8YjwcGGDPU6NMqytMg6Y44OWubYuO8WUAK1JXlJfiwuJmYkiU/a7jTCrIdaoZUg3NJMUpYlnOh4IgcB0Yh7uA5K2shzOjWbnhuOzj6dS8cQxL+iP2wgSs5n5hEBGTT77PnCoqIklrwMJKjW5flRvWOtjbpTmRRBrKyuti4vvHiZza6t53K5IAy9ehU0DkWC3Y7aeY6jea7Dpaqqli8UwlTKLoSMQ0H3+jBod7LiUsbR4dI2Nl+/2SqEoX99W/fiXwfdKXgwymUymWWM7m7t7RYLYdBZ2Hcbi1J4pGkhvYSnt7i3t4lRylDUyuyUJiJeJ/d2duAAo1va7rsNtSvyvvShHRqEWkmlXFbiLMtFhXS049emWny9p6mHtFKe5CNWg9BIS1bzuMd42l4ZiFU/fiptFXeL6grq1LLKJGUMir/ZVEtHjJMXPz9Wvhz3VlV1Q1PDpEvVWsZ0zm/ta0rsaK5pRuaTNH349VvvSbaEC0eq2j4y6ppi9DtrGXPbaVurWP6xfVyVElJC8RLTZRepc3br3EgsW/LAC9Rhq/48UfgoL9Ne2Fn8xR4ZNb2ofL44XKJtdEKhJYecXMSoun9kGAojO9oVGnOI0d+ymMRoYX9U7+pQ++6l/h+pzcGLGdF5ieok6y6DnnzgaqSi6FgUxXgYPsyfGrj2IkEQEHWJWkZokVvmpMN2KiUIIcP+MkSgUqkEIIpjNDbj+a7IokSPUv5KZXtN77OtNvrn7OzsD7Qi28Hbtb8TI6WZw7gXwhw+eebX+RSvjU4NrgWm8ERSyOfJn57mcz2MlQB9gfVAbkifWQeFAH8ujvABOH+RujgGEOq9pDd9KW5szdlzaMruSlP2kczMzMzMzMzMbtw/aU2pGktizA8AAAAASUVORK5CYII="
            }
            imgSrcF={
              "https://f1flow.ru/upload/iblock/928/sg30k1bjp6pyqm7os0iymg6bwrea9a1n.png"
            }
            isStarted={isRaceDownList[8]}
            clicked={() => {
              if (isRaceDownList[8])
                setSelectedCard({
                  RoundArray: 8,
                });
            }}
          />
          <ScheduleCards
            GPName={"Canada"}
            GPContent={"FORMULA 1 PIRELLI GRAND PRIX DU CANADA 2025"}
            GPDateF={"13 - 15 JUN"}
            GPRoundF={"Round10"}
            Rank1F={APIRank[27]}
            Rank2F={APIRank[28]}
            Rank3F={APIRank[29]}
            GPimgF={
              "data:image/png;base64,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"
            }
            imgSrcF={
              "https://f1flow.ru/upload/iblock/d4d/6sey5n8hmgu57dl5ly298mlr6lajrjt0.png"
            }
            isStarted={isRaceDownList[9]}
            clicked={() => {
              if (isRaceDownList[9])
                setSelectedCard({
                  RoundArray: 9,
                });
            }}
          />
          <ScheduleCards
            GPName={"Austria"}
            GPContent={"FORMULA 1 MSC CRUISES AUSTRIAN GRAND PRIX 2025"}
            GPDateF={"27 - 29 JUN"}
            GPRoundF={"Round11"}
            Rank1F={APIRank[30]}
            Rank2F={APIRank[31]}
            Rank3F={APIRank[32]}
            GPimgF={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACtCAMAAABhsvGqAAAAElBMVEXIEC7////HACjQT1zpuLzFABUZ3ZBkAAAAp0lEQVR4nO3byQkDQQDEwNEe+ads6Aj8M4aqEPTXOQAAAAAAAAAAAAAAAAAAf+LiOjf3iURIhBEhEUaERBgREmFESIQRIRFGhEQYERJhREiEESERRoREGBESYURIhBEhEUaERBgREmFESIQRIRFGhEQYERJhREiEESERRoREGBESYURIhBEhEUaERBgREmHOw3Ne3l//6gAAAAAAAAAAAAAAAAAA3/oALuVIHSxBjaQAAAAASUVORK5CYII="
            }
            imgSrcF={
              "https://f1flow.ru/upload/iblock/8f5/i10kkskxg3q0elxtx96log649cxzu9kp.png"
            }
            isStarted={isRaceDownList[10]}
            clicked={() => {
              if (isRaceDownList[10])
                setSelectedCard({
                  RoundArray: 10,
                });
            }}
          />
        </div>
        <div className="CardArea">
          <ScheduleCards
            GPName={"Great Britain"}
            GPContent={"FORMULA 1 QATAR AIRWAYS BRITISH GRAND PRIX 2025"}
            GPDateF={"04 - 06 Jul"}
            GPRoundF={"Round12"}
            Rank1F={APIRank[33]}
            Rank2F={APIRank[34]}
            Rank3F={APIRank[35]}
            GPimgF={
              "data:image/png;base64,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"
            }
            imgSrcF={
              "https://f1flow.ru/upload/iblock/899/wyw99i0hl2hov7q6q1zf6knwjtqco7jb.png"
            }
            isStarted={isRaceDownList[11]}
            clicked={() => {
              if (isRaceDownList[11])
                setSelectedCard({
                  RoundArray: 11,
                });
            }}
          />
          <ScheduleCards
            GPName={"Belgium"}
            GPContent={"FORMULA 1 MOËT & CHANDON BELGIAN GRAND PRIX 2025"}
            GPDateF={"25 - 27 Jul"}
            GPRoundF={"Round13"}
            Rank1F={APIRank[36]}
            Rank2F={APIRank[37]}
            Rank3F={APIRank[38]}
            GPimgF={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAADhCAMAAAAZKDu9AAAAFVBMVEUAAADvM0D92iV8axL/4ifzdDnvK0GxL/YFAAABI0lEQVR4nO3QQQEAIAwEoKnT/pFXwvtBBKoiTu+Avm8lZA4kSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSPhjALnf8bTCVjHwAAAAAElFTkSuQmCC"
            }
            imgSrcF={
              "https://f1flow.ru/upload/iblock/00a/ub9dxyn3iu8djm9w951qknoclomc23pn.png"
            }
            isStarted={isRaceDownList[12]}
            clicked={() => {
              if (isRaceDownList[12])
                setSelectedCard({
                  RoundArray: 12,
                });
            }}
          />
          <ScheduleCards
            GPName={"Hungary"}
            GPContent={"FORMULA 1 LENOVO HUNGARIAN GRAND PRIX 2025"}
            GPDateF={"01 - 03 AUG"}
            GPRoundF={"Round14"}
            Rank1F={APIRank[39]}
            Rank2F={APIRank[40]}
            Rank3F={APIRank[41]}
            GPimgF={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACCCAMAAACXSEZJAAAAFVBMVEXOKTn///9HcFDR2dM1ZUDLAiLxzc9NJ+i6AAAAtUlEQVR4nO3QSRHDQAADsLVz8IfcjEn0I0HQOQAAAAAAAAAAAADwVw/PeXlPiIRIGAmRMBIiYSREwkiIhJEQCSMhEkZCJIyESBgJkTASImEkRMJIiISREAkjIRJGQiSMhEgYCZEwEiJhJETCSPici+vc3KdUQiWMhEoYCZUwEiphJFTCSKiEkVAJI6ESRkIljIRKGAmVMBIqYSRUwkiohJFQCSOhEkZCJYyEShgJlTASKmEkfH7R0pJBETW3EgAAAABJRU5ErkJggg=="
            }
            imgSrcF={
              "https://f1flow.ru/upload/iblock/c34/08glgh3lg40vawctmo8y5jgwn9i50kc6.png"
            }
            isStarted={isRaceDownList[13]}
            clicked={() => {
              if (isRaceDownList[13])
                setSelectedCard({
                  RoundArray: 13,
                });
            }}
          />
        </div>
        <div className="CardArea">
          <ScheduleCards
            GPName={"Netherlands"}
            GPContent={"FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2025"}
            GPDateF={"29 - 31 AUG"}
            GPRoundF={"Round15"}
            Rank1F={APIRank[42]}
            Rank2F={APIRank[43]}
            Rank3F={APIRank[44]}
            GPimgF={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACtCAMAAABhsvGqAAAAFVBMVEX///+uHCghRoutEyG7Uli6wdQANoTnBA3RAAAA9klEQVR4nO3QgU0DARDEwN9LQv8lg9wEIM1UYPkZe3474C8wYSbEhJkQE2ZCTJgJMWEmxISZEBNmQkyYCTFhJsSEmRATZkJMmAkxYSbEhJkQE2ZCTJgJMWEmxISZEBNmQkyYCTFhJsSEmRATZkJMmAkxYSbEhJkQE2ZCnhev5837AQAAAAAAAAAAAAAAAADgH/nweb74eo4z4UyICWdCTDgTYsKZEBPOhJhwJsSEMyEmnAkx4UyICWdCTDgTYsKZEBPOhJhwJsSEMyEmnAkx4UyICWdCTDgTYsKZEBPOhJhwJsSEMyEmnAkx4UyICWdCTDgTYsKPb9huvOm8uYtrAAAAAElFTkSuQmCC"
            }
            imgSrcF={
              "https://f1flow.ru/upload/iblock/d14/8n6w9f3mhafj3ner3v7nfcluog86ilnz.png"
            }
            isStarted={isRaceDownList[14]}
            clicked={() => {
              if (isRaceDownList[14])
                setSelectedCard({
                  RoundArray: 14,
                });
            }}
          />
          <ScheduleCards
            GPName={"Italy"}
            GPContent={"FORMULA 1 PIRELLI GRAN PREMIO D’ITALIA 2025"}
            GPDateF={"05 - 07 SEP"}
            GPRoundF={"Round16"}
            Rank1F={APIRank[45]}
            Rank2F={APIRank[46]}
            Rank3F={APIRank[47]}
            GPimgF={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACtCAMAAABhsvGqAAAAFVBMVEX///8AkkbOKzcAjz96tIjcfoHNIC7/Jth5AAAA5UlEQVR4nO3QSQEAIAADoHn2j2yKvYQIZDSsnYpzZ0MkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQcL3CQ86tbh+5X8kwAAAAABJRU5ErkJggg=="
            }
            imgSrcF={
              "https://f1flow.ru/upload/iblock/397/scsb6ealthpbxc1003palym1r8wzvooa.png"
            }
            isStarted={isRaceDownList[15]}
            clicked={() => {
              if (isRaceDownList[15])
                setSelectedCard({
                  RoundArray: 15,
                });
            }}
          />
          <ScheduleCards
            GPName={"Azerbaijan"}
            GPContent={"FORMULA 1 QATAR AIRWAYS AZERBAIJAN GRAND PRIX 2025"}
            GPDateF={"19 - 21 SEP"}
            GPRoundF={"Round17"}
            Rank1F={APIRank[48]}
            Rank2F={APIRank[49]}
            Rank3F={APIRank[50]}
            GPimgF={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACCCAMAAACXSEZJAAAAflBMVEUAteJQni/vM0D///8Au+nBZX7IWztCoy7yL0DzLjnvLDruGSzvLjzvMT7vKDf96OnuIDH++Pj84OLuECb3o6fwPUnwR1L4sLP0iI7vN0TyY2z2mp/3qKz1jpPzbnbxUFr719nxWmP5vsHzeH70gYftAAv6ycv+8PH70NL4t7s4x2FOAAAC2UlEQVR4nO2aWZeiMBBGCfQ2hIQI7oqo2C7//w9OqGGREXzrSh/57ovH7ZDcbJVKPA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKe8gTfvHbx7fxxhpEylNK4e38HzHRAZuVovN9tptpsbEyoXZbjHgYRQ5tskqImPO6Mda2CXoOR6H3S5ZCbkLkYHbgnaP99VfxInSTyxGg6SuRwdmCWY3aQxsM9yLdNU6jzbB1PpcEjwSpBZo+CYpzqiiqtIp/n56nBiYJUgN810eJDR/TdRuju6WyU4JZhT0w3kw0wY+qeo708cMEqI5rWDRdrT6ErN6FMHCwWjBFkHB8e0/wf/HBT8Fvgk6HpSTJ4tBGp+GVD0g7BJULJeHPP+plb0sZ4Gh6h5xwSbBL2sHNz64yI1L6T2/TQOFsZXRi81V8kYJaR1sDwbGAwyTgppDjZ8TE24mVgVbHBJULPKwXUoQA4LGz4UC/uT3dSOnIgxauCSoOsYYbib25HQwtkR2CSYRVW7+WALN55KVpzhI5cEea32jYMtrPT3pXFw++YMorkkpEkdJPR+rbScbdpMSzA5F/oxtP4p2CRUrbzvlaBW2f+ZltID12YCEvxfNRyylx8O7cQ4NOGNYGLEEukjWCLUqqrdmMPmdgM11NFHsIHCVrpEyXruH3FSpe0KI06vtfFScHtWzddOtN6l3Lf9KfcVvb52yv0uGuo9fGHbKjzwW47h5FiO4Z4dyF5HcyBrLXSP5qPyaD7K7f5xO56jeTsvqON9zqC6pJGsx3RJowyaDtegS3ziSx304ubi1qLNn1zKi1v8heiAK3wW78sRodbGaO3q8R28D/DhfYJPTwABCQISCEgQkEBAgoAEAhIEJBCQICCBgAQBCQQkCEggIEFAAgEJAhIISBCQQECCgAQCEgQkEJAgIIGABAEJBCQISCAgQUACAQkCEghIEJBAQIKABAISBCQQkGD5C2ELyM3lC2RgAAAAAElFTkSuQmCC"
            }
            imgSrcF={
              "https://f1flow.ru/upload/resize_cache/iblock/90d/5000_240_1/u0jd99j5wx7i7g6hph9k1h06l3xunyjn.png"
            }
            isStarted={isRaceDownList[16]}
            clicked={() => {
              if (isRaceDownList[16])
                setSelectedCard({
                  RoundArray: 16,
                });
            }}
          />
        </div>
        <div className="CardArea">
          <ScheduleCards
            GPName={"Singapore"}
            GPContent={"FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2025"}
            GPDateF={"19 - 21 SEP"}
            GPRoundF={"Round18"}
            Rank1F={APIRank[51]}
            Rank2F={APIRank[52]}
            Rank3F={APIRank[53]}
            GPimgF={
              "data:image/png;base64,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"
            }
            imgSrcF={
              "https://f1flow.ru/upload/resize_cache/iblock/5e9/5000_240_1/98tro63ez7vv37wx9ii8ea70qh1miodl.png"
            }
            isStarted={isRaceDownList[17]}
            clicked={() => {
              if (isRaceDownList[17])
                setSelectedCard({
                  RoundArray: 17,
                });
            }}
          />
          <ScheduleCards
            GPName={"United States"}
            GPContent={"FORMULA 1 MSC CRUISES UNITED STATES GRAND PRIX 2025"}
            GPDateF={"19 - 21 SEP"}
            GPRoundF={"Round19"}
            Rank1F={APIRank[54]}
            Rank2F={APIRank[55]}
            Rank3F={APIRank[56]}
            GPimgF={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAA9CAMAAABLE72xAAAAolBMVEX///+zGUIKMWGxBjvJdIPPhZOxADmzF0GyEj758fLv296vADGvADPdrba5O1iyEj8ALV84THEAKFwAIlkAHVeIJE8AGVW8vMcAAE3n6e0AFVNDVXgACVCzuMSCi6EADVEwR28mPmlNW3wYN2Te4OVUZIPIy9SiqLdyfJWVm61da4hlco19gpnU1t2WXHU3RG2bZn6worGFFEekgpWMOFyTQ2MdqO/LAAAD/klEQVRYhe2ZW6/kJgyAKdvLnl4dk02GZMiEkISQS0+7bf//X6tNTtXtQx8iuTrS9vjFA5awbPCHwyitNehT/kV/Ovzw/gsBUVpjf65rCpMXL1vMPqDIGns4za2Rc4rbnAZedh93T6rvjoW8wRTrlfUyp5bMIZulnIJWY8kRLSqyrpxiZ9pYtml4VkfFw04loz9+/U5AKL1+6VAHgHXY2Rnu65Tzue+Bp9uto7wCLsOC8POXEqLYDeom0rKA+ubuNAR4ThVPl91As6jv7qHZXNZKRPLZMUnZnsObVc0pLayi6DnjiqM2UY0+nzE5p6BhiLSfSBsX6RChrqKjMwsanTNsXiPtJ0o6LTdPiUP9SDcNpYZb12gsA/rNaGN0uQQyg350DzmnuKuRcwhR1ZRD8LNKXCrraLl0sFMHl4x2ygX85SsJoUgfdn5QDnG1iXNZRktlC7o5qJL4h60bNi+245KREC4Z6LUZSiiaAsqphL7qUbcm+BCwBexNT9MNFLcC5DDIRdiNjpaEkGzi6Fo37kjRbUc9IZtt7DlocvqNgJwlA62qM5U6xfuoyznTSOPTyDTCScWTyx/evRcQcgpB41BsiB5x8+upC0qsh7CuAYlKQ5/N2tRPEkIRDW4vgHAzHIMn7PhpHohO0HaxpVqFoV6oZjFM8xTESoZSa8NJpTqzd1bMYPBWFVxJkxrzDZdURDk4+BQZN7jtHdMIU7dy4JASX6oUcWJY4U5mOadA2LknQ2A3+hZv2iDtH+GHpquloPk8TWba01+/lZAX4Md/Ar+1mUoE/Kf1U+Drj99JyF/An90J/HnnFDfu8FyXZp4rNk9zvg8EeyQzUVlQOTbLg+AX4L7wwNN5NcGYUK4aQ8PmRrBHWuzMPRLQ8eTweveUgT8d4wl8O2fgRxUDpfd7AaFIb+rIwJ9UKjPwVQb+fbQ5tajO+2BTncHffpAQctp7ok9rYHhMYFhzD9pjKPqABVlwwGy+TSDZOQC1oR0TPSzHEkgXaaZaBZxcHKhiYTv2fLBEeyTCzmxO7HSZSofiCgKvbKbRpmoj2yPx6sPaIeQ+c2NtupVSHiDsO28rTCvfdIKRgk+T5z7T1z4Q8MOz4yH4LWXdxxez8wF+/1FCqGRWZZnslNo5N9kvPRJRiVsnotLoWUfluHP4SUB4T53LN/XGfSbfNjF3+BgdKyhczOY9Uo8kBAc6pFXJ9yZghVmbcwjli67M32ahSItL8ofMnr7J5yci18bVW0bifrx8n0oU+2U4vIpTkfbuajco0she7Xvf5D8VkQ/Oq9+nEl/Wl7/EJd4QLr85vAocRB6Grr4jiTyBXX0xe5PPT0Qe5a++4Uv8+3D534pXgcP/xumfcrbDUqCltsUAAAAASUVORK5CYII="
            }
            imgSrcF={
              "https://f1flow.ru/upload/resize_cache/iblock/dce/5000_240_1/2k42moxi468lxhr292gztlrsx0k3htqv.png"
            }
            isStarted={isRaceDownList[18]}
            clicked={() => {
              if (isRaceDownList[18])
                setSelectedCard({
                  RoundArray: 18,
                });
            }}
          />
          <ScheduleCards
            GPName={"Mexico"}
            GPContent={"FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2025"}
            GPDateF={"19 - 21 SEP"}
            GPRoundF={"Round20"}
            Rank1F={APIRank[57]}
            Rank2F={APIRank[58]}
            Rank3F={APIRank[59]}
            GPimgF={
              "data:image/png;base64,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"
            }
            imgSrcF={
              "https://f1flow.ru/upload/resize_cache/iblock/a87/5000_240_1/20gs1xj1vq7fiq08xzlpq8zva7ojpgee.png"
            }
            isStarted={isRaceDownList[19]}
            clicked={() => {
              if (isRaceDownList[19])
                setSelectedCard({
                  RoundArray: 19,
                });
            }}
          />
        </div>
        <div className="CardArea">
          <ScheduleCards
            GPName={"Brazil"}
            GPContent={"FORMULA 1 MSC CRUISES GRANDE PRÊMIO DE SÃO PAULO 2025"}
            GPDateF={"19 - 21 SEP"}
            GPRoundF={"Round21"}
            Rank1F={APIRank[60]}
            Rank2F={APIRank[61]}
            Rank3F={APIRank[62]}
            GPimgF={
              "data:image/png;base64,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"
            }
            imgSrcF={
              "https://f1flow.ru/upload/resize_cache/iblock/ad9/5000_240_1/sn0eb4l4std68q1je7d9hdx9vw7faecd.png"
            }
            isStarted={isRaceDownList[20]}
            clicked={() => {
              if (isRaceDownList[20])
                setSelectedCard({
                  RoundArray: 20,
                });
            }}
          />
          <ScheduleCards
            GPName={"Las Vegas"}
            GPContent={"FORMULA 1 HEINEKEN LAS VEGAS GRAND PRIX 2025"}
            GPDateF={"19 - 21 SEP"}
            GPRoundF={"Round22"}
            Rank1F={APIRank[63]}
            Rank2F={APIRank[64]}
            Rank3F={APIRank[65]}
            GPimgF={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAA9CAMAAABLE72xAAAAolBMVEX///+zGUIKMWGxBjvJdIPPhZOxADmzF0GyEj758fLv296vADGvADPdrba5O1iyEj8ALV84THEAKFwAIlkAHVeIJE8AGVW8vMcAAE3n6e0AFVNDVXgACVCzuMSCi6EADVEwR28mPmlNW3wYN2Te4OVUZIPIy9SiqLdyfJWVm61da4hlco19gpnU1t2WXHU3RG2bZn6worGFFEekgpWMOFyTQ2MdqO/LAAAD/klEQVRYhe2ZW6/kJgyAKdvLnl4dk02GZMiEkISQS0+7bf//X6tNTtXtQx8iuTrS9vjFA5awbPCHwyitNehT/kV/Ovzw/gsBUVpjf65rCpMXL1vMPqDIGns4za2Rc4rbnAZedh93T6rvjoW8wRTrlfUyp5bMIZulnIJWY8kRLSqyrpxiZ9pYtml4VkfFw04loz9+/U5AKL1+6VAHgHXY2Rnu65Tzue+Bp9uto7wCLsOC8POXEqLYDeom0rKA+ubuNAR4ThVPl91As6jv7qHZXNZKRPLZMUnZnsObVc0pLayi6DnjiqM2UY0+nzE5p6BhiLSfSBsX6RChrqKjMwsanTNsXiPtJ0o6LTdPiUP9SDcNpYZb12gsA/rNaGN0uQQyg350DzmnuKuRcwhR1ZRD8LNKXCrraLl0sFMHl4x2ygX85SsJoUgfdn5QDnG1iXNZRktlC7o5qJL4h60bNi+245KREC4Z6LUZSiiaAsqphL7qUbcm+BCwBexNT9MNFLcC5DDIRdiNjpaEkGzi6Fo37kjRbUc9IZtt7DlocvqNgJwlA62qM5U6xfuoyznTSOPTyDTCScWTyx/evRcQcgpB41BsiB5x8+upC0qsh7CuAYlKQ5/N2tRPEkIRDW4vgHAzHIMn7PhpHohO0HaxpVqFoV6oZjFM8xTESoZSa8NJpTqzd1bMYPBWFVxJkxrzDZdURDk4+BQZN7jtHdMIU7dy4JASX6oUcWJY4U5mOadA2LknQ2A3+hZv2iDtH+GHpquloPk8TWba01+/lZAX4Md/Ar+1mUoE/Kf1U+Drj99JyF/An90J/HnnFDfu8FyXZp4rNk9zvg8EeyQzUVlQOTbLg+AX4L7wwNN5NcGYUK4aQ8PmRrBHWuzMPRLQ8eTweveUgT8d4wl8O2fgRxUDpfd7AaFIb+rIwJ9UKjPwVQb+fbQ5tajO+2BTncHffpAQctp7ok9rYHhMYFhzD9pjKPqABVlwwGy+TSDZOQC1oR0TPSzHEkgXaaZaBZxcHKhiYTv2fLBEeyTCzmxO7HSZSofiCgKvbKbRpmoj2yPx6sPaIeQ+c2NtupVSHiDsO28rTCvfdIKRgk+T5z7T1z4Q8MOz4yH4LWXdxxez8wF+/1FCqGRWZZnslNo5N9kvPRJRiVsnotLoWUfluHP4SUB4T53LN/XGfSbfNjF3+BgdKyhczOY9Uo8kBAc6pFXJ9yZghVmbcwjli67M32ahSItL8ofMnr7J5yci18bVW0bifrx8n0oU+2U4vIpTkfbuajco0she7Xvf5D8VkQ/Oq9+nEl/Wl7/EJd4QLr85vAocRB6Grr4jiTyBXX0xe5PPT0Qe5a++4Uv8+3D534pXgcP/xumfcrbDUqCltsUAAAAASUVORK5CYII="
            }
            imgSrcF={
              "https://f1flow.ru/upload/resize_cache/iblock/d10/5000_240_1/3ea74y9vltpseobcj9fwt2b9lm69hnbu.png"
            }
            isStarted={isRaceDownList[21]}
            clicked={() => {
              if (isRaceDownList[21])
                setSelectedCard({
                  RoundArray: 21,
                });
            }}
          />
          <ScheduleCards
            GPName={"Qatar"}
            GPContent={"FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2025"}
            GPDateF={"19 - 21 SEP"}
            GPRoundF={"Round23"}
            Rank1F={APIRank[66]}
            Rank2F={APIRank[67]}
            Rank3F={APIRank[68]}
            GPimgF={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAABmCAMAAAAanR/dAAAAbFBMVEWKFTj///+HADCCACGCACOFACqFACyJDjWAABuDACWGAC6EACfXvcPs3+L8+fp/ABj48vO5h5LLp6/k09bAlJ61fouTM0zz6evTtrytcH7Hn6ihU2bfyc6XPVOPJkF+ABGkXm6aRVqpZnV7AADgm3uTAAAChklEQVR4nO2d7a6CMAyGRURBHKigCH7r/d/jWWEYfnqSNuZN+9yBT+zWdV2ZRYxsN4djnM9ncHBKIJpTO08TMBHcEgjXnbPFcvXrn/Y9EhI8xWV3TTOUP4SQBGJ7apMUwoOgBMIdECxIGqDdAsGBnISqvsaLNcbqKCLA7V9JCrQ9sAsoNocbWsbEK6Cqj/dsjvMXCHA6cG3+hskNpnBK8DT7RxIDrQYDzBKIqn6m2frXP+w/CEiIKEOAOkbJSCDc/rEEiQw5CVG/W5wRLIhKiKruqVsCVRVUh4M/Rc9izQtjcamPZQ6VNjIbcN1jDRIDE1gNtOV9ARMDEzgl0Jb4TFGKCBNYJRDbzWFWaj5KjzT710p1USVAkVGiRIaUhF7EZae80DrgWgQLggIaShsRHAhewwGljRIG/NEJq8bGLcDHwDpOgAQQnALo2i0Fy5N6OCUUm90NZyGYwCmBoC0BqMQ6wC2B8AtjqnphDNAWGcNEhpAEojn5YxREYAhKIKxThbbM5a9/4DeIGfBH6Vz1UdqB3U2zC+jTRrBEgdcAUgxM4FTgXsnbSu79ahAjrQYDzBKIS31cYMWEgISo71S5lTiro4wEwkdGDhIZchKIqrNOFZOgPhxsYVS/RbpOe7JkaXOPHaAG7CgdUF9UGfGRkaFEhpiEiCJjp7zQOqC+5K7+8sWu4dRfyKq/mrcmjcjadT6ob9waUd/CF7BmzoD6tt4R9Wmztfrbow/1z3/UPwSzJ4H2OPTjQf0z4QF7MB5QPzpgRP0QiUChfpxIZINlbMSQDZuysWM2gM5GERI2lHIUoX086Yj6QbUj6kcWB2x49YD6krv6gfb2aQP1H7lQ/7kT1A/f/AE3pEWyzML9ewAAAABJRU5ErkJggg=="
            }
            imgSrcF={
              "https://f1flow.ru/upload/resize_cache/iblock/966/5000_240_1/xyxdp43l76ci5s961l7c84d5g0zi1ejv.png"
            }
            isStarted={isRaceDownList[22]}
            clicked={() => {
              if (isRaceDownList[22])
                setSelectedCard({
                  RoundArray: 22,
                });
            }}
          />
        </div>
        <div className="CardArea">
          <ScheduleCards
            GPName={"Abu Dhabi"}
            GPContent={"FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2025"}
            GPDateF={"19 - 21 SEP"}
            GPRoundF={"Round24"}
            Rank1F={APIRank[69]}
            Rank2F={APIRank[70]}
            Rank3F={APIRank[71]}
            GPimgF={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/250px-Flag_of_the_United_Arab_Emirates.svg.png"
            }
            imgSrcF={
              "https://f1flow.ru/upload/iblock/f61/efmt784idip832jg8nfkbhvfnaq4j9t1.png"
            }
            isStarted={isRaceDownList[23]}
            clicked={() => {
              if (isRaceDownList[23])
                setSelectedCard({
                  RoundArray: 23,
                });
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Compeleted;
