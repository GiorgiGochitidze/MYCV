import "./CSS/services.css";
import { FaGitAlt, FaReact } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";
import { SiCloudflarepages } from "react-icons/si";
import { RxMagicWand } from "react-icons/rx";
import { CgPerformance } from "react-icons/cg";

const Services = () => {
  return (
    <div className="services-container">
      <h1 data-aos="fade-up">Services</h1>
      <p data-aos="fade-up" data-aos-delay="200">Explore My Offerings</p>

      <div className="services-list">
        <div className="services-cards" data-aos="fade-right">
          <FaReact size={55} color="#FD6F00" />
          <p>Customized React Website Development</p>

          <p>
            Craft visually appealing and interactive user interfaces using
            React.js, a powerful JavaScript library for building user
            interfaces.
          </p>
        </div>
        <div data-aos="fade-down" data-aos-delay="200" className="services-cards">
          <CiMobile1 size={55} color="#FD6F00" />
          <p>Responsive Design for All Devices</p>

          <p>
            Create websites that seamlessly adapt to all devices and screen
            sizes, providing an optimal viewing experience for users on
            desktops, tablets, and smartphones.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-delay="300" className="services-cards">
          <SiCloudflarepages size={55} color="#FD6F00" />
          <p>Dynamic Single Page Applications (SPAs)</p>

          <p>
            Build dynamic and interactive web applications with fast load times
            and smooth navigation, powered by React.js for a seamless user
            experience.
          </p>
        </div>

        <div data-aos="fade-right" data-aos-delay="100" className="services-cards">
          <RxMagicWand size={55} color="#FD6F00" />
          <p>Captivating UI Design</p>

          <p>
            Build dynamic and interactive web applications with fast load times
            and smooth navigation, powered by React.js for a seamless user
            experience.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="services-cards">
          <CgPerformance size={55} color="#FD6F00" />
          <p>Performance Optimization</p>

          <p>
            Enhance website performance and speed through code optimization,
            leveraging React.js features like code splitting and lazy loading
            for improved efficiency.
          </p>
        </div>

        <div data-aos="fade-left" data-aos-delay="300" className="services-cards">
          <FaGitAlt size={55} color="#FD6F00" />
          <p>Version Control and Collaboration</p>

          <p>
            Implement version control using Git and platforms like GitHub to
            manage code repositories and facilitate seamless collaboration with
            team members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
