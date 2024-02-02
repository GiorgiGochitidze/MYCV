import "../CSS/projects.css";
import georgiaprocode1 from "../assets/georgiaprocode1.jpg";
import tictactoe from "../assets/tictactoe.jpg";
import ballchallange from "../assets/ballchallange.jpg";
import regloginform from "../assets/regloginform.jpg";
import randompass from "../assets/randompass.jpg";
import randomnum from "../assets/randomnum.jpg";
import calculator from "../assets/calculator.jpg";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div className="project-cards-container">
      <ProjectsCard
        title={"Georgian Pro Code"}
        description={
          "A Website with free programming courses for childrens from 10 years and other ages in georgian"
        }
        picture={georgiaprocode1}
        linkto={"https://georgianprocode.netlify.app/"}
      />

      <ProjectsCard
        title={"Tic Tac Toe"}
        description={"Tic Tac Toe Game"}
        picture={tictactoe}
        linkto={"https://tictactoefromgio.netlify.app/"}
      />

      <ProjectsCard
        title={"Calculator"}
        description={"A mini version of calculator"}
        picture={calculator}
        linkto={"https://calculatorfromgio.netlify.app/"}
      />

      <ProjectsCard
        title={"Ball Challange"}
        description={`a ball challange where u can undo ${(
          <br />
        )} and redo balls orientated on logic`}
        picture={ballchallange}
        linkto={"https://ballchallangebygio.netlify.app/"}
      />

      <ProjectsCard
        title={"Registration And LogIn Form"}
        description={"registration and log in form orientated on logic"}
        picture={regloginform}
        linkto={"https://regloginfromgio.netlify.app/"}
      />

      <ProjectsCard
        title={"Random Password Generator"}
        description={"Random Passwords"}
        picture={randompass}
        linkto={"https://rndpasswordgenerator.netlify.app/"}
      />

      <ProjectsCard
        title={"Random Number Generator"}
        description={"Random Numbers"}
        picture={randomnum}
        linkto={"https://rndnumbergen.netlify.app/"}
      />
    </div>
  );
};

export default Projects;
