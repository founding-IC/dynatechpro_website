import React from 'react';
import PixelHero from '../components/sections/PixelHero';
import PixelServiceCards from '../components/sections/PixelServiceCards';
import DetailedServices from '../components/sections/DetailedServices';
import PurpleCTA from '../components/sections/PurpleCTA';
import TrustIndicators from '../components/sections/TrustIndicators';
import ProcessSection from '../components/sections/ProcessSection';
import IndustriesSection from '../components/sections/IndustriesSection';
import TwoColumnScroll from '../components/sections/TwoColumnScroll';
import ExpertiseShowcase from '../components/sections/ExpertiseShowcase';
import FinalCTA from '../components/sections/FinalCTA';

const PixelHome: React.FC = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Tabs and 3D Elements */}
      <PixelHero />
      
      {/* Trust Indicators & Client Stats */}
      {/*<TrustIndicators />*/}
      
      {/* Service Cards Section - What We Offer */}
      <PixelServiceCards />
      
      {/* Detailed Services (Software, Marketing, Teams) */}
      {/*<DetailedServices />*/}
      
      {/* Purple CTA Section - Redefine Your Online Presence */}
      <PurpleCTA />
      
      {/* 8-Step Process Section */}
      <ProcessSection />
      
      {/* Industries We Serve */}
      <IndustriesSection />
      
      {/* Interactive Technology Showcase */}
      <TwoColumnScroll />
      
      {/* Expertise Showcase with Skills */}
      {/*<ExpertiseShowcase />*/}
      
      {/* Final CTA Section */}
      <FinalCTA />
      
      {/* Empty White Section */}
      <section className="py-8 bg-white"></section>
    </main>
  );
};

export default PixelHome;