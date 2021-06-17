import React from 'react'

// import './css/plugins.min.css'
// import './css/style.css'
// import './css/vendor.min.css'

import './Header.css'
function Header() {
   return (
      <>
      
    <div class="header-area">

       
        <div class="header-top-wrap border-bottom">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <p class="text-center top-message"><a href="#">Now Hiring:</a> Are you a driven and motivated 1st Line IT Support Engineer?</p>
                    </div>
                </div>
            </div>
        </div>
       

        <div class="header-bottom-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="header position-relative">
                           
                            <div class="header__logo top-logo">
                                <a href="index.html">
                                    <img src="assets/images/logo/logo-dark.png" class="img-fluid" alt="" />
                                </a>
                            </div>

                            <div class="header-right flexible-image-slider-wrap">

                                <div class="header-right-inner" id="hidden-icon-wrapper">
                                   
                                    <div class="header-search-form d-md-none d-block">
                                        <form action="#" class="search-form-top">
                                            <input class="search-field" type="text" placeholder="Search…" />
                                            <button class="search-submit">
                                                <i class="search-btn-icon fa fa-search"></i>
                                            </button>
                                        </form>
                                    </div>

                                   
                                    <div class="swiper-container header-top-info-slider-werap top-info-slider__container">
                                        <div class="swiper-wrapper header-top-info-inner default-color">
                                            <div class="swiper-slide">
                                                <div class="info-item">
                                                    <div class="info-icon">
                                                        <span class="fa fa-phone"></span>
                                                    </div>
                                                    <div class="info-content">
                                                        <h6 class="info-title">0122 8899900</h6>
                                                        <div class="info-sub-title">Info@example.com</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="info-item">
                                                    <div class="info-icon">
                                                        <span class="fa fa-map-marker-alt"></span>
                                                    </div>
                                                    <div class="info-content">
                                                        <h6 class="info-title">219 Amara Fort Apt. 394</h6>
                                                        <div class="info-sub-title">New York, NY 941</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="info-item">
                                                    <div class="info-icon">
                                                        <span class="fa fa-clock"></span>
                                                    </div>
                                                    <div class="info-content">
                                                        <h6 class="info-title">8:00AM - 6:00PM</h6>
                                                        <div class="info-sub-title">Monday to Saturday</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="info-item">
                                                    <div class="info-icon">
                                                        <span class="fa fa-comment-alt-lines"></span>
                                                    </div>
                                                    <div class="info-content">
                                                        <h6 class="info-title">Online 24/7</h6>
                                                        <div class="info-sub-title">+122 123 4567</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div class="header-social-networks style-icons">
                                        <div class="inner">
                                            <a class=" social-link hint--black hint--bottom-left" aria-label="Twitter" href="https://twitter.com" data-hover="Twitter" target="_blank">
                                                <i class="social-icon fab fa-twitter"></i>
                                            </a>
                                            <a class=" social-link hint--black hint--bottom-left" aria-label="Facebook" href="https://facebook.com" data-hover="Facebook" target="_blank">
                                                <i class="social-icon fab fa-facebook-f"></i>
                                            </a>
                                            <a class=" social-link hint--black hint--bottom-left" aria-label="Instagram" href="https://instagram.com" data-hover="Instagram" target="_blank">
                                                <i class="social-icon fab fa-instagram"></i>
                                            </a>
                                            <a class=" social-link hint--black hint--bottom-left" aria-label="Linkedin" href="https://linkedin.com" data-hover="Linkedin" target="_blank">
                                                <i class="social-icon fab fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                                
                                <div class="mobile-navigation-icon d-block d-xl-none" id="mobile-menu-trigger">
                                    <i></i>
                                </div>
                                
                                <div class="hidden-icons-menu d-block d-md-none" id="hidden-icon-trigger">
                                    <a href="javascript:void(0)">
                                        <i class="far fa-ellipsis-h-alt"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="header-bottom-wrap bg-theme-default d-md-block d-none header-sticky">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="header-bottom-inner">
                                <div class="header-bottom-left-wrap">
                                   
                                    <div class="header__navigation d-none d-xl-block">
                                        <nav class="navigation-menu navigation-menu--text_white">

                                            <ul>
                                                <li class="has-children has-children--multilevel-submenu">
                                                    <a href="#"><span>Home</span></a>
                                                    <ul class="submenu">
                                                        <li><a href="index-infotechno.html"><span>Infotechno</span></a></li>
                                                        <li><a href="index-processing.html"><span>Processing</span></a></li>
                                                        <li><a href="index-appointment.html"><span>Appointment</span></a></li>
                                                        <li><a href="index-services.html"><span>Services</span></a></li>
                                                        <li><a href="index-resolutions.html"><span>Resolutions</span></a></li>
                                                        <li><a href="index-cybersecurity.html"><span>Cybersecurity</span></a></li>
                                                        <li><a href="index-modern-it-company.html"><span>Modern IT Company</span></a></li>
                                                        <li><a href="index-machine-learning.html"><span>Machine Learning</span></a></li>
                                                        <li><a href="index-software-innovation.html"><span>Software Innovation</span></a></li>
                                                    </ul>
                                                </li>
                                                <li class="has-children has-children--multilevel-submenu">
                                                    <a href="#"><span>Company</span></a>
                                                    <ul class="submenu">
                                                        <li class="has-children">
                                                            <a href="about-us-01.html"><span>About us</span></a>
                                                            <ul class="submenu">
                                                                <li><a href="about-us-01.html"><span>About us 01</span></a></li>
                                                                <li><a href="about-us-02.html"><span>About us 02</span></a></li>
                                                                <li class="has-children">
                                                                    <a href="#"><span>Submenu Level Two</span></a>
                                                                    <ul class="submenu">
                                                                        <li><a href="#"><span>Submenu Level Three</span></a></li>
                                                                        <li><a href="#"><span>Submenu Level Three</span></a></li>
                                                                        <li><a href="#"><span>Submenu Level Three</span></a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="contact-us.html"><span>Contact us</span></a></li>
                                                        <li><a href="leadership.html"><span>Leadership</span></a></li>
                                                        <li><a href="why-choose-us.html"><span>Why choose us</span></a></li>
                                                        <li><a href="our-history.html"><span>Our history</span></a></li>
                                                        <li><a href="faqs.html"><span>FAQs</span></a></li>
                                                        <li><a href="careers.html"><span>Careers</span></a></li>
                                                        <li><a href="pricing-plans.html"><span>Pricing plans</span></a></li>
                                                    </ul>
                                                </li>
                                                <li class="has-children has-children--multilevel-submenu">
                                                    <a href="#"><span>IT solutions</span></a>
                                                    <ul class="submenu">
                                                        <li><a href="it-services.html"><span>IT Services</span></a></li>
                                                        <li><a href="managed-it-service.html"><span>Managed IT Services</span></a></li>
                                                        <li><a href="industries.html"><span>Industries</span></a></li>
                                                        <li><a href="business-solution.html"><span>Business solution</span></a></li>
                                                        <li><a href="it-services-details.html"><span>IT Services Details</span></a></li>
                                                    </ul>
                                                </li>
                                                <li class="has-children">
                                                    <a href="#"><span>Elements</span></a>
                                               
                                                    <ul class="megamenu megamenu--mega">
                                                        <li>
                                                            <h2 class="page-list-title">ELEMENT GROUP 01</h2>
                                                            <ul>
                                                                <li><a href="element-accordion.html"><span>Accordions & Toggles</span></a></li>
                                                                <li><a href="element-box-icon.html"><span>Box Icon</span></a></li>
                                                                <li><a href="element-box-image.html"><span>Box Image</span></a></li>
                                                                <li><a href="element-box-large-image.html"><span>Box Large Image</span></a></li>
                                                                <li><a href="element-buttons.html"><span>Buttons</span></a></li>
                                                                <li><a href="element-cta.html"><span>Call to action</span></a></li>
                                                                <li><a href="element-client-logo.html"><span>Client Logo</span></a></li>
                                                                <li><a href="element-countdown.html"><span>Countdown</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <h2 class="page-list-title">ELEMENT GROUP 02</h2>
                                                            <ul>
                                                                <li><a href="element-counters.html"><span>Counters</span></a></li>
                                                                <li><a href="element-dividers.html"><span>Dividers</span></a></li>
                                                                <li><a href="element-flexible-image-slider.html"><span>Flexible image slider</span></a></li>
                                                                <li><a href="element-google-map.html"><span>Google Map</span></a></li>
                                                                <li><a href="element-gradation.html"><span>Gradation</span></a></li>
                                                                <li><a href="element-instagram.html"><span>Instagram</span></a></li>
                                                                <li><a href="element-lists.html"><span>Lists</span></a></li>
                                                                <li><a href="element-message-box.html"><span>Message box</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <h2 class="page-list-title">ELEMENT GROUP 03</h2>
                                                            <ul>
                                                                <li><a href="element-popup-video.html"><span>Popup Video</span></a></li>
                                                                <li><a href="element-pricing-box.html"><span>Pricing Box</span></a></li>
                                                                <li><a href="element-progress-bar.html"><span>Progress Bar</span></a></li>
                                                                <li><a href="element-progress-circle.html"><span>Progress Circle</span></a></li>
                                                                <li><a href="element-rows-columns.html"><span>Rows & Columns</span></a></li>
                                                                <li><a href="element-social-networks.html"><span>Social Networks</span></a></li>
                                                                <li><a href="element-tabs.html"><span>Tabs</span></a></li>
                                                                <li><a href="element-team-member.html"><span>Team member</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <h2 class="page-list-title">ELEMENT GROUP 04</h2>
                                                            <ul>
                                                                <li><a href="element-testimonials.html"><span>Testimonials</span></a></li>
                                                                <li><a href="element-timeline.html"><span>Timeline</span></a></li>
                                                                <li><a href="element-carousel-sliders.html"><span>Carousel Sliders</span></a></li>
                                                                <li><a href="element-typed-text.html"><span>Typed Text</span></a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="has-children has-children--multilevel-submenu">
                                                    <a href="#"><span>Case Studies</span></a>
                                                    
                                                    <ul class="submenu">
                                                        <li><a href="case-studies.html"><span>Case Studies 01</span></a></li>
                                                        <li><a href="case-studies-02.html"><span>Case Studies 02</span></a></li>
                                                        <li><a href="single-smart-vision.html"><span>Single Layout</span></a></li>
                                                    </ul>
                                                </li>
                                                <li class="has-children has-children--multilevel-submenu">
                                                    <a href="blog-list-large-image.html"><span>Blog</span></a>
                                                    
                                                    <ul class="submenu">
                                                        <li><a href="blog-list-large-image.html"><span>List Large Image</span></a></li>
                                                        <li><a href="blog-list-left-large-image.html"><span>Left Large Image</span></a></li>
                                                        <li><a href="blog-grid-classic.html"><span>Grid Classic</span></a></li>
                                                        <li><a href="blog-grid-masonry.html"><span>Grid Masonry</span></a></li>
                                                        <li class="has-children">
                                                            <a href="blog-post-layout-one.html"><span>Single Layouts</span></a>
                                                            <ul class="submenu">
                                                                <li><a href="blog-post-layout-one.html"><span>Left Sidebar</span></a></li>
                                                                <li><a href="blog-post-right-sidebar.html"><span>Right Sidebar</span></a></li>
                                                                <li><a href="blog-post-no-sidebar.html"><span>No Sidebar</span></a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                                <div class="header-search-form ">
                                    <form action="#" class="search-form-top style-03 ">
                                        <input class="search-field" type="text" placeholder="Search…" />
                                        <button class="search-submit">
                                            <i class="search-btn-icon fa fa-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      

    </div>
      </>
   )
}

export default Header
