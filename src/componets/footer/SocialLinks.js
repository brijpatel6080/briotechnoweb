import React from 'react'






import { Link } from 'react-router-dom'

function SocialLinks(props) {
    return (
        <>
            <li className="item">
                <Link to={props.path}
                 target="_blank" aria-label={props.popup} className="social-link hint--bounce hint--top hint--primary">
                    {/* <i className="fab fa-twitter link-icon"></i> */}
                    {props.fontA}
                </Link>
            </li>
        </>
    )
}

export default SocialLinks
