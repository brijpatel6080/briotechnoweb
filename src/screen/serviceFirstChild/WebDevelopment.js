import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import Banner from '../../componets/banner/Banner'
import ServiceFirstChild from '../../componets/singleService/ServiceFirstChild'
import bg from '../../assets/images/banners/webDevelopment.png'
import web from '../../assets/images/services/web.png'
import responsive from '../../assets/images/services/responsive.png'
import swd from '../../assets/images/services/Secure-web-development.png'
import MAINTENANCE from '../../assets/images/services/MAINTENANCE.png'
import SEO from '../../assets/images/services/SEO-Friendly.png'
import weblink from '../../assets/images/weblink.png'
// Clients
import Zeltron from '../../assets/images/clients/web/Zeltron_Png.png'
import avaniFood from '../../assets/images/clients/web/avaniFood.png'
import patidarDistri from '../../assets/images/clients/web/patidarDistri.png'

import client1 from '../../assets/images/brand/mitech-client-logo-01.png'
import client1h from '../../assets/images/brand/mitech-client-logo-01-hover.png'

import { TriangleBottom, TriangleTop } from '../../componets/Triangle'
import { WebClients } from "../../componets/clients/OurClients";

const WebDevelopment = () => {
    return (
        <>
            <Banner
                title='Web Development'
                // detail='Briotechno  '
                image={bg}
            />



            {/* Clients  */}

           <WebClients />


            <div class="row-separators-wrap triangle-top  big-triangle-style row-separators-bg separators-space" style={{ paddingTop: 90, paddingBottom: 100 }}>


                <TriangleTop />


                <ServiceFirstChild
                    // Page titlte 
                    titleBlack="" titleWhite="Web Development Company"

                    // About First Paragraph 
                    aboutDetail='You know that you found your dream when you have a desire to achieve a goal, have the gut to pursue it, have the courage to overcome any obstacles on your path and feel blessed when finally realizing it. Dream on, keep up and make it pay off.'

                    ItemTitle1='Responsive Web Design'
                    ItemImage1={responsive}
                    ItemeDetail1='An approach which suggests that the design of the website should interact with  the user’s environment is called Responsive Web design. The user’s environment may include screen size, orientation and platform. A  website which is designed with Responsive Web Design feature should adjust the layout using fluid, flexible images, proportional grids and CSS3 media queries.'

                    ItemTitle2='Secure Web Development'
                    ItemImage2={swd}
                    ItemeDetail2='Many sites are cleaned on a daily basis and the problems are more or less the same: outdated software, or weak passwords or so on. Both the problems as well as solutions cannot be limited to any one of the programming languages. Though it is possible that the functions or methods carry different names, the basic principle is the same that is to prevent SQL Injection attacks.'

                    ItemTitle3='Website Maintenance'
                    ItemImage3={MAINTENANCE}
                    ItemeDetail3='The programs under Website maintenance ensure that the site is updated which makes the project within the budget. These programs include images updates, content updates, telephonic support. It includes editing, revising, editing, or changing the existing web pages which make the website updated. The value each website carries comes from its ability to maintain the existing information online and that too at a reasonable price.'

                    ItemTitle4='SEO Friendly'
                    ItemImage4={SEO}
                    ItemeDetail4='Use responsive design to connect with mobile users. Create website content to target valuable keywords. Optimize header tags to help search engines better understand your pages. Use internal linking to help search engines crawl and index your pages. Optimize meta descriptions to boost site clicks in search results.'


                />

                <TriangleBottom />
            </div>


            {/* How we works  */}




            <div class="gradation-process-area pb-40 pb-xs-0">
                <div class="container">

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="gradation-title-wrapper mb-30">
                                <div class="gradation-title-wrap ">
                                    <h6 class="section-sub-title text-black mb-20">Process We Follow</h6>
                                    <h4 class="heading">How it helps <span class="text-color-primary">your <br /> business succeed</span></h4>
                                </div>


                                <div class="gradation-sub-heading">
                                    <h3 class="heading"><mark>04</mark> Steps</h3>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="ht-gradation style-01">

                                <HowWework
                                    number='1'
                                    title='Requirement Gathering'
                                    detail='Requirement analysis is the foundation of every web development team and our team is an expert in gathering accurate and quality information in depth.'
                                />
                                <HowWework
                                    number='2'
                                    title='UI/UX Design'
                                    detail='We create eye catchy design, Designer Phase deals with the team of creative designers trying to give a structure to your ideas in virtual reality as per your requirement.'
                                />
                                <HowWework
                                    number='3'
                                    title='Development'
                                    detail='In the coding Phase, our development team applies various functionalities to run your bunch of ideas into a real fully equipped Android app.'
                                />


                                <HowWework
                                    number='4'
                                    title='Testing'
                                    detail='In the testing phase, the QA team tests the application, approves it and deploys it to the client site.'
                                />


                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* Developed App  */}

            <div class="row-separators-wrap triangle-top  big-triangle-style row-separators-bg separators-space" style={{ paddingTop: 100, paddingBottom: 60 }}>
                <TriangleTop />

                <div class="feature-images-wrapper">
                    <div class="container-fluid pl-0 pr-0">

                        <div class="row no-gutters">
                            <div class="col-12">
                                <div class="feature-images__three modern-grid-image-4 row no-gutters">

                                    <DevelopedWebApp />

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




const DevelopedWebApp = (props) => {

    const [webApps, setwebApps] = useState([]);
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
        const result = await axios.get("http://localhost:3001/WebApps");
        setwebApps(result.data.reverse()); // latest data first show
        // console.log(result);
    };

    const { path, appName, appDetail } = props

    // const basePath = "/img/services/mobile_app/iImproveFitness/";
    // const loc = require(basePath + mobileApp.appImage);

    return (
        <>

            { webApps.map((webApp, index) => (

                <div className="col-lg-4  col-md-6 mt-10">
                    <div className="ht-box-images style-03 p-30 pb-15 wow move-up ">
                        <div className="image-box-wrap">
                            <div className="storeImg web">
                                <a href={`${webApp.appLink}`} target='_blank' title="Goto Live " >
                                    <img className="img-fulid" src={weblink} alt="Live Site" height='50' />
                                </a>
                            </div>
                            <div className="box-image mb-20">
                                <Link to={`/ViewDevelopedWeb/${webApp.id}`} >
                                    <img className="img-fulid" src={webApp.appImage} alt="View More" height='300' />
                                    {/* <img className="img-fulid" src={mobile} alt="" /> */}
                                </Link>
                            </div>
                            <div className="content text-center">
                                <Link to={`/ViewDevelopedWeb/${webApp.id}`} title="View More" className="text-center">
                                    <h5 className="heading text-center">{webApp.appName}</h5>
                                </Link>
                                {/* <div className="text">{webApp.appDetail}</div> */}
                            </div>
                        </div>
                    </div>
                </div>

            ))}


        </>
    )
}


const HowWework = (props) => {

    const { number, title, detail } = props
    return (
        <div class="item item-1 animate wow fadeInRight" data-wow-delay="0.25s">
            <div class="line"></div>
            <div class="circle-wrap">
                <div class="mask">
                    <div class="wave-pulse wave-pulse-1"></div>
                    <div class="wave-pulse wave-pulse-2"></div>
                    <div class="wave-pulse wave-pulse-3"></div>
                </div>

                <h6 class="circle">{number}</h6>
            </div>

            <div class="content-wrap">

                <h6 class="heading">{title}</h6>

                <div class="text">{detail}</div>
                {/* 
                <a class="gradation-btn" href="#">
                    <span class="button-text" data-text="Look more">
                        Look more </span>
                    <span class="button-icon far fa-long-arrow-right"></span>
                </a> */}
            </div>
        </div>
    )
}


const Client = (props) => {
    const { image, imageH, col } = props
    return (
        <>
            <div class={` swiper-slide brand-logo brand-logo--slider ${col} `}>
                <a href="#">
                    <div class="brand-logo__image">
                        <img src={image} class="img-fluid" alt="" />
                    </div>
                    {/* <div class="brand-logo__image-hover">
                        <img src={imageH} class="img-fluid" alt="" />
                    </div> */}
                </a>
            </div>
        </>
    )
}


export default WebDevelopment
