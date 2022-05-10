import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home/Home";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Appointment from "./components/pages/Appointment/Appointment";
import Reviews from "./components/pages/Reviews/Reviews";
import Login from "./components/pages/Login/Login";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
