import { useState } from 'react';
import './DisplayCard.css';

const DisplayCard = ({ image, title, text }) => {


    return (
            <div class="col">
                <a href="">
                    <div class="card-flyer">
                        <div class="text-box">
                            <div class="image-box">
                                <img src={image} alt="" />
                            </div>
                            <div class="text-container">
                                <h6>{title}</h6>
                                <p>{text}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
    )
}

export default DisplayCard;