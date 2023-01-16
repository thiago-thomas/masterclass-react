import './Card.css'
import React from "react";

function Card(props) {
    return (
        <div className="Card">
            <div className="Header">
                {props.header}
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}

export default Card;