import "./Header.scss";
import { FaHeartbeat, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section>
      <div className="header">
        <div className="header__logo">
          <FaHeartbeat className="header__heart" />
          <Link to={"/"} className="header__link">
            <p className="header__logotext">MyDoctor</p>
          </Link>
        </div>

        <div className="header__navbar ">
          <ul className="header__list  header__list--active">
            <Link to={"/"} className="header__link">
              <li className="header__listitem">Home</li>
            </Link>

            <li className="header__listitem">About</li>
            <li className="header__listitem">Blogs</li>
            <li className="header__listitem">Doctors</li>

            <Link to={"/myappointments"} className="header__link">
              <li className="header__listitem">MyAppointments</li>
            </Link>

            <Link to={"/users"} className="header__link">
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
