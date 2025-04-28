import React from 'react';
import { AgencyCard } from '../../../libs/shared/ui/components/AgencyCard';
import { ServiceCategory } from '../../../libs/shared/ui/components/ServiceCategory';
import { SearchFilters } from '../../../libs/shared/ui/components/SearchFilters';

const DigitalMarketingLandingPage: React.FC = () => {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to Digital Marketing</h1>
        <SearchFilters />
      </section>

      <section className="service-categories">
        <h2>Service Categories</h2>
        <div className="grid">
          <ServiceCategory name="SEO" description="Search Engine Optimization" />
          <ServiceCategory name="PPC" description="Pay Per Click" />
          <ServiceCategory name="Content Marketing" description="Content Creation and Distribution" />
          <ServiceCategory name="Social Media Marketing" description="Social Media Management" />
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>Step 1: Search for services</p>
        <p>Step 2: Compare agencies</p>
        <p>Step 3: Contact and hire</p>
      </section>
    </div>
  );
};

export default DigitalMarketingLandingPage;
