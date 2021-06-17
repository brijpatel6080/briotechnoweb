import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import './OurWorkStyle.css'
import app1 from '../../assets/images/work/mobileApp/app1.jpg';
import web1 from '../../assets/images/work/wepApp/web1.png'
import APItesting from '../../assets/images/services/manualTesting/APItesting.png'
import functionalT from '../../assets/images/services/manualTesting/Functional-Testing.png'
import UItesting from '../../assets/images/services/manualTesting/UItesting.png'
import Pcloudy from '../../assets/images/services/manualTesting/Pcloudy.png'


import Heading from '../Heading'
import { TriangleTop, TriangleBottom } from '../Triangle';


const OurWork = (props) => {

    const [mobileApps, setmobileApps] = useState([]);

    useEffect(() => {
        // console.log("Hello React");
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/mobileApps");
        setmobileApps(result.data.reverse()); // latest data first show
        // console.log(result);
    };



    return (
        <>

            <div class="row-separators-wrap triangle-top  big-triangle-style row-separators-bg separators-space" style={{ paddingBottom: 50 }} >
                <TriangleTop />


                <div class="tabs-wrapper bg-gray11 pt-0 pb-0">
                    <div class="container">

                        <Heading titleGray='discover our company' titleBlack='' titleWhite='Our Portfolio' />

                        <div class="row">
                            <div class="col-lg-12 ht-tab-wrap">
                                <div class="text-center  ">
                                    <ul class="nav justify-content-center ht-tab-menu ht-tab-menu_two" role="tablist">
                                        <li class="tab__item nav-item ">
                                            <a class="nav-link active" id="nav-tab1" data-toggle="tab" href="#tab_list_06" role="tab" aria-selected="true">Mobile App Development</a>
                                        </li>
                                        <li class="tab__item nav-item">
                                            <a class="nav-link" id="nav-tab2" data-toggle="tab" href="#tab_list_07" role="tab" aria-selected="false">Web Development</a>
                                        </li>
                                        <li class="tab__item nav-item">
                                            <a class="nav-link" id="nav-tab3" data-toggle="tab" href="#tab_list_08" role="tab" aria-selected="false">Manual Testing</a>
                                        </li>
                                        {/* <li class="tab__item nav-item">
                                            <a class="nav-link" id="nav-tab3" data-toggle="tab" href="#tab_list_09" role="tab" aria-selected="false">SEO & Digital Marketing </a>
                                        </li> */}

                                    </ul>
                                </div>

                                <div class="tab-content ht-tab__content">


                                    {/* 1 */}
                                    <div class="tab-pane fade show active" id="tab_list_06" role="tabpanel">

                                        <div class="row mb-40">
                                            <MobileItem />
                                        </div>
                                        <div className="row ">
                                            <div class="col-lg-12">
                                                <div class="inner-button-box mt-0 text-center">
                                                    <Link to="/MobileAppDevelopment" class="ht-btn ht-btn-md">View more</Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* 2 */}
                                    <div class="tab-pane fade" id="tab_list_07" role="tabpanel">

                                        <div class="row mb-40">
                                            {/* <WebItem
                                                appName='WebSite'
                                                image={web1}
                                            /> */}

                                            <WebItem />

                                        </div>
                                        <div className="row ">
                                             <div class="col-lg-12">
                                                <div class="inner-button-box mt-0 text-center">
                                                    <Link to="/WebDevelopment" class="ht-btn ht-btn-md">View more</Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* 3 */}
                                    <div class="tab-pane fade" id="tab_list_08" role="tabpanel">
                                        <div class="row mb-40">

                                            <ManualTestItem
                                                title='UI Testing -screen verify -multiple device (Pcloudy tools and real device)'
                                                image={UItesting}
                                            />
                                            <ManualTestItem
                                                title='Functional Testing'
                                                image={functionalT}
                                            />
                                            <ManualTestItem
                                                title='API testing - Manual + Performance - Jmeter tools.'
                                                image={APItesting}
                                            />
                                            <ManualTestItem
                                                title='Mobile App performance in Device - Pcloudy , Real device log check'
                                                image={Pcloudy}
                                            />

                                        </div>
                                        <div className="row ">
                                            <div className='col-lg-12'>
                                                <div class="inner-button-box mt-0 text-center">
                                                    <Link to="/ManualTesting" class="ht-btn ht-btn-md">Read more</Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


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


const ManualTestItem = (props) => {

    const { title, image } = props;
    return (
        <>
            <div class="col-lg-3 col-md-6">
                <div class="single-preview-item__wrap mt-40 text-center">
                    <Link to={`/ManualTesting`} >
                        <div class="frame-screen">
                            <div class="dots">
                                <div class="dot"></div>
                                <div class="dot"></div>
                                <div class="dot"></div>
                            </div>
                            <div class="single-preview-item__thumbnail">
                                <img class="img-fluid" src={image} alt="" />
                                <div class="overlay">
                                    <div class="btn-view-demo btn btn--white">
                                        Read More
                                        </div>
                                </div>
                            </div>
                            <div class="single-preview-item__info title text-center">
                                <h6 class="heading text-center">{title}</h6>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}


const MobileItem = (props) => {

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


    // const { appName, image } = props;
    return (
        <>

            {mobileApps.slice(0, 4).map((mobileApp, index) => (

                <div class="col-lg-3 col-md-6">
                    <div class="single-preview-item__wrap mt-40 text-center">
                        <Link to={`/ViewDevelopedMobileApp/${mobileApp.id}`} >
                            <div class="frame-screen">
                                <div class="dots">
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                </div>
                                <div class="single-preview-item__thumbnail">
                                    <img class="img-fluid" src={mobileApp.appImage} alt="" />
                                    <div class="overlay">
                                        <div class="btn-view-demo btn btn--white">
                                            Read More
                                        </div>
                                    </div>
                                </div>
                                <div class="single-preview-item__info title text-center">
                                    <h6 class="heading text-center">{mobileApp.appName}</h6>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

            ))}
        </>
    )
}

const WebItem = (props) => {

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


    // const { appName, image } = props;
    return (
        <>

            { webApps.slice(0, 3).map((webApp, index) => (

                <div class="col-lg-4 col-md-6">
                    <div class="single-preview-item__wrap mt-40 text-center">
                        <Link to={`/ViewDevelopedWeb/${webApp.id}`} >
                            <div class="frame-screen">
                                <div class="dots">
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                </div>
                                <div class="single-preview-item__thumbnail">
                                    <img class="img-fluid" src={webApp.appImage} alt="" />
                                    <div class="overlay">
                                        <div class="btn-view-demo btn btn--white">
                                            Read More
                                        </div>
                                    </div>
                                </div>
                                <div class="single-preview-item__info">
                                    <h6 class="heading">{webApp.appName}</h6>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

            ))}
        </>
    )
}

export default OurWork
