import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "./Homepage.scss";

import { FaChevronRight } from "react-icons/fa";

function HomePage() {
  return (
    <>
      <Header />

      <section className="page1">
        <div className="main">
          <img className="main__img" />
          <div className="main__intro">
            <p className="main__heading">Stay Safe, Stay Healthy</p>
            <p className="main__subheading">
              We Provide A Cost-Effective, High-Quality Health Care System,
              Guaranteeing Health Care
              <br /> To All Of Our People As A Right
            </p>
            <Link to="" className="main__btn">
              Find Doctors <FaChevronRight className="main__arrow" />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="info-cards">
          <div className="info__doc"></div>
          <div className="info__patients"></div>
          <div className="info__hospital"></div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
