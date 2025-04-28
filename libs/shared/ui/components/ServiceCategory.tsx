import React from 'react';

interface ServiceCategoryProps {
  name: string;
  description: string;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ name, description }) => {
  return (
    <div className="service-category p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCategory;
