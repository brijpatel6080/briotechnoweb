import React from 'react'

import img1 from '../../assets/images/banners/home-processing-video-intro-slider-slide-01-image-02.jpg'
import img4 from '../../assets/images/banners/home-processing-video-intro-slider-slide-01-image-04.jpg'
import img5 from '../../assets/images/banners/home-processing-video-intro-slider-slide-01-image-05.jpg'
import mobile from '../../assets/images/banners/home-processing-video-intro-slider-slide-01-image-03.jpg'
import videobg from '../../assets/images/banners/home-processing-video-intro-slider-slide-01-image-01.jpg'
import wdGIF from '../../assets/images/services/wd.gif'
import IT from '../../assets/images/services/IT.gif'
import mobileApp from '../../assets/images/services/mobileApp.png'
import weblogo from '../../assets/images/services/weblogo.png'

import { Link } from 'react-router-dom'

import './style.css'

const AboutCompany = () => {
    return (
        <>
            <div class="our-company-history pt-40 pb-20">
                <div class="container">
                    <div class="grid-wrapper">
                        <div class="line line-1"></div>
                        <div class="line line-2"></div>
                        <div class="line line-3"></div>
                        <div class="line line-4"></div>
                    </div>

                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="faq-custom-col">
                                <div class="section-title-wrap">
                                    <h6 class="section-sub-title mb-20">Our company</h6>
                                    <h3 class="heading">We’ve been triumphing <br /> all these <span class="text-color-primary"> 06 years.</span> <br /> Sacrifices are made up <br /> with success.</h3>

                                    <p class="text text-justify mt-20">Briotechno is a renowned mobile app development company & the best IT Software Solutions provider based in Mehsana, Gujarat, India, established in 2015. </p>

                                    <p class="text text-justify mt-20">Briotechno is well known to craft the most innovative &amp; eye catchy mobile apps &amp; websites. We offer a wide range of customized services in mobile apps, website development, AR-VR Development, Game Development, Blockchain Development and much more. Our skilled team &amp; our products are engineered to bring growth to your business. We believe in delivering the services without compromising on time and quality.</p>

                                    <p class="text text-justify mt-20">We are proud members of GESIA (Gujarat Electronics &amp; Software Industries Association) and we are ISO 9001:2008 Certified Company.</p>

                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="rv-video-section">

                                <div class="ht-banner-01 ">
                                    <img class="img-fluid border-radus-5 animation_images one wow fadeInDown" src={weblogo} alt="" />
                                </div>

                                <div class="ht-banner-02">
                                    <img class="img-fluid border-radus-5 animation_images two wow fadeInDown" src={mobileApp} alt="" />
                                </div>

                                <div class="main-video-box video-popup mb-0">
                                    <a class="video-link  mt-30">
                                        <div class="single-popup-wrap">
                                            <img class="img-fluid border-radus-5 " src={IT} alt="" />
                                            {/* <div class="ht-popup-video video-button">
                                                <div class="video-mark">
                                                    <div class="wave-pulse wave-pulse-1"></div>
                                                    <div class="wave-pulse wave-pulse-2"></div>
                                                </div>
                                                <div class="video-button__two">
                                                    <div class="video-play">
                                                        <span class="video-play-icon"></span>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </a>
                                </div>


                                {/* <div class="ht-banner-03">
                                    <img class="img-fluid border-radus-5 animation_images three wow fadeInDown" src={img4} alt="" />
                                </div>

                                <div class="ht-banner-04">
                                    <img class="img-fluid border-radus-5 animation_images four wow fadeInDown" src={mobile} alt="" />
                                </div> */}


                            </div>
                        </div>
                        <div class="col-lg-12">
                        <div class="inner-button-box mt-30 text-center">
                                        <Link to="/about" class="ht-btn ht-btn-md">Read more</Link>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default AboutCompany