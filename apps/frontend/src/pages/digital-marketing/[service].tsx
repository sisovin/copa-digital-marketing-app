import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { apiService } from '../../../libs/shared/data-access/api.service';
import { Service } from '../../../libs/shared/interfaces/service.interface';
import { SearchFilters } from '../../../libs/shared/ui/components/SearchFilters';

const DigitalMarketingServicePage: React.FC = () => {
  const router = useRouter();
  const { service } = router.query;
  const [services, setServices] = useState<Service[]>([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    if (service) {
      fetchServices(service as string);
    }
  }, [service]);

  const fetchServices = async (service: string) => {
    try {
      const response = await apiService.get<Service[]>(`/services?service=${service}`);
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
        <h1>Services for {service}</h1>
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

export default DigitalMarketingServicePage;
