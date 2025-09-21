import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Rocket, 
  Shield, 
  Settings, 
  BarChart3, 
  Search, 
  Users, 
  PenTool,
  ArrowRight,
  Cloud,
  Database,
  Zap,
  Target,
  MessageCircle,
  Brain
} from 'lucide-react';

const DetailedServices: React.FC = () => {
  return (
    <section className="section-wrapper section-padding-lg bg-white relative overflow-hidden">
      <div className="container-main">
    
        {/* Software Engineering Section */}
        <div className="section-gap">
          <div className="bg-secondary rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full transform -translate-x-24 translate-y-24"></div>
            </div>

            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Content */}
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  
                  <h2 className="heading-primary">
                    Software Engineering
                  </h2>
                  
                  <p className="text-section-subtitle text-white/90">
                    Tackle complex business challenges with our skilled software engineers and architects.
                  </p>
                  
                  {/* Services Grid */}
                  <div className="grid md:grid-cols-2 gap-4 mt-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Consulting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Mobile App Development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Website Development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>MVP Development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>SaaS Product Development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Maintenance & Migration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Modernization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>QA and Testing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>DevOps</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="underline">Software Development</span>
                    </div>
                  </div>
                </div>

                {/* Visual placeholder */}
                <div className="hidden lg:block">
                  <div className="relative">
                    <div className="w-full h-80 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20"></div>
                    {/* Floating tech icons */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Cloud className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Learn More Link */}
              <div className="absolute top-6 right-6">
                <Link
                  to="/services/software-development"
                  className="inline-flex items-center justify-center w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Marketing Section */}
        <div className="section-gap">
          <div className="bg-background-section rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full transform -translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary rounded-full transform translate-x-24 translate-y-24"></div>
            </div>

            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Content */}
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-blue/10 rounded-xl">
                    <BarChart3 className="w-8 h-8 text-accent-blue" />
                  </div>
                  
                  <h2 className="heading-primary text-primary-navy">
                    Digital Marketing
                  </h2>
                  
                  <p className="text-section-subtitle text-gray-600">
                    As a digital marketing services provider, we forge meaningful connections with your customers, 
                    ensuring long-term relationships and unparalleled brand loyalty.
                  </p>
                  
                  {/* Services Grid */}
                  <div className="grid md:grid-cols-2 gap-4 mt-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                      <span className="text-gray-700">Content Marketing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                      <span className="text-gray-700">Search Engine Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                      <span className="text-gray-700">Social Media Marketing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                      <span className="text-gray-700">PPC Marketing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                      <span className="text-gray-700">Website Speed Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                      <span className="text-gray-700">ORM Services</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                      <span className="text-gray-700">Conversion Rate Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                      <span className="text-gray-700">Email Marketing</span>
                    </div>
                  </div>
                </div>

                {/* Visual placeholder */}
                <div className="hidden lg:block">
                  <div className="relative">
                    <div className="w-full h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-gray-200"></div>
                    {/* Floating marketing icons */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white shadow-lg rounded-lg flex items-center justify-center">
                      <Search className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white shadow-lg rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white shadow-lg rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-white shadow-lg rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Learn More Link */}
              <div className="absolute top-6 right-6">
                <Link
                  to="/services/digital-marketing"
                  className="inline-flex items-center justify-center w-10 h-10 bg-accent-blue/10 hover:bg-accent-blue/20 rounded-full transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5 text-accent-blue" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Transformation Section */}
        <div className="section-gap">
          <div className="bg-secondary rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full transform -translate-x-24 translate-y-24"></div>
            </div>

            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Content */}
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  
                  <h2 className="heading-primary">
                    Digital Transformation
                  </h2>
                  
                  <p className="text-section-subtitle text-white/90">
                    Shape your digital future and drive profitability with our advanced automation services.
                  </p>
                  
                  {/* Services Grid */}
                  <div className="grid md:grid-cols-2 gap-4 mt-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Consulting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Data Analytics Services</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Cloud Services</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Robotic Process Automation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Blockchain Development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Machine Learning</span>
                    </div>
                  </div>
                </div>

                {/* Visual placeholder */}
                <div className="hidden lg:block">
                  <div className="relative">
                    <div className="w-full h-80 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20"></div>
                    {/* Floating tech icons */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Cloud className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Learn More Link */}
              <div className="absolute top-6 right-6">
                <Link
                  to="/services/digital-transformation"
                  className="inline-flex items-center justify-center w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* eCommerce Section */}
        <div className="section-gap">
          <div className="bg-background-section rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full transform -translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary rounded-full transform translate-x-24 translate-y-24"></div>
            </div>

            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Content */}
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-blue/10 rounded-xl">
                    <Globe className="w-8 h-8 text-accent-blue" />
                  </div>
                  
                  <h2 className="heading-primary text-primary-navy">
                    eCommerce
                  </h2>
                  
                  <p className="text-section-subtitle text-gray-600">
                    We build powerful e-commerce platforms that convert visitors into customers. Our expertise 
                    drives growth engagement and online success for your business with these services.
                  </p>
                  
                  {/* Services Grid */}
                  <div className="grid md:grid-cols-2 gap-4 mt-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                      <span className="text-gray-700">Consulting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                      <span className="text-gray-700">Implementation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                      <span className="text-gray-700">Migration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                      <span className="text-gray-700">Marketing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                      <span className="text-gray-700">Maintenance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                      <span className="text-gray-700">B2B & B2C Portal</span>
                    </div>
                  </div>
                </div>

                {/* Visual placeholder */}
                <div className="hidden lg:block">
                  <div className="relative">
                    <div className="w-full h-80 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-gray-200"></div>
                  </div>
                </div>
              </div>

              {/* Learn More Link */}
              <div className="absolute top-6 right-6">
                <Link
                  to="/services/ecommerce"
                  className="inline-flex items-center justify-center w-10 h-10 bg-accent-blue/10 hover:bg-accent-blue/20 rounded-full transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5 text-accent-blue" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Hire Dedicated Teams Section */}
        <div className="section-gap">
          <div className="bg-secondary rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full transform -translate-x-24 translate-y-24"></div>
            </div>

            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Content */}
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  
                  <h2 className="heading-primary">
                    Hire Dedicated Teams
                  </h2>
                  
                  <p className="text-section-subtitle text-white/90">
                    Elevate your business capabilities and ensure the triumphant delivery of your projects with our 
                    team of experts.
                  </p>
                  
                  {/* Services Grid */}
                  <div className="grid md:grid-cols-2 gap-4 mt-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Software Developers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Quality Assurers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Content Writers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>AI Developers</span>
                    </div>
                  </div>
                </div>

                {/* Visual placeholder */}
                <div className="hidden lg:block">
                  <div className="relative">
                    <div className="w-full h-80 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20"></div>
                    {/* Team member avatars */}
                    <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-full"></div>
                    <div className="absolute top-8 right-8 w-16 h-16 bg-white/20 rounded-full"></div>
                    <div className="absolute bottom-8 left-8 w-16 h-16 bg-white/20 rounded-full"></div>
                    <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/20 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Learn More Link */}
              <div className="absolute top-6 right-6">
                <Link
                  to="/services/dedicated-teams"
                  className="inline-flex items-center justify-center w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;