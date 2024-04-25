import "./App.css";
//import Navbar from "./components/Navbar.jsx";
//import Footer from "./components/Footer.jsx";
import Home from "./pages/home";
import Medailles from "./pages/medailles";
import Legendes from "./pages/legendes";
import FrenchGlory from "./pages/frenchglory";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frenchglory" element={<FrenchGlory />} />
          <Route path="/medailles" element={<Medailles />} />
          <Route path="/legendes" element={<Legendes />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;


// placer        <Navbar /> entre  Router et Routes  et     <Footer /> en bas