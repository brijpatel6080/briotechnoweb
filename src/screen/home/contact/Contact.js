import React from 'react';
import './Contact.css'
import Form from './Form';


// import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
// import { Link } from 'react-router-dom';

function Contact() {

    

    return (
        <>
        
            <div className="home contact-us-area service-contact-bg pt-50 pb-50">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-4">
                            <div className="contact-info sytle-one service-contact text-left">

                                <div className="contact-info-title-wrap text-center">
                                    <h3 className="heading text-white mb-10">4.9/5.0</h3>
                                    <div className="ht-star-rating lg-style">
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    {/* <p className="sub-text">by 700+ customers for 3200+ clients</p> */}
                                </div>

                                <div className="contact-list-item">
                                    <a href="tel:190068668" className="single-contact-list">
                                        <div className="content-wrap">
                                            <div className="content">
                                                <div className="icon">
                                                    <span className="fal fa-phone"></span>
                                                </div>
                                                <div className="main-content">
                                                    <h6 className="heading">Call for advice now!</h6>
                                                    <div className="text">1900 68668</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="mailto:hello@mitech.com" className="single-contact-list">
                                        <div className="content-wrap">
                                            <div className="content">
                                                <div className="icon">
                                                    <span className="fal fa-envelope"></span>
                                                </div>
                                                <div className="main-content">
                                                    <h6 className="heading">Say hello</h6>
                                                    <div className="text">hello@mitech.com</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-7 ml-auto">
                            <div className="contact-form-service-wrap p-20">
                                <div className="contact-title text-center section-space--mb_20">
                                    <h3 className="mb-10">Need a hand?</h3>
                                    <p className="text">Reach out to the world’s most reliable IT services.</p>
                                </div>

                                <Form />                        


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
