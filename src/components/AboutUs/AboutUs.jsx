import "./AboutUs.scss";

function AboutUs() {
  return (
    <section>
      <div className="aboutus">
        <p className="aboutus__heading">ABOUT US</p>
        <img className="aboutus__image" />

        <div className="aboutus__desc">
          <p className="aboutus__subheading">
            We Take Care Of Your Healthy Life
          </p>
          <p className="aboutus_para">
            A Concept Known As "Health Buddy" Enables Users To Find Doctors In
            Their Area For Medical Difficulties. Users Would Gain Advantages
            Like Knowledge About Various Medical Practitioners And Clinics..
            <br />
            <br /> All Age Groups Can Benefit From The "Healthbuddy" Solution,
            Which Includes Components Like Easily Locating Excellent Doctors In
            Their Area. We Also Provide Daily Health Blogs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
