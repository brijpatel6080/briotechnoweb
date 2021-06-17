import React, { useEffect } from 'react';
import Banner from '../../componets/banner/Banner'
import '../../App.css'
import bg from '../../assets/images/banners/aboutUs.png'
import Aboutus from '../../componets/Aboutus'
import Feature from './Feature'
import './About.css'
import OurClients from '../../componets/clients/OurClients';


export default function About(props) {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            // behavior: "smooth"
        });
    }, [])
    return (
        <div className="about-page">
            <Banner 
                title='About us'
                // detail='Briotechno specializes in technological and IT-related services such as product engineering, warranty management, building cloud, infrastructure, network, etc. '
                image={bg}
            />
            <Aboutus />

            <Feature />
            
            <OurClients className="pt-0 minus10" />
        </div>
    )
}
