import "./Encrypt.css";
import "./Result.css";
import { useState } from "react";

function Encrypt() {
  const [showDialog, setShowDialog] = useState(false);
  const [encryptedText, setEncryptedText] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showWin, setShowWin] = useState(false);
  const [keyInput, setKeyInput] = useState("");

  const handleClick = () => {
    setShowDialog(!showDialog);
    setIsCorrect(false);
    setEncryptedText("");
    setKeyInput("");
  };

  const handleTextChange = (e) => {
    setEncryptedText(e.target.value);
  };

  const handleAns = (e) => {
    setKeyInput(e.target.value);
  };

  const handleAnsCheck = () => {
    if (keyInput === "Caching") {
      setShowWin(true)
    } else {
      alert("Wrong answer! Try again.");
    }
  };

  const handleCheck = () => {
    const correctEncryptedText =
      "gAAAAABnBr89DkMwsoNIL8D0ftLsBwrp5rSE2CxZB8q5P5WW60o3FREvSfucC9nRbPU7dNgFQmPSPD90diXHRbVapLSdtnV0kEDxWuCQC0yOgLL2_VqHo86AlThW6fgnm740ZcE-l4Pn2z16KJrUNpb5zs6XDnYfkCNi_pUsHJECcL6qRK8zjPMQbmoFyZZ0dbEgnqbUFuxyXuDg-6sTSofVHC8mfasJmA==";

    if (encryptedText === correctEncryptedText) {
      setIsCorrect(true);
      downloadPDF();
    } else {
      alert("🤣🤣 SKILL ISSUE 🤣🤣");
      setShowDialog(false);
    }
  };

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/CODE.pdf";
    link.download = "CODE.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (showWin) {
    return (
      <div className="win-container">
        <div className="win-image">
          <div className="win-dialog">
            <div className="win-dialog-box">
              <div className="win-text">
                <p>Provide the documentation of your CTF competition.</p>
              </div>
            </div>
            <div className="win-dialog-box">
              <div className="qr"></div>
            </div>
          </div>
          <div className="win-dialog">
            <div className="win-dialog-box">
              <div className="momoi"></div>
            </div>
            <div className="win-dialog-box">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="enc-container">
      {showDialog && (
        <div className="enc-dialog">
          <div className="enc-dialog-box">
            {!isCorrect ? (
              <>
                <input
                  placeholder="💀💀 Enter The Encrypted Text 💀💀"
                  value={encryptedText}
                  onChange={handleTextChange}
                />
                <button onClick={handleCheck}>?? You SURE ??</button>
              </>
            ) : (
              <>
                <input
                  placeholder="🔑 Got The Answer Yet 🔑"
                  value={keyInput}
                  onChange={handleAns}
                />
                <button onClick={handleAnsCheck}>Let&apos;s see</button>
              </>
            )}
          </div>
        </div>
      )}
      <div className="enc-row">
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box get-the-key"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
      </div>
      <div className="enc-row">
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box hover"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
      </div>
      <div className="enc-row">
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
      </div>
      <div className="enc-row">
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box hover"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
      </div>
      <div className="enc-row">
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box hover"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
      </div>
      <div className="enc-row">
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
      </div>
      <div className="enc-row">
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box hover" onClick={handleClick}></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
      </div>
      <div className="enc-row">
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
      </div>
      <div className="enc-row">
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box hover"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
      </div>
      <div className="enc-row">
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box"></div>
        <div className="enc-box hover"></div>
      </div>
    </div>
  );
}

export default Encrypt;
