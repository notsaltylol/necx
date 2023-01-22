import React from 'react';
import './Testimony.scss';

const Testimonials = ({stars, author, text}) => {


    const getStars = () => {
        let starsArray = [];
        for (let i = 0; i < Math.floor(stars); i++) {
            starsArray.push(<li><i class="material-icons">star</i></li>);
        }
        if(Math.ceil(stars) > stars) {
            starsArray.push(<li><i class="material-icons">star_half</i></li>);
        }
        for (let i = 0; i < 5 - Math.ceil(stars); i++) {
            starsArray.push(<li><i class="material-icons">star_outline</i></li>);
        }
        return starsArray;
    }

    return (

        <div class="review-card review-card--option-1 text-center">
            <div class="review-content">
                <p>"{text}"</p>
            </div>
            <div class="review-author">
                <ul class="ra-rating-star">
                    {getStars()}
                </ul>
                <div class="ra-author">- {author}</div>
            </div>
        </div>
    )
}

export default Testimonials