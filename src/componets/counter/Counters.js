import React, {useEffect, useState} from 'react'
import CounterItem from './CounterItem';
import './Counter.css';


function Counters() {
    return (
        <>
        {/* <div class="row-separators-wrap triangle-bottom row-separators-bg section-space--ptb_120"> */}


        
             <div className="fun-fact-wrapper Count" >
                <div className="container">
                    <div className="fun-fact-grid-4">
                        <CounterItem 
                            title='Successfully work'
                            counter='30'
                            subject='HAPPY CLIENTS'
                        />
                        <CounterItem 
                            title='Successfully completed'
                            counter='25'
                            subject='FINISHED PROJECTS'
                        />
                        <CounterItem 
                            title='Recruit more than'
                            counter='10'
                            subject='SKILLED EXPERTS'
                        />
                        {/* <CounterItem 
                            title='Blog update'
                            counter='200'
                            subject='MEDIA POSTS'
                        /> */}
                    </div>
                </div>
            </div>

            {/* <div class="vc_row-separator triangle bottom"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                        preserveAspectRatio="none" viewBox="0 0 0.156661 0.1">
                        <polygon
                            points="0.156661,3.93701e-006 0.156661,0.000429134 0.117665,0.05 0.0783307,0.0999961 0.0389961,0.05 -0,0.000429134 -0,3.93701e-006 0.0783307,3.93701e-006 ">
                        </polygon>
                    </svg>
                </div>

                </div> */}

        </>
    )
}

export default Counters
