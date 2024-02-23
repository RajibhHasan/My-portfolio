import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/module/footer.jsx"
import Edu from "./components/module/education.jsx"

const App = () => {
    return (
        <>
            <div>
                <BrowserRouter>
   <div className="container-fluid bg-info sticky-top">
<nav className="navbar navbar-expand-sm ">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">
    <img className="img" src="../public/images/Photo_1708409821754.png" style={{width:"30px"}} />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav   p-3 d-flex align-items-center text-dark text-uppercase ft " >
        <li className="nav-item  ">
          <NavLink to="/" className="nav-link  " aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">

                       <NavLink to="/qualifications" className="nav-link">
                      Qualifications
               
                    </NavLink>
          
          
        </li>
        <li className="nav-item">
        
                 <NavLink to="/About" className="nav-link">
                      About
               
                    </NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link ">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>


                    <Routes>
                        <Route  path="/" element={<Home />} />

              <Route  path="/About" element={<About />} />


              <Route  path="/qualifications" element={<Edu />} />
                    </Routes>       
                    
                    
                    
                    <Footer />
                </BrowserRouter>
            </div>
        </>
    );
};

export default App;
