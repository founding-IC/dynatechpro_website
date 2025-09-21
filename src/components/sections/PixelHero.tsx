import React from 'react';
import { ArrowRight } from 'lucide-react';

const CleanHero: React.FC = () => {
  const technologies = [
    'AI & ML',
    'Cloud Native', 
    'IoT',
    'DevOps',
    'Blockchain'
  ];

  return (
    <section className="section-wrapper relative h-[90vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/Generated File September 19, 2025 - 7_46PM.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 container-main h-full flex items-center">
        <div className="grid lg:grid-cols-2 grid-spacing items-center w-full">
          
          {/* Left Side Content with enhanced backdrop */}
          <div className="text-white content-spacing relative">
            
            {/* Content backdrop for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-2xl backdrop-blur-sm -m-4 p-4"></div>
            
            <div className="relative z-10 content-spacing">
            
            {/* Main Headline with enhanced text effects */}
            <div className="element-spacing">
              <h1 className="heading-primary">
                <span className="block mb-3 text-white drop-shadow-2xl" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'}}>
                  Next-Gen IT Solutions &
                </span>
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg" style={{textShadow: '0 0 30px rgba(77, 208, 225, 0.3)'}}>
                  Digital Transformation
                </span>
              </h1>
              
              {/* Dynamic Tagline with backdrop */}
              <div className="flex flex-wrap items-center gap-3 text-body-large font-medium">
                <span className="drop-shadow-lg" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>Powering</span>
                <div className="relative">
                  <div className="bg-white text-gray-900 px-3 py-1.5 rounded-lg font-bold shadow-2xl transform hover:scale-105 transition-transform duration-300 border-2 border-white/20">
                    Digital Growth
                  </div>
                </div>
                <span className="drop-shadow-lg" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>with Intelligent Solutions</span>
              </div>
            </div>

            {/* Description with enhanced readability */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <p className="text-body-large text-gray-100 font-medium">
                We deliver end-to-end infrastructure, product, web and mobile app development services to global businesses, with 100% project delivery success rate.
              </p>
              <p className="text-body-small text-gray-200 mt-3 font-medium">
                Hire the best programmers at affordable prices.
              </p>
            </div>

            {/* CTA Buttons with enhanced styling */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-start">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-bold text-base hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl border-2 border-white/20 button-scale mobile-touch-feedback focus-enterprise touch-target">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-bold text-base hover:bg-white/20 transition-all duration-300 backdrop-blur-md shadow-xl button-scale mobile-touch-feedback focus-enterprise-white touch-target">
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Technologies Section with backdrop */}
            <div className="pt-4 border-t border-white/30">
              <p className="text-body-small text-gray-100 mb-3 font-medium drop-shadow-lg" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
                Powering digital excellence with:
              </p>
              <div className="flex flex-wrap grid-spacing">
                {technologies.map((tech) => (
                  <div
                    key={tech}
                    className="bg-white/15 backdrop-blur-md border border-white/30 text-white px-3 py-1.5 rounded-lg font-medium hover:bg-white/25 transition-all duration-300 shadow-lg text-body-small smooth-hover"
                  >
                    {tech}
                </div>
                ))}
              </div>
            </div>
            
            </div>
            </div>

          {/* Right Side - Empty for now */}
          <div className="lg:block hidden">
            {/* Empty space for future content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanHero;