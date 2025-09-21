import React from 'react';
import { 
  Search, 
  Users, 
  Calculator, 
  Shield, 
  RefreshCw, 
  CheckCircle, 
  BarChart3, 
  MessageCircle,
  Target,
  Settings
} from 'lucide-react';

const ProcessSection: React.FC = () => {
  const processSteps = [
    {
      id: 1,
      title: 'Project Scoping',
      description: 'Gathering project requirements to determine a precise scope.',
      icon: <Target className="w-6 h-6" />,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      title: 'Resource Planning',
      description: 'Bring in expert talent and manage expenses efficiently.',
      icon: <Users className="w-6 h-6" />,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      id: 3,
      title: 'Cost estimation',
      description: 'Determining approx cost to avoid scope creep.',
      icon: <Calculator className="w-6 h-6" />,
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      id: 4,
      title: 'Risk Management',
      description: 'Identifying and solving bottlenecks to ensure success.',
      icon: <Shield className="w-6 h-6" />,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      id: 5,
      title: 'Change Management',
      description: 'Setting-up a structure to keep the project on-track.',
      icon: <RefreshCw className="w-6 h-6" />,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 6,
      title: 'Success Review',
      description: 'Review KPIs to gauge project health and success.',
      icon: <CheckCircle className="w-6 h-6" />,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 7,
      title: 'Performance Reporting',
      description: 'Monitor KPIs with detailed analysis.',
      icon: <BarChart3 className="w-6 h-6" />,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      id: 8,
      title: 'Seamless Collaboration',
      description: 'Use advanced tools for effective communication.',
      icon: <MessageCircle className="w-6 h-6" />,
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-600'
    }
  ];

  const verticalSteps = [
    {
      id: 1,
      title: 'Discovery',
      subtitle: 'Project Analysis',
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 2,
      title: 'Planning',
      subtitle: 'Strategy & Design',
      color: 'from-blue-700 to-purple-600'
    },
    {
      id: 3,
      title: 'Development',
      subtitle: 'Build & Test',
      color: 'from-purple-600 to-purple-700'
    },
    {
      id: 4,
      title: 'Delivery',
      subtitle: 'Launch & Support',
      color: 'from-green-600 to-green-700'
    }
  ];

  return (
    <section className="section-wrapper section-padding-sm bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-30 transform -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full opacity-30 transform translate-x-24 translate-y-24"></div>
      
      <div className="container-main relative z-10">
        
        {/* Main Layout with Vertical Flow on Right */}
        <div className="flex flex-col lg:flex-row grid-spacing">
          
          {/* Left Content */}
          <div className="flex-1">
            {/* Section Header - Compact */}
            <div className="text-center lg:text-left mb-8">
              <h2 className="heading-primary text-gray-900 mb-3">
                Drive Your Digital Success
              </h2>
              <p className="text-base text-gray-600 max-w-2xl">
                Achieve your project goals with our digital solutions – covering software engineering, 
                digital marketing, ecommerce, and digital transformation.
              </p>
            </div>

            {/* Process Grid - 2 cards per row, centered */}
            <div className="relative">
              
              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 relative z-10 justify-items-center">
                {processSteps.slice(0, 4).map((step, index) => (
                  <div
                    key={step.id}
                    className="relative bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group cursor-pointer transform hover:-translate-y-1 w-full max-w-sm"
                  >
                    
                    {/* Step Number */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold text-xs shadow-lg">
                      {step.id}
                    </div>

                    {/* Card Content - Vertical Layout */}
                    <div className="flex flex-col items-center text-center gap-3">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${step.bgColor}`}>
                        <div className={`${step.iconColor} scale-110`}>
                          {step.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-body font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                          {step.title}
                        </h3>
                        <p className="text-body-small text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Fancy Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                ))}
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 relative z-10 justify-items-center">
                {processSteps.slice(4, 8).map((step, index) => (
                  <div
                    key={step.id}
                    className="relative bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group cursor-pointer transform hover:-translate-y-1 w-full max-w-sm"
                  >
                    
                    {/* Step Number */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold text-xs shadow-lg">
                      {step.id}
                    </div>

                    {/* Card Content - Vertical Layout */}
                    <div className="flex flex-col items-center text-center gap-3">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${step.bgColor}`}>
                        <div className={`${step.iconColor} scale-110`}>
                          {step.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-body font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                          {step.title}
                        </h3>
                        <p className="text-body-small text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Fancy Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-blue-400 rounded-full opacity-20"></div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-purple-400 rounded-full opacity-20"></div>
              <div className="absolute bottom-0 left-1/4 w-1 h-1 bg-blue-300 rounded-full opacity-30"></div>
              <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-purple-300 rounded-full opacity-30"></div>
            </div>
          </div>

          {/* Right Side - Vertical Process Flow with Fixed Lines */}
          <div className="w-full lg:w-64 flex lg:block justify-center">
            <div className="relative">
              {/* Purple Gradient Box with White Arrows */}
              <div className="relative bg-gradient-to-br from-secondary-light via-secondary to-secondary-dark rounded-2xl p-8 mx-auto max-w-xs">
                {/* White arrows connecting text to next circle */}
                <div className="absolute z-10">
                  {/* Arrow 1: Project Analysis to Planning circle */}
                  <div className="absolute top-16 left-1/2 transform translate-x-8">
                    <div className="w-8 h-0.5 bg-white"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-2 border-t-1 border-b-1 border-transparent border-l-white"></div>
                  </div>
                  
                  {/* Arrow 2: Strategy & Design to Development circle */}
                  <div className="absolute top-40 left-1/2 transform translate-x-8">
                    <div className="w-8 h-0.5 bg-white"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-2 border-t-1 border-b-1 border-transparent border-l-white"></div>
                  </div>
                  
                  {/* Arrow 3: Build & Test to Delivery circle */}
                  <div className="absolute top-64 left-1/2 transform translate-x-8">
                    <div className="w-8 h-0.5 bg-white"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-2 border-t-1 border-b-1 border-transparent border-l-white"></div>
                  </div>
                </div>

                {/* Vertical Flow Steps */}
                <div className="flex lg:flex-col gap-8 lg:gap-24 relative z-20">
                  {verticalSteps.map((step, index) => (
                    <div key={step.id} className="text-center relative">
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto shadow-2xl transform hover:scale-110 transition-transform cursor-pointer border-4 border-white relative z-30`}>
                        {step.id}
                      </div>
                      <div className="font-bold text-white text-body mb-2 relative z-20">{step.title}</div>
                      <div className="text-sm text-white/80 relative z-20">{step.subtitle}</div>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;