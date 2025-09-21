import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const PurpleCTA: React.FC = () => {
  return (
    <>
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes expand-contract {
          0% { transform: scaleX(0) translateX(0); opacity: 0.3; }
          50% { transform: scaleX(1.5) translateX(-100px); opacity: 0.8; }
          100% { transform: scaleX(0) translateX(-200px); opacity: 0.1; }
        }
        
        @keyframes pulse-grow {
          0% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 0.9; }
          100% { transform: scale(1); opacity: 0.6; }
        }
        
        @keyframes radial-expand {
          0% { transform: scale(0.8); opacity: 0.4; }
          50% { transform: scale(1.3); opacity: 0.7; }
          100% { transform: scale(0.8); opacity: 0.4; }
        }
        
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 20s linear infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-expand-contract {
          animation: expand-contract 4s ease-in-out infinite;
        }
        
        .animate-pulse-grow {
          animation: pulse-grow 3s ease-in-out infinite;
        }
        
        .animate-radial-expand {
          animation: radial-expand 5s ease-in-out infinite;
        }
      `}</style>
      
      <section className="section-wrapper section-padding-md bg-gradient-to-r from-secondary-light via-secondary to-secondary-dark relative overflow-hidden">
      
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full transform -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full transform translate-x-48 translate-y-48"></div>
      
      <div className="relative z-10">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 grid-spacing items-center">
            
            {/* Left Side Content */}
            <div className="text-white content-spacing">
              <div className="element-spacing">
                  <h2 className="heading-primary">
                  Redefine Your Online Presence
                </h2>
                  <p className="text-section-subtitle text-white/90">
                  Experience next-level digital marketing and transformation services to unleash your online potential.
                </p>
              </div>
              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center gap-3 bg-white text-secondary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                  CONTACT US
                  <ArrowRight className="w-4 h-4" />
                  </button>
              </div>
              {/* Statistics Bar */}
              <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="font-bold">4200+ Project Launched</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="font-bold">20+ Years of Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="font-bold">2500+ Satisfied Customers</span>
                </div>
              </div>
            </div>

              {/* Right Side Visual - Enhanced AI Tech Animation */}
            <div className="relative flex items-center justify-center lg:h-[350px]">
                <div className="relative flex items-center justify-center">
                  
                  {/* Outer expanding ring */}
                  <div className="absolute inset-0 w-64 h-64 animate-radial-expand">
                    <svg className="w-full h-full" viewBox="0 0 256 256">
                      <circle
                        cx="128"
                        cy="128"
                        r="120"
                        fill="none"
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="1"
                        strokeDasharray="8 16"
                      />
                      <circle
                        cx="128"
                        cy="128"
                        r="120"
                        fill="none"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="2"
                        strokeDasharray="20 60"
                        strokeLinecap="round"
                        className="animate-spin-slow"
                      />
                    </svg>
                  </div>

                  {/* Middle rotating ring */}
                  <div className="absolute inset-0 w-48 h-48 animate-spin-reverse">
                    <svg className="w-full h-full" viewBox="0 0 192 192">
                      <circle
                        cx="96"
                        cy="96"
                        r="80"
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1"
                        strokeDasharray="6 10"
                      />
                      <circle
                        cx="96"
                        cy="96"
                        r="80"
                        fill="none"
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="2"
                        strokeDasharray="15 45"
                        strokeLinecap="round"
                      />
                    </svg>
                    
                    {/* Orbiting elements */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/70 rounded-full"></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/70 rounded-full"></div>
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white/70 rounded-full"></div>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white/70 rounded-full"></div>
                  </div>

                  {/* Central AI Core */}
                  <div className="relative w-32 h-32 flex items-center justify-center animate-pulse-grow">
                    <div className="absolute inset-0 bg-white/15 backdrop-blur-sm rounded-full border-2 border-white/40 flex items-center justify-center">
                      <div className="text-white heading-tertiary tracking-wider">AI</div>
              </div>

                    {/* Inner pulse ring */}
                    <div className="absolute inset-2 border border-white/30 rounded-full animate-pulse"></div>
                  </div>

                  {/* Expanding connection lines to left */}
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-96 overflow-hidden">
                    <div className="h-px bg-gradient-to-l from-white/60 to-transparent animate-expand-contract origin-right"></div>
                    <div className="h-px bg-gradient-to-l from-white/40 to-transparent animate-expand-contract origin-right mt-2" style={{animationDelay: '0.5s'}}></div>
                    <div className="h-px bg-gradient-to-l from-white/80 to-transparent animate-expand-contract origin-right -mt-4" style={{animationDelay: '1s'}}></div>
                  </div>
                  
                  {/* Top expanding lines */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -rotate-45 w-64 overflow-hidden">
                    <div className="h-px bg-gradient-to-l from-white/50 to-transparent animate-expand-contract" style={{animationDelay: '1.5s'}}></div>
              </div>

                  {/* Bottom expanding lines */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 rotate-45 w-64 overflow-hidden">
                    <div className="h-px bg-gradient-to-l from-white/50 to-transparent animate-expand-contract" style={{animationDelay: '2s'}}></div>
                  </div>

                  {/* Data nodes */}
                  <div className="absolute -top-6 -left-12 w-3 h-3 bg-white/30 rounded-full animate-float"></div>
                  <div className="absolute -bottom-8 -left-16 w-4 h-4 border border-white/40 rotate-45 animate-float" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-16 -left-20 w-2 h-2 bg-white/50 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                  <div className="absolute -top-4 left-20 w-3 h-3 border border-white/35 rotate-45 animate-float" style={{animationDelay: '0.5s'}}></div>
                  
                  {/* Data streams */}
                  <div className="absolute top-12 -left-24 flex flex-col gap-1">
                    <div className="w-8 h-0.5 bg-white/20 animate-expand-contract" style={{animationDelay: '2.5s'}}></div>
                    <div className="w-6 h-0.5 bg-white/30 animate-expand-contract" style={{animationDelay: '3s'}}></div>
                    <div className="w-10 h-0.5 bg-white/15 animate-expand-contract" style={{animationDelay: '3.5s'}}></div>
                  </div>
                  
                  <div className="absolute bottom-16 -left-24 flex flex-col gap-1">
                    <div className="w-12 h-0.5 bg-white/25 animate-expand-contract" style={{animationDelay: '1.2s'}}></div>
                    <div className="w-8 h-0.5 bg-white/20 animate-expand-contract" style={{animationDelay: '1.7s'}}></div>
                    <div className="w-6 h-0.5 bg-white/30 animate-expand-contract" style={{animationDelay: '2.2s'}}></div>
              </div>

                  {/* Geometric connectors */}
                  <div className="absolute top-20 -left-12 w-4 h-4">
                    <div className="w-full h-full border-l border-t border-white/30 animate-pulse"></div>
                  </div>
                  <div className="absolute bottom-20 -left-12 w-4 h-4">
                    <div className="w-full h-full border-l border-b border-white/30 animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default PurpleCTA;