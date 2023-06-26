
import About from './About';
import './App.css';
import Contact from './Contact';
import Footer_img from './Footer_img';
import Footer_upper from './Footer_upper';
import Home from './Home';
import Navbar from './Navbar';
import Services from './Services';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact />}>
        </Route>
        <Route path="/services" element={<Services />}>
        </Route>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/about" element={<About/>}>
        </Route>
      </Routes>
      <Footer_img />
      {/* <Fix_footer /> */}
    </>
  );
}

export default App;
