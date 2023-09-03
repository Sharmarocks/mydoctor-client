import "./DoctorDetailPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";

function DoctorDetailPage() {
  const { id } = useParams();
  const [doctorDetail, setdoctorDetail] = useState(null);

  const [userDetails, setUserDetails] = useState(null);

  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5050/api/doctors/${id}`)
        .then((response) => {
          //   console.log(response.data);
          setdoctorDetail(response.data);
        })
        .catch((error) => {
          console.error(`Error fetching data ${error}`);
          //   setdoctorDetail(null);
        });
    }
  }, [id]);

  if (!doctorDetail) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <Header />
      <div className="doctordetail">
        <img
          className="doctordetail__img"
          src={`http://localhost:5050${doctorDetail.image}`}
        />
        <div className="doctordetail__info">
          <p className="doctordetail__name">{doctorDetail.name}</p>
          <p className="doctordetail__speciality">
            {doctorDetail.specialization}
          </p>
          <p className="doctordetail__address">{doctorDetail.address}</p>
          <p className="doctordetail__rating">{doctorDetail.rating}</p>
          <p className="doctordetail__bio">{doctorDetail.bio}</p>
        </div>
      </div>

      <form className="bookingform">
        <p className="bookingform__heading">Book Now!!</p>
        <label htmlFor="fname">FirstName:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          className="bookingform__firstname"
          required
        />
        <br />
        <br />
        <label htmlFor="lname">LastName:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          className="bookingform__lastname"
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="bookingform__email"
          required
        />
        <br />
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="bookingform__phone"
          required
        />{" "}
        <br />
        <br />
        <label htmlFor="date">Appointment Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          className="bookingform__date"
          required
        />
        <br />
        <label htmlFor="time">Appointment Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          className="bookingform_time"
          required
        />
        <br></br>
        <button type="button">BookNow!!</button>
      </form>
    </section>
  );
}

export default DoctorDetailPage;
