import Nav from "../JSX/Nav";
import DriversCards from "../JSX/DriversCards";
import Footer from "../JSX/Footer"
import "../CSS/DriversCss.css"

function Drivers() {
  return (
    <div>
      <Nav />
      <div className="Text">
        <div className="Line1">
        F1 Drivers 2025
        </div>
      <div className="Line2">
        Find the current Formula 1 drivers for the 2025 season
      </div>
      </div>
      <div className="DriversRowTop">
        <DriversCards value="Pia" />
        <DriversCards value="Nor" />
        <DriversCards value="Rus" />
        <DriversCards value="Ant" />
      </div>
      <div className="DriversRow">
        <DriversCards value="Lec" />
        <DriversCards value="Ham" />
        <DriversCards value="Ver" />
        <DriversCards value="Tsu" />
      </div>
      <div className="DriversRow">
        <DriversCards value="Alb" />
        <DriversCards value="Sai" />
        <DriversCards value="Law" />
        <DriversCards value="Had" />
      </div>
      <div className="DriversRow">
        <DriversCards value="Str" />
        <DriversCards value="Alo" />
        <DriversCards value="Hul" />
        <DriversCards value="Bor" />
      </div>
      <div className="DriversRow">
        <DriversCards value="Oco" />
        <DriversCards value="Bea" />
        <DriversCards value="Gas" />
        <DriversCards value="Col" />
      </div>
      <Footer/>
    </div>
  );
}

export default Drivers;
