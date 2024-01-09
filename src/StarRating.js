import React, {useState} from "react";
import {FaStar} from "react-icons/fa";

const StarRating = () => {
    const [rating, setRating]= useState(null);
    const [hover, setHover]= useState(null);
    return (
      <div>
        {[...Array(5)].map((star, index) => {
          const ratingVal = index + 1;
          return (<label>
            <input type="radio" name="rating" 
                   value={ratingVal}
                   onClick={() => setRating(ratingVal)}                   
            />
            <FaStar size={75} className="star"                      
                    color={ratingVal <= (hover||rating)? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHover(ratingVal)}
                    onMouseLeave={() => setHover(null)}
            />
            </label>)
        })}
      <p>The rating is {rating}</p>
      </div>
    );
  };

export default StarRating;