import Header from "../../components/Header/Header";
import "./MyAppointmentsPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";

function MyAppointmentsPage() {
  const [appointmentList, setappointmentList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://mydoctorapi.onrender.com/api/bookings`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setappointmentList(response.data);
        } else {
          setappointmentList([]);
        }
      })
      .catch((error) => {
        console.error(`Error retreiving booking ${error}`);
      });
  }, []);

  const handleDeleteAppointment = (id) => {
    axios
      .delete(`https://mydoctorapi.onrender.com/api/bookings/${id}`)

      .then((response) => {
        if (response.status === 204) {
          setappointmentList((prevAppointments) =>
            prevAppointments.filter(
              (appointment) => appointment.booking_id !== id
            )
          );
        } else {
          console.error("Failed to delete appointment");
        }
      })
      .catch((error) => {
        console.error("Error deleting appointment", error);
      });
  };

  return (
    <section>
      <Header />
      <div>Your Appointments</div>

      <div className="appointments">
        <img className="appointments__image" />
        <ul className="appointments__list">
          {appointmentList.map((item) => (
            <li key={item.booking_id} className="appointments__listitem">
              <p className="appointments__bookingid">{item.booking_id}</p>
              <p className="appointments__name">{item.user_name}</p>
              <p className="appointments__useremail">{item.user_email}</p>
              <p className="appointments__rating">{item.doctor_name}</p>
              <p className="appointments__datetime">
                {new Date(item.booking_datetime).toLocaleDateString()}
                <br />
                {new Date(item.booking_datetime).getHours()}:
                {new Date(item.booking_datetime).getMinutes()}:
                {new Date(item.booking_datetime).getSeconds()}
              </p>

              <button
                onClick={() => handleDeleteAppointment(item.booking_id)}
                className="appointments__cancel"
              >
                CANCEL
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </section>
  );
}

export default MyAppointmentsPage;
