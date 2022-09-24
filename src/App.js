import { useState } from 'react';
import './App.css';
import Body from './component/body/Body';
import Header from './component/header/Header';
import Loader from './component/loader/Loader';
import About from "./component/about/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Works from './component/works/Works';
import Contact from './component/contact/Contact';

function App() {
  const [loading, setLoading] = useState(false);

  window.onload = function () {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <Router>
      {loading ? <Loader /> : (
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<Body />} />
            <Route exact path="/about-me" element={<About />} />
            <Route exact path="/my-work" element={<Works />} />
            <Route exact path="/contact-me" element={<Contact />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
