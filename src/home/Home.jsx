import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const handleNextClick = () => {
    navigate("/reverse");
  };
  return (
    <div className="home">
      <div className="home-container">
        <form className="home-form">
          <div className="home-form-1">
            <h1>Get Started</h1>
          </div>
          <button
            onClick={handleNextClick}
            type="button"
            className="home-form-button"
          >
            💀 Click BRAT 💀
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
