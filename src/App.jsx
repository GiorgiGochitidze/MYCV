import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Diplomas from "./Components/Diplomas";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Diplomas" element={<Diplomas />} />
      </Routes>
    </Router>
  );
}

export default App;
