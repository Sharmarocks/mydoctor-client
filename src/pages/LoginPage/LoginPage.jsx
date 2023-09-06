import "./LoginPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header/Header";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios
      .get("http://localhost:5050/api/users")
      .then((response) => {
        const userData = response.data;

        // Find the user with the entered username
        const user = userData.find((user) => user.firstname === username);

        if (user && user.password === password) {
          // Redirect to the homepage after successful login
          console.log("Login Sucessful");
          toast("Success");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          console.log("Login failed");
          toast("Login failed");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  return (
    <section className="page6">
      <Header />

      <form onSubmit={handleFormSubmit} className="login">
        <h2 className="login__heading">Login</h2>
        <img className="login__image" />

        <div>
          <label className="login__userlabel">Username:</label>
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login__name"
            required
          />
        </div>
        <div>
          <label className="login__passwordlabel">Password:</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login__password"
            required
          />
        </div>
        <div>
          <button type="submit" className="login__btn">
            Login
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
}
export default LoginPage;
