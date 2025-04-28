import React from 'react';
import { render, screen } from '@testing-library/react';
import DigitalMarketingLandingPage from '../../../../src/pages/digital-marketing/index';

describe('DigitalMarketingLandingPage', () => {
  it('should render the hero section with search bar', () => {
    render(<DigitalMarketingLandingPage />);
    const heroSection = screen.getByText(/Welcome to Digital Marketing/i);
    expect(heroSection).toBeInTheDocument();
    const searchBar = screen.getByPlaceholderText(/Search/i);
    expect(searchBar).toBeInTheDocument();
  });

  it('should render the service categories grid', () => {
    render(<DigitalMarketingLandingPage />);
    const serviceCategoriesSection = screen.getByText(/Service Categories/i);
    expect(serviceCategoriesSection).toBeInTheDocument();
    const seoCategory = screen.getByText(/SEO/i);
    expect(seoCategory).toBeInTheDocument();
    const ppcCategory = screen.getByText(/PPC/i);
    expect(ppcCategory).toBeInTheDocument();
    const contentMarketingCategory = screen.getByText(/Content Marketing/i);
    expect(contentMarketingCategory).toBeInTheDocument();
    const socialMediaMarketingCategory = screen.getByText(/Social Media Marketing/i);
    expect(socialMediaMarketingCategory).toBeInTheDocument();
  });

  it('should render the how it works section', () => {
    render(<DigitalMarketingLandingPage />);
    const howItWorksSection = screen.getByText(/How It Works/i);
    expect(howItWorksSection).toBeInTheDocument();
    const step1 = screen.getByText(/Step 1: Search for services/i);
    expect(step1).toBeInTheDocument();
    const step2 = screen.getByText(/Step 2: Compare agencies/i);
    expect(step2).toBeInTheDocument();
    const step3 = screen.getByText(/Step 3: Contact and hire/i);
    expect(step3).toBeInTheDocument();
  });
});
