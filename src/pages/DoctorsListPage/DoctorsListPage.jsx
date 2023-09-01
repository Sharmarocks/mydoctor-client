import "./DoctorsListPage.scss";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowAltCircleRight, FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function DoctorsListPage() {
  const [doctorsList, setdoctorsList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/api/doctors")
      .then((response) => {
        setdoctorsList(response.data);
        console.log(response.data);
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
                src={`http://localhost:5050${item.image}`}
              />
              <p className="doctors__name">{item.name}</p>
              <p className="doctors__speciality">{item.specialization}</p>

              <p className="doctors__rating">{item.rating}</p>
              <Link to={`/doctors/${item.id}`}>
                <FaArrowCircleRight className="doctors__detailarrow" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default DoctorsListPage;
