import React from 'react'
import './Testimonials.css'

function Testimonials_item(props) {
    return (
        <>
            <div class="swiper-slide ">
                <div class="testimonial-slider__one wow move-up">
                    <div class="testimonial-slider--info">
                        <div class="testimonial-slider__media">
                            <img src={props.src} class="img-fluid" alt="" />
                        </div>
                        <div class="testimonial-slider__author">
                            <div class="testimonial-rating">
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <div class="author-info">
                                <h6 className="name"> {props.name} </h6>
                                <span className="designation"> {props.position}</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-slider__text">{props.detail}</div>
                </div>
            </div>


        </>
    )
}

export default Testimonials_item
