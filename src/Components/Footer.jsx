import '../CSS/footer.css'

const Footer = () => {
    return ( 
        <footer id='contact' className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>Contact Me</h4>
                    <ul>
                        <li><a href="https://www.facebook.com/giorgi.gochitidze.39/" target='_blank'>Facebook</a></li>
                        <li><a>Gmail: <span style={{textTransform: 'lowercase'}}>giorgigochitidze555@gmail.com</span></a></li>
                        <li><a href="https://github.com/GiorgiGochitidze" target='_blank'>Github</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>SKILLS:</h4>
                    <ul style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <li><a>HTML</a></li>
                        <li><a>CSS</a></li>
                        <li><a>JS</a></li>
                        <li><a>REACT</a></li>
                        <ul style={{ listStyleType: 'none', padding: 0 }}></ul>
                        <li><a>PYTHON</a></li>
                        <li><a>GIT</a></li>
                        <li><a>GITHUB</a></li>
                        <li><a>FRAMER MOTION</a></li>
                        <li><a>NETLIFY</a></li>
                        <li><a>PHOTOSHOP CS6</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>My Resume PDF Format:</h4>
                    <ul style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
                        <li><a href='/My_Resume.pdf' download='My_Resume.pdf'>Resume On English</a></li>
                        <li><a href='/georgianResume.pdf' download='georgianResume.pdf'>Resume On Georgian</a></li>
                    </ul>
                </div>
            </div>
        </div>
   </footer>
     );
}
 
export default Footer;