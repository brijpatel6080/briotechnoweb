import React, { useEffect } from 'react';
import Heading from '../Heading';
import './ServiceFirstChild.css'

const ServiceFirstChild = (props) => {

    const { aboutDetail, titleGray, titleBlack, titleBlue, titleWhite,
        ItemTitle1,ItemTitle2,ItemTitle3, ItemTitle4,
        ItemImage1, ItemImage2, ItemImage3, ItemImage4,
        ItemeDetail1, ItemeDetail2, ItemeDetail3, ItemeDetail4
    } = props

    useEffect(() => {
        window.scrollTo({
            top: 0,
            // behavior: "smooth"
        });
    }, [])

    return (
        <>


            <div class="our-history-wrapper pt-0 ">
                <div class="container">


                    <Heading titleGray={titleGray} titleBlack={titleBlack} titleBlue={titleBlue} titleWhite={titleWhite} />

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title-wrap text-center section-space--mb_30">
                                <p class="title-dec-text text-white">{aboutDetail}</p>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-area pt-20">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="ht-timeline style-01">
                                    <ul class="tm-timeline-list ht-animation-queue">
                                        <li class="line"></li>


                                        <Item
                                            ItemTitle={ItemTitle1}
                                            ItemImage={ItemImage1}
                                            ItemeDetail={ItemeDetail1}
                                        />
                                        <Item
                                            ItemTitle={ItemTitle2}
                                            ItemImage={ItemImage2}
                                            ItemeDetail={ItemeDetail2}
                                        />
                                        <Item
                                            ItemTitle={ItemTitle3}
                                            ItemImage={ItemImage3}
                                            ItemeDetail={ItemeDetail3}
                                        />
                                        <Item
                                            ItemTitle={ItemTitle4}
                                            ItemImage={ItemImage4}
                                            ItemeDetail={ItemeDetail4}
                                        />


                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}




const Item = (props) => {

    const { ItemTitle, ItemImage, ItemeDetail } = props
    return (
        <>
            <li class="item animate">
                <div class="dots">
                    <div class="middle-dot"></div>
                </div>

                <div class="row">
                    <div class="col-md-6 timeline-col left timeline-feature">
                        <div class="inner">
                            <div class="date-wrap">
                                <h2 class="year"></h2>
                            </div>

                            <div class="photo">
                                <img src={ItemImage} alt="" class="img-fluid ItemImage" height='250' />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 timeline-col right timeline-info">
                        <div class="inner">
                            <div class="content-wrap">
                                <div class="content-body">
                                    <h6 class="heading text-white">{ItemTitle}</h6>

                                    <div class="text text-white">{ItemeDetail}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

        </>
    )
}

export default ServiceFirstChild
