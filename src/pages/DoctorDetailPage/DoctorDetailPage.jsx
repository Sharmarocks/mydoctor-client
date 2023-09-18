import "./DoctorDetailPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { FaStar } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";

function DoctorDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctorDetail, setdoctorDetail] = useState(null);

  const [userDetails, setUserDetails] = useState(null);

  const [formData, setFormData] = useState({ date: "", time: "" });

  useEffect(() => {
    if (id) {
      axios
        .get(`https://mydoctorapi.onrender.com/api/doctors/${id}`)
        .then((response) => {
          //   console.log(response.data);
          setdoctorDetail(response.data);
        })
        .catch((error) => {
          console.error(`Error fetching data ${error}`);
        });
    }
  }, [id]);

  useEffect(() => {
    axios
      .get(`https://mydoctorapi.onrender.com/api/users`)
      .then((response) => {
        console.log(response.data);
        setUserDetails(response.data[0]);
      })
      .catch((error) => {
        console.error(`Error fetching details ${error}`);
      });
  }, []);

  const handleBooking = (e) => {
    e.preventDefault();

    if (!formData.date || !formData.time) {
      console.error("Date and time are required");
      return;
    }

    const bookingData = {
      user_id: userDetails.id,
      user_name: `${userDetails.firstname} ${userDetails.lastname}`,
      user_email: userDetails.email,
      doctor_id: doctorDetail.id,
      doctor_name: doctorDetail.name,

      date: formData.date,
      time: formData.time,
    };

    console.log("Booking Data", bookingData);
    console.log(formData);

    axios
      .post(`https://mydoctorapi.onrender.com/api/bookings`, bookingData)
      .then((response) => {
        console.log("Booking Response:", response.data);
        if (response.status === 201) {
          // Update the formData state if needed
          setFormData({ date: "", time: "" });
          navigate("/myappointments");
        } else {
          console.log("Booking failed");
        }
      })
      .catch((error) => {
        console.error("Booking error:", error);
      });
  };

  if (!doctorDetail) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <Header />
      <div className="doctordetail">
        <img
          className="doctordetail__img"
          src={`https://mydoctorapi.onrender.com${doctorDetail.image}`}
        />
        <div className="doctordetail__info">
          <p className="doctordetail__name">{doctorDetail.name}</p>
          <p className="doctordetail__speciality">
            {doctorDetail.specialization}
          </p>
          <p className="doctordetail__address">{doctorDetail.address}</p>
          <p className="doctordetail__rating">
            <FaStar className="doctordetail__star" />
            {doctorDetail.rating}
          </p>
          <p className="doctordetail__bio">{doctorDetail.bio}</p>
        </div>
      </div>

      <form className="bookingform" onSubmit={handleBooking}>
        <p className="bookingform__heading">Book Now!!</p>

        <br />
        <br />
        <label htmlFor="date" className="bookingform__applabel">
          Appointment Date
        </label>
        <br />
        <br />
        <input
          type="date"
          id="date"
          name="date"
          className="bookingform__date"
          required
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          value={formData.date}
        />
        <br />
        <label htmlFor="time" className="bookingform__timelabel">
          Appointment Time
        </label>
        <br />
        <br />
        <input
          type="time"
          id="time"
          name="time"
          className="bookingform__time"
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          value={formData.time}
          required
        />
        <br></br>
        <button type="submit" className="bookingform__btn">
          Submit
        </button>
      </form>
      <Footer />
    </section>
  );
}

export default DoctorDetailPage;
