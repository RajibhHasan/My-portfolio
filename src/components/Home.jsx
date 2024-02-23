import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../../public/stylesheet/Home.css";
import Caursel from "../components/module/caursel.jsx";
import Theme from "../components/module/theme.jsx";
import Edu from "../components/module/education.jsx";
import About from "./About.jsx"
import Contact from "./module/Contact.jsx"


const Home = () => {
    return (
        <HelmetProvider>
         <Helmet>
          <meta charSet="utf-8" />
          <title> Home</title>
          <meta name="description" content="Rajib,hasan" />
        </Helmet>
            <div className="container-fluid p-0">
                <Theme />
            </div>
           
            <div className="container-fluid bg-dark text-white pt-2 ">

            <About />

            </div>
            <div className="p-0">
                        <Contact />
            </div>
        </HelmetProvider>
    );
};

export default Home;
