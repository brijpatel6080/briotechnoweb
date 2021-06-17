// import { Link } from '@material-ui/core'
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './style.css'

import bg from '../../assets/images/banners/mobileApp.png'
import app1 from '../../assets/images/work/mobileApp/app1.jpg';
import web1 from '../../assets/images/work/wepApp/web1.png'

import mobile from '../../assets/images/gallery/blog-07-960x960.jpg'
import img1 from '../../assets/images/box-image/blog-01-330x330.jpg'
import ss from '../../assets/images/services/screen.png'
import playStorebig from '../../assets/images/playStoreBig.png'
import appStorebig from '../../assets/images/appStoreBig.png'
import Heading from '../../componets/Heading'
import { TriangleBottom, TriangleTop } from '../../componets/Triangle'
import Banner from '../../componets/banner/Banner';



const ViewDevelopedMobileApp = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            // behavior: "smooth"
        });
    }, [])



    const [mobileApp, setmobileApp] = useState({
        appName: "",
        appDetail: "",
        appImage: "",
        P1: '',
        P2: '',
        P3: '',
        A1: '',
        A2: '',
        A3: '',
        A4: '',
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    });

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3001/mobileApps/${id}`);
        setmobileApp(res.data);
    };


    return (
        <>

            <Banner
                title={mobileApp.appName}
                // detail='Screen Short' 
                image={bg}
            />

            <div className="tabs-wrapper pb-40" >
                <div className="container">

                    <Heading
                        titleGray='Screen Short'
                        titleBlack={mobileApp.appName}
                        titleBlue='Screen Short'
                    />

                    <div className="row mb-40">
                        <div className="col-lg-12 ht-tab-wrap">
                            <div className="text-center  ">
                                <ul className="nav justify-content-center ht-tab-menu ht-tab-menu_two" role="tablist">
                                    <li className={`tab__item nav-item  `}>
                                        <a className={`nav-link active ${mobileApp.appPlayStore != '' ? 'block' : 'pointerNone'} `} id="nav-tab1" data-toggle="tab" href="#tab_list_06" role="tab" aria-selected="true">Android App</a>
                                    </li>
                                    <li className={`tab__item nav-item  `}>
                                        <a className={`nav-link ${mobileApp.appAppStore != '' ? 'block' : 'pointerNone'}`} id="nav-tab2" data-toggle="tab" href="#tab_list_07" role="tab" aria-selected="false">iPhone App</a>
                                    </li>

                                </ul>
                            </div>

                            <div className="tab-content ht-tab__content">


                                {/* 1 Android*/}
                                <div className={`tab-pane fade show active `} id="tab_list_06" role="tabpanel" >

                                    <div className="row">
                                        {/* <ScreenShort
                                        // title='Page Name'
                                        /> */}

                                        <ScreenShort
                                            image={mobileApp.appImage}
                                        />
                                        <ScreenShort
                                            image={mobileApp.P1}
                                            style={mobileApp.P1 != '' ? 'block' : 'none'}
                                        />
                                        <ScreenShort
                                            image={mobileApp.P2}
                                            style={mobileApp.P2 != '' ? 'block' : 'none'}
                                        />
                                        <ScreenShort
                                            image={mobileApp.P3}
                                            style={mobileApp.P3 != '' ? 'block' : 'none'}
                                        />
                                    </div>

                                </div>
                                {/* 2 Apple */}
                                <div className={`tab-pane fade" id="tab_list_07 `} role="tabpanel">

                                    <div className="row">
                                        <ScreenShort
                                            image={mobileApp.A1}
                                            style={mobileApp.A1 != '' ? 'block' : 'none'}
                                        />
                                        <ScreenShort
                                            image={mobileApp.A2}
                                            style={mobileApp.A2 != '' ? 'block' : 'none'}
                                        />
                                        <ScreenShort
                                            image={mobileApp.A3}
                                            style={mobileApp.A3 != '' ? 'block' : 'none'}
                                        />
                                        <ScreenShort
                                            image={mobileApp.A4}
                                            style={mobileApp.A4 != '' ? 'block' : 'none'}
                                        />

                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 ht-tab-wrap text-center" >
                            <a href={`${mobileApp.appPlayStore}`} target='_blank' className={`btnStore ${mobileApp.appPlayStore != '' ? 'block' : 'none'} `}>
                                <img src={playStorebig} />
                            </a>
                            <a href={`${mobileApp.appAppStore}`} target='_blank' className={`btnStore ${mobileApp.appAppStore != '' ? 'block' : 'none'} `}>
                                <img src={appStorebig} />
                            </a>
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
                                <div className="text mb-20 text-white text-justify">{mobileApp.appDetail}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <TriangleBottom /> */}
            </div>

        </>
    )
}



const ScreenShort = (props) => {

    // const [mobileApps, setmobileApps] = useState([]);

    const [mobileApp, setmobileApp] = useState({
        appName: "",
        appDetail: "",
        appImage: "",
        P1: '',
        P2: '',
        P3: '',
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    });

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3001/mobileApps/${id}`);
        setmobileApp(res.data);
    };



    const { image, title, style } = props
    return (

        <>

            {/* { mobileApps.map((mobileApp, index) => ( */}


            <div className={`col-lg-3 col-md-6 mt-30  ${style} `}>
                <Link className="box-large-image__wrap wow move-up">
                    <div className="box-large-image__box">
                        <div className="box-large-image__midea">
                            <div className="images-midea">
                                <img src={image} className="img-fluid mobileThumb" alt="" />
                                {/* <img className="img-fulid mobileThumb" src={mobileApp.appImage} alt=""
                                /> */}

                                {/* <div className="button-wrapper">
                                <div className="btn tm-button">
                                    <span className="button-text">Learn more</span>
                                </div>
                            </div> */}
                                {/* <div className="heading-wrap">
                                            <h5 className="heading">{title}</h5>
                                        </div> */}
                            </div>
                        </div>
                        {/* <div className="box-large-image__content mt-30 text-center">
                        <p>Our technical experts have a flair for developing <strong>clean-coded websites</strong> based on customers’ needs, global guidelines and trends.</p>
                    </div> */}
                    </div>
                </Link>
            </div>

            {/* ))} */}

        </>

    )
}


// const AndroidScreenShort = (props) => {

//     const [mobileApps, setmobileApps] = useState([]);

//     const [mobileApp, setmobileApp] = useState({
//         appName: "",
//         appDetail: "",
//         appImage: "",
//         appImages: {
//             a: "",
//             b: "",
//             c: ""
//         }
//     });

//     const { id } = useParams();

//     useEffect(() => {
//         loadUser();
//     });

//     const loadUser = async () => {
//         const res = await axios.get(`http://localhost:3001/mobileApps/${id}`);
//         setmobileApp(res.data);
//     };



//     const { image, title } = props
//     return (

//         <>

//             {mobileApps.map((postData) => (

//                 <div className="col-lg-3 col-md-6 mt-30">
//                     <Link className="box-large-image__wrap wow move-up">
//                         <div className="box-large-image__box">
//                             <div className="box-large-image__midea">
//                                 <div className="images-midea">
//                                     {/* <img src={image} className="img-fluid" alt="" /> */}
//                                     {/* <img className="img-fulid mobileThumb" src={mobileApp.appImage} alt=""
//                                     /> */}
//                                     <p className="img-fulid mobileThumb"  >{postData.tag + " "}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </Link>
//                 </div>

//             ))}

//             {/* ))} */}

//         </>

//     )
// }




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


export default ViewDevelopedMobileApp
