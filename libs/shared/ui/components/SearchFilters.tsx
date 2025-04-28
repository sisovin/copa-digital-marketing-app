import React from 'react';

interface SearchFiltersProps {
  filterOptions: { [key: string]: string[] };
  selectedFilters: { [key: string]: string };
  onChange: (filters: { [key: string]: string }) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  filterOptions,
  selectedFilters,
  onChange,
}) => {
  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...selectedFilters, [key]: value };
    onChange(newFilters);
  };

  return (
    <div className="search-filters p-4 border rounded-lg shadow-md">
      {Object.keys(filterOptions).map((key) => (
        <div key={key} className="filter-option mb-4">
          <label className="block text-gray-700 font-bold mb-2">{key}</label>
          <select
            value={selectedFilters[key] || ''}
            onChange={(e) => handleFilterChange(key, e.target.value)}
            className="block w-full p-2 border rounded"
          >
            <option value="">Select {key}</option>
            {filterOptions[key].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default SearchFilters;
