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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./components/pages/Login/RequireAuth";
import { useEffect, useState } from "react";
import Dashboard from "./components/pages/Appointment/Dashboard/Dashboard";
import MyAppointment from "./components/pages/Appointment/Dashboard/MyAppointment";
import DashboardReviews from "./components/pages/Appointment/Dashboard/DashboardReviews";
import MyHistory from "./components/pages/Appointment/Dashboard/MyHistory";
import Users from "./components/pages/Appointment/Dashboard/Users";

function App() {
  let [online, isOnline] = useState(navigator.onLine);
  const setOnline = () => {
    toast.success("Successfully Connection!");
    isOnline(true);
  };
  const setOffline = () => {
    toast.warn("Your Internet  Connection lost Same issue!");

    isOnline(false);
  };

  // Register the event listeners
  useEffect(() => {
    window.addEventListener("offline", setOffline);
    window.addEventListener("online", setOnline);

    // cleanup if we unmount
    return () => {
      window.removeEventListener("offline", setOffline);
      window.removeEventListener("online", setOnline);
    };
  }, [online]);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />} />
          <Route path="/dashboard/myReviews" element={<DashboardReviews />} />
          <Route path="/dashboard/history" element={<MyHistory />} />
          <Route path="/dashboard/users" element={<Users />} />
        </Route>
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
