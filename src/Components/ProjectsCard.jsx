import '../CSS/projects.css'

const ProjectsCard = ({title, description, picture, linkto}) => {
  return (
    <div className="card" style={{ width: "500px" }}>
      <h3>{title}</h3>
      <p style={{ textAlign: "center", marginBottom: "20px" }}>
        {description}
      </p>
      <img src={picture} alt="#" />
      <a
        href={linkto}
        target="_blank"
        className="open-btn"
      >
        Open
      </a>
    </div>
  );
};

export default ProjectsCard;
