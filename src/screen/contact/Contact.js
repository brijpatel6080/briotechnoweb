import React, { useEffect } from 'react';
import '../../App.css'
import bg from '../../assets/images/banners/contact.png'
import Aboutus from '../../componets/Aboutus'
import Banner from '../../componets/banner/Banner'
import InputText, { SubmitButton, TextArea } from '../../componets/form/InputBox'
import Heading from '../../componets/Heading';
import { TriangleTop, TriangleBottom } from '../../componets/Triangle';
import person from '../../assets/images/banners/home-cybersecurity-contact-bg-image.png'

import './Contact.css'


export default function Contact() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            // behavior: "smooth"
        });
    }, [])
    return (
        <div className="contact-page">
            <Banner
                title='Contact us'
                // detail='Briotechno specializes in technological and IT-related services such as product engineering, warranty management, building cloud, infrastructure, network, etc. '
                image={bg}
            />



            <div id="main-wrapper">
                <div class="site-wrapper-reveal">

                    <div class="contact-us-section-wrappaer pt-0 pb-10">
                        <div class="container">
                            <Heading
                                titleBlack="Get In"
                                titleBlue="Touch"
                            />
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-lg-6">
                                    <div class="conact-us-wrap-one mb-30">
                                        <h3 class="heading">To make requests for <br />further information, <br /><span class="text-color-primary">contact us</span> via our social channels. </h3>
                                        <div class="sub-heading">We just need a couple of hours! <br /> No more than 2 working days since receiving your issue ticket.</div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-lg-6">
                                    <div class="contact-form-wrap">

                                        {/* <form id="contact-form" action="http://whizthemes.com/mail-php/jowel/mitech/php/mail.php" method="post"> */}
                                        <form id="contact-form" action="" method="post">
                                            <div class="contact-form">
                                                <div class="contact-input">
                                                    <div class="contact-inner">
                                                        <InputText name='' type='text'
                                                            placeholder='Name *'
                                                        />
                                                    </div>
                                                    <div class="contact-inner">
                                                        <InputText name='' type='email'
                                                            placeholder='Email *'
                                                        />
                                                    </div>
                                                </div>
                                                {/* <div class="contact-inner">
                                                    <InputText name='' type='text'
                                                        placeholder='Subject *'
                                                    />
                                                </div> */}
                                                <div class="contact-select">
                                                    <div class="form-item contact-inner">
                                                        <span class="inquiry">
                                                            <select id="Visiting" name="subject">
                                                                <option disabled selected>Select Department to email</option>
                                                                <option value="Your inquiry about">Your inquiry about</option>
                                                                <option value="General Information Request">General Information Request</option>
                                                                <option value="Partner Relations">Partner Relations</option>
                                                                <option value="Careers">Careers</option>
                                                                <option value="Software Licencing">Software Licencing</option>
                                                            </select>

                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="contact-inner contact-message">
                                                    <TextArea name='' placeholder='Please describe what you need.' />
                                                </div>
                                                <div class="submit-btn mt-20">

                                                    <SubmitButton name='' type='submit' value='Send message' />
                                                    <p class="form-messege"></p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="row-separators-wrap triangle-top  big-triangle-style row-separators-bg separators-space" style={{ paddingBottom: 50, paddingTop: 90 }} >


                        <TriangleTop />

                        <div class="contact-us-info-wrappaer pb-0 pt-0  bg-gray11">
                            <div class="container">

                                {/* <Heading
                                    titleBlack="Our"
                                    titleBlue="Branch"
                                /> */}

                                <div class="row align-items-center">


                                    <div class="col-lg-6 col-md-6">
                                        <div class="contact-info style-two text-left mt-xs-0">

                                            <div class="contact-list-item">
                                                <div class="single-contact-list">
                                                    <div class="content-wrap">
                                                        <div class="content">
                                                            <div class="icon">
                                                                <span class="fal fa-location"></span>
                                                            </div>
                                                            <div class="main-content">
                                                                <h6 class="heading " style={{ marginBottom: 0 }}>Office</h6>
                                                                <div class="text" style={{ lineHeight: 1.5 }}>F-47, Golden Market, <br />Radhanpur Road, <br />Mehsana-02</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="tel:190068668" class="single-contact-list">
                                                    <div class="content-wrap">
                                                        <div class="content" style={{ marginTop: 15 }}>
                                                            <div class="icon">
                                                                <span class="fal fa-phone"></span>
                                                            </div>
                                                            <div class="main-content">
                                                                <h6 class="heading">Call for advice now!</h6>
                                                                <div class="text">1900 68668</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="mailto:hello@Briotechno.com" class="single-contact-list">
                                                    <div class="content-wrap">
                                                        <div class="content">
                                                            <div class="icon">
                                                                <span class="fal fa-envelope"></span>
                                                            </div>
                                                            <div class="main-content">
                                                                <h6 class="heading">Say hello</h6>
                                                                <div class="text">hello@Briotechno.com</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                        </div>


                                        <div class="single-social-group  wow move-up mt-30 mb-xs-40">
                                            <div class="title mb-10">
                                                <h5>Follow us on</h5>
                                            </div>

                                            <ul class="list ht-social-networks large-icon">
                                                <li class="item">
                                                    <a href="#" target="_blank" class="social-link"> <i class="fab fa-facebook social-link-icon"></i> </a>
                                                </li>
                                                <li class="item">
                                                    <a href="#" target="_blank" class="social-link"> <i class="fab fa-twitter social-link-icon"></i> </a>
                                                </li>
                                                <li class="item">
                                                    <a href="#" target="_blank" class="social-link"> <i class="fab fa-instagram social-link-icon"></i> </a>
                                                </li>
                                                <li class="item">
                                                    <a href="#" target="_blank" class="social-link"> <i class="fab fa-dribbble social-link-icon"></i> </a>
                                                </li>
                                                <li class="item">
                                                    <a href="#" target="_blank" class="social-link"> <i class="fab fa-pinterest social-link-icon"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>





                                    <div class="col-lg-6 col-md-6">
                                        <div class="google-map ">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.599713633777!2d72.34484351445332!3d23.618684599713312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c426e9754fbfb%3A0x4c789465a48993b4!2s2%2C%20Radhanpur%20Rd%2C%20Circle%2C%20Mehsana%2C%20Gujarat%20384002!5e0!3m2!1sen!2sin!4v1618832378547!5m2!1sen!2sin" width="100%" height="300" allowfullscreen="" loading="lazy" style={{ border: 0 }} ></iframe>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* <TriangleBottom /> */}

                    </div>





                </div>

            </div>

        </div>
    )
}

