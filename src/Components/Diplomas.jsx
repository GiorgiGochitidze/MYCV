import codeit from "../assets/certificate1.png";
import udemy from "../assets/udemy.jpg";
import '../CSS/diplomas.css'

const Diplomas = () => {
    return ( 
        <div className="images-container">
            <img src={codeit} alt="codeit_sertification" />
            <img src={udemy} alt="codeit_sertification" />
        </div>
     );
}
 
export default Diplomas;