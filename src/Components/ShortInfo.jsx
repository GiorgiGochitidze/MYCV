import "./CSS/shortinfo.css";
import triangle from "../assets/image.png";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";

const ShortInfo = () => {
  const [facebookColor, setFacebookColor] = useState("gray");
  const [githubColor, setGithubColor] = useState("gray");
  const [gmailColor, setGmailColor] = useState("gray");
  const [gmailState, setGmailState] = useState(false);

  return (
    <div className="shortInfo-container">
      <div className="text-info-container">
        <motion.p
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Hi I am
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Giorgi Gochitidze
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          Junior React Developer
        </motion.h1>

        <div className="socialLinks-container">
          <motion.a
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            href="https://www.facebook.com/giorgi.gochitidze.39/"
            target="_blank"
          >
            <FaFacebook
              size={30}
              color={facebookColor}
              onMouseEnter={() => setFacebookColor("white")}
              onMouseLeave={() => setFacebookColor("gray")}
            />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            href="https://github.com/GiorgiGochitidze"
            target="_blank"
          >
            <BsGithub
              size={30}
              color={githubColor}
              onMouseEnter={() => setGithubColor("white")}
              onMouseLeave={() => setGithubColor("gray")}
            />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            href="#"
          >
            <SiGmail
              size={30}
              color={gmailColor}
              onMouseEnter={() => {
                setGmailColor("white");
                setGmailState(true);
              }}
              onMouseLeave={() => {
                setGmailColor("gray");
                setGmailState(false);
              }}
            />
          </motion.a>

          {gmailState && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              className="gamil-container"
            >
              giorgigochitidze555@gmail.com
            </motion.div>
          )}
        </div>

        <motion.button
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="hires-btn"
        >
          Hire Me
        </motion.button>
        <motion.button
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="cv-btn"
        >
          Download CV
        </motion.button>

        <motion.div
        initial={{opacity: 0, y: 500}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.2, duration: 0.5}}
        className="experience-projects-container">
          <p>
            <span style={{color: '#FD6F00'}}>1+</span> <br /> <br />
            <span style={{color: '#DFDFDF'}}>Experience</span>
          </p>
            <hr />
          <p>
            <span style={{color: '#FD6F00'}}>30+</span> <br /> <br />
            <span style={{color: '#DFDFDF'}}>Projects Done</span>
          </p>
        </motion.div>
      </div>
      <div className="image-container">
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          animate={{ opacity: 1, x: 0 }}
          src={triangle}
          alt="part of skills triangel image"
        />
      </div>
    </div>
  );
};

export default ShortInfo;
