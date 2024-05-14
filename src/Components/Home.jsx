import { useEffect, useState } from "react";
import "./CSS/home.css";
import Services from "./Services";
import ShortInfo from "./ShortInfo";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

const Home = () => {

  useEffect(() => {
    AOS.init({ once: false, offset: 100 });
    window.scrollTo(0, 0);
  });

  return (
    <main id="home">

      <ShortInfo />

      <Services />

      <AboutMe />

      <Portfolio />

      <ContactMe />

      <Footer />
    </main>
  );
};

export default Home;
