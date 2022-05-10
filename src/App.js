import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home/Home";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
