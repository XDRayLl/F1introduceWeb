import Nav from "../JSX/Nav";
import TeamsCards from "../JSX/TeamsCards";
import Footer from "../JSX/Footer";
import Sessions from '../JSX/RaceDataAPI.jsx';

function Teams() {
  return (
    <div>
      <Nav />
      <Sessions/>
      
      <div className="AllCards">
        <div className="CardRow">
          <TeamsCards
            value="Mcl"
            TeamsName={"McLaren"}
            DriverName1={"Oscar PIASTRI"}
            DriverName2={"Lando NORRIS"}
            Driverimg1={
              "https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mclaren/oscpia01/2025mclarenoscpia01right.webp"
            }
            Driverimg2={
              "https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mclaren/lannor01/2025mclarenlannor01right.webp"
            }
            Logosrc={
              "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/mclaren/2025mclarenlogowhite.webp"
            }
            Carimg={
              "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/mclaren/2025mclarencarright.webp"
            }
          />
          <TeamsCards
            value="Mer"
            TeamsName={"Mercedes"}
            DriverName1={"George Russell"}
            DriverName2={"Kimi Antonelli"}
            Driverimg1={
              "https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mercedes/georus01/2025mercedesgeorus01right.webp"
            }
            Driverimg2={
              "https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mercedes/andant01/2025mercedesandant01right.webp"
            }
            Logosrc={
              "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/mercedes/2025mercedeslogowhite.webp"
            }
            Carimg={
              "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/mercedes/2025mercedescarright.webp"
            }
          />
        </div>
        <div className="CardRow">
          <TeamsCards
            value="Fer"
            TeamsName={"Ferrari"}
            DriverName1={"Charles Leclerc"}
            DriverName2={"Lewis Hamilton"}
            Driverimg1={
              "https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/ferrari/chalec01/2025ferrarichalec01right.webp"
            }
            Driverimg2={
              "https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/ferrari/lewham01/2025ferrarilewham01right.webp"
            }
            Logosrc={
              "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/ferrari/2025ferrarilogowhite.webp"
            }
            Carimg={
              "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/ferrari/2025ferraricarright.webp"
            }
          />
          <TeamsCards
            value="RBR"
            TeamsName={"Red Bull Racing"}
            DriverName1={"Max Verstappen"}
            DriverName2={"Yuki Tsunoda"}
            Driverimg1={
              "https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/redbullracing/maxver01/2025redbullracingmaxver01right.webp"
            }
            Driverimg2={
              "https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/redbullracing/yuktsu01/2025redbullracingyuktsu01right.webp"
            }
            Logosrc={
              "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/redbullracing/2025redbullracinglogowhite.webp"
            }
            Carimg={
              "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/redbullracing/2025redbullracingcarright.webp"
            }
          />
        </div>
        <div className="CardRow">
          <TeamsCards
            value="Williams"
            TeamsName={"Williams"}
            DriverName1={"Alexander Albon"}
            DriverName2={"Carlos Sainz"}
            Driverimg1={
              "https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/williams/alealb01/2025williamsalealb01right.webp"
            }
            Driverimg2={
              "https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/williams/carsai01/2025williamscarsai01right.webp"
            }
            Logosrc={
              "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/williams/2025williamslogowhite.webp"
            }
            Carimg={
              "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/williams/2025williamscarright.webp"
            }
          />
          <TeamsCards
            value="RB"
            TeamsName={"Racing Bull"}
            DriverName1={"Liam Lawson"}
            DriverName2={"Isack Hadjar"}
            Driverimg1={
              "https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/racingbulls/lialaw01/2025racingbullslialaw01right.webp"
            }
            Driverimg2={
              "https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/racingbulls/isahad01/2025racingbullsisahad01right.webp"
            }
            Logosrc={
              "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/racingbulls/2025racingbullslogowhite.webp"
            }
            Carimg={
              "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/racingbulls/2025racingbullscarright.webp"
            }
          />
        </div>
        <div className="CardRow">
          <TeamsCards
            value="AM"
            TeamsName={"Aston Martin"}
            DriverName1={"Lance Stroll"}
            DriverName2={"Fernando Alonso"}
            Driverimg1={
              "https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/astonmartin/lanstr01/2025astonmartinlanstr01right.webp"
            }
            Driverimg2={
              "https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/astonmartin/feralo01/2025astonmartinferalo01right.webp"
            }
            Logosrc={
              "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/astonmartin/2025astonmartinlogowhite.webp"
            }
            Carimg={
              "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/astonmartin/2025astonmartincarright.webp"
            }
          />
          <TeamsCards
            value="KS"
            TeamsName={"Kick Sauber"}
            DriverName1={"Nico Hulkenberg"}
            DriverName2={"Gabriel Bortoleto"}
            Driverimg1={
              "https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/kicksauber/nichul01/2025kicksaubernichul01right.webp"
            }
            Driverimg2={
              "https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/kicksauber/gabbor01/2025kicksaubergabbor01right.webp"
            }
            Logosrc={
              "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/kicksauber/2025kicksauberlogowhite.webp"
            }
            Carimg={
              "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/kicksauber/2025kicksaubercarright.webp"
            }
          />
        </div>
        <div className="CardRow">
          <TeamsCards
            value="Haas"
            TeamsName={"Haas"}
            DriverName1={"Esteban Ocon"}
            DriverName2={"Oliver Bearman"}
            Driverimg1={
              "https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/haas/estoco01/2025haasestoco01right.webp"
            }
            Driverimg2={
              "https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/haas/olibea01/2025haasolibea01right.webp"
            }
            Logosrc={
              "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/haas/2025haaslogowhite.webp"
            }
            Carimg={
              "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/haas/2025haascarright.webp"
            }
          />
          <TeamsCards
            value="Alpine"
            TeamsName={"Alpine"}
            DriverName1={"Pierre Gasly"}
            DriverName2={"Franco Colapinto"}
            Driverimg1={
              "https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/alpine/piegas01/2025alpinepiegas01right.webp"
            }
            Driverimg2={
              "https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/alpine/fracol01/2025alpinefracol01right.webp"
            }
            Logosrc={
              "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/alpine/2025alpinelogowhite.webp"
            }
            Carimg={
              "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/alpine/2025alpinecarright.webp"
            }
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Teams;
