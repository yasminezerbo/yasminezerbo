import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CV from "./components/CV";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="pt-20 pb-6 h-full">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
