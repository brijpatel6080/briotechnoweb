import React, { useState, useEffect } from "react";
import axios from "axios";


import './style.css'

import Banner from '../../componets/banner/Banner'
import ServiceFirstChild from '../../componets/singleService/ServiceFirstChild'
import bg from '../../assets/images/banners/mobileApp.png'
import client1 from '../../assets/images/brand/mitech-client-logo-01.png'
import client1h from '../../assets/images/brand/mitech-client-logo-01-hover.png'

import appStore from '../../assets/images/appStore.png'
import playStore from '../../assets/images/playStore.png'
import Development from '../../assets/images/services/mobile_app/Development.png'
import MobileAppStrategy from '../../assets/images/services/mobile_app/MobileAppStrategy.png'
import UserExperienceDesign from '../../assets/images/services/mobile_app/UserExperienceDesign.png'
import testing from '../../assets/images/services/mobile_app/testing.png'
// Clients
import BeautySalonLogo from '../../assets/images/clients/mobile/BeautySalonLogo.png'
import ImproveFitnessLogo from '../../assets/images/clients/mobile/ImproveFitnessLogo.png'
import Instacoup from '../../assets/images/clients/mobile/Instacoup.png'
import Katavahi from '../../assets/images/clients/mobile/Katavahi.png'
import ecafe360Logo from '../../assets/images/clients/mobile/ecafe360Logo.png'
import family40 from '../../assets/images/clients/mobile/family40.png'

// import Development from '../../assets/images/index'
import { TriangleBottom, TriangleTop } from '../../componets/Triangle'
import { Link } from 'react-router-dom'
import { MobileClients } from "../../componets/clients/OurClients";



const MobileAppDevelopment = () => {

    return (
        <>
            <Banner
                title='Mobile App Development'
                // detail='Briotechno  '
                image={bg}
            />


            <MobileClients />

            <div className="row-separators-wrap triangle-top  big-triangle-style row-separators-bg separators-space" style={{ paddingTop: 90, paddingBottom: 70 }}>
                <TriangleTop />


                <ServiceFirstChild
                    // Page titlte 
                    titleBlack="" titleWhite="Mobile App Development"

                    // About First Paragraph 
                    aboutDetail='The smartphone Apps have changed the definition of every day activity in human life. It has been an essential part of our lives and why not? We do almost everything with the help an app. The world is connected with mobile apps. In this really techie era, Briotechno can help you to craft some excellent mobile application for your business & start-ups. We are the leading tailor made mobile app development company, serving finest apps across the globe. We have top mobile app developers who are highly skilled and updated with the latest technology trend. Our team works with the global firms to transform recognized ideas into stunning & inventive mobile Apps. We have rich experience and creativity in producing stunning mobile apps for different clients over the world.'

                    ItemTitle1='Mobile App Strategy'
                    ItemImage1={MobileAppStrategy}
                    ItemeDetail1='We at Briotechno not only possess the ability to develop mobile apps, but also have knowledge and expertise to convert your business vision into reality. We have worked with a large number of projects and well aware that each mobile app project is a unique one requiring special attention. Hence, our app developers dedicate a huge amount of time to formulate a sound mobile app strategy, undergo detailed research work and make effective plans for our clients’ success.'

                    ItemTitle2='User Experience Design'
                    ItemImage2={UserExperienceDesign}
                    ItemeDetail2='We have experts associated with providing User Experience Design solutions, who always put efforts to boost the interaction of clients with their prospects/customers via digital presence, such as mobile applications, websites, social media and others. The main objective of our UX design experts at Briotechno is to provide you with compelling designs, so that your customers consistently approach you and thereby, assure of your brand loyalty.'

                    ItemTitle3='Development'
                    ItemImage3={Development}
                    ItemeDetail3='Our team at Briotechno incorporates extensive experience to create digitally transformative, high performing and feature-rich yet native mobile apps for different platforms, named Android, Windows, BlackBerry and iOS. Moreover, we have professionals with vast knowledge of HTML5 development, with the help of which we create cross-platform mobile apps to work on almost every platform or device. Ability to deliver highly scalable, secure and sustainable mobile app solutions have made our app developers toronto to stand out from our competitors.'

                    ItemTitle4='Testing'
                    ItemImage4={testing}
                    ItemeDetail4='Our Briotechno experts know very well that today most of the companies release their apps in different devices and platforms, such as android, iOS, Mac, open source and many more. Hence, our experienced app testers perform almost every type of web, native and hybrid web application testing, along with the approach to fully optimized mobile test automation to accommodate a common test suite both on non-mobile and mobile versions of a particular application.'


                />

                <TriangleBottom />
            </div>




            {/* How we works  */}

            <div className="gradation-process-area pb-40 pb-xs-0">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="gradation-title-wrapper mb-30">
                                <div className="gradation-title-wrap ">
                                    <h6 className="section-sub-title text-black mb-20">Process We Follow</h6>
                                    <h4 className="heading">How it helps <span className="text-color-primary">your <br /> business succeed</span></h4>
                                </div>


                                <div className="gradation-sub-heading">
                                    <h3 className="heading"><mark>07</mark> Steps</h3>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ht-gradation style-01">

                                <HowWework
                                    number='1'
                                    title='Requirement Gathering'
                                    detail='Requirement Gathering is the first and very important part of our mobile app development process.'
                                />
                                <HowWework
                                    number='2'
                                    title='UI/UX Design'
                                    detail='We create eye catchy design with the help of latest tools of designing'
                                />
                                <HowWework
                                    number='3'
                                    title='Prototype'
                                    detail='After designing, the prototype of your app gets ready which is sent for development then.'
                                />
                                <HowWework
                                    number='4'
                                    title='App Development'
                                    detail='The Development gets started on the preferable platforms with complete transparency.'
                                />
                                <HowWework
                                    number='5'
                                    title='Testing &amp; Trying'
                                    detail='We do not compromise in quality so we make sure you get 100% bug free app.'
                                />
                                <HowWework
                                    number='6'
                                    title='Execute &amp; install'
                                    detail='Your app is ready to appear on the App store or Play store on this stage of Development.'
                                />
                                <HowWework
                                    number='7'
                                    title='Support & Maintenance'
                                    detail='We give support & answer every query after deployment.'
                                />


                            </div>
                        </div>
                    </div>
                </div>
            </div>





            {/* Developed App  */}

            <div className="row-separators-wrap triangle-top  big-triangle-style row-separators-bg separators-space" style={{ paddingTop: 100, paddingBottom: 60 }}>
                <TriangleTop />

                <div className="feature-images-wrapper">
                    <div className="container-fluid pl-0 pr-0">

                        <div className="row no-gutters">
                            <div className="col-12">
                                <div className="feature-images__three modern-grid-image-4 row no-gutters">

                                    {/* 
                                    <DevelopedApp
                                        appName='Dr. Aida'
                                        image={mobile}
                                        path='/'
                                        appDetail='Text will come here .... Text will come here .... Text will come here '
                                    /> */}

                                    <DevelopedApp />

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* <TriangleBottom /> */}
            </div>





        </>
    )
}


const DevelopedApp = (props) => {

    const [mobileApps, setmobileApps] = useState([]);
    const [appImage, setappImage] = useState(null)

    const handleChange = (event) => {
        setappImage(
            URL.createObjectURL(event.target.files[0])
        )
    }

    useEffect(() => {
        console.log("Hello React");
        loadMobileApp()
    }, [])

    const loadMobileApp = async () => {
        const result = await axios.get("http://localhost:3001/mobileApps");
        setmobileApps(result.data.reverse()); // latest data first show
        // console.log(result);
    };

    const { path, appName, appDetail } = props

    // const basePath = "/img/services/mobile_app/iImproveFitness/";
    // const loc = require(basePath + mobileApp.appImage);

    return (
        <>
            {mobileApps.map((mobileApp, index) => (

                <div className="col-lg-3  col-md-4 col-sm-6 mt-10">
                    <div className="ht-box-images style-03 p-30 pb-15 wow move-up ">
                        <div className="image-box-wrap">
                            <div className="storeImg">
                                <a href={`${mobileApp.appPlayStore}`} target='_blank' className={mobileApp.appPlayStore != '' ? 'block' : 'none'}>
                                    <img className="img-fulid1" src={playStore} alt="" height='50' />
                                </a>
                                <a href={`${mobileApp.appAppStore}`} target='_blank' className={mobileApp.appAppStore != '' ? 'block' : 'none'}>
                                    <img className="img-fulid1" src={appStore} alt="" height='50' />
                                </a>
                            </div>
                            <div className="box-image mb-20">
                                <Link to={`/ViewDevelopedMobileApp/${mobileApp.id}`} >
                                    <img className="img-fulid mobileThumb" src={mobileApp.appImage} alt="" />
                                    {/* <img className="img-fulid" src={mobile} alt="" /> */}
                                </Link>
                            </div>
                            <div className="content text-center">
                                <Link to={`/ViewDevelopedMobileApp/${mobileApp.id}`} >
                                    <h5 className="heading text-center">{mobileApp.appName}</h5>
                                </Link>
                                {/* <div className="text">{mobileApp.appDetail}</div> */}
                            </div>
                        </div>
                    </div>
                </div>

            ))}


        </>
    )
}


// Other Component
// ======================================


const HowWework = (props) => {

    const { number, title, detail } = props
    return (
        <div className="item item-1 animate wow fadeInRight" data-wow-delay="0.25s">
            <div className="line"></div>
            <div className="circle-wrap">
                <div className="mask">
                    <div className="wave-pulse wave-pulse-1"></div>
                    <div className="wave-pulse wave-pulse-2"></div>
                    <div className="wave-pulse wave-pulse-3"></div>
                </div>

                <h6 className="circle">{number}</h6>
            </div>

            <div className="content-wrap">

                <h6 className="heading">{title}</h6>

                <div className="text">{detail}</div>

            </div>
        </div>
    )
}


const Client = (props) => {
    const { image, imageH } = props
    return (
        <>
            <div className="col-md-2 swiper-slide brand-logo brand-logo--slider client">
                <a href="#">
                    <div className="brand-logo__image">
                        <img src={image} className="img-fluid" alt="" />
                    </div>
                    {/* <div className="brand-logo__image-hover">
                        <img src={imageH} className="img-fluid" alt="" />
                    </div> */}
                </a>
            </div>
        </>
    )
}
export default MobileAppDevelopment
