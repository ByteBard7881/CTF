import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Reverse from "./reverse/Reverse";
import Encrypt from "./encrypt/Encrypt";
import Verify from "./reverse/Verify";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reverse" element={<Reverse />} />
      <Route path="/reverse/verify" element={<Verify />} />
      <Route path="/encrypt" element={<Encrypt />} />
    </Routes>
  );
}

export default App;
