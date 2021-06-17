import React, { useEffect } from 'react';
// import ServiceItem from './ServiceItem';
import '../../assets/css/style.css';
import service1 from '../../assets/images/icons/mitech-box-image-style-01-image-01-100x108.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignRight, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import AppTheme from '../../config/Theme';
import './Services.css'
import { TriangleTop, TriangleBottom } from '../Triangle';

import { Link } from 'react-router-dom';

import img1 from '../../assets/images/icons/mitech-processing-service-image-01-100x104.png'
import img2 from '../../assets/images/icons/mitech-processing-service-image-02-100x104.png'
import img3 from '../../assets/images/icons/mitech-processing-service-image-03-100x104.png'
import img4 from '../../assets/images/icons/mitech-processing-service-image-04-100x104.png'
import img5 from '../../assets/images/icons/mitech-processing-service-image-05-100x104.png'
import img6 from '../../assets/images/icons/mitech-box-image-style-01-image-01-100x108.png'
import mobileapp from '../../assets/images/services/mobile-app.png'

import MoAppGiF from '../../assets/images/services/Mobile-app-development.gif'
import webDevelopment from '../../assets/images/services/webDevelopment.gif'
import ManualTestGiF from '../../assets/images/services/ManualTesting.gif'

import Heading from '../Heading';

function Services() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            // behavior: "smooth"
        });
    }, [])
    return (
        <>

            <div className="row-separators-wrap triangle-top  big-triangle-style row-separators-bg separators-space" >

                <TriangleTop />

                <div className="container">

                    <Heading titleGray='Services We Offer' titleBlack='' titleWhite='Our Services' />

                    <div className="row">




                        <div className="image-l-r-box SSS">
                            <div className="row">
                                <div className="col image-box-area">
                                    <div className="row image-box-boder-box">

                                        <ServiceItem
                                            title='Mobile App Development'
                                            image={MoAppGiF}
                                            path='/MobileAppDevelopment'
                                            description='Get end-to-end mobile app development services from a leading mobile app development company India with wide experience in building custom apps for all types and all sizes of business.'
                                        />
                                        <ServiceItem
                                            title='Web Development'
                                            path='/WebDevelopment'
                                            image={webDevelopment}
                                            description='Best Web Development Company in India specializes in designing effective virtual branding and developing W3C standard websites that are compatible with all devices.'
                                        />
                                        <ServiceItem
                                            title='Manual Testing'
                                            path='/ManualTesting'
                                            image={ManualTestGiF}
                                            description='As the applications and systems become more complex, enterprises face unique challenges in functional testing to achieve the ‘perfect’ production quality for software.'
                                        />


                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>



                <TriangleBottom />

            </div>

        </>
    )
}




const ServiceItem = (props) => {
    const { image, title, description, path } = props
    return (
        <>
            <div className="col-lg-4 col-md-6 image-box-boder">
                <div className="ht-box-images style-09">
                    <div className="image-box-wrap pb-15">
                        <div className="box-image mb-20">
                            <img src={image} className="img-fluid" alt="" />
                        </div>
                        <div className="content">
                            <h6 className="heading">{title}</h6>
                            <div className="text">{description}</div>
                            <div className="more-arrow-link mt-10">
                                <Link to={path} >
                                    Read more <i className="far fa-long-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Services


