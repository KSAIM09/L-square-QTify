import React from 'react'
import "./Card.css";
import Rectangle from "../../Assets/Rectangle.png";

const Card = () => {
    return (
        <div className='Album_Cont'>
            <div className='Album_card'>
                <div className='Album_card_image'>
                    <img src={Rectangle} alt='img' />
                </div>
                <div className='Album_card_text'>
                    <h3>100 Follows </h3>
                </div>
            </div>
            <h3 className='Album_title'>New BollyWood</h3>
        </div>
    );
};

export default Card;