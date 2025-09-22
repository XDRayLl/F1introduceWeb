import "../CSS/NavCss.css";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">
        <img
          className="F1Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/2560px-F1.svg.png"
          alt="F1Logo"
        />
      </Link>
      <div className="NavButtons">
        {/* <div className="button"> */}
        <Link to="/schedule" className="button">
          Schedule <IoIosArrowDown className="downArrow" />
        </Link>

        {/* <button>Schedule <IoIosArrowDown className="downArrow"/></button> */}
        <Link to="/Teams" className="button">
          {/* <button> */}
          Teams <IoIosArrowDown className="downArrow" />
          {/* </button> */}
        </Link>
        <Link to="/Drivers" className="button">
          {/* <button> */}
          Drivers <IoIosArrowDown className="downArrow" />
          {/* </button> */}
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
