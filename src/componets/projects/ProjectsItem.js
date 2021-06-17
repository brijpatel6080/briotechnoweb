import React from 'react'
import { Link } from 'react-router-dom'

function Projects_item(props) {
    return (
        <>
            <div className="swiper-slide">
                <Link to={props.path} className="projects-wrap style-01 wow move-up">
                    <div className="projects-image-box">
                        <div className="projects-image">
                            <img className="img-fluid" src={props.src} alt="" />
                        </div>
                        <div className="content">
                            <h6 className="heading">{props.title}</h6>
                            <div className="post-categories">{props.subtitle}</div>
                            <div className="text">{props.detail}</div>
                            <div className="box-projects-arrow">
                                <span className="button-text">{props.btn}</span>
                                <i className="fa fa-long-arrow-right ml-1"></i>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Projects_item
