import React from "react";

export const RatingStar = ({ rating }) => {
  const fullStars = Math.floor(rating / 2);
  const hasHalfStar = (rating / 2) % 1 !== 0;

  const renderFullStars = () => {
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-500 text-2xl">
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="flex items-center">
      {renderFullStars()}
      {hasHalfStar && <span className="text-yellow-500 text-2xl">&#9734;</span>}
    </div>
  );
};
