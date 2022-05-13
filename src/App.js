import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home/Home";
import Header from "./components/shared/Header";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Appointment from "./components/pages/Appointment/Appointment";
import Reviews from "./components/pages/Reviews/Reviews";
import Login from "./components/pages/Login/Login";
import Reset from "./components/pages/Login/Reset";
import Signup from "./components/pages/Login/Signup";
import NotFound from "./components/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<Reset />} />
        {/* not found route  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
