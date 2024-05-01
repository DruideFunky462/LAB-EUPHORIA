import "./App.css";
import Navbar from "./components/Navbar.jsx";
//import Footer from "./components/Footer.jsx";
import Home from "./pages/home.jsx";
import Medailles from "./pages/medailles";
import Legendes from "./pages/legendes";
import FrenchGlory from "./pages/frenchglory";
import Videos from "./pages/videos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
                
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/frenchglory" element={<FrenchGlory />} />
          <Route path="/medailles" element={<Medailles />} />
          <Route path="/legendes" element={<Legendes />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;


// placer         entre  Router et Routes  et     <Footer /> en bas