import React, { useEffect } from 'react';
import './OurServicesStyle.css'
import Banner from '../../componets/banner/Banner'
import '../../App.css'
import bg from '../../assets/images/banners/about.jpg'
import videobg from '../../assets/images/bg/videobg.jpg'



import Services from '../../componets/services_items/Services';
import { TriangleBottom, TriangleTop } from '../../componets/Triangle';
import Heading from '../../componets/Heading';
import { Link } from 'react-router-dom';

import img1 from '../../assets/images/icons/mitech-processing-service-image-01-100x104.png'
import img2 from '../../assets/images/icons/mitech-processing-service-image-02-100x104.png'
import img3 from '../../assets/images/icons/mitech-processing-service-image-03-100x104.png'
import img4 from '../../assets/images/icons/mitech-processing-service-image-04-100x104.png'
import img5 from '../../assets/images/icons/mitech-processing-service-image-05-100x104.png'
import img6 from '../../assets/images/icons/mitech-box-image-style-01-image-01-100x108.png'
import mobileapp from '../../assets/images/services/mobile-app.png'


export default function OurServices() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            // behavior: "smooth"
        });
    }, [])
    return (
        <div className="services-page">
            <Banner
                title='Our Services'
                // detail='Briotechno specializes in technological and IT-related services such as product engineering, warranty management, building cloud, infrastructure, network, etc. '
                image={bg}
            />



            <div class="feature-large-images-wrapper pt-50 pb-0">
                <div class="container">
                    <div class="cybersecurity-about-box">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="conact-us-wrap-one managed-it">
                                    <h5 class="heading ">Mitech specializes in <span class="text-color-primary"> technological and IT-related services</span> such as product engineering, warranty management, building cloud, infrastructure, network, etc. </h5>
                                </div>
                            </div>
                            <div class="col-lg-7 offset-lg-1">
                                <div class="cybersecurity-about-text">
                                    <div class="text">The IT services that Mitech are running can be segmented by the type of skills employed to deliver the service (design, build, run). Technically, these fall into three main categories: business process services, application services, and infrastructure services.</div>
                                    <div class="text">The IT services that Mitech are running can be segmented by the type of skills employed to deliver the service (design, build, run). Technically, these fall into three main categories: business process services, application services, and infrastructure services.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




            <div class="row-separators-wrap triangle-top  big-triangle-style row-separators-bg separators-space" style={{ paddingBottom: 140 }} >


                <TriangleTop />

                <div class="feature-images-wrapper bg-gray pt-0 pb-0">
                    <div class="container">

                        <Heading
                            titleGray="Our Services"
                            titleBlack='Preparing for your success, we provide'
                            titleBlue='truly prominent IT solutions.'
                        />

                        <div class="image-l-r-box">
                            <div class="row">
                                <div class="col image-box-area">
                                    <div class="row image-box-boder-box">

                                        <ServiceItem
                                            title='Mobile App Development'
                                            image={img6}
                                            path='/ServiceSingle'
                                            description='We provide the most responsive and functional IT design for companies and businesses worldwide.'
                                        />
                                        <ServiceItem
                                            title='Web Development'
                                            image={img1}
                                            description='We provide the most responsive and functional IT design for companies and businesses worldwide.'
                                        />
                                        <ServiceItem
                                            title='Manual Testing'
                                            image={img2}
                                            description='We provide the most responsive and functional IT design for companies and businesses worldwide.'
                                        />
                                        <ServiceItem
                                            title='SEO & Digital Marketing'
                                            image={img3}
                                            description='We provide the most responsive and functional IT design for companies and businesses worldwide.'
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <TriangleBottom />

            </div>




            <div class="claim-to-excel-area pb-50">
                <div class="container">

                    <Heading titleBlack="How we claim to excel?" />
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="claim-grid-group">
                                <div class="ht-box-icon style-04">
                                    <div class="icon-box-wrap color-one">
                                        <div class="icon">
                                            <span class="icon-basic-anticlockwise"></span>
                                        </div>
                                        <div class="content">
                                            <h6 class="sub-heading">01</h6>
                                            <h5 class="heading">Prompt help</h5>
                                            <p class="text">We give prompt help desk answer right when receiving the request from customers.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="ht-box-icon style-04">
                                    <div class="icon-box-wrap color-two">
                                        <div class="icon">
                                            <span class="icon-basic-life-buoy"></span>
                                        </div>
                                        <div class="content">
                                            <h6 class="sub-heading">02</h6>
                                            <h5 class="heading">Sound advice</h5>
                                            <p class="text">Knowledge come with age and time. Our experts make sure it works.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="ht-box-icon style-04">
                                    <div class="icon-box-wrap color-three">
                                        <div class="icon">
                                            <span class="icon-basic-world"></span>
                                        </div>
                                        <div class="content">
                                            <h6 class="sub-heading">03</h6>
                                            <h5 class="heading">Zero risk</h5>
                                            <p class="text">No risking factors are present and we have all kinds of measures to protect against losses.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="ht-box-icon style-04">
                                    <div class="icon-box-wrap color-four">
                                        <div class="icon">
                                            <span class="icon-basic-case"></span>
                                        </div>
                                        <div class="content">
                                            <h6 class="sub-heading">04</h6>
                                            <h5 class="heading">Tech savvy</h5>
                                            <p class="text">Technological wise plans are made for addressing all kinds of requests and demands.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="ht-box-icon style-04">
                                    <div class="icon-box-wrap color-five">
                                        <div class="icon">
                                            <span class="icon-basic-lock"></span>
                                        </div>
                                        <div class="content">
                                            <h6 class="sub-heading">05</h6>
                                            <h5 class="heading">Satisfied</h5>
                                            <p class="text">100% of our current and recurring customers feel satisfied with the final results.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}



const ServiceItem = (props) => {
    const { image, title, description, path } = props
    return (
        <>
            <div class="col-lg-6 col-md-6 image-box-boder">
                <div class="ht-box-images style-09">
                    <div class="image-box-wrap">
                        <div class="box-image">
                            <img src={image} class="img-fluid" alt="" />
                        </div>
                        <div class="content">
                            <h6 class="heading">{title}</h6>
                            <div class="text">{description}</div>
                            <div class="more-arrow-link">
                                <Link to={path} >
                                    Learn more <i class="far fa-long-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}