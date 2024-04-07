import { useEffect } from 'react';
import './CSS/home.css'
import Services from './Services';
import ShortInfo from './ShortInfo';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';


const Home = () => {

    useEffect(() => {
        AOS.init({ once: false, offset: 100});
        window.scrollTo(0, 0)
    });

    return ( 
        <main>
            <ShortInfo />

            <Services />

            <AboutMe />

            <Portfolio />
        </main>
     );
}
 
export default Home;