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
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>REACT</li>
                        <ul style={{ listStyleType: 'none', padding: 0 }}></ul>
                        <li>PYTHON</li>
                        <li>GIT</li>
                        <li>GITHUB</li>
                        <li>FRAMER MOTION</li>
                        <li>NETLIFY</li>
                    </ul>
                </div>
            </div>
        </div>
   </footer>
     );
}
 
export default Footer;