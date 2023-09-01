import "./Header.scss";
import { FaHeartbeat, FaBars } from "react-icons/fa";

function Header() {
  return (
    <section>
      <div className="header">
        <div className="header__logo">
          <FaHeartbeat className="header__heart" />
          MyDoctor
        </div>

        <div className="header__navbar">
          <ul className="header__list">
            <li className="header__listitem">Home</li>
            <li className="header__listitem">Services</li>
            <li className="header__listitem">About</li>
            <li className="header__listitem">Doctors</li>
            <li className="header__listitem">Review</li>
            <li className="header__listitem">Blogs</li>
            <li className="header__listitem">Login/SignUp</li>
          </ul>
        </div>

        <FaBars className="header__menubtn" />
      </div>
    </section>
  );
}

export default Header;
