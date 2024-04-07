import { GrLanguage } from "react-icons/gr";
import "./CSS/portfolio.css";
import { GiTicTacToe } from "react-icons/gi";
import { SlCalculator } from "react-icons/sl";
import { IoIosFootball } from "react-icons/io";
import { Md123, MdLogin } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import planetsfactsite from '../assets/planetsfactsite.jpg'

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-container">
      <h1 data-aos="fade-up">Portfolio</h1>

      <p data-aos="fade-up" data-aos-delay="150" style={{ color: "#959595", textAlign: "center", marginBlock: "20px" }}>
        Here you will see my big projects or projects with different logics
        <br />
        others you can see on my GitHub Profile
      </p>

      <div className="portfolio-list">
        <div data-aos="fade-right" className="portfolio-card">
          <img style={{width: '100%', marginTop: '-15px'}} src={planetsfactsite} alt="planets fact size img" />

          <h3>Planets Fact Site</h3>

          <p>
            Here You will see a facts about planets designed with comfortable UI/UX
          </p>

          <a target="_blank" href="https://planetsfactfromgio.netlify.app/">
            Open
          </a>
        </div>

        <div data-aos="fade-down" data-aos-delay="100" className="portfolio-card">
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

        <div data-aos="fade-left" data-aos-delay="150" className="portfolio-card">
          <GiTicTacToe size={50} color="white" />

          <h3>Tic Tac Toe</h3>

          <p>Tic Tac Toe Game</p>

          <a target="_blank" href="https://tictactoefromgio.netlify.app/">
            Open
          </a>
        </div>

        <div data-aos="fade-right" data-aos-delay="200" className="portfolio-card">
          <SlCalculator size={50} color="white" />

          <h3>Calculator</h3>

          <p>A mini version of calculator</p>

          <a target="_blank" href="https://calculatorfromgio.netlify.app/">
            Open
          </a>
        </div>

        <div data-aos="fade-in" data-aos-delay="250" className="portfolio-card">
          <IoIosFootball size={50} color="white" />

          <h3>Ball Challange (old)</h3>

          <p>
            A ball challange where u can undo and redo balls orientated on logic
          </p>

          <a target="_blank" href="https://ballchallangebygio.netlify.app/">
            Open
          </a>
        </div>

        <div data-aos="fade-left" data-aos-delay="300" className="portfolio-card">
          <MdLogin size={50} color="white" />

          <h3>Registration And LogIn Form</h3>

          <p>Registration and log in form orientated on logic</p>

          <a target="_blank" href="https://regloginfromgio.netlify.app/">
            Open
          </a>
        </div>

        <div data-aos="fade-right" data-aos-delay="350" className="portfolio-card">
          <TbPasswordUser size={50} color="white" />

          <h3>Random Password Generator</h3>

          <p>Here You Can Generate Random Passwords</p>

          <a target="_blank" href="https://rndpasswordgenerator.netlify.app/">
            Open
          </a>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="portfolio-card">
          <Md123 size={50} color="white" />

          <h3>Random Number Generator</h3>

          <p>Here You Can Generate Random Numbers</p>

          <a target="_blank" href="https://rndnumbergen.netlify.app/">
            Open
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
