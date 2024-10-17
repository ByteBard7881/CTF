import "./Reverse.css";
import binaryVideo from "../assets/binary.mp4";
import { PiDetectiveFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import picture from "../assets/mirror.jpg";

function Reverse() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token1 =
      "What is the method used to prevent Cross-Site Request Forgery (CSRF) attacks in web applications?";

    if (inputValue.trim() === token1.trim()) {
      navigate("/reverse/verify");
    } else {
      alert("Wrong Key 💀😂");
    }
    setInputValue("");
  };

  return (
    <div className="video">
      <video autoPlay muted loop id="background-video">
        <source src={binaryVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <div className="box">
          <div>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="💀💀 what are you doing here 💀💀">
              <span></span>
              <span></span>
              <span>
                <span></span>
                <span></span>
                <span>
                  <a
                    href={picture}
                    className="🔑🔑 Want the key 🔑🔑"
                    style={{
                      visibility: "hidden",
                      position: "absolute",
                      top: "-9999px",
                    }}
                  />
                </span>
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="box-1">
            <h1>Find the EXE DAMMIT</h1>
          </div>
          <div className="box-2">
            <form className="reverse-form" onSubmit={handleSubmit}>
              <div style={{ visibility: "hidden", position: "absolute" }}>
                T2ggd293LCB5b3UgY291bGRu4oCZdCBmaW5kIHRoZSBrZXk/IEl04oCZcyBhbG1vc3QgbGlrZSBpdCB3YXMgaGlkaW5nIGZyb20geW91ciBza2lsbHMgb24gcHVycG9zZT8gR29ubmEgQ1JZIDop
              </div>
              <div className="icon">
                <PiDetectiveFill />
              </div>
              <input
                className="reverse-form-input"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter the key"
              />
              <button type="submit" style={{ display: "none" }}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="https://github.com/ByteBard7881/EXE"></div>
    </div>
  );
}

export default Reverse;
