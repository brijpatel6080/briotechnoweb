import React from 'react'
import '../../App.css'
import { TriangleBottom, TriangleTop } from '../Triangle'
import './Banner.css'

const Banner =(props)=> {
    const {Style, title, detail, image} = props
    return (
        <>
            <div className='bgcolor'>
                <div class={`row-separators-wrap triangle-top  big-triangle-style row-separators-bg11 separators-space bannerStyle ${Style} `}
                    style={{ paddingTop: 90, paddingBottom: 140, backgroundImage: `url(${image})`,  }}>


                    {/* <TriangleTop /> */}


                    <div class="about-banner-wrap banner-space about-us-top-bg"
                    // style={{ backgroundImage: `url(${props.image})` }}
                    >
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8 ml-auto mr-auto">
                                    <div class="about-banner-content text-center">
                                        <h1 class="mb-15 text-white page-title">{title}</h1>
                                        <h5 class="font-weight--normal text-white">{detail} </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <TriangleBottom />
                </div>
            </div>
        </>
    )
}

export default Banner
