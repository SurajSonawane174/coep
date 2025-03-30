import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Hackathon from "./components/Hackathon";
import Events from "./components/Events";
import NoticeBoard from "./components/Notice";
import FloatingSocialShare from "./components/FloatinnShare";
import "./App.css";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar /> {/* Navigation Bar for navigating between pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/events" element={<Events />} />
        <Route path="/notice" element={<NoticeBoard />} />
      </Routes>
      <FloatingSocialShare /> {/* Keep this outside if it's common for all pages */}
      <Footer />  

    </Router>
  );
}

export default App;
