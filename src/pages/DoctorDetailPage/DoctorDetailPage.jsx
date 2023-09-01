import "./DoctorDetailPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";

function DoctorDetailPage() {
  const { id } = useParams();
  const [doctorDetail, setdoctorDetail] = useState(null);

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
    </section>
  );
}

export default DoctorDetailPage;
