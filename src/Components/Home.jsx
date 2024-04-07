import { useEffect } from 'react';
import './CSS/home.css'
import Services from './Services';
import ShortInfo from './ShortInfo';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

    useEffect(() => {
        AOS.init({ once: false, offset: 100});
    });

    return ( 
        <main>
            <ShortInfo />

            <Services />
        </main>
     );
}
 
export default Home;