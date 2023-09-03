import "./Header.scss";
import { FaHeartbeat, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

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
            <Link to={"/"}>
              <li className="header__listitem">Home</li>
            </Link>
            <li className="header__listitem">Services</li>
            <li className="header__listitem">About</li>
            <li className="header__listitem">Doctors</li>

            <Link to={"/myappointments"}>
              <li className="header__listitem">MyAppointments</li>
            </Link>
            <li className="header__listitem">Blogs</li>
            <Link to={"/users"}>
              <li className="header__listitem">Login/SignUp</li>
            </Link>
          </ul>
        </div>

        <FaBars className="header__menubtn" />
      </div>
    </section>
  );
}

export default Header;
