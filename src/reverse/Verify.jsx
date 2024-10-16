import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Reverse.css";

function Verify() {
  const [inputValue, setInputValue] = useState("");
  const [showRWin, setShowRWin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue === "Token") {
      setShowRWin(true);
    } else {
      navigate("/reverse");
    }
  };

  const handleNextClick = () => {
    navigate("/encrypt");
  };

  if (showRWin) {
    return (
      <div className="answer-container">
        <div className="answer-form">
          <h1>
            Z0FBQUFBQm5Ccjg5RGtNd3NvTklMOEQwZnRMc0J3cnA1clNFMkN4WkI4cTVQNVdXNjBvM0ZSRXZTZnVjQzluUmJQVTdkTmdGUW1QU1BEOTBkaVhIUmJWYXBMU2R0blYwa0VEeFd1Q1FDMHlPZ0xMMl9WcUhvODZBbFRoVzZmZ25tNzQwWmNFLWw0UG4yejE2S0pyVU5wYjV6czZYRG5ZZmtDTmlfcFVzSEpFQ2NMNnFSSzh6alBNUWJtb0Z5WlowZGJFZ25xYlVGdXh5WHVEZy02c1RTb2ZWSEM4bWZhc0ptQT09
          </h1>
          <button onClick={handleNextClick} type="button">
            Next dammit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="answer-container">
      <form onSubmit={handleSubmit} className="answer-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What's the answer???"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Verify;
