import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Settings, 
  BarChart3,
  Zap,
  ShoppingCart,
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const PixelServiceCards: React.FC = () => {
  const [rightScrollProgress, setRightScrollProgress] = useState(0);
  const [isRightScrollComplete, setIsRightScrollComplete] = useState(false);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (!rightContentRef.current || !sectionRef.current) return;
      
      const rightContent = rightContentRef.current;
      const section = sectionRef.current;
      const sectionRect = section.getBoundingClientRect();
      
      // Check if section is in viewport
      if (sectionRect.top <= 0 && sectionRect.bottom >= window.innerHeight) {
        const maxScroll = rightContent.scrollHeight - rightContent.clientHeight;
        const currentScroll = rightContent.scrollTop;
        
        if (maxScroll > 0 && currentScroll < maxScroll && e.deltaY > 0) {
          // Prevent page scroll and scroll right content instead
          e.preventDefault();
          rightContent.scrollTop += e.deltaY;
        } else if (currentScroll <= 0 && e.deltaY < 0) {
          // Allow scrolling up if at top of right content
          return;
        } else if (currentScroll >= maxScroll) {
          // Right scroll complete, allow page scroll
          setIsRightScrollComplete(true);
          return;
        } else {
          e.preventDefault();
        }
      }
    };

    const handleRightScroll = () => {
      if (!rightContentRef.current) return;
      
      const rightContent = rightContentRef.current;
      const maxScroll = rightContent.scrollHeight - rightContent.clientHeight;
      const currentScroll = rightContent.scrollTop;
      
      setRightScrollProgress(currentScroll / maxScroll);
      setIsRightScrollComplete(currentScroll >= maxScroll * 0.95);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    rightContentRef.current?.addEventListener('scroll', handleRightScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      rightContentRef.current?.removeEventListener('scroll', handleRightScroll);
    };
  }, []);

  const services = [
    {
      id: 'ai-automation',
      title: 'AI & Automation',
      description: 'Integrate AI & automation into workflows to drive efficiency and reduce cost.',
      icon: <Brain className="w-8 h-8" />,
      bgColor: 'bg-white',
      textColor: 'text-black',
      features: [
        'Chatbot Development',
        'Workflow Automation', 
        'AI-Powered Virtual Assistants',
        'Predictive Analytics & Insights',
        'AI & Automation Consulting'
      ],
      link: '/services/ai-automation'
    },
    {
      id: 'software-engineering',
      title: 'Software Engineering',
      description: 'Tackle complex business challenges with our skilled software engineers and architects.',
      icon: <Settings className="w-8 h-8" />,
      bgColor: 'bg-gradient-to-r from-secondary-light via-secondary to-secondary-dark',
      textColor: 'text-white',
      features: [
        'Consulting',
        'Mobile App Development',
        'Website Development',
        'MVP Development',
        'SaaS Product Development',
        'Maintenance & Migration',
        'Modernization',
        'QA and Testing',
        'DevOps',
        'Software Development'
      ],
      link: '/services/software-development'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'As a digital marketing services provider, we forge meaningful connections with your customers, ensuring long-term relationships and unparalleled brand loyalty.',
      icon: <BarChart3 className="w-8 h-8" />,
      bgColor: 'bg-white',
      textColor: 'text-black',
      features: [
        'Content Marketing',
        'Search Engine Optimization',
        'Social Media Marketing',
        'PPC Marketing',
        'Website Speed Optimization',
        'ORM Services',
        'Conversion Rate Optimization',
        'Email Marketing'
      ],
      link: '/services/digital-marketing'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Shape your digital future and drive profitability with our advanced automation services.',
      icon: <Zap className="w-8 h-8" />,
      bgColor: 'bg-gradient-to-r from-secondary-light via-secondary to-secondary-dark',
      textColor: 'text-white',
      features: [
        'Consulting',
        'Data Analytics Services',
        'Cloud Services',
        'Robotic Process Automation',
        'Blockchain Development',
        'Machine Learning'
      ],
      link: '/services/digital-transformation'
    },
    {
      id: 'ecommerce',
      title: 'eCommerce',
      description: 'We build powerful e-commerce platforms that convert visitors into customers. Our expertise drives growth engagement and online success for your business with these services.',
      icon: <ShoppingCart className="w-8 h-8" />,
      bgColor: 'bg-white',
      textColor: 'text-black',
      features: [
        'Consulting',
        'Implementation',
        'Migration',
        'Marketing',
        'Maintenance',
        'B2B & B2C Portal'
      ],
      link: '/services/ecommerce'
    },
    {
      id: 'dedicated-teams',
      title: 'Hire Dedicated Teams',
      description: 'Elevate your business capabilities and ensure the triumphant delivery of your projects with our team of experts.',
      icon: <Users className="w-8 h-8" />,
      bgColor: 'bg-gradient-to-r from-secondary-light via-secondary to-secondary-dark',
      textColor: 'text-white',
      features: [
        'Software Developers',
        'Quality Assurers',
        'Content Writers',
        'AI Developers'
      ],
      link: '/services/dedicated-teams'
    }
  ];

  return (
    <section ref={sectionRef} className="section-wrapper h-screen bg-gray-50 relative overflow-hidden">

        <div className="container-main h-full">
       
        <div className="grid lg:grid-cols-2 grid-spacing h-full">

 
          {/* Left Side - Completely Static */}
          <div className="flex flex-col justify-center section-padding-lg">


            <div className="content-spacing">
              {/* Section Header */}
              <div>
                <span className="text-blue-500 font-bold text-body-large tracking-wide uppercase mb-4 block">
                  WHAT WE OFFER
                </span>
                <h2 className="heading-primary text-gray-900 mb-6">

                  Ignite Your Brand's Digital<br />
                  Journey
                </h2>
                <p className="text-section-subtitle text-gray-600 font-medium">

                  We provide digital services tailored to elevate your brand, streamline your 
                  business processes, and boost your online presence.
                </p>
              </div>

              {/* Left Side CTA - Repeated */}
              <div className="mb-16">
              <div className="bg-background-section rounded-2xl p-8 max-w-md">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-accent-blue" />
                  <div>
                    <h3 className="heading-tertiary text-primary-navy">
                      Fuel your <span className="text-accent-blue">Digital-First</span> Idea
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  With 675+ experts, let us be the catalysts for your digital success.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-bold hover:bg-secondary-dark transition-colors"
                >
                  CONTACT US
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              </div>
            </div>
          </div>

          {/* Right Side - Scrollable Container */}
          <div className="relative">
            <div 
              ref={rightContentRef}
              className="h-screen overflow-y-auto py-20 pr-4 scrollbar-hide"

              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <div className="space-y-8">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className={`${service.bgColor} rounded-2xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-200`}
                  >
                    
                    {/* Background Pattern for Purple Cards */}
                    {service.bgColor.includes('secondary') && (
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="relative z-10">
                      
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${
                        service.bgColor.includes('secondary') ? 'bg-white/20' : 'bg-blue-50'
                      }`}>
                        <div className={service.bgColor.includes('secondary') ? 'text-white' : 'text-blue-500'}>
                          {service.icon}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className={`heading-secondary mb-4 ${service.textColor}`}>

                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className={`mb-6 font-medium ${
                        service.bgColor.includes('secondary') ? 'text-white/90' : 'text-gray-600'
                       }`}>
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className={`w-4 h-4 ${
                              service.bgColor.includes('secondary') ? 'text-white' : 'text-black'
                            }`} />
                           <span className={`text-body-small font-medium ${
                              service.bgColor.includes('secondary') ? 'text-white/90' : 'text-gray-700'
                            }`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      <div className="absolute top-6 right-6">
                        <Link
                          to={service.link}
                          className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group-hover:scale-110 ${
                            service.bgColor.includes('secondary') 
                              ? 'bg-white/20 hover:bg-white/30 text-white' 
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                          }`}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom CSS for hiding scrollbar */}
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixelServiceCards;