import React from 'react';
import { render, screen } from '@testing-library/react';
import ServiceCategory from '../../../src/components/ServiceCategory';

describe('ServiceCategory', () => {
  const mockCategory = {
    name: 'Test Category',
    description: 'This is a test category.',
  };

  it('should render the category name', () => {
    render(<ServiceCategory {...mockCategory} />);
    const categoryName = screen.getByText(mockCategory.name);
    expect(categoryName).toBeInTheDocument();
  });

  it('should render the category description', () => {
    render(<ServiceCategory {...mockCategory} />);
    const categoryDescription = screen.getByText(mockCategory.description);
    expect(categoryDescription).toBeInTheDocument();
  });
});
