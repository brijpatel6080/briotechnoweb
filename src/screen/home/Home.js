import React, { useEffect } from 'react';
import OurClients from '../../componets/clients/OurClients';
import Counters from '../../componets/counter/Counters';
import Projects from '../../componets/projects/Projects';
import Services from '../../componets/services_items/Services';
import Testimonials from '../../componets/testimonials/Testimonials';

import Contact from './contact/Contact';
import Slider from './Slider';
import '../../config/Custom.css'
import Aboutus from '../../componets/Aboutus'
import OurWork from '../../componets/ourWork/OurWork';
import AboutCompany from './AboutCompany';


function Home() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            // behavior: "smooth"
        });
    }, [])
    return (
        <>
            <Slider />
            <AboutCompany />
            <Services />
            <Counters />
            {/* <Projects /> */}
            <OurWork />
            {/* <Testimonials /> */}
            <Contact />
            <OurClients />
        </>
    )
}

export default Home
