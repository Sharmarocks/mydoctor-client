import "./DoctorsListPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowAltCircleRight, FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function DoctorsListPage() {
  const [doctorsList, setdoctorsList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/doctors`)
      .then((response) => {
        setdoctorsList(response.data);
      })
      .catch((err) => {
        console.log(`Error fetch doctors data ${err}`);
      });
  }, []);

  return (
    <section>
      <Header />
      <div className="doctors">
        <ul className="doctors__list">
          {doctorsList.map((item) => (
            <li key={item.id} className="doctors__listitem">
              <img
                className="doctors__image"
                src={`http://localhost:8080${item.image}`}
              />
              <div className="doctors__detail">
                <div>
                  <p className="doctors__name">{item.name}</p>
                  <p className="doctors__speciality">{item.specialization}</p>
                </div>

                <div>
                  <p className="doctors__rating">
                    <FaStar className="doctors__star" />
                    {item.rating}
                  </p>
                  <Link to={`/doctors/${item.id}`}>
                    <FaArrowCircleRight className="doctors__detailarrow" />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </section>
  );
}
export default DoctorsListPage;
