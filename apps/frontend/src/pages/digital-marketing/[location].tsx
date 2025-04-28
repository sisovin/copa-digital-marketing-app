import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { apiService } from '../../../libs/shared/data-access/api.service';
import { Service } from '../../../libs/shared/interfaces/service.interface';
import { SearchFilters } from '../../../libs/shared/ui/components/SearchFilters';

const DigitalMarketingLocationPage: React.FC = () => {
  const router = useRouter();
  const { location } = router.query;
  const [services, setServices] = useState<Service[]>([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    if (location) {
      fetchServices(location as string);
    }
  }, [location]);

  const fetchServices = async (location: string) => {
    try {
      const response = await apiService.get<Service[]>(`/services?location=${location}`);
      setServices(response);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    // Implement filter logic here
  };

  return (
    <div>
      <section className="hero">
        <h1>Services in {location}</h1>
        <SearchFilters onChange={handleFilterChange} />
      </section>

      <section className="services-list">
        <h2>Available Services</h2>
        <div className="grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <p>Price: ${service.price}</p>
              <p>Duration: {service.duration} minutes</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingLocationPage;
