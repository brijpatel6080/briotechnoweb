import React from 'react'
import Heading from './Heading'

function Aboutus() {
    return (
        <>


            <div class="feature-large-images-wrapper pt-0 pb-40">
                <div class="container">


                    <Heading titleGray='About Briotechno' titleBlack={`We run all kinds of IT services that \n vow your`} titleBlue='success' />


                    <div class="container cybersecurity-about-box mt-20">
                        <div class="row">
                            <div class="col-lg-6 ">
                                <div class="modern-number-01 number-two">
                                    <h2 class="heading  mr-5"><span class="mark-text">06</span>Years’ Experience in IT</h2>
                                    <h5 class="heading mt-30 mb-20">We’ve been triumphing all these <span class="text-color-primary"> 06 years. </span> Sacrifices are made up with success. </h5>

                                    <div class="text" style={{ textAlign: 'justify' }}>Briotechno was founded in 2015 as an IT consultancy and digital enabler, and grew to become a worldwide presence in countries like the United States, Canada, Dubai, Singapore, the United Kingdom, and more. From day one of our inception, we have firmly believed in our potential to be a leading development firm, had confidence in our teams’ kick-butt expertise, and we swore by our computer codes. It is not just our work but what we’re known for! Our needle-like focus on our clients’ strengths and weaknesses is what sets us apart from our competitors. Also, it is our teams’ creativity and curious nature that help us come up with innovative approaches to tackling challenges. This perfect blend is what helps us deliver a first-class digital product</div>
                                </div>



                            </div>


                            <div class="col-lg-5 ml-auto">
                                <div class="faq-wrapper">
                                    <div id="accordion">
                                        
                                        <div class="card">
                                            <div class="card-header" id="headingOne">
                                                <h5 class="mb-0">
                                                    <button class="btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Vision <span> <i class="fas fa-chevron-down"></i>
                                                            <i class="fas fa-chevron-up"></i> </span>
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapseOne" class="show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div class="card-body">
                                                    <p>We shape your ideas and transform them into an alluring reality. Our team of experts is fully committed to offering quality solutions to help companies deliver superior customer experience. With our augmented and sharp vision, we also aim to support businesses of all sizes to achieve the desired goals.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-header" id="headingTwo">
                                                <h5 class="mb-0">
                                                    <button class="btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Mission<span> <i class="fas fa-chevron-down"></i>
                                                            <i class="fas fa-chevron-up"></i> </span>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                <div class="card-body">
                                                    <p>Briotechno goal is to offer the best-in-class solutions coupled with advanced technologies, skills, and tools. We have created forward-looking infrastructural resources to help companies foster their collaborations and creativity. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingThree">
                                                <h5 class="mb-0">
                                                    <button class="btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Our Quality Policy <span> <i class="fas fa-chevron-down"></i>
                                                            <i class="fas fa-chevron-up"></i> </span>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                <div class="card-body">
                                                    <p>The management and techies at Briotechno are determined to offer top-quality services that have the potential to surpass the expectations and demands of its customers. We are also committed to delivering solutions that are in line with the best industry standards and practices.</p>
                                                </div>
                                            </div>
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




export default Aboutus
