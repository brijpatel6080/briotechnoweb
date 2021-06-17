import React from 'react'
import { Link } from 'react-router-dom'

function Footer_links(props) {
    return (
        <>
             <li><Link to={props.path} className="hover-style-link"> {props.title} </Link></li>
        </>
    )
}

export default Footer_links
