import React from 'react';
import "../index.css";
import "../styles/cards.css"

const Card = ({title, image}) => {

    return (
    <div className="cards">
        <div className="cards__single">
            <img width={220} src={image} alt="" />
        

            <div className="cards__title">
                <p>{title}</p>
            </div>

            <div className="cards__price">
                <b>12 999 руб</b>
            </div>
        </div>
    </div>
    )
}

export default Card;