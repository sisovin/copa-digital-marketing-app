import React from 'react';

interface RatingProps {
  value: number;
  max: number;
  onChange: (value: number) => void;
}

const Rating: React.FC<RatingProps> = ({ value, max, onChange }) => {
  const handleClick = (newValue: number) => {
    onChange(newValue);
  };

  return (
    <div className="rating">
      {Array.from({ length: max }, (_, index) => (
        <span
          key={index}
          className={`star ${index < value ? 'filled' : ''}`}
          onClick={() => handleClick(index + 1)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
