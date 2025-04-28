import React from 'react';
import { render, screen } from '@testing-library/react';
import RatingStars from '../../../src/components/RatingStars';

describe('RatingStars', () => {
  const mockRating = {
    rating: 4,
    maxRating: 5,
  };

  it('should render the correct number of filled stars', () => {
    render(<RatingStars {...mockRating} />);
    const filledStars = screen.getAllByText('★').filter(star => star.classList.contains('filled'));
    expect(filledStars.length).toBe(mockRating.rating);
  });

  it('should render the correct number of empty stars', () => {
    render(<RatingStars {...mockRating} />);
    const emptyStars = screen.getAllByText('★').filter(star => !star.classList.contains('filled'));
    expect(emptyStars.length).toBe(mockRating.maxRating - mockRating.rating);
  });
});
