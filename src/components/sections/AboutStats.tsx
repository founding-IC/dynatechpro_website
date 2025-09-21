import React from 'react';
import { Users, Award, Clock, Globe, TrendingUp, CheckCircle } from 'lucide-react';

const AboutStats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Projects Delivered',
      description: 'Successfully completed projects across various industries'
    },
    {
      icon: Award,
      number: '95%',
      label: 'Client Satisfaction',
      description: 'Consistently high client satisfaction ratings'
    },
    {
      icon: TrendingUp,
      number: '40%',
      label: 'Cost Reduction',
      description: 'Average cost reduction achieved for our clients'
    },
    {
      icon: Clock,
      number: '5+',
      label: 'Years Partnership',
      description: 'Average partnership duration with clients'
    },
    {
      icon: Globe,
      number: '25+',
      label: 'Countries Served',
      description: 'Global reach across multiple continents'
    },
    {
      icon: CheckCircle,
      number: '100%',
      label: 'Delivery Success',
      description: 'On-time project delivery track record'
    }
  ];

  const methodologySteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'Deep dive into your business goals, challenges, and requirements to create a comprehensive strategy.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Using Stanford design thinking methodology to architect scalable and user-centric solutions.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing and quality assurance throughout the process.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Seamless deployment with ongoing support and maintenance to ensure optimal performance.'
    }
  ];

  return (
    <section className="section-wrapper section-padding-lg bg-gradient-to-b from-gray-50 to-white">
      <div className="container-main">
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-spacing items-center section-gap">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-body-small font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              About DynaTechPro
            </div>
            
            <h2 className="heading-hero text-gray-900 mb-6">
              Transforming businesses with 
              <span className="text-purple-600 block">innovative technology</span>
            </h2>
            
            <p className="text-hero-subtitle text-gray-600 mb-8">
              Founded in 2020, DynaTechPro has been at the forefront of digital transformation, 
              helping businesses leverage technology for measurable growth and success.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Stanford Design Thinking</h4>
                  <p className="text-gray-600">We apply proven design thinking methodologies to ensure user-centric solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Outcome-Driven Approach</h4>
                  <p className="text-gray-600">Every solution is designed to deliver measurable business impact and ROI.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Rapid Prototyping</h4>
                  <p className="text-gray-600">Quick iterations and prototyping to validate ideas before full development.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="heading-tertiary text-gray-900">{stat.number}</div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{stat.label}</h3>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Methodology Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="heading-primary text-gray-900 mb-4">
              Our Proven <span className="text-purple-600">Methodology</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach that ensures successful project delivery 
              and measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-spacing">
            {methodologySteps.map((item, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="w-16 h-16 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-6">
                  {item.step}
                </div>

                {/* Connection Line (hidden on last item) */}
                {index < methodologySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-purple-200 -z-10"></div>
                )}

                <h4 className="heading-tertiary text-gray-900 mb-3">{item.title}</h4>
                <p className="text-body text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;