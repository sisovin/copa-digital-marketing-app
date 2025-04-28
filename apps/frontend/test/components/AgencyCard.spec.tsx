import React from 'react';
import { render, screen } from '@testing-library/react';
import AgencyCard from '../../../src/components/AgencyCard';

describe('AgencyCard', () => {
  const mockAgency = {
    name: 'Test Agency',
    description: 'This is a test agency.',
    website: 'https://testagency.com',
    phone: '123-456-7890',
    email: 'info@testagency.com',
    address: '123 Test St, Test City, TX',
  };

  it('should render the agency name', () => {
    render(<AgencyCard {...mockAgency} />);
    const agencyName = screen.getByText(mockAgency.name);
    expect(agencyName).toBeInTheDocument();
  });

  it('should render the agency description', () => {
    render(<AgencyCard {...mockAgency} />);
    const agencyDescription = screen.getByText(mockAgency.description);
    expect(agencyDescription).toBeInTheDocument();
  });

  it('should render the agency website', () => {
    render(<AgencyCard {...mockAgency} />);
    const agencyWebsite = screen.getByText(mockAgency.website);
    expect(agencyWebsite).toBeInTheDocument();
  });

  it('should render the agency phone', () => {
    render(<AgencyCard {...mockAgency} />);
    const agencyPhone = screen.getByText(mockAgency.phone);
    expect(agencyPhone).toBeInTheDocument();
  });

  it('should render the agency email', () => {
    render(<AgencyCard {...mockAgency} />);
    const agencyEmail = screen.getByText(mockAgency.email);
    expect(agencyEmail).toBeInTheDocument();
  });

  it('should render the agency address', () => {
    render(<AgencyCard {...mockAgency} />);
    const agencyAddress = screen.getByText(mockAgency.address);
    expect(agencyAddress).toBeInTheDocument();
  });
});
