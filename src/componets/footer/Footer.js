import React from 'react';
import logo from '../../assets/images/logo/briotechno_logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import FooterLinks from './FooterLinks';
import './Footer.css';
import SocialLinks from './SocialLinks';
import AppTheme from '../../config/Theme';
import MobileMenu from './MobileMenu';


function Footer(props) {
    return (
        <>
            <div className="footer-area-wrapper bg-gray1 infotechno-contact-us-bg" style={{boxShadow: '0px 0px 8px #00000052'}}>
                <div className="footer-area pt-50 pb-30">
                    <div className="container">
                        <div className="row footer-widget-wrapper">
                            <div className="col-lg-4 col-md-12 col-sm-12 footer-widget">
                                <div className="footer-widget__logo mb-30 text-center">
                                    <img src={logo} className="img-fluid" alt="" />
                                </div>
                                <div className='mr-30'>
                                    <p className='text-justify'>Briotechno is a renowned mobile app development company & the best IT Software Solutions provider based in India, established in 2011.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                                <h6 className="footer-widget__title mb-20">Quick links</h6>
                                <ul className="footer-widget__list">
                                    <FooterLinks path='/about' title='About us' />
                                    <FooterLinks path='/Contact' title='Contact us' />
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 footer-widget">
                                <h6 className="footer-widget__title mb-20">Our Services</h6>
                                <ul className="footer-widget__list">
                                    <FooterLinks path='/MobileAppDevelopment' title='Mobile App Development' />
                                    <FooterLinks path='/WebDevelopment' title='Web Development' />
                                    <FooterLinks path='/ManualTesting' title='Manual Testing' />
                                </ul>
                            </div>
                            
                            <div className="col-lg-3 col-md-4 col-sm-6 footer-widget">
                                <h6 className="footer-widget__title mb-20">Contact us</h6>
                                <ul className="footer-widget__list">
                                    <li>F-47, Golden Market, <br />Radhanpur Road,<br /> Mehsana-02 </li>
                                    <li><a href="mailto:contact@Briotechno.com" className="hover-style-link">contact@Briotechno.com</a></li>
                                    <li><a href="tel:123344556" className="hover-style-link text-black font-weight--bold">(+91)1234 5678</a></li>
                                    <li><a href="https://hasthemes.com/" className="hover-style-link text-color-primary">www.Briotechno.com</a></li>
                                </ul>
                            </div>
                            {/* <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                                <div className="footer-widget__title section-space--mb_50"></div>
                                <ul className="footer-widget__list">
                                    <li><a href="#" className="image_btn"><img className="img-fluid" src={googleStore} alt="" /></a></li>
                                    <li><a href="#" className="image_btn"><img className="img-fluid" src={appStore} alt="" /></a></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="footer-copyright-area" style={{background:AppTheme.bgblack}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 text-center text-md-left">
                                <span className="copyright-text" style={{color:AppTheme.textWhite}}>&copy; 2021 Briotechno. All Rights Reserved.</span>
                            </div>
                            <div className="col-md-6 text-center text-md-right">
                                <ul className="list ht-social-networks solid-rounded-icon mb-0">

                                    <SocialLinks
                                        path=''
                                        fontA={<FontAwesomeIcon icon={faLinkedin} />}
                                        popup='Linkedin'
                                    />
                                    <SocialLinks
                                        path=''
                                        fontA={<FontAwesomeIcon icon={faTwitter} />}
                                        popup='Twitter'
                                    />
                                    <SocialLinks
                                        path=''
                                        fontA={<FontAwesomeIcon icon={faFacebook} />}
                                        popup='Facebook'
                                    />
                                    <SocialLinks
                                        path=''
                                        fontA={<FontAwesomeIcon icon={faInstagram} />}
                                        popup='Instagram'
                                    />

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <MobileMenu />

        </>
    )
}

export default Footer
