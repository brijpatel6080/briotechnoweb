import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './Projects.css'
import ProjectsItem from './ProjectsItem';
import img1_project from '../../assets/images/projects/case-study-03-480x298.jpg';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function Projects() {
    return (
        <>
            <div style={{ background: '#f5f5f5' }}>
                <div className="projects-wrapper projectinfotechno-bg section-space--ptb_100aaa pt-50 pb-40" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title-wrap text-center section-space--mb_20">
                                    <h6 className="section-sub-title mb-10">Completed Projects</h6>
                                    <h3 className="heading">Proud projects that<span className="text-color-primary">  make us stand out</span></h3>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="projects-wrap swiper-container projects-slider__container">
                                    <div className="swiper-wrapper">

                                    <Carousel
                                            // deviceType={deviceType}
                                            ssr={true}
                                            slidesToSlide={1}
                                            containerClass="carousel-with-custom-dots"
                                            responsive={responsive}
                                            partialVisible={true}
                                            infinite={true}
                                            autoPlay={true}
                                            showDots={false}
                                            removeArrowOnDeviceType={["tablet", "desktop"]}
                                            keyBoardControl={true}
                                            autoPlaySpeed={2000}
                                            transitionDuration={1000}
                                            // centerMode={true}
                                        >

                                            <ProjectsItem
                                                src={img1_project}
                                                title='Aqua – Research and Energy'
                                                subtitle='Cyber Security'
                                                detail='The prospects for a company operating in this new market are varied and exciting. The potential …'
                                                btn='View case study'
                                            />
                                            <ProjectsItem
                                                src={img1_project}
                                                title='Aqua – Research and Energy'
                                                subtitle='Cyber Security'
                                                detail='The prospects for a company operating in this new market are varied and exciting. The potential …'
                                                btn='View case study'
                                            />
                                            <ProjectsItem
                                                src={img1_project}
                                                title='Aqua – Research and Energy'
                                                subtitle='Cyber Security'
                                                detail='The prospects for a company operating in this new market are varied and exciting. The potential …'
                                                btn='View case study'
                                            />
                                            <ProjectsItem
                                                src={img1_project}
                                                title='Aqua – Research and Energy'
                                                subtitle='Cyber Security'
                                                detail='The prospects for a company operating in this new market are varied and exciting. The potential …'
                                                btn='View case study'
                                            />

                                        </Carousel>

                                    </div>
                                    <div className="swiper-pagination swiper-pagination-project mt_20"></div>
                                </div>

                                <div className="section-under-heading text-center section-space--mt_20">Challenges are just opportunities in disguise. <a href="#">Take the challenge!</a></div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Projects
