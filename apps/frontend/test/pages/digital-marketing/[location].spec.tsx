import React from 'react';
import { render, screen } from '@testing-library/react';
import DigitalMarketingLocationPage from '../../../../src/pages/digital-marketing/[location]';

describe('DigitalMarketingLocationPage', () => {
  it('should render the hero section with search bar', () => {
    render(<DigitalMarketingLocationPage />);
    const heroSection = screen.getByText(/Services in/i);
    expect(heroSection).toBeInTheDocument();
    const searchBar = screen.getByPlaceholderText(/Search/i);
    expect(searchBar).toBeInTheDocument();
  });

  it('should render the services list', () => {
    render(<DigitalMarketingLocationPage />);
    const servicesListSection = screen.getByText(/Available Services/i);
    expect(servicesListSection).toBeInTheDocument();
  });

  it('should render service cards with service details', () => {
    const mockServices = [
      {
        id: '1',
        name: 'SEO Optimization',
        description: 'Improve your website ranking on search engines.',
        price: 100,
        duration: 60,
      },
      {
        id: '2',
        name: 'PPC Campaign',
        description: 'Run pay-per-click campaigns to drive traffic.',
        price: 200,
        duration: 30,
      },
    ];

    render(<DigitalMarketingLocationPage />);
    mockServices.forEach((service) => {
      const serviceName = screen.getByText(service.name);
      expect(serviceName).toBeInTheDocument();
      const serviceDescription = screen.getByText(service.description);
      expect(serviceDescription).toBeInTheDocument();
      const servicePrice = screen.getByText(`Price: $${service.price}`);
      expect(servicePrice).toBeInTheDocument();
      const serviceDuration = screen.getByText(`Duration: ${service.duration} minutes`);
      expect(serviceDuration).toBeInTheDocument();
    });
  });
});
