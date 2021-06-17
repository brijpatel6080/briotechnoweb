import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './Testimonials.css'


import TestimonialsItem from './TestimonialsItem';
import testi_1 from '../../assets/images/testimonial/mitech-testimonial-avata-03-90x90.jpg'
import AppTheme from '../../config/Theme';
// import bgimg from '../../assets/images/banners/development.jpg'
import bgimg from '../../assets/images/banners/code.jpg'

import {isMobile} from 'react-device-detect';
import Heading from '../Heading';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function Testimonials(props) {
    console.log("isMobile",isMobile)
    return (
        <>

        

            <div class="testimonial-slider-area bg-white pt-0 " style={{paddingBottom: 5}}>
                <div class="container-fluid">

                <Heading titleGray='Testimonials' titleBlack='What do people praise about' titleBlue='Briotechno?' />

                    <div class="row">
                        <div class="col-lg-12">

                            <div class="testimonial-slider">
                                <div class="swiper-container testimonial-slider__container">
                                    <div class="swiper-wrapper testimonial-slider__wrapper">

                                        <Carousel

                                            deviceType={props.deviceType}
                                            ssr={true}
                                            slidesToSlide={1}
                                            containerClass="carousel-with-custom-dots"
                                            responsive={responsive}
                                            // partialVisible={true}
                                            infinite={true}
                                            autoPlay={true}
                                            showDots={false}
                                            removeArrowOnDeviceType={["tablet", "desktop"]}
                                            keyBoardControl={true}
                                            autoPlaySpeed={5000}
                                            transitionDuration={1000}
                                            centerMode={isMobile !== true ? true : false}
                                        >

                                            <TestimonialsItem
                                                name='Monica Blews 1'
                                                position='Web designer'
                                                src={testi_1}
                                                detail='I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Briotechno is one of the most impressive to me.'
                                            />
                                            <TestimonialsItem
                                                name='Monica Blews2'
                                                position='Web designer'
                                                src={testi_1}
                                                detail='I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Briotechno is one of the most impressive to me.'
                                            />
                                            <TestimonialsItem
                                                name='Monica Blews3'
                                                position='Web designer'
                                                src={testi_1}
                                                detail='I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Briotechno is one of the most impressive to me.'
                                            />

                                        </Carousel>
                                    </div>
                                    <div class="swiper-pagination swiper-pagination-t01 section-space--mt_30"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            

        </>
    )
}




export default Testimonials
