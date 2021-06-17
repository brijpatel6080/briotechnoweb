import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/icons/mitech-box-image-style-06-image-01-120x120.png'
import img2 from '../../assets/images/icons/mitech-box-image-style-06-image-02-120x120.png'
import img3 from '../../assets/images/icons/mitech-box-image-style-06-image-03-120x120.png'
import { TriangleBottom, TriangleTop } from '../../componets/Triangle'

function Feature() {
    return (
        <>

            <div class="row-separators-wrap triangle-top  big-triangle-style row-separators-bg " style={{ paddingTop: 80, paddingBottom: 110 }}>


                <TriangleTop />



                <div class="feature-icon-wrapper pt-0 pb-0">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="feature-list__three">
                                    <div class="row">
                                       

                                        <FeatureItem
                                            fa="fal fa-life-ring"
                                            title="Process-Oriented Approach"
                                            description="Our team of experts follows Agile and process-oriented development approaches for each task. We also maintain a holistic perspective for every project to ensure the end result meets your requirements."
                                        />
                                        <FeatureItem
                                            fa="fal fa-lock-alt"
                                            title="On-Time Delivery"
                                            description="At Briotechno, we are fully committed to working on your project and assure you a smooth and timely completion. We also keep you in the loop throughout the development process to prevent unnecessary hazards."
                                        />
                                        <FeatureItem
                                            fa="fal fa-lock-alt"
                                            title="100% Transparency"
                                            description="We firmly believe in having an open line of communication with our clients. We also understand the importance of letting the clients know exactly what they are paying for. So our team offers complete information about the work we do for them."
                                        />
                                        <FeatureItem
                                            fa="fal fa-lock-alt"
                                            title="Complete Support"
                                            description="We house a team of developers, project managers, and designers who are passionate about their work. Our teams will constantly provide daily updates and developments for your feedback and approval."
                                        />
                                        <FeatureItem
                                            fa="fal fa-lock-alt"
                                            title="Client Satisfaction"
                                            description="The satisfaction of our clients is our top priority and contributes to our continual improvement. And our client’s success motivates us to maintain and enhance our skills."
                                        />
                                        <FeatureItem
                                            fa="fal fa-lock-alt"
                                            title="Let’s Discuss"
                                            description="If you have an idea that you would like us to shape and transform into reality, schedule a meeting with us today!"
                                        />
                                       

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <TriangleBottom />
            </div>
        </>
    )
}

function FeatureItem(props) {
    const { fa, title, description } = props
    return (
        <>
            <div class="col-lg-4">
                <div class="grid-item animate">
                    <div class="ht-box-icon style-03">
                        <div class="icon-box-wrap">
                            <div class="content-header">
                                <div class="icon">
                                    <i class={fa}></i>
                                </div>
                                <h5 class="heading">
                                    {title}
                                </h5>
                            </div>
                            <div class="content">
                                <div class="text">{description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feature
