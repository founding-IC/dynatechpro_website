import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, CheckCircle, Star, Award } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="section-wrapper py-8 bg-secondary relative overflow-hidden" style={{backgroundColor: '#261790'}}>
      
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full transform -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full transform translate-x-48 translate-y-48"></div>
      
      <div className="relative z-10">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Side Content */}
          <div className="text-white text-center lg:text-left">
            <h2 className="heading-tertiary mb-3">
              Got a Project in Mind?
            </h2>
            <p className="text-body text-white/90 mb-4">
              Explore our digital solutions to help your business stay at the forefront of technology.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-secondary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              CONTACT US
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Statistics Bar */}
          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-white" />
              <span className="font-semibold text-white">100+ Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-white" />
              <span className="font-semibold text-white">100% Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-white" />
              <span className="font-semibold text-white">100+ Projects</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;