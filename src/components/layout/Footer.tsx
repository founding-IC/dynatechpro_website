import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const services = [
    'AI & ML',
    'Cloud Native',
    'IoT',
    'DevOps',
    'Blockchain',
    'Security',
    'QA Testing',
    'Mobile Development',
    'Web Development',
    'Data Analytics',
    'Automation',
    'Digital Strategy'
  ];

  const industries = [
    'Fintech',
    'Healthcare',
    'E-commerce',
    'Education',
    'Logistics',
    'Software & Tech'
  ];

  const company = [
    'About Us',
    'Our Team',
    'Careers',
    'Case Studies',
    'Blog',
    'Contact'
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-12">
          {/* Company Info & Contact - Takes more space on larger screens */}
          <div className="xl:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                DynaTechPro
              </h2>
              <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
                Next-Gen IT Solutions & Digital Transformation. Delivering end-to-end technology solutions with 100% project delivery success.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div className="text-slate-300">
                  <div className="font-medium text-white mb-2">Our Locations</div>
                  <div className="space-y-1.5 text-sm">
                    <div className="hover:text-purple-300 transition-colors cursor-pointer">
                      Atlanta, GA, United States
                    </div>
                    <div className="hover:text-purple-300 transition-colors cursor-pointer">
                      Calgary, AB, Canada
                    </div>
                    <div className="hover:text-purple-300 transition-colors cursor-pointer">
                      Vadodara, GJ, India
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <a 
                  href="mailto:contact@dynatechpro.com" 
                  className="text-slate-300 hover:text-purple-400 transition-colors"
                >
                  contact@dynatechpro.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-white font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: 'https://facebook.com' },
                  { icon: Twitter, href: 'https://twitter.com' },
                  { icon: Linkedin, href: 'https://linkedin.com' },
                  { icon: Youtube, href: 'https://youtube.com' },
                  { icon: Instagram, href: 'https://instagram.com' }
                ].map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <div className="grid grid-cols-1 gap-3">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={`/services/${service.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                  className="text-slate-300 hover:text-purple-400 transition-colors text-sm py-1 block hover:translate-x-1 transform duration-200"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">Industries</h3>
            <div className="space-y-3">
              {industries.map((industry, index) => (
                <Link
                  key={index}
                  to={`/industries/${industry.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-slate-300 hover:text-purple-400 transition-colors text-sm block py-1 hover:translate-x-1 transform duration-200"
                >
                  {industry}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <div className="space-y-3">
              {company.map((item, index) => (
                <Link
                  key={index}
                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-slate-300 hover:text-purple-400 transition-colors text-sm block py-1 hover:translate-x-1 transform duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-slate-400">
              © {new Date().getFullYear()} DynaTechPro. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-8 text-sm">
              <Link 
                to="/privacy" 
                className="text-slate-400 hover:text-purple-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-slate-400 hover:text-purple-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                to="/cookies" 
                className="text-slate-400 hover:text-purple-400 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;