import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Terms from "./pages/Terms";

function App() {
  return (
    <>
      <NavBar />

      <main className="flex-shrink-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
