import React from 'react';
import { Star, Users, Award, TrendingUp } from 'lucide-react';

const TrustIndicators: React.FC = () => {
  const stats = [
    {
      number: '675+',
      label: 'Digital Experts',
      icon: <Users className="w-6 h-6 text-accent-blue" />
    },
    {
      number: '4200+',
      label: 'Projects Delivered',
      icon: <Award className="w-6 h-6 text-accent-green" />
    },
    {
      number: '97%',
      label: 'Client Satisfaction',
      icon: <TrendingUp className="w-6 h-6 text-accent-yellow" />
    }
  ];

  const clientLogos = [
    { name: 'Yale University', logo: 'yale' },
    { name: 'FBI', logo: 'fbi' },
    { name: 'Infosys', logo: 'infosys' },
    { name: 'Dubai Police', logo: 'dubai-police' },
    { name: 'Orange Business Services', logo: 'orange' },
    { name: 'KIA', logo: 'kia' },
    { name: 'Hitachi', logo: 'hitachi' },
    { name: 'World Health Organization', logo: 'who' },
    { name: 'Gartner', logo: 'gartner' },
    { name: 'Qatar Airways', logo: 'qatar' }
  ];

  return (
    <section className="section-wrapper section-padding-lg bg-white relative overflow-hidden">
      <div className="container-main">
        
        {/* Rating and Stats Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between section-gap">
          
          {/* Left Side - Rating */}
          <div className="flex items-center gap-8 mb-8 lg:mb-0">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded transform rotate-45"></div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-accent-yellow fill-current" />
                <span className="heading-tertiary text-primary-navy">4.5/5</span>
              </div>
              <span className="text-gray-600">based on 500+ reviews on</span>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-body-small">G</span>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-body-small">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-body-small">↓</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-background-section rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="heading-primary text-primary-navy mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <div className="bg-secondary/10 rounded-xl px-8 py-6 mb-8">
              <div className="heading-tertiary text-secondary mb-2">Trusted By</div>
              <div className="heading-primary text-primary-navy">2500+</div>
              <div className="heading-tertiary text-primary-navy">Companies</div>
              <div className="text-gray-600 mt-2">Globally</div>
              <div className="mt-4">
                <a href="#" className="text-secondary hover:text-secondary-dark font-medium underline">
                  See our clients →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
          
          {/* Yale University */}
          <div className="flex items-center justify-center h-16 px-4">
            <span className="text-body-large font-bold text-blue-800">Yale University</span>
          </div>

          {/* FBI Badge */}
          <div className="flex items-center justify-center h-16 px-4">
            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-body-small">FBI</span>
            </div>
          </div>

          {/* Infosys */}
          <div className="flex items-center justify-center h-16 px-4">
            <span className="text-body-large font-bold text-blue-600">Infosys</span>
          </div>

          {/* Dubai Police */}
          <div className="flex items-center justify-center h-16 px-4">
            <div className="text-center">
              <div className="text-body-small font-bold text-green-600">مشرطة دبي</div>
              <div className="text-xs text-green-600">DUBAI POLICE</div>
            </div>
          </div>

          {/* Orange Business Services */}
          <div className="flex items-center justify-center h-16 px-4">
            <div className="text-center">
              <div className="bg-orange-500 text-white px-2 py-1 rounded text-body-small font-bold">orange</div>
              <div className="text-xs text-gray-600 mt-1">Business Services</div>
            </div>
          </div>

          {/* KIA */}
          <div className="flex items-center justify-center h-16 px-4">
            <span className="heading-tertiary text-red-600">KIA</span>
          </div>

          {/* Hitachi */}
          <div className="flex items-center justify-center h-16 px-4">
            <span className="text-body-large font-bold text-red-500">HITACHI</span>
          </div>

          {/* WHO */}
          <div className="flex items-center justify-center h-16 px-4">
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-1">
                <span className="text-white font-bold text-body-small">WHO</span>
              </div>
              <div className="text-xs text-blue-600">World Health Organization</div>
            </div>
          </div>

          {/* Gartner */}
          <div className="flex items-center justify-center h-16 px-4">
            <span className="text-body-large font-bold text-blue-700">Gartner</span>
          </div>

          {/* Qatar Airways */}
          <div className="flex items-center justify-center h-16 px-4">
            <div className="text-center">
              <span className="text-body-large font-bold text-purple-800">QATAR</span>
              <div className="text-xs text-purple-600">AIRWAYS الخطوط</div>
            </div>
          </div>
        </div>

        {/* Bottom Achievement Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary via-primary-light to-secondary rounded-2xl p-8 text-white relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
            
            <div className="relative z-10">
              <h3 className="heading-primary mb-4">Driving Growth for Businesses</h3>
              <h4 className="heading-tertiary mb-6">of All-sizes</h4>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Led by experts and backed by tech, we are helping businesses hit their revenue 
                goals in ever-evolving digital landscape.
              </p>
              
              {/* Achievement Stats */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="heading-tertiary">✓ 4200+ Project Launched</div>
                </div>
                <div className="text-center">
                  <div className="heading-tertiary">✓ 20+ Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="heading-tertiary">✓ 2500+ Satisfied Customers</div>
                </div>
              </div>
            </div>

            {/* Floating Achievement Badge */}
            <div className="absolute -top-4 -right-4 bg-accent-yellow text-primary-navy rounded-full w-20 h-20 flex items-center justify-center font-bold text-body-small shadow-lg animate-bounce-slow">
              <div className="text-center">
                <div className="text-lg">★</div>
                <div className="text-xs">TOP</div>
                <div className="text-xs">RATED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;