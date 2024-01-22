import '../CSS/projects.css'
import georgiaprocode1 from '../assets/georgiaprocode1.jpg'
import tictactoe from '../assets/tictactoe.jpg'
import ballchallange from '../assets/ballchallange.jpg'
import regloginform from '../assets/regloginform.jpg'
import randompass from '../assets/randompass.jpg'
import randomnum from '../assets/randomnum.jpg'

const Projects = () => {
    return ( 
        <div className='project-cards-container'>
            <div className="card" style={{width: '500px'}}>
                <h3>GeorgianProCode</h3>
                <p style={{textAlign: 'center', marginBottom: '20px'}}>A Website with free programming courses for childrens from 10 years and other ages in georgian</p>
                <img src={georgiaprocode1} alt="#" />
                <a href='https://georgianprocode.netlify.app/' target='_blank' className='open-btn'>Open</a>
            </div>

            <div className="card">
                <h3>GeorgianProCode</h3>
                <p style={{textAlign: 'center'}}>Tic Tac Toe Game</p>
                <img style={{width: '300px'}}  target='_blank' src={tictactoe} alt="#" />
                <a className='open-btn' href='https://tictactoefromgio.netlify.app/' target='_blank'>Open</a>
            </div>

            <div className="card">
                <h3>Ball Challange</h3>
                <p style={{textAlign: 'center'}}>a ball challange where u can undo<br /> and redo balls orientated on logic</p>
                <img style={{width: '300px'}}  target='_blank' src={ballchallange} alt="#" />
                <a className='open-btn' href='https://ballchallangebygio.netlify.app/' target='_blank'>Open</a>
            </div>

            <div className="card">
                <h3>Registration And LogIn Form</h3>
                <p style={{textAlign: 'center'}}>registration and log in form orientated on logic</p>
                <img style={{width: '300px'}}  target='_blank' src={regloginform} alt="#" />
                <a className='open-btn' href='https://regloginfromgio.netlify.app/' target='_blank'>Open</a>
            </div>

            <div className="card">
                <h3>Random Password Generator</h3>
                <p style={{textAlign: 'center'}}>Random Passwords</p>
                <img style={{width: '300px'}}  target='_blank' src={randompass} alt="#" />
                <a className='open-btn' href='https://rndpasswordgenerator.netlify.app/' target='_blank'>Open</a>
            </div>

            <div className="card">
                <h3>Random Number Generator</h3>
                <p style={{textAlign: 'center'}}>Random Numbers</p>
                <img style={{width: '300px'}}  target='_blank' src={randomnum} alt="#" />
                <a className='open-btn' href='https://rndnumbergen.netlify.app/' target='_blank'>Open</a>
            </div>
        </div>
     );
}
 
export default Projects;