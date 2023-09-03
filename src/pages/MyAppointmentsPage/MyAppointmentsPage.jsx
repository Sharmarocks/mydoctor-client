import Header from "../../components/Header/Header";
import "./MyAppointmentsPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function MyAppointmentsPage() {
  const [appointmentList, setappointmentList] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5050/api/bookings`)
      .then((response) => {
        setappointmentList(response.data);
      })
      .catch((error) => {
        console.error(`Error retreiving booking ${error}`);
      });
  }, []);

  return (
    <section>
      <Header />
      <div>Your Appointments</div>

      <div className="appointments">
        <ul className="appointments__list">
          {appointmentList.map((item) => (
            <li key={item.id} className="appointments__listitem">
              <p className="appointments__bookingid">{item.id}</p>
              <p className="appointments__name">{item.user_name}</p>
              <p className="appointments__useremail">{item.user_email}</p>
              <p className="appointments__rating">{item.doctor_name}</p>
              <p className="appointments__datetime">{item.booking_datetime}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MyAppointmentsPage;
