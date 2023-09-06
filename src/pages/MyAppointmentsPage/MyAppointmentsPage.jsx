import Header from "../../components/Header/Header";
import "./MyAppointmentsPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";

function MyAppointmentsPage() {
  const [appointmentList, setappointmentList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/api/bookings")
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

  console.log(appointmentList);

  return (
    <section>
      <Header />
      <div>Your Appointments</div>

      <div className="appointments">
        <img className="appointments__image" />
        <ul className="appointments__list">
          {appointmentList.map((item) => (
            <li key={item.booking_id} className="appointments__listitem">
              <p className="appointments__bookingid">{item.id}</p>
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
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </section>
  );
}

export default MyAppointmentsPage;
