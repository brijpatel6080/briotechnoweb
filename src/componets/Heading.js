import React from 'react'

const Heading = (props) => {
    const {titleGray, titleBlack, titleBlue, titleWhite} = props;
    return (
        <>
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-wrapper text-center section-space--mb_30 wow move-up">
                        <h6 class="section-sub-title mb-10">{titleGray}</h6>
                        <h3 class="section-title">{titleBlack} <span class="text-color-primary">{titleBlue}</span> 
                        {/* or */}
                        <span class="text-color-primary text-white">{titleWhite}</span>
                         </h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heading
