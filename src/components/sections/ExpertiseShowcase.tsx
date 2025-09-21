import React from 'react';
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Shield, 
  Brain,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Lightbulb,
  Globe,
  Settings,
  Search,
  MessageCircle,
  Award,
  ShoppingCart,
  ArrowRight
} from 'lucide-react';

const ExpertiseShowcase: React.FC = () => {
  const technicalSkills = [
    { name: 'Digital Marketing', percentage: 95, icon: <BarChart3 className="w-5 h-5" /> },
    { name: 'Full Stack & Frameworks', percentage: 90, icon: <Code className="w-5 h-5" /> },
    { name: 'Backend & Frontend', percentage: 88, icon: <Database className="w-5 h-5" /> },
    { name: 'eCommerce & CMS', percentage: 85, icon: <ShoppingCart className="w-5 h-5" /> },
    { name: 'Mobile', percentage: 80, icon: <Smartphone className="w-5 h-5" /> },
    { name: 'DevOps', percentage: 82, icon: <Cloud className="w-5 h-5" /> },
    { name: 'QA & Testing', percentage: 85, icon: <Shield className="w-5 h-5" /> }
  ];

  const businessSkills = [
    { name: 'Content Writer', percentage: 92, icon: <MessageCircle className="w-5 h-5" /> },
    { name: 'PPC Experts', percentage: 89, icon: <Target className="w-5 h-5" /> },
    { name: 'SEO Experts', percentage: 87, icon: <Search className="w-5 h-5" /> },
    { name: 'Social Media Experts', percentage: 85, icon: <Users className="w-5 h-5" /> },
    { name: 'Email Marketers', percentage: 83, icon: <Globe className="w-5 h-5" /> },
    { name: 'Performance Marketers', percentage: 88, icon: <TrendingUp className="w-5 h-5" /> }
  ];

  const certifications = [
    { name: 'Microsoft Silver Partner', logo: 'microsoft' },
    { name: 'AWS Partner Network', logo: 'aws' },
    { name: 'Google Cloud Partner', logo: 'google' }
  ];


  return (
    <section className="section-wrapper section-padding-lg bg-gradient-to-br from-primary-navy via-primary-dark to-primary relative overflow-hidden">
      
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full transform translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full transform -translate-x-48 translate-y-48"></div>
      
      <div className="container-main relative z-10">
        
        {/* Section Header */}
        <div className="text-center section-gap">
          <div className="inline-block mb-8">
            <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 mx-auto mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="heading-hero text-white mb-6">
            We Have Expertise In
          </h2>
          <p className="text-hero-subtitle text-white/80 max-w-4xl mx-auto">
            Backed by 675+ digital experts, DynaTechPro is committed to deliver scalable, robust, 
            and advanced solutions that meet specific needs of clients.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 grid-spacing section-gap">
          
          {/* Left Column - Technical Skills */}
          <div className="space-y-8">
            <h3 className="heading-secondary text-white mb-8 flex items-center gap-3">
              <Settings className="w-6 h-6 text-cyan-400" />
              Technical Expertise
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-cyan-400">
                        {skill.icon}
                      </div>
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-white font-bold">{skill.percentage}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Business Skills */}
          <div className="space-y-8">
            <h3 className="heading-secondary text-white mb-8 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-yellow-400" />
              Marketing Expertise
            </h3>
            
            <div className="space-y-6">
              {businessSkills.map((skill, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-yellow-400">
                        {skill.icon}
                      </div>
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-white font-bold">{skill.percentage}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Achievement Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20">
            
            {/* Certifications & Awards */}
            <div className="mb-12">
              <h3 className="heading-secondary text-white mb-8">Trusted Partnerships & Certifications</h3>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                
                {/* Microsoft */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <div className="w-8 h-8 bg-blue-500 rounded"></div>
                  </div>
                  <div className="text-white font-bold text-body-small">Microsoft</div>
                  <div className="text-white/80 text-xs">Silver Partner</div>
                </div>

                {/* AWS */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <div className="w-8 h-8 bg-orange-500 rounded"></div>
                  </div>
                  <div className="text-white font-bold text-body-small">AWS</div>
                  <div className="text-white/80 text-xs">Partner Network Select Consulting Partner</div>
                </div>

                {/* Google Cloud */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <div className="w-8 h-8 bg-blue-400 rounded"></div>
                  </div>
                  <div className="text-white font-bold text-body-small">Google Cloud</div>
                  <div className="text-white/80 text-xs">Partner</div>
                </div>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid md:grid-cols-4 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="heading-tertiary text-white mb-2">20+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="heading-tertiary text-white mb-2">675+</div>
                <div className="text-white/80">Expert Team</div>
              </div>
              <div className="text-center">
                <div className="heading-tertiary text-white mb-2">4200+</div>
                <div className="text-white/80">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="heading-tertiary text-white mb-2">97%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12">
              <button className="inline-flex items-center gap-3 bg-accent-yellow text-primary-navy px-8 py-4 rounded-lg font-bold text-body-large hover:bg-accent-orange transition-all duration-300 hover:scale-105 shadow-lg">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 -left-8 bg-cyan-400/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/30 animate-float">
          <div className="text-cyan-400 font-bold text-body-small">Full-Stack</div>
          <div className="text-white text-xs">Development</div>
        </div>

        <div className="absolute top-1/3 -right-8 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 border border-yellow-400/30 animate-float" style={{animationDelay: '2s'}}>
          <div className="text-yellow-400 font-bold text-body-small">Digital</div>
          <div className="text-white text-xs">Marketing</div>
        </div>

        <div className="absolute bottom-1/4 -left-12 bg-purple-400/20 backdrop-blur-sm rounded-xl p-4 border border-purple-400/30 animate-float" style={{animationDelay: '4s'}}>
          <div className="text-purple-400 font-bold text-body-small">AI & ML</div>
          <div className="text-white text-xs">Solutions</div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseShowcase;