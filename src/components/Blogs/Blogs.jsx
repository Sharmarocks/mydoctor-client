import "./Blogs.scss";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
function Blogs() {
  return (
    <section id="page3">
      <p className="blog__header">Blogs</p>
      <div className="blog">
        <div className="blog__fitness">
          <img className="blog__img1"></img>
          <p className="blog__subheading">Fitness Hacks For Life</p>
          <p className="blog__para">
            At Fitness Hacks, We Set In Motion The Healing Path By Providing
            Inspiring Content Highlighting Mental And Physical Fitness Hacks For
            Holistic Health.We Bring In Guest Experts, Including Psychologists
            And Other Mental Health Professionals, To Share Their Best
            Professional Advice As We Guide Our Readers To Recovery.
          </p>
          <Link to={"https://fitnesshacksforlife.org/"} className="blog__btn">
            Learn More <FaChevronRight className="blog__arrow" />
          </Link>

          <p></p>
        </div>
        <div className="blog__personal">
          <img className="blog__img2"></img>
          <p className="blog__subheading">
            How To Carve A Pathway For Personal Growth
          </p>
          <p className="blog__para">
            Growing As An Individual Starts With Nurturing Your Soul. Figure Out
            What Makes You Feel Centered. The Answer Could Be As Simple As
            Reading Or Enjoying Nature.
          </p>
          <Link
            to={
              "https://www.agegracefullyamerica.com/how-to-carve-a-pathway-for-personal-growth/"
            }
            className="blog__btn"
          >
            Learn More <FaChevronRight className="blog__arrow" />
          </Link>
        </div>
        <div className="blog__care">
          <img className="blog__img3"></img>
          <p className="blog__subheading">What It Takes To Care For You</p>
          <p className="blog__para">
            Think About It. Of All The People Who Come In And Out Of Your Life,
            You Are The Constant. You Are The Only Person With Yourself 100% Of
            The Time. Therefore, It Stands To Reason That Taking Care Of Your
            Mind, Body, And Spirit Ought To Be At The Top Of Your Priority List.
          </p>
          <Link
            to={
              "https://www.agegracefullyamerica.com/what-it-takes-to-care-for-you/"
            }
            className="blog__btn"
          >
            Learn More <FaChevronRight className="blog__arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Blogs;
