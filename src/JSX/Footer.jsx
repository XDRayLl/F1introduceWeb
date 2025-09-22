import { SlSocialYoutube } from "react-icons/sl";
import { PiInstagramLogoBold } from "react-icons/pi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

import "../CSS/FooterCss.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="topFooter">
          <div className="topleftFooter">Download the Official F1 App</div>
          <div className="toprightFooter">
            <img
              src="https://www.formula1.com/assets/article/_next/static/media/app-store~KIgimfgl.c48d2499.svg"
              alt=""
            />
            <img
              src="https://www.formula1.com/assets/article/_next/static/media/google-play~msbWENBH.66d1792b.svg"
              alt=""
            />
          </div>
        </div>
        <div className="middleFooter">
          <nav className="footerNav">
            <button>Schedule</button>
            <button>Teams</button>
            <button>Drivers</button>
          </nav>
          <div className="middledownFooter">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/2560px-F1.svg.png"
              alt=""
            />
            <div className="footerTwolines"></div>
          </div>
        </div>
        <div className="downFooter">
          <div className="socialBox">
            <RiFacebookCircleLine className="social"/>
          </div>
          <div className="socialBox">
            <FaXTwitter className="social"/>
          </div>
          <div className="socialBox">
            <PiInstagramLogoBold  className="social"/>
          </div>
          <div className="socialBox">
            <SlSocialYoutube className="social" />
          </div>
        </div>
          <div className="text">
            © 2003-2025 Formula One World Championship Limited
          </div>
      </footer>
    </div>
  );
}

export default Footer;
