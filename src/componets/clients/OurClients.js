import React from 'react'
import { Link } from 'react-router-dom'
import './Clients.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// import OurClientslist from './OurClientslist';
import client1 from '../../assets/images/brand/mitech-client-logo-05.png'
import client1_h from '../../assets/images/brand/mitech-client-logo-05-hover.png'
// Clients
import BeautySalonLogo from '../../assets/images/clients/mobile/BeautySalonLogo.png'
import ImproveFitnessLogo from '../../assets/images/clients/mobile/ImproveFitnessLogo.png'
import Instacoup from '../../assets/images/clients/mobile/Instacoup.png'
import Katavahi from '../../assets/images/clients/mobile/Katavahi.png'
import ecafe360Logo from '../../assets/images/clients/mobile/ecafe360Logo.png'
import family40 from '../../assets/images/clients/mobile/family40.png'
// Clients web
import Zeltron from '../../assets/images/clients/web/Zeltron_Png.png'
import avaniFood from '../../assets/images/clients/web/avaniFood.png'
import patidarDistri from '../../assets/images/clients/web/patidarDistri.png'


import AppTheme from '../../config/Theme';
import './Clients.css'
import Heading from '../Heading';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


const OurClients =(props)=> {
    const { className} = props
    return (
        <>
            <div className={`brand-logo-slider-area pt-40 pb-50 ${className}`}  style={{ background: AppTheme.bgwhite }}>
                <div className="container">

                    <Heading titleBlack="Our" titleBlue="Clients" />


                    <div className="row">
                        <div className="col-lg-12">

                            <div className="brand-logo-slider__container-area">
                                <div className="swiper-container brand-logo-slider__container">
                                    <div className="swiper-wrapper brand-logo-slider__one">


                                        <Carousel
                                            // deviceType={deviceType}
                                            ssr={true}
                                            slidesToSlide={1}
                                            containerClass="carousel-with-custom-dots"
                                            responsive={responsive}
                                            partialVisible={true}
                                            infinite={true}
                                            autoPlay={true}
                                            showDots={false}
                                            removeArrowOnDeviceType={["tablet", "desktop"]}
                                            keyBoardControl={true}
                                            autoPlaySpeed={2000}
                                            transitionDuration={1000}
                                        // centerMode={true}
                                        >


                                            <OurClientslist
                                                path='/'
                                                img={Zeltron}
                                                // imghover={client1_h}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={avaniFood}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={patidarDistri}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={BeautySalonLogo}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={ImproveFitnessLogo}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={Instacoup}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={Katavahi}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={ecafe360Logo}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={family40}
                                            />

                                        </Carousel>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export const MobileClients =(props)=> {
    const { className} = props
    return (
        <>
            <div className={`brand-logo-slider-area pt-0 pb-40 ${className}`}  style={{ background: AppTheme.bgwhite }}>
                <div className="container">

                    {/* <Heading titleBlack="Our" titleBlue="Clients" /> */}


                    <div className="row">
                        <div className="col-lg-12">

                            <div className="brand-logo-slider__container-area">
                                <div className="swiper-container brand-logo-slider__container">
                                    <div className="swiper-wrapper brand-logo-slider__one">


                                        <Carousel
                                            // deviceType={deviceType}
                                            ssr={true}
                                            slidesToSlide={1}
                                            containerClass="carousel-with-custom-dots"
                                            responsive={responsive}
                                            partialVisible={true}
                                            infinite={true}
                                            autoPlay={true}
                                            showDots={false}
                                            removeArrowOnDeviceType={["tablet", "desktop"]}
                                            keyBoardControl={true}
                                            autoPlaySpeed={2000}
                                            transitionDuration={1000}
                                        // centerMode={true}
                                        >
                                            
                                            <OurClientslist
                                                path='/'
                                                img={BeautySalonLogo}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={ImproveFitnessLogo}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={Instacoup}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={Katavahi}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={ecafe360Logo}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={family40}
                                            />

                                        </Carousel>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const WebClients =(props)=> {
    const { className} = props
    return (
        <>
            <div className={`brand-logo-slider-area pt-0 pb-40 ${className}`}  style={{ background: AppTheme.bgwhite }}>
                <div className="container">

                    {/* <Heading titleBlack="Our" titleBlue="Clients" /> */}


                    <div className="row">
                        <div className="col-lg-12">

                            <div className="brand-logo-slider__container-area">
                                <div className="swiper-container brand-logo-slider__container">
                                    <div className="swiper-wrapper brand-logo-slider__one">


                                        <Carousel
                                            // deviceType={deviceType}
                                            ssr={true}
                                            slidesToSlide={1}
                                            containerClass="carousel-with-custom-dots"
                                            responsive={responsive}
                                            partialVisible={true}
                                            infinite={true}
                                            autoPlay={true}
                                            showDots={false}
                                            removeArrowOnDeviceType={["tablet", "desktop"]}
                                            keyBoardControl={true}
                                            autoPlaySpeed={2000}
                                            transitionDuration={1000}
                                        // centerMode={true}
                                        >


                                            <OurClientslist
                                                path='/'
                                                img={Zeltron}
                                                // imghover={client1_h}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={avaniFood}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={patidarDistri}
                                            />
                                            
                                        </Carousel>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const ManualTestingClients =(props)=> {
    const { className} = props
    return (
        <>
            <div className={`brand-logo-slider-area pt-0 pb-40 ${className}`}  style={{ background: AppTheme.bgwhite }}>
                <div className="container">

                    {/* <Heading titleBlack="Our" titleBlue="Clients" /> */}


                    <div className="row">
                        <div className="col-lg-12">

                            <div className="brand-logo-slider__container-area">
                                <div className="swiper-container brand-logo-slider__container">
                                    <div className="swiper-wrapper brand-logo-slider__one">


                                        <Carousel
                                            // deviceType={deviceType}
                                            ssr={true}
                                            slidesToSlide={1}
                                            containerClass="carousel-with-custom-dots"
                                            responsive={responsive}
                                            partialVisible={true}
                                            infinite={true}
                                            autoPlay={true}
                                            showDots={false}
                                            removeArrowOnDeviceType={["tablet", "desktop"]}
                                            keyBoardControl={true}
                                            autoPlaySpeed={2000}
                                            transitionDuration={1000}
                                        // centerMode={true}
                                        >


                                            <OurClientslist
                                                path='/'
                                                img={Zeltron}
                                                // imghover={client1_h}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={avaniFood}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={patidarDistri}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={BeautySalonLogo}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={ImproveFitnessLogo}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={Instacoup}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={Katavahi}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={ecafe360Logo}
                                            />
                                            <OurClientslist
                                                path='/'
                                                img={family40}
                                            />

                                        </Carousel>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



const OurClientslist =(props)=> {
    return (
        <>
            <div className="swiper-slide brand-logo brand-logo--slider clients" style={{justifyContent: 'center', alignItems: 'center'}}>
                {/* <Link to={props.path}> */}
                    <div className="brand-logo__image" style={{alignSelf: 'center'}}>
                        <img src={props.img} className="img-fluid" alt=""  />
                    </div>
                    {/* <div className="brand-logo__image-hover">
                        <img src={props.imghover} className="img-fluid" alt="" />
                    </div> */}
                {/* </Link> */}
            </div>
        </>
    )
}



export default OurClients
