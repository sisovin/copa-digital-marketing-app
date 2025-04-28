import React from 'react';

interface RatingStarsProps {
  rating: number;
  maxRating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, maxRating }) => {
  return (
    <div className="rating-stars flex">
      {Array.from({ length: maxRating }, (_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? 'filled' : ''}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
