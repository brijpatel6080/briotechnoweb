import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
// import logo from '../../assets/images/logo/logo-dark.png'
import logo from '../../assets/images/logo/briotechno_logo.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Topheader from './TopHeader'

function Header() {
   const [click, setClick] = useState(false);
   const [button, setButton] = useState(true);
   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);
   const showButton = () => {
      if (window.innerWidth <= 960) {
         setButton(false)
      } else {
         setButton(true);
      }
   };
   useEffect(() => {
      showButton();
   }, [])
   window.addEventListener('resize', showButton);
   return (
      <>
         <nav >
            <div className="header-area header-area--default">



               {/* <Topheader /> */}
               <div id='navbar' className="header-bottom-wrap header-sticky is-sticky">
                  <div className="container">
                     <div className="row">
                        <div className="col-lg-12">
                           <div className="header default-menu-style position-relative">
                              <div className="header__logo p-0">
                                 <Link to="/" className="header__logo" >
                                    <img src={logo} />
                                 </Link>
                              </div>
                              <div className="header-midle-box">
                                 <div className="header-bottom-wrap d-md-block d-none">
                                    <div className="header-bottom-inner">
                                       <div className="header-bottom-left-wrap">
                                          <div className="header__navigation d-none d-xl-block">
                                             <nav className="navigation-menu primary--menu">
                                                <ul className='mb-0'>
                                                   <li className="has-children--multilevel-submenu">
                                                      <NavLink to='/' exact className='nav-links' >Home</NavLink>
                                                   </li>
                                                   <li className="has-children--multilevel-submenu">
                                                      <NavLink to='/about' exact className='nav-links'
                                                      // onClick={closeMobileMenu}
                                                      >About Us</NavLink>
                                                   </li>
                                                   <li className="has-children has-children--multilevel-submenu">
                                                      <NavLink to="/OurServices" exact>Services <ExpandMoreIcon className="dropdown-icon" /></NavLink>
                                                      <ul className="submenu">
                                                         <li class="has-children11">
                                                            <NavLink to='/MobileAppDevelopment' exact className='nav-links' >Mobile App Development</NavLink>
                                                            {/* <ul className="submenu">
                                                               <li>
                                                                  <NavLink to='/11' exact className='nav-links' >iPhone App Development</NavLink>
                                                               </li>
                                                               <li>
                                                                  <NavLink to='/AndroidApp' exact className='nav-links' >Android App Development</NavLink>
                                                               </li>
                                                            </ul> */}
                                                         </li>
                                                         <li>
                                                            <NavLink to='/WebDevelopment' exact className='nav-links' >Web Development</NavLink>
                                                         </li>
                                                         <li>
                                                            <NavLink to='/ManualTesting' exact className='nav-links' >Manual Testing</NavLink>
                                                         </li>
                                                         {/* <li>
                                                            <NavLink to='' exact className='nav-links' >SEO & Digital Marketing</NavLink>
                                                         </li> */}
                                                      </ul>
                                                   </li>
                                                   <li className="has-children--multilevel-submenu">
                                                      <NavLink to='/Contact' exact className='nav-links' >Contact Us</NavLink>
                                                   </li>

                                                   {/* <li className="has-children--multilevel-submenu">
                                                      <NavLink to='/ListMobileApp' exact className='nav-links aa' >Mobile App</NavLink>
                                                   </li>
                                                   <li className="has-children--multilevel-submenu">
                                                      <NavLink to='/ListWebApp' exact className='nav-links aa' >Web App</NavLink>
                                                   </li> */}
                                                </ul>
                                             </nav>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="header-right-box">
                                 <div className="header-right-inner" id="hidden-icon-wrapper">


                                    <div class="swiper-container header-top-info-slider-werap top-info-slider__container">
                                       <div class="swiper-wrapper header-top-info-inner default-color">
                                          <div class="swiper-slide">
                                             <div class="info-item">
                                                <div class="info-icon">
                                                   <span class="fa fa-phone"></span>
                                                </div>
                                                <div class="info-content">
                                                   <h6 class="info-title"><a href="tel:01228899900">0122 8899900</a></h6>
                                                   <div class="info-sub-title"><a href="mailto:Info@briotechno.com">Info@briotechno.com</a></div>
                                                </div>
                                             </div>
                                          </div>

                                       </div>
                                    </div>


                                    {/* 
                        <div className="header-search-form default-search">
                           <form action="#" className="search-form-top">
                              <input className="search-field" type="text" placeholder="Search…" />
                              <button className="search-submit">
                              <i className="search-btn-icon fa fa-search"></i>
                              </button>
                           </form>
                        </div>
                        */}
                                 </div>
                                 <div
                                    // Add class active
                                    onClick={() => {
                                       var elementid = document.getElementById("mobile-menu-overlay")
                                       //  console.log("elementid", elementid)
                                       elementid.className = "mobile-menu-overlay active"
                                    }}

                                    className="mobile-navigation-icon d-block d-xl-none" id="mobile-menu-trigger">
                                    <i></i>
                                 </div>

                                 {/* <div className="hidden-icons-menu d-block d-md-none" id="hidden-icon-trigger">
                                 <a href="javascript:void(0)">
                                    <i className="far fa-ellipsis-h-alt"></i>
                                 </a>
                              </div> */}

                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </nav>
      </>
   )
}
export default Header