import React, { useState, useEffect } from "react";
import axios from "axios";


import './style.css'

import Banner from '../../componets/banner/Banner'
import ServiceFirstChild from '../../componets/singleService/ServiceFirstChild'
import bg from '../../assets/images/banners/ManualTesting.png'
import client1 from '../../assets/images/brand/mitech-client-logo-01.png'
import client1h from '../../assets/images/brand/mitech-client-logo-01-hover.png'

import appStore from '../../assets/images/appStore.png'
import playStore from '../../assets/images/playStore.png'
import APItesting from '../../assets/images/services/manualTesting/APItesting.png'
import functionalT from '../../assets/images/services/manualTesting/Functional-Testing.png'
import UItesting from '../../assets/images/services/manualTesting/UItesting.png'
import Pcloudy from '../../assets/images/services/manualTesting/Pcloudy.png'
import CriticalityCreativity from '../../assets/images/services/manualTesting/Criticality-Creativity.png'
import value from '../../assets/images/services/manualTesting/value.png'
import Feedback from '../../assets/images/services/manualTesting/Feedback.png'
import Realtime from '../../assets/images/services/manualTesting/Realtime.png'
import elearning from '../../assets/images/services/manualTesting/elearning.png'
import Publishing from '../../assets/images/services/manualTesting/Publishing.png'
import Retail from '../../assets/images/services/manualTesting/Retail.png'
import Fashion from '../../assets/images/services/manualTesting/Fashion.png'
import Cunstruction from '../../assets/images/services/manualTesting/Cunstruction.png'
import Gaming from '../../assets/images/services/manualTesting/Gaming.png'

// import Development from '../../assets/images/index'
import { TriangleBottom, TriangleTop } from '../../componets/Triangle'
import { Link } from 'react-router-dom'
import Heading from "../../componets/Heading";
import { ManualTestingClients } from "../../componets/clients/OurClients";




const ManualTesting = () => {



    return (
        <>
            <Banner
                title='Manual Testing'
                // detail='Briotechno  '
                image={bg}
            />



            {/* Clients  */}

            <ManualTestingClients />




            <div className="row-separators-wrap triangle-top  big-triangle-style row-separators-bg separators-space" style={{ paddingTop: 90, paddingBottom: 70 }}>
                <TriangleTop />


                <ServiceFirstChild
                    // Page titlte 
                    titleBlack="" titleWhite="Manual Testing"

                    // About First Paragraph 
                    aboutDetail='Rapid delivery and frequent releases characterize today’s development environment. While Automation adds value with precision, repeatability, reusability and time saving, Manual Testing is still the inevitable aspect of any functional testing process. Manual Testing and Exploratory testing, test applications and find some of the most critical defects with instincts, logical reasoning, inferences, and fine nuances that only humans possess. Testing applications with end-users’ perspective significantly improves a products’ user experience, usability, and cost-efficiency.'

                    ItemTitle1='UI Testing -screen verify -multiple device (Pcloudy tools and real device)'
                    ItemImage1={UItesting}
                    ItemeDetail1='Mobile Responsive Test across range of Mobile Devices and platforms is extremely important for superior User Experience. However, Mobile Responsive Test and debugging can get knotty, especially when there are issues like obfuscated HTML/CSS/javascript code, improperly implemented HTTPS, browser inconsistencies, page load performance and so on. So how do you overcome these issues? Using a Web Developer Tools or debugging extensions make debugging your web application easier. Here we’ll talk about the most popular one — Google Chrome Developer Tools.'

                    ItemTitle2='Functional Testing'
                    ItemImage2={functionalT}
                    ItemeDetail2='Functional Testing is a type of black box testing whereby each part of the system is tested against functional specification/requirements. For instance, seek answers to the following questions, 1. Are you able to login to a system after entering correct credentials? 2. Does your payment gateway prompt an error message when you enter incorrect card number? 3. Does your “add a customer” screen adds a customer to your records successfully? Well, the above questions are mere samples to perform full-fledged functional testing of a system.'

                    ItemTitle3='API testing - Manual + Performance - Jmeter tools.'
                    ItemImage3={APItesting}
                    ItemeDetail3='Application Programming Interface provides access to the application without users actually having to interact with a potentially disparate system. This JMeter API Testing article will check if the API meets the expectations for functionality, reliability, performance, and security in the following sequence: Introduction to API,
                    Real World Example of API, JMeter API Testing: Demo'

                    ItemTitle4='Mobile App performance in Device - Pcloudy , Real device log check'
                    ItemImage4={Pcloudy}
                    ItemeDetail4='pCloudy is a continuous testing platform powered by technologies like Artificial Intelligence and Predictive Analytics. Users can perform manual as well as automation testing from anywhere, anytime on more than 5000 device-browser combinations. It provides hosts of other services like an autonomous testing bot and in-field user experience testing. Watch this demo video to get a brief overview of running tests on pCloudy., pCloudy provides On Premise, Private and Public device cloud solutions which enterprises can choose from based on their needs. With rising digital spectrum, it now offers a complete digital assurance platform where testing apps on all digital channels like mobile, mobile web and IOT is possible. It has also been recognized by top industry analysts including Gartner and Forrester that included the products in latest report on mobile testing tool landscape.'


                />

                <TriangleBottom />
            </div>




            {/* Benefits of Manual Testing  */}

            <div className="feature-icon-wrapper pt-0 pb-40">
                <div className="container">

                    <Heading titleBlack="Benefits of" titleBlue="Manual Testing" />

                    <div className="row">
                        <div className="col-12">
                            <div className="feature-list__two">
                                <div className="row">

                                    <BanifitsMT
                                        title='Criticality & Creativity'
                                        image={CriticalityCreativity}
                                        detail='Detect most critical bugs using manual testing and exploratory testing as automation cannot beat intuition.'
                                        col='col-lg-3'
                                    />
                                    <BanifitsMT
                                        title='Real-time testing'
                                        image={Realtime}
                                        detail='Minor changes can be investigated immediately without writing the code and executing it.'
                                        col='col-lg-3'
                                    />
                                    <BanifitsMT
                                        title='Custom Feedback'
                                        image={Feedback}
                                        detail='The whole software tester report can be seen as feedback from a potential user.'
                                        col='col-lg-3'
                                    />
                                    <BanifitsMT
                                        title='Cheap'
                                        image={value}
                                        detail='Save testing costs up to 70% and test coverage along with automated testing executed in managed services delivery model.'
                                        col='col-lg-3'
                                    />

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>





            {/* Developed App  */}

            <div className="row-separators-wrap triangle-top  big-triangle-style row-separators-bg separators-space" style={{ paddingTop: 100, paddingBottom: 140 }}>
                <TriangleTop />

                <div className="feature-images-wrapper">
                    <div className="container pl-0 pr-0">

                        <Heading titleBlack="" titleWhite="Industry specific Testing Expertise" />

                        <div className="row no-gutters">

                            <BanifitsMT
                                title='ELearning'
                                image={elearning}
                                bg='color-one'
                                col='col-lg-2 shadowA'
                            />
                            <BanifitsMT
                                title='Publishing'
                                image={Publishing}
                                bg='color-two'
                                col='col-lg-2 shadowA'
                            />
                            <BanifitsMT
                                title='Retail'
                                image={Retail}
                                bg='color-three'
                                col='col-lg-2 shadowA'
                            />
                            <BanifitsMT
                                title='Fashion'
                                image={Fashion}
                                bg='color-four'
                                col='col-lg-2 shadowA'
                            />
                            <BanifitsMT
                                title='Cunstruction'
                                image={Cunstruction}
                                bg='color-five'
                                col='col-lg-2 shadowA'
                            />
                            <BanifitsMT
                                title='Gaming'
                                image={Gaming}
                                bg='color-six'
                                col='col-lg-2 shadowA'
                            />


                        </div>
                    </div>
                </div>

                <TriangleBottom />
            </div>


            {/* Advantages of Manual Testing  */}

            <div className="feature-icon-wrapper pt-0 pb-50">
                <div className="container">

                    <Heading titleBlack="Advantages of" titleBlue="Manual Testing" />

                    <div className="row">
                        <div className="col-12">
                            <div className="feature-list__two">
                                <div className="row">

                                   
                                    <div class="col-lg-12 col-md-12 wow move-up ">

                                        <div class="section-title11 section-title11 mt-0 mb-0">
                                           <ul class="infotechno-blog-list mt-0 mb-0 text-justify">
                                                <li><a >Custom Feedback- The whole software tester report can be seen as feedback from a potential user.</a></li>
                                                <li><a >UI Feedback- Nowadays, the user interface plays a huge role, so you can only fully test it manually.</a></li>
                                                <li><a >Real-time testing- Minor changes can be investigated immediately without writing the code and executing it.</a></li>
                                                <li><a >Cheap- In the short term, manual testing is cheaper than automated testing tools.</a></li>
                                                <li><a >The possibility of research testing- Its purpose is to test the various capabilities of the application. It is important that you do not use pre-built test cases, but come up with on-the-fly scenarios.</a></li>
                                                
                                            </ul>

                                        </div>

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


// Other Component
// ======================================



const BanifitsMT = (props) => {
    const { title, detail, image, bg, col } = props
    return (
        <div className={` col-md-6 col-sm-6 col-12 banifite wow move-up ${col} `}>
            <div className="ht-box-images style-10">
                <div className={`image-box-wrap text-center mt-0 ${bg} `}>
                    <div className="box-image mb-20">
                        <img className="img-fulid" src={image} alt="" />
                    </div>
                    <div className="content ">
                        <h5 className="heading">{title}</h5>
                        <div className="box-images-arrow mt-10">
                            <span className="button-text">{detail}</span>
                            {/* <i className="far fa-long-arrow-right"></i> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ManualTesting
