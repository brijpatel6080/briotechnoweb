import React from 'react'
import './Counter.css';

function CounterItem(props) {
    return (
        <>
            <div className="grid-item  wow move-up">
                <div className="fun-fact--one text-center">
                    <h5 className="fun-fact__title">{props.title}</h5>
                    <div className="fun-fact__count counter">{props.counter}</div>
                    <span className="fun-fact__text">{props.subject} </span>
                </div>
            </div>
        </>
    )
}

export default CounterItem
