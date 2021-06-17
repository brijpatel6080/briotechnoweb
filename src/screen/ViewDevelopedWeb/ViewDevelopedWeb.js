// import { Link } from '@material-ui/core'
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './style.css'

import bg from '../../assets/images/banners/webDevelopment.png'

import web1 from '../../assets/images/work/wepApp/web1.png'

import mobile from '../../assets/images/gallery/blog-07-960x960.jpg'
import img1 from '../../assets/images/box-image/blog-01-330x330.jpg'
import ss from '../../assets/images/services/screen.png'
import playStorebig from '../../assets/images/playStoreBig.png'
import appStorebig from '../../assets/images/appStoreBig.png'
import Heading from '../../componets/Heading'
import { TriangleBottom, TriangleTop } from '../../componets/Triangle'
import Banner from '../../componets/banner/Banner';



const ViewDevelopedWeb = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            // behavior: "smooth"
        });
    }, [])



    const [webApp, setWebApp] = useState({
        appName: "",
        appDetail: "",
        appLink: "",
        appLanguage: "",
        appImage: "",
        ImageHome: "",
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    });

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3001/WebApps/${id}`);
        setWebApp(res.data);
    };


    return (
        <>

            <Banner
                title={webApp.appName}
                // detail='Screen Short'
                image={bg}
            />



            <div className="tabs-wrapper pb-40" >
                <div className="container">

                    <Heading
                        titleGray='Screen Short'
                        titleBlack={webApp.appName}
                        titleBlue='Screen Short'
                    />

                    <div className="row">
                        <div className="col-lg-12 ht-tab-wrap">

                            <div className="homeimg">
                                <ScreenShort />
                            </div>

                        </div>
                    </div>
  
                </div>
            </div>





            <div className="row-separators-wrap triangle-top  big-triangle-style row-separators-bg separators-space" style={{ paddingTop: 90, paddingBottom: 20 }}>
                <TriangleTop />

                <div className="feature-large-images-wrapper ">
                    <div className="container">

                        <Heading
                            titleBlack=""
                            titleWhite="App Features"
                        />

                        <div className="row">

                            <div className="col-md-12 sidebar-widget widget-blog-recent-post wow move-up">
                                <div className="text mb-20 text-white text-justify">{webApp.appDetail}</div>
                            </div>
                            {/* <div className="col-md-6 sidebar-widget widget-blog-recent-post wow move-up">
                                <ul>
                                    <li>
                                        <a href="#">Ideas for High Returns on Investment</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 sidebar-widget widget-blog-recent-post mt-0 wow move-up">
                                <ul>
                                    <li>
                                        <a href="#">Ideas for High Returns on Investment</a>
                                    </li>
                                   
                                </ul>

                            </div> */}
                        </div>
                    </div>
                </div>

                {/* <TriangleBottom /> */}
            </div>

        </>
    )
}



const ScreenShort = (props) => {

    const [webApp, setWebApp] = useState({
        appName: "",
        appDetail: "",
        appLink: "",
        appLanguage: "",
        appImage: "",
        ImageHome: "",
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    });

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3001/WebApps/${id}`);
        setWebApp(res.data);
    };

  
    return (

        <>

            {/* { WebApps.map((webApp, index) => ( */}


            <div className="col-lg-12 col-md-12 mt-10">

                <div class="large-image-box">
                    <div class="box-image mb-40">
                        <div class="default-image home">
                            <img class="img-fluid" src={webApp.ImageHome} alt="" />
                        </div>
                    </div>
                    <div class="content text-center">
                        <a href={`${webApp.appLink}`} target='_blank' className="text-center">
                            <h2 class="heading">  {`Link: ${webApp.appLink}`}</h2>
                        </a>
 
                        <div class="box-images-arrow">
                            <span class="button-text">Languages</span>
                            <i class="far fa-long-arrow-right"></i>
                            {` ${webApp.appLanguage}`}
                        </div>
                    </div>
                </div>
            </div>

            {/* ))} */}

        </>

    )
}




const WorkItem = (props) => {
    const { appName, image } = props;
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="single-preview-item__wrap mt-40 text-center">
                    <a href="index-appointment.html" target="_blank">
                        <div className="frame-screen">
                            <div className="dots">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                            <div className="single-preview-item__thumbnail">
                                <img className="img-fluid" src={image} alt="" />
                                <div className="overlay">
                                    <div className="btn-view-demo btn btn--white">
                                        View Demo
                                    </div>
                                </div>
                            </div>
                            <div className="single-preview-item__info">
                                <h6 className="heading">{appName}</h6>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}


export default ViewDevelopedWeb
