import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

const PixelHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Auto-hover functionality for desktop
  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const services = [
    {
      category: 'Development',
      items: [
        { name: 'Software Engineering', href: '/services/software-engineering' },
        { name: 'Mobile App Development', href: '/services/mobile-development' },
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'eCommerce Development', href: '/services/ecommerce' }
      ]
    },
    {
      category: 'Digital Marketing',
      items: [
        { name: 'SEO Services', href: '/services/seo' },
        { name: 'PPC Marketing', href: '/services/ppc' },
        { name: 'Social Media Marketing', href: '/services/social-media' },
        { name: 'Content Marketing', href: '/services/content-marketing' }
      ]
    },
    {
      category: 'AI & Automation',
      items: [
        { name: 'Chatbot Development', href: '/services/chatbot' },
        { name: 'AI Consulting', href: '/services/ai-consulting' },
        { name: 'Workflow Automation', href: '/services/automation' },
        { name: 'Predictive Analytics', href: '/services/analytics' }
      ]
    }
  ];

  const industries = [
    { name: 'Fintech', href: '/industries/fintech' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Retail & eCommerce', href: '/industries/retail' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'Software & Tech', href: '/industries/software' }
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container-main">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/DynaTechPro_Logo.png" 
              alt="DynaTechPro" 
              className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
            />
            
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-primary-navy">DynaTechPro</div>
              <div className="text-xs text-gray-600 -mt-1">Build. Grow. Scale.</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/services"
                className="flex items-center gap-1 text-gray-700 hover:text-primary font-medium transition-colors"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </Link>
              
              {activeDropdown === 'services' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-6">
                      {services.map((category) => (
                        <div key={category.category}>
                          <h3 className="font-bold text-primary-navy mb-3">{category.category}</h3>
                          <div className="space-y-2">
                            {category.items.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="block text-gray-600 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark"
                        onClick={() => setActiveDropdown(null)}
                      >
                        View All Services
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Hire Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('hire')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-primary font-medium transition-colors">
                Hire
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'hire' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'hire' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
                  onMouseEnter={() => setActiveDropdown('hire')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="p-4">
                    <div className="space-y-2">
                      <Link
                        to="/hire/developers"
                        className="block text-gray-600 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Hire Developers
                      </Link>
                      <Link
                        to="/hire/designers"
                        className="block text-gray-600 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Hire Designers
                      </Link>
                      <Link
                        to="/hire/marketers"
                        className="block text-gray-600 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Hire Marketers
                      </Link>
                      <Link
                        to="/hire/teams"
                        className="block text-gray-600 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Hire Dedicated Teams
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* For Agencies */}
            <Link
              to="/for-agencies"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              For Agencies
            </Link>

            {/* Industries Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-primary font-medium transition-colors">
                Industries
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'industries' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
                  onMouseEnter={() => setActiveDropdown('industries')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="p-4">
                    <div className="space-y-2">
                      {industries.map((industry) => (
                        <Link
                          key={industry.name}
                          to={industry.href}
                          className="block text-gray-600 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-primary font-medium transition-colors">
                Company
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'company' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
                  onMouseEnter={() => setActiveDropdown('company')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="p-4">
                    <div className="space-y-2">
                      <Link
                        to="/about"
                        className="block text-gray-600 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        About Us
                      </Link>
                      <Link
                        to="/team"
                        className="block text-gray-600 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Our Team
                      </Link>
                      <Link
                        to="/careers"
                        className="block text-gray-600 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Careers
                      </Link>
                      <Link
                        to="/case-studies"
                        className="block text-gray-600 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Case Studies
                      </Link>
                      <Link
                        to="/blog"
                        className="block text-gray-600 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Blog
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-secondary text-white px-6 py-2 rounded-lg font-bold hover:bg-secondary-dark transition-colors"
            >
              CONTACT US
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            
            {/* Mobile Services */}
            <div className="space-y-2">
              <div className="font-bold text-primary-navy">Services</div>
              <div className="pl-4 space-y-2">
                <Link to="/services/software-engineering" className="block text-gray-600 hover:text-primary">Software Engineering</Link>
                <Link to="/services/digital-marketing" className="block text-gray-600 hover:text-primary">Digital Marketing</Link>
                <Link to="/services/ai-automation" className="block text-gray-600 hover:text-primary">AI & Automation</Link>
                <Link to="/services" className="block text-primary font-medium">View All →</Link>
              </div>
            </div>

            {/* Mobile Hire */}
            <div className="space-y-2">
              <div className="font-bold text-primary-navy">Hire</div>
              <div className="pl-4 space-y-2">
                <Link to="/hire/developers" className="block text-gray-600 hover:text-primary">Developers</Link>
                <Link to="/hire/teams" className="block text-gray-600 hover:text-primary">Dedicated Teams</Link>
              </div>
            </div>

            {/* Mobile Industries */}
            <div className="space-y-2">
              <div className="font-bold text-primary-navy">Industries</div>
              <div className="pl-4 space-y-2">
                <Link to="/industries/fintech" className="block text-gray-600 hover:text-primary">Fintech</Link>
                <Link to="/industries/healthcare" className="block text-gray-600 hover:text-primary">Healthcare</Link>
                <Link to="/industries/education" className="block text-gray-600 hover:text-primary">Education</Link>
              </div>
            </div>

            {/* Mobile Company */}
            <div className="space-y-2">
              <div className="font-bold text-primary-navy">Company</div>
              <div className="pl-4 space-y-2">
                <Link to="/about" className="block text-gray-600 hover:text-primary">About Us</Link>
                <Link to="/case-studies" className="block text-gray-600 hover:text-primary">Case Studies</Link>
                <Link to="/careers" className="block text-gray-600 hover:text-primary">Careers</Link>
              </div>
            </div>

            {/* Mobile Contact */}
            <div className="pt-4 border-t border-gray-200">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-bold hover:bg-secondary-dark transition-colors w-full justify-center"
              >
                CONTACT US
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Overlay to close dropdowns */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setActiveDropdown(null)}
        ></div>
      )}
    </header>
  );
};

export default PixelHeader;