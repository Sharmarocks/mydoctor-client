import "./Footer.scss";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkedAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <section>
      <div className="footer">
        <div className="footer__quicklinks">
          <p className="footer__subheader">Quick Links</p>
          <a href="#page1" className="footer__link">
            <FaChevronRight />
            Home
          </a>
          <a href="#page2" className="footer__link">
            {" "}
            <FaChevronRight />
            About{" "}
          </a>
          <a href="#page3" className="footer__link">
            <FaChevronRight />
            Blogs
          </a>
          <Link to="/doctors" className="footer__link">
            <FaChevronRight />
            Doctors
          </Link>
          <Link to={"/myappointments"} className="footer__link">
            <FaChevronRight />
            MyAppointments
          </Link>
          <Link to={"/users"} className="footer__link">
            <FaChevronRight />
            Login/SignUp
          </Link>
        </div>

        <div className="footer__contact">
          <p className="footer__subheader">Contact Info</p>
          <ul className="footer__lists">
            <li className="footer__listitem">
              <FaPhone className="footer__icon" />
              888-888-8888
            </li>
            <li className="footer__listitem">
              <FaEnvelope className="footer__icon" />
              rahulsharma199724@gmail.com
            </li>
            <li className="footer__listitem">
              <FaMapMarkedAlt className="footer__icon" />
              Vancouver
            </li>
          </ul>
        </div>

        <div className="footer__follow">
          <p className="footer__subheader">Follow Us</p>
          <ul className="footer__lists">
            <li className="footer__listitem">
              <FaFacebook className="footer__icon" />
              Facebook
            </li>
            <li className="footer__listitem">
              <FaTwitter className="footer__icon" />
              Twitter
            </li>
            <li className="footer__listitem">
              <FaInstagram className="footer__icon" />
              Instagram
            </li>
          </ul>
        </div>
      </div>
      <p className="footer__copyright">
        Created By Rahul Sharma | All Rights Reserved
      </p>
    </section>
  );
}

export default Footer;
