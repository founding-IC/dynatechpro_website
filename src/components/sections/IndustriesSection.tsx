import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  GraduationCap, 
  ShoppingCart, 
  Heart, 
  Truck, 
  Laptop,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Users,
  TrendingUp,
  Award,
  ChevronRight,
  Play,
  Star
} from 'lucide-react';

const IndustriesSection: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      id: 'fintech',
      title: 'Fintech',
      subtitle: 'Financial Technology Solutions',
      description: 'We help financial institutions and fintech startups build secure, scalable, and innovative digital banking solutions. Our expertise spans payment gateways, blockchain integration, digital wallets, and regulatory compliance systems.',
      icon: <Building className="w-8 h-8" />,
      color: 'purple',
      services: [
        'Digital Banking Platforms',
        'Payment Gateway Integration',
        'Blockchain & Cryptocurrency Solutions',
        'Regulatory Compliance Systems',
        'Risk Management Tools',
        'Mobile Banking Applications'
      ],
      stats: { projects: '50+', clients: '25+', satisfaction: '98%' },
      caseStudy: 'Built a comprehensive digital banking platform for a leading fintech startup, resulting in 300% user growth and 99.9% uptime.'
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      subtitle: 'Digital Health & Medical Solutions',
      description: 'We develop cutting-edge healthcare technology solutions including telemedicine platforms, electronic health records, medical device integration, and AI-powered diagnostic tools.',
      icon: <Heart className="w-8 h-8" />,
      color: 'white',
      services: [
        'Telemedicine Platforms',
        'Electronic Health Records (EHR)',
        'Medical Device Integration',
        'AI-Powered Diagnostic Tools',
        'Patient Management Systems',
        'Healthcare Analytics'
      ],
      stats: { projects: '35+', clients: '20+', satisfaction: '97%' },
      caseStudy: 'Developed a telemedicine platform serving 100,000+ patients with real-time video consultations and prescription management.'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      subtitle: 'Online Retail & Marketplace Solutions',
      description: 'We create powerful e-commerce platforms, marketplace solutions, and retail technology that drive sales growth and enhance customer experiences across all channels.',
      icon: <ShoppingCart className="w-8 h-8" />,
      color: 'purple',
      services: [
        'E-commerce Platform Development',
        'Marketplace Solutions',
        'Inventory Management Systems',
        'Customer Analytics & Personalization',
        'Mobile Commerce Applications',
        'Payment & Checkout Optimization'
      ],
      stats: { projects: '80+', clients: '45+', satisfaction: '96%' },
      caseStudy: 'Launched a multi-vendor marketplace that generated $50M+ in GMV within the first year of operation.'
    },
    {
      id: 'education',
      title: 'Education',
      subtitle: 'EdTech & Learning Management',
      description: 'We build comprehensive educational technology solutions including learning management systems, virtual classrooms, educational apps, and AI-powered learning analytics.',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'white',
      services: [
        'Learning Management Systems (LMS)',
        'Virtual Classroom Platforms',
        'Educational Mobile Applications',
        'AI-Powered Learning Analytics',
        'Student Information Systems',
        'Online Assessment Tools'
      ],
      stats: { projects: '45+', clients: '30+', satisfaction: '99%' },
      caseStudy: 'Created an AI-powered learning platform that improved student engagement by 150% and learning outcomes by 40%.'
    },
    {
      id: 'logistics',
      title: 'Logistics',
      subtitle: 'Supply Chain & Transportation',
      description: 'We develop advanced logistics and supply chain management solutions including fleet management, route optimization, warehouse automation, and real-time tracking systems.',
      icon: <Truck className="w-8 h-8" />,
      color: 'purple',
      services: [
        'Fleet Management Systems',
        'Route Optimization Software',
        'Warehouse Management Systems',
        'Real-time Tracking Solutions',
        'Supply Chain Analytics',
        'Last-mile Delivery Platforms'
      ],
      stats: { projects: '30+', clients: '18+', satisfaction: '95%' },
      caseStudy: 'Implemented a fleet management system that reduced fuel costs by 25% and improved delivery efficiency by 35%.'
    },
    {
      id: 'tech',
      title: 'Software & Tech',
      subtitle: 'Enterprise Software Solutions',
      description: 'We provide comprehensive software development services including custom enterprise applications, cloud solutions, digital transformation, and emerging technology integration.',
      icon: <Laptop className="w-8 h-8" />,
      color: 'white',
      services: [
        'Custom Software Development',
        'Cloud Migration & Solutions',
        'Digital Transformation',
        'API Development & Integration',
        'DevOps & Automation',
        'Emerging Technology Integration'
      ],
      stats: { projects: '120+', clients: '60+', satisfaction: '98%' },
      caseStudy: 'Led digital transformation for a Fortune 500 company, resulting in 50% operational efficiency improvement.'
    }
  ];

  const achievements = [
    { icon: <Users className="w-5 h-5" />, label: 'Growing Client Base', value: '50+' },
    { icon: <Award className="w-5 h-5" />, label: 'Project Success Rate', value: '97%' },
    { icon: <TrendingUp className="w-5 h-5" />, label: 'Client Satisfaction', value: '98%' }
  ];

  return (
    <section className="section-wrapper section-padding-md bg-background-subtle relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
      </div>

      <div className="w-full container-main relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1 mb-3">
            <Sparkles className="w-3 h-3 text-gray-600" />
            <span className="text-body-small font-semibold text-gray-600">Industries We Serve</span>
          </div>
          <h2 className="heading-primary text-gray-900 mb-3">
            Industries We Cater to
          </h2>
          <p className="text-body text-gray-700 max-w-2xl mx-auto">
            We partner with businesses across diverse sectors, delivering cutting-edge solutions that drive innovation and growth.
          </p>
        </div>

        {/* Folder Tabs Interface */}
        <div className="w-full">
          
          {/* Tab Headers */}
          <div className="flex flex-wrap justify-center mb-4">
          {industries.map((industry, index) => (
              <button
              key={industry.id}
                onClick={() => setActiveIndustry(index)}
                className={`relative px-4 py-2 mx-1 mb-1 rounded-t-xl font-semibold text-body-small transition-all duration-300 ${
                  activeIndustry === index
                    ? 'bg-gradient-to-r from-secondary-light via-secondary to-secondary-dark text-white shadow-lg transform -translate-y-1'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded flex items-center justify-center ${
                    activeIndustry === index ? 'bg-white/20' : 'bg-gray-100'
                  }`}>
                    <div className={`${activeIndustry === index ? 'text-white' : 'text-gray-600'}`}>
                    {industry.icon}
                  </div>
                </div>
                  <span>{industry.title}</span>
                </div>

                {/* Active indicator */}
                {activeIndustry === index && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-current"></div>
                )}
              </button>
          ))}
        </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-6 lg:p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                
                {/* Left Side - Content */}
            <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      industries[activeIndustry].color === 'purple' 
                        ? 'bg-secondary text-white' 
                        : 'bg-gray-100 text-secondary'
                    } shadow-lg`}>
                      {industries[activeIndustry].icon}
                    </div>
                    <div>
                      <h3 className="heading-tertiary text-gray-900 mb-1">
                        {industries[activeIndustry].title}
              </h3>
                      <p className="text-body text-gray-600 font-medium">
                        {industries[activeIndustry].subtitle}
              </p>
            </div>
          </div>

                  <p className="text-body text-gray-600">
                    {industries[activeIndustry].description}
                  </p>

                  {/* Services Grid */}
                  <div>
                    <h4 className="heading-quaternary text-gray-900 mb-3">Our Services</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {industries[activeIndustry].services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            industries[activeIndustry].color === 'purple' 
                              ? 'bg-secondary' 
                              : 'bg-gray-400'
                          }`}></div>
                          <span className="text-body-small text-gray-700 font-medium">{service}</span>
                </div>
                      ))}
                </div>
                </div>

                  {/* Case Study */}
                  <div className={`p-4 rounded-lg ${
                    industries[activeIndustry].color === 'purple' 
                      ? 'bg-secondary/10 border border-secondary/20' 
                      : 'bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className={`w-4 h-4 ${
                        industries[activeIndustry].color === 'purple' ? 'text-secondary' : 'text-gray-600'
                      }`} />
                      <span className={`font-semibold text-body-small ${
                        industries[activeIndustry].color === 'purple' ? 'text-secondary' : 'text-gray-700'
                      }`}>
                        Success Story
                      </span>
                </div>
                    <p className="text-body-small text-gray-600">
                      {industries[activeIndustry].caseStudy}
                    </p>
                </div>
                </div>

                {/* Right Side - Stats & Visual */}
                <div className="space-y-6">
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className={`text-center p-3 rounded-lg ${
                      industries[activeIndustry].color === 'purple' 
                        ? 'bg-secondary text-white' 
                        : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800'
                    } shadow-lg`}>
                      <div className="text-body-large font-bold mb-1">{industries[activeIndustry].stats.projects}</div>
                      <div className="text-xs opacity-80">Projects</div>
                </div>
                    <div className={`text-center p-3 rounded-lg ${
                      industries[activeIndustry].color === 'purple' 
                        ? 'bg-secondary text-white' 
                        : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800'
                    } shadow-lg`}>
                      <div className="text-body-large font-bold mb-1">{industries[activeIndustry].stats.clients}</div>
                      <div className="text-xs opacity-80">Clients</div>
                </div>
                    <div className={`text-center p-3 rounded-lg ${
                      industries[activeIndustry].color === 'purple' 
                        ? 'bg-secondary text-white' 
                        : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800'
                    } shadow-lg`}>
                      <div className="text-body-large font-bold mb-1">{industries[activeIndustry].stats.satisfaction}</div>
                      <div className="text-xs opacity-80">Satisfaction</div>
                </div>
              </div>

                  {/* Visual Element */}
                  <div className={`relative p-6 rounded-xl ${
                    industries[activeIndustry].color === 'purple' 
                      ? 'bg-secondary' 
                      : 'bg-gradient-to-br from-gray-100 to-gray-200'
                  } text-center`}>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${
                      industries[activeIndustry].color === 'purple' 
                        ? 'bg-white/20' 
                        : 'bg-gray-300'
                    }`}>
                      <Target className={`w-8 h-8 ${
                        industries[activeIndustry].color === 'purple' ? 'text-white' : 'text-gray-600'
                      }`} />
                </div>
                    <h4 className={`heading-quaternary mb-2 ${
                      industries[activeIndustry].color === 'purple' ? 'text-white' : 'text-gray-800'
                    }`}>
                      Industry Expertise
                    </h4>
                    <p className={`text-sm ${
                      industries[activeIndustry].color === 'purple' ? 'text-white/80' : 'text-gray-600'
                    }`}>
                      Deep domain knowledge and proven track record in {industries[activeIndustry].title.toLowerCase()} solutions
                    </p>
                </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-bold text-body transition-all duration-300 hover:scale-105 shadow-lg ${
                      industries[activeIndustry].color === 'purple' 
                        ? 'bg-secondary text-white hover:bg-secondary-dark' 
                        : 'bg-gray-800 text-white hover:bg-gray-900'
                    }`}
                  >
                    Get Started with {industries[activeIndustry].title}
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">
            <div className="group">
              <div className="heading-tertiary text-white mb-1 group-hover:text-white/80 transition-colors">50+</div>
              <div className="text-sm text-white/70">Projects Delivered</div>
            </div>
            <div className="group">
              <div className="heading-tertiary text-white mb-1 group-hover:text-white/80 transition-colors">97%</div>
              <div className="text-sm text-white/70">Success Rate</div>
            </div>
            <div className="group">
              <div className="heading-tertiary text-white mb-1 group-hover:text-white/80 transition-colors">98%</div>
              <div className="text-sm text-white/70">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;