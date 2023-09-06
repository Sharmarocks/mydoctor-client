import { useNavigate } from "react-router-dom";
function NotFoundPage() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate("/");
  }

  return (
    <section>
      <div className="not-found">
        <h1> Oops! Can't find the page you are looking for. </h1>
        <button onClick={handleGoBack}> Go Back </button>
      </div>
    </section>
  );
}

export default NotFoundPage;
