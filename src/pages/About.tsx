import React from 'react';
import { CheckCircle, Users, Award, Target, Heart, Globe } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.'
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Your success is our success. We are committed to delivering measurable business value.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in transparent communication and collaborative partnerships with our clients.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do, from code to client service.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      bio: 'With over 15 years of experience in software architecture and team leadership.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI & Machine Learning',
      bio: 'PhD in Computer Science with expertise in artificial intelligence and data science.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX/UI Design Director',
      bio: 'Award-winning designer with a passion for creating intuitive user experiences.'
    },
    {
      name: 'David Thompson',
      role: 'DevOps & Cloud Architect',
      bio: 'Expert in cloud infrastructure and automated deployment solutions.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 section-padding-lg">
        <div className="container-main">
          <div className="text-center section-gap">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-body-small font-medium mb-6">
              <Globe className="h-4 w-4 mr-2" />
              About DynaTechPro
            </div>
            <h1 className="heading-hero text-gray-900 mb-6">
              Transforming businesses through
              <span className="text-purple-600 block">innovative technology</span>
            </h1>
            <p className="text-hero-subtitle text-gray-600 max-w-3xl mx-auto">
              Since 2020, we've been partnering with forward-thinking companies to deliver 
              technology solutions that drive measurable growth and competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding-lg bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-spacing items-center">
            <div>
              <h2 className="heading-primary text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="content-spacing text-gray-600">
                <p>
                  DynaTechPro was founded with a simple yet ambitious vision: to bridge the gap between 
                  innovative technology and business success. Our founders, having worked with Fortune 500 
                  companies and startups alike, recognized the need for a technology partner that truly 
                  understands both the technical and business sides of digital transformation.
                </p>
                <p>
                  Based in Atlanta, GA, we've grown from a small team of passionate technologists to a 
                  comprehensive digital solutions provider. Our approach combines Stanford design thinking 
                  methodology with agile development practices, ensuring that every solution we deliver 
                  is not just technically excellent, but also perfectly aligned with your business objectives.
                </p>
                <p>
                  Today, we're proud to have completed over 500 projects, maintained a 95% client satisfaction 
                  rate, and helped our clients achieve an average of 40% cost reduction through our 
                  innovative solutions.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 grid-spacing">
              <div className="content-spacing">
                <div className="bg-purple-50 rounded-2xl p-6">
                  <div className="heading-tertiary text-purple-600 mb-2">500+</div>
                  <div className="text-gray-700">Projects Delivered</div>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6">
                  <div className="heading-tertiary text-purple-600 mb-2">95%</div>
                  <div className="text-gray-700">Client Satisfaction</div>
                </div>
              </div>
              <div className="space-y-6 mt-8">
                <div className="bg-purple-50 rounded-2xl p-6">
                  <div className="heading-tertiary text-purple-600 mb-2">40%</div>
                  <div className="text-gray-700">Cost Reduction</div>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6">
                  <div className="heading-tertiary text-purple-600 mb-2">5+</div>
                  <div className="text-gray-700">Years Partnership</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-main">
          <div className="text-center section-gap">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core <span className="text-purple-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-spacing">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="heading-tertiary text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-body text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding-lg bg-white">
        <div className="container-main">
          <div className="text-center section-gap">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-purple-600">Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leaders bring together decades of expertise in technology, 
              design, and business strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-spacing">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-purple-600" />
                </div>
                <h3 className="heading-tertiary text-gray-900 mb-2">{member.name}</h3>
                <div className="text-purple-600 font-medium mb-4">{member.role}</div>
                <p className="text-body-small text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-main">
          <div className="text-center section-gap">
            <h2 className="heading-primary mb-6">
              Our <span className="text-purple-400">Approach</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine proven methodologies with innovative thinking to deliver 
              solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 grid-spacing">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <CheckCircle className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="heading-tertiary mb-4">Stanford Design Thinking</h3>
              <p className="text-body text-gray-300">
                We apply human-centered design principles to ensure our solutions 
                truly meet user needs and drive adoption.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <CheckCircle className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="heading-tertiary mb-4">Agile Methodology</h3>
              <p className="text-body text-gray-300">
                Our agile approach ensures rapid delivery, continuous feedback, 
                and the flexibility to adapt as requirements evolve.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <CheckCircle className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="heading-tertiary mb-4">Outcome-Driven Focus</h3>
              <p className="text-body text-gray-300">
                Every project is measured against clear business outcomes, 
                ensuring our work delivers tangible value to your organization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;