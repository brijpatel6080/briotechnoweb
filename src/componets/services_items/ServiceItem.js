import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/style.css';

function Service_item(props) {
    return (

        <>
            <div className="col-lg-4 col-md-6 serviceitem wow move-up animated" style={{visibility: 'visible'}}>
                <div className="ht-box-images style-01">
                    <div className="image-box-wrap mt-20">
                        <div className="box-image">
                            <img className="img-fulid" src={props.src} alt="Services" />
                        </div>
                        <div className="content">
                            <h5 className="heading">{props.title} </h5>
                            <div className="text">{props.detail}</div>
                            <div className="circle-arrow">
                                <div className="middle-dot"></div>
                                <div className="middle-dot dot-2"></div>
                                <Link to={props.path}> 
                                    {/* <i className="far fa-long-arrow-right"></i> */}
                                    {props.fontA}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


           
        </>
    )
}

export default Service_item
