import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchFilters from '../../../src/components/SearchFilters';

describe('SearchFilters', () => {
  const mockFilterOptions = {
    Category: ['Category 1', 'Category 2', 'Category 3'],
    Location: ['Location 1', 'Location 2', 'Location 3'],
  };

  const mockSelectedFilters = {
    Category: 'Category 1',
    Location: 'Location 1',
  };

  const mockOnChange = jest.fn();

  it('should render filter options', () => {
    render(
      <SearchFilters
        filterOptions={mockFilterOptions}
        selectedFilters={mockSelectedFilters}
        onChange={mockOnChange}
      />
    );

    const categorySelect = screen.getByLabelText('Category');
    const locationSelect = screen.getByLabelText('Location');

    expect(categorySelect).toBeInTheDocument();
    expect(locationSelect).toBeInTheDocument();
  });

  it('should call onChange when a filter is changed', () => {
    render(
      <SearchFilters
        filterOptions={mockFilterOptions}
        selectedFilters={mockSelectedFilters}
        onChange={mockOnChange}
      />
    );

    const categorySelect = screen.getByLabelText('Category');
    fireEvent.change(categorySelect, { target: { value: 'Category 2' } });

    expect(mockOnChange).toHaveBeenCalledWith({
      ...mockSelectedFilters,
      Category: 'Category 2',
    });
  });

  it('should render the correct selected filter values', () => {
    render(
      <SearchFilters
        filterOptions={mockFilterOptions}
        selectedFilters={mockSelectedFilters}
        onChange={mockOnChange}
      />
    );

    const categorySelect = screen.getByLabelText('Category');
    const locationSelect = screen.getByLabelText('Location');

    expect(categorySelect.value).toBe('Category 1');
    expect(locationSelect.value).toBe('Location 1');
  });
});
