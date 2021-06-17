import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo/briotechno_logo.png'
import './Footer.css'


class MobileMenu extends Component {

    constructor(props) {
        super(props);
        this.state = { addClass: false }
    }

    toggle() {
        this.setState({ addClass: !this.state.addClass });
    }
    render() {

        let boxClass = ["mobile-menu-overlay"];
        if (this.state.addClass) {
            boxClass.push('active');
        }


        return (
            <>
                {/* <div className="mobile-menu-overlay" id="mobile-menu-overlay"> */}

                <div className="mobile-menu-overlay"
                    id="mobile-menu-overlay">
                    <div className="mobile-menu-overlay__inner">
                        <div className="mobile-menu-overlay__header">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-md-6 col-8">

                                        <div className="logo">
                                            <Link to='/' exact onClick={() => {
                                                document.getElementById("mobile-menu-overlay").className = "mobile-menu-overlay"
                                            }}>
                                                <img src={logo} className="img-fluid" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-4">

                                        <div className="mobile-menu-content text-right"
                                            // Remove class active
                                            onClick={() => {
                                                document.getElementById("mobile-menu-overlay").className = "mobile-menu-overlay"
                                            }}
                                        >
                                            <span className="mobile-navigation-close-icon" id="mobile-menu-close-trigger"></span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-menu-overlay__body">
                            <nav className="offcanvas-navigation">
                                <ul>
                                    <li className="has-children">
                                        <NavLink to='/' exact
                                            onClick={() => {
                                                document.getElementById("mobile-menu-overlay").className = "mobile-menu-overlay"
                                            }} >Home</NavLink>
                                    </li>
                                    <li className="has-children">
                                        <NavLink to='/about' exact
                                            onClick={() => {
                                                document.getElementById("mobile-menu-overlay").className = "mobile-menu-overlay"
                                            }}  >About us</NavLink>
                                    </li>
                                    <li className="has-children">
                                        <NavLink to=''>Services</NavLink>
                                        <ul className="sub-menu">
                                            <li><NavLink to='/MobileAppDevelopment' exact
                                                onClick={() => {
                                                    document.getElementById("mobile-menu-overlay").className = "mobile-menu-overlay"
                                                }} ><span>Mobile App Development</span></NavLink></li>
                                            <li><NavLink to='/WebDevelopment' exact onClick={() => {
                                                document.getElementById("mobile-menu-overlay").className = "mobile-menu-overlay"
                                            }}><span>Web Development</span></NavLink></li>
                                            <li><NavLink to='/ManualTesting' exact onClick={() => {
                                                document.getElementById("mobile-menu-overlay").className = "mobile-menu-overlay"
                                            }}><span>Manual Testing</span></NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <NavLink to='/Contact' exact onClick={() => {
                                            document.getElementById("mobile-menu-overlay").className = "mobile-menu-overlay"
                                        }}>Contact us</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default MobileMenu
