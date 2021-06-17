import React from 'react'
import { Link } from 'react-router-dom'

function ScrollTop() {
    return (
        <>
            <Link href="#" className="scroll-top" id="scroll-top">
                <i className="arrow-top fal fa-long-arrow-up"></i>
                <i className="arrow-bottom fal fa-long-arrow-up"></i>
            </Link>
        </>
    )
}

export default ScrollTop
