import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Code, Brain, Shield, Cloud, Smartphone, BarChart3, Database, Zap, Globe, Search, MessageCircle, Settings } from 'lucide-react';

const TwoColumnScroll: React.FC = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const technologies = [
    {
      id: 'chatbot-development',
      name: 'Chatbot Development',
      icon: <MessageCircle className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Create interactive chatbots that improve customer engagement and support, ensuring seamless, 24/7 communication.',
      features: [
        'eCommerce Chatbots',
        'Lead Generation Bots',
        'Customer Support Bots',
        'Internal Productivity Bots'
      ],
      image: 'chatbot-visual',
      technologies: ['NLP', 'Machine Learning', 'API Integration', 'Cloud Platforms']
    },
    {
      id: 'predictive-analytics',
      name: 'Predictive Analytics',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      description: 'Leverage advanced analytics to predict trends, optimize operations, and make data-driven decisions.',
      features: [
        'Sales Forecasting',
        'Customer Behavior Analysis',
        'Market Trend Prediction',
        'Risk Assessment'
      ],
      image: 'analytics-visual',
      technologies: ['Python', 'TensorFlow', 'Statistical Models', 'Big Data']
    },
    {
      id: 'virtual-assistants',
      name: 'Virtual Assistants',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      description: 'AI-powered virtual assistants that automate tasks and enhance productivity across your organization.',
      features: [
        'Voice Recognition',
        'Task Automation',
        'Smart Scheduling',
        'Intelligent Responses'
      ],
      image: 'assistant-visual',
      technologies: ['AI/ML', 'Voice Processing', 'Natural Language', 'Cloud APIs']
    },
    {
      id: 'ai-consulting',
      name: 'AI Consulting',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      description: 'Strategic AI implementation guidance to transform your business processes and drive innovation.',
      features: [
        'AI Strategy Development',
        'Technology Assessment',
        'Implementation Planning',
        'Change Management'
      ],
      image: 'consulting-visual',
      technologies: ['Strategic Planning', 'Technology Assessment', 'ROI Analysis', 'Best Practices']
    },
    {
      id: 'workflow-automation',
      name: 'Workflow Automation',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      description: 'Streamline business processes with intelligent automation solutions that reduce costs and improve efficiency.',
      features: [
        'Process Optimization',
        'Automated Workflows',
        'Integration Solutions',
        'Performance Monitoring'
      ],
      image: 'workflow-visual',
      technologies: ['RPA', 'Process Mining', 'API Integration', 'Monitoring Tools']
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isInView, technologies.length]);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePrevious = () => {
    setCurrentTech((prev) => (prev - 1 + technologies.length) % technologies.length);
  };

  const handleNext = () => {
    setCurrentTech((prev) => (prev + 1) % technologies.length);
  };


  return (
    <section ref={sectionRef} className="section-wrapper section-padding-lg bg-background-section relative overflow-hidden">
      <div className="container-main">
        
        {/* Section Header */}
        <div className="text-center section-gap">
          <h2 className="heading-primary text-primary-navy mb-6">
            Driving Innovation with Next-gen Tools
          </h2>
          <p className="text-section-subtitle text-gray-600 max-w-4xl mx-auto">
            We offer advanced solutions designed to streamline operations, enhance customer interactions, and drive business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Navigation & Categories */}
          <div className="space-y-8">
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className="bg-gradient-to-r from-primary to-secondary rounded-full h-1 transition-all duration-300"
                style={{ width: `${((currentTech + 1) / technologies.length) * 100}%` }}
              ></div>
            </div>

            {/* Technology Tabs */}
            <div className="space-y-3">
              {technologies.map((tech, index) => (
                <button
                  key={tech.id}
                  onClick={() => setCurrentTech(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 border-2 ${
                    currentTech === index
                      ? 'border-primary bg-primary text-white shadow-lg'
                      : 'border-gray-200 bg-white hover:border-primary/30 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                      currentTech === index 
                        ? 'bg-white/20 text-white' 
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold text-body-large ${
                        currentTech === index ? 'text-white' : 'text-primary-navy'
                      }`}>
                        {tech.name}
                      </h3>
                      <p className={`text-sm ${
                        currentTech === index ? 'text-white/80' : 'text-gray-600'
                      }`}>
                        {tech.description.slice(0, 60)}...
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-6">
              <div className="flex gap-2">
                <button
                  onClick={handlePrevious}
                  className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              
              <div className="text-sm text-gray-600">
                {currentTech + 1} of {technologies.length}
              </div>
            </div>
          </div>

          {/* Right Column - Active Technology Details */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${technologies[currentTech].color} rounded-full transform translate-x-24 -translate-y-24`}></div>
              <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br ${technologies[currentTech].color} rounded-full transform -translate-x-16 translate-y-16`}></div>
            </div>

            <div className="relative z-10 space-y-6">
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${technologies[currentTech].color} text-white shadow-lg`}>
                {technologies[currentTech].icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="heading-secondary text-primary-navy">
                  {technologies[currentTech].name}
                </h3>
                <p className="text-body text-gray-600">
                  {technologies[currentTech].description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="font-bold text-primary-navy">Key Features:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {technologies[currentTech].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${technologies[currentTech].color}`}></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Grid */}
              <div className="space-y-3">
                <h4 className="font-bold text-primary-navy">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies[currentTech].technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 rounded-full text-body-small font-medium bg-gradient-to-r ${technologies[currentTech].color} text-white shadow-sm`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Find Out More Link */}
              <div className="pt-4">
                <a 
                  href="#"
                  className={`inline-flex items-center gap-2 font-bold bg-gradient-to-r ${technologies[currentTech].color} bg-clip-text text-transparent hover:underline`}
                >
                  Find Out More →
                </a>
              </div>
            </div>

            {/* Visual representation */}
            <div className="absolute top-4 right-4 opacity-20">
              <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${technologies[currentTech].color} flex items-center justify-center`}>
                <div className="text-white heading-tertiary">
                  {technologies[currentTech].icon}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom visual indicators */}
        <div className="flex justify-center mt-12 gap-2">
          {technologies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTech(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentTech === index 
                  ? 'bg-primary scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TwoColumnScroll;