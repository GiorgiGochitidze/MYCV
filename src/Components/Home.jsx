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
import { motion } from "framer-motion";

const Home = () => {
  const [cvDownload, setCvDownload] = useState(false);

  useEffect(() => {
    AOS.init({ once: false, offset: 100 });
    window.scrollTo(0, 0);
  });

  return (
    <main id="home">
      {cvDownload && (
        <div
          onClick={() =>
            cvDownload ? setCvDownload(false) : setCvDownload(true)
          }
          className="cv-download-container"
        >
          <motion.div
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            className="cv-download-card"
          >
            <a
              href="/My_Resume.pdf"
              download="My_Resume.pdf"
              onClick={() =>
                cvDownload ? setCvDownload(false) : setCvDownload(true)
              }
              className="cv-download-btn"
            >
              Download English Version
            </a>

            <a
              href="/georgianResume.pdf.pdf"
              download="georgianResume.pdf"
              onClick={() =>
                cvDownload ? setCvDownload(false) : setCvDownload(true)
              }
              className="cv-download-btn"
            >
              Download Georgian Version
            </a>
          </motion.div>
        </div>
      )}
      <ShortInfo cvDownload={cvDownload} setCvDownload={setCvDownload} />

      <Services />

      <AboutMe cvDownload={cvDownload} setCvDownload={setCvDownload} />

      <Portfolio />

      <ContactMe />

      <Footer />
    </main>
  );
};

export default Home;
