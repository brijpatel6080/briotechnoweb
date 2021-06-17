
import React from 'react';
import './Slider.css';
// import slidervideo from '../../assets/videos/video-2.mp4'
import slider1 from '../../assets/images/hero/home-infotechno-main-slider-slide-01-image-01.png';
import slider2 from '../../assets/images/hero/home-infotechno-main-slider-slide-01-image-02.png';

function Slider() {
    return (
        <>
            <div class="infotechno-hero infotechno-bg">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        
                        <div class="col-lg-6 col-md-6">
                            <div class="infotechno-hero-text  wow move-up">
                                <h6>IT Design & Consulting </h6>
                                <h1 class="font-weight--reguler mb-15">Facilitate All <br /> Local IT-related Service
                                    Providers </h1>
                                <p>Highly Tailored IT Design, Management & Support Services. </p>
                                <div class="hero-button  mt-30">
                                    <a href="#" class="ht-btn ht-btn-md">Get details</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="infotechno-hero-inner-images">
                                <div class="infotechno-inner-one">
                                    <img class="img-fluid"
                                        src={slider1}
                                        alt="" />
                                </div>
                                <div class="infotechno-inner-two  wow move-up">
                                    <img class="img-fluid"
                                        src={slider2}
                                        alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default Slider
