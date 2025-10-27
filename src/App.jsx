import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Fovorites from "./pages/Fovorites";
import NavBar from "./components/NavBar";
import "./css/App.css";

const App = () => {
  return (
    <>
      <div>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Fovorites />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
