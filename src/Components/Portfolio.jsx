import { GrLanguage } from "react-icons/gr";
import "./CSS/portfolio.css";
import { GiTicTacToe } from "react-icons/gi";
import { SlCalculator } from "react-icons/sl";
import { MdModeOfTravel } from "react-icons/md";
import { LuEarth } from "react-icons/lu";
import { CiShop } from "react-icons/ci";
import logo from "../assets/logo.png";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-container">
      <h1 data-aos="fade-up">Portfolio</h1>

      <p
        data-aos="fade-up"
        data-aos-delay="150"
        style={{ color: "#959595", textAlign: "center", marginBlock: "20px" }}
      >
        Here you will see my big projects or projects with different logics
        <br />
        others you can see on my GitHub Profile
      </p>

      <div className="portfolio-list">
        <div data-aos="fade-right" className="portfolio-card">
          <img style={{ width: "70px" }} src={logo} alt="logo" />
          <h3>Web Canvas</h3>

          <p>In Progress</p>

          <p>
            My Own Company Web Canvas is an emerging startup offering a unique online platform,
            offering fully ready made websites.
          </p>

          <a target="_blank" href="https://webcanvasgeo.netlify.app/">
            Open
          </a>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="portfolio-card"
        >
          <CiShop size={50} color="white" />

          <h3>MelinaMShop</h3>

          <p>
            A website for selling restaurant products and more, made on MERN
            Stack <br />
            Launched in 01.05.2024
          </p>

          <a target="_blank" href="https://melinamshop.netlify.app/">
            Open
          </a>
        </div>

        <div data-aos-delay="300" data-aos="fade-left" className="portfolio-card">
          <MdModeOfTravel size={50} color="white" />

          <h3>TravelPulse</h3>

          <p>Paused</p>

          <p>
            Here you can share and view a stories about travel beautiful places
            and alot more, made on MERN Stack
          </p>

          <a target="_blank" href="https://travelpulse.netlify.app/">
            Open
          </a>
        </div>

        <div data-aos="fade-right" className="portfolio-card">
        <LuEarth size={50} color="white"  />

          <h3>Planets Fact Site</h3>

          <p>
            Here You will see a facts about planets designed with comfortable
            UI/UX
          </p>

          <a target="_blank" href="https://planetsfactfromgio.netlify.app/">
            Open
          </a>
        </div>

        <div
          data-aos="fade-up"
          className="portfolio-card"
        >
          <GrLanguage size={50} color="white" />

          <h3>GeorgiaProCode</h3>

          <p>
            A Website with free programming courses for childrens from 10 years
            and other ages at georgian
          </p>

          <a target="_blank" href="https://georgianprocode.netlify.app/">
            Open
          </a>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="portfolio-card"
        >
          <GiTicTacToe size={50} color="white" />

          <h3>Tic Tac Toe</h3>

          <p>Tic Tac Toe Game, you can play it with your friends, enjoy the game.</p>

          <a target="_blank" href="https://tictactoefromgio.netlify.app/">
            Open
          </a>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="portfolio-card"
        >
          <SlCalculator size={50} color="white" />

          <h3>Calculator</h3>

          <p>A mini version of calculator</p>

          <a target="_blank" href="https://calculatorfromgio.netlify.app/">
            Open
          </a>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
