import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "./Homepage.scss";

import { FaChevronRight, FaUserMd, FaUsers, FaHospital } from "react-icons/fa";
import AboutUs from "../../components/AboutUs/AboutUs";
import Blogs from "../../components/Blogs/Blogs";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <>
      <Header />

      <section id="page1">
        <div className="main">
          <img className="main__img" />
          <div className="main__intro">
            <p className="main__heading">Stay Safe, Stay Healthy</p>
            <p className="main__subheading">
              We Provide A Cost-Effective, High-Quality Health Care System,
              Guaranteeing Health Care
              <br /> To All Of Our People As A Right
            </p>
            <Link to="/doctors" className="main__btn">
              Find Doctors <FaChevronRight className="main__arrow" />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="info">
          <div className="info__doc">
            <FaUserMd className="info__icon" />
            <p className="info__number">30+</p>
            <p className="info__subheading">Doctors At Work</p>
          </div>
          <div className="info__patients">
            <FaUsers className="info__icon" />
            <p className="info__number">50+</p>
            <p className="info__subheading">Satisfied Patients</p>
          </div>
          <div className="info__clinics">
            <FaHospital className="info__icon" />
            <p className="info__number">10+</p>
            <p className="info__subheading">Available Clinics</p>
          </div>
        </div>
      </section>

      <AboutUs />
      <Blogs />

      <Footer />
    </>
  );
}

export default HomePage;
