import React, { useState } from "react";
import "./StarRating.css";

const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  // add a callback function as prop and then call it with the value of "rating" when a grade is selected
  const handleRatingChange = (ratingValue) => {
    setRating(ratingValue);
    onRatingChange(ratingValue); // I call the callback function with the value of "rating"
  };

  return (
    <div className="rating">
      {" "}
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleRatingChange(ratingValue)} // I call the function handleRatingChange with the value of "rating"
            />

            <span
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              className={
                ratingValue <= (hover || rating)
                  ? "material-symbols-outlined star-selected"
                  : "material-symbols-rounded star-unselected"
              }
            >
              star
            </span>
          </label>
        );
      })}{" "}
      <p className="ratingStar">(rating is {rating} stars.)</p>
    </div>
  );
};

export default StarRating;
