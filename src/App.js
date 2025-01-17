import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Courses from "./Pages/Courses/Courses";
import Competitions from "./Pages/Competitions/Competitions";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Enroll from "./Pages/Enroll/Enroll";
import "./App.css"
function App() {
  return (
    <>
    <Router>
    <Navbar />
    <main className="main-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enroll" element={<Enroll />} />
      </Routes>
      </main>
    </Router>
    </>
  );
}

export default App;
