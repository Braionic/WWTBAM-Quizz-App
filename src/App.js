import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../src/Pages/About";
import Contact from "../src/Pages/Contact";
import Home from "./Pages/Home";
import LayOut from "./Pages/LayOut";
function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />} />
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
