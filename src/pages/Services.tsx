import React, { useState } from 'react';
import { 
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Zap,
  Building,
  Target,
  Search,
  ArrowRight,
  Star,
  Users,
  Award,
  Clock,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
  Code,
  Smartphone,
  Globe,
  ShoppingCart,
  MessageCircle,
  Settings,
  TrendingUp
} from 'lucide-react';

const Services = () => {
  const [activeFolder, setActiveFolder] = useState('ai-ml');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(6);

  const serviceCategories = {
    'ai-ml': {
      title: 'AI & ML',
      icon: Brain,
      description: 'Intelligent solutions that transform data into actionable insights',
      services: [
        {
          title: 'Machine Learning Models',
          description: 'Custom ML algorithms designed for your specific business challenges. Deploy predictive models that drive decision-making and automate complex processes.',
          techTags: ['Python', 'TensorFlow', 'Scikit-learn', 'MLOps'],
          icon: Brain
        },
        {
          title: 'Natural Language Processing',
          description: 'Advanced NLP solutions for text analysis, sentiment detection, and automated content processing. Enhance customer experience with intelligent language understanding.',
          techTags: ['BERT', 'GPT', 'SpaCy', 'NLTK'],
          icon: Brain
        },
        {
          title: 'Computer Vision',
          description: 'Image and video analysis solutions for quality control, object detection, and automated visual inspection. Reduce manual oversight and improve accuracy.',
          techTags: ['OpenCV', 'YOLO', 'PyTorch', 'Computer Vision'],
          icon: Brain
        },
        {
          title: 'Predictive Analytics',
          description: 'Data-driven forecasting models that predict trends, customer behavior, and business outcomes. Make informed decisions with confidence.',
          techTags: ['R', 'Python', 'Tableau', 'Power BI'],
          icon: BarChart3
        },
        {
          title: 'AI Chatbots',
          description: 'Intelligent conversational agents that provide 24/7 customer support and automate routine interactions. Scale your customer service efficiently.',
          techTags: ['Dialogflow', 'Azure Bot', 'NLP', 'API Integration'],
          icon: Brain
        },
        {
          title: 'Recommendation Systems',
          description: 'Personalized recommendation engines that increase engagement and drive sales. Deliver relevant content and products to your users.',
          techTags: ['Collaborative Filtering', 'Content-Based', 'Deep Learning', 'A/B Testing'],
          icon: Target
        }
      ]
    },
    'cloud-native': {
      title: 'Cloud Native',
      icon: Cloud,
      description: 'Scalable cloud infrastructure that grows with your business',
      services: [
        {
          title: 'Cloud Migration',
          description: 'Seamless migration of your existing infrastructure and applications to leading cloud platforms. Minimize downtime and ensure data integrity.',
          techTags: ['AWS', 'Azure', 'Google Cloud', 'Hybrid Cloud'],
          icon: Cloud
        },
        {
          title: 'Cloud-Native Development',
          description: 'Building modern, scalable applications directly on cloud platforms using microservices and serverless architectures. Leverage the full power of the cloud.',
          techTags: ['Kubernetes', 'Docker', 'Serverless', 'Microservices'],
          icon: Cloud
        },
        {
          title: 'Cloud Security',
          description: 'Comprehensive security strategies and implementations for your cloud environment. Protect your data and applications from evolving threats.',
          techTags: ['IAM', 'Encryption', 'Compliance', 'Threat Detection'],
          icon: Shield
        },
        {
          title: 'DevOps on Cloud',
          description: 'Automating your development and operations workflows on cloud platforms. Accelerate delivery, improve collaboration, and enhance reliability.',
          techTags: ['CI/CD', 'Terraform', 'Ansible', 'Jenkins'],
          icon: Zap
        }
      ]
    },
    'iot': {
      title: 'IoT',
      icon: Building,
      description: 'Connected devices and smart solutions for the Internet of Things',
      services: [
        {
          title: 'IoT Device Development',
          description: 'Custom IoT devices and sensors tailored to your specific needs. Build connected solutions that collect and transmit data efficiently.',
          techTags: ['Arduino', 'Raspberry Pi', 'ESP32', 'Sensors'],
          icon: Building
        },
        {
          title: 'IoT Platform Integration',
          description: 'Connect your IoT devices to cloud platforms for data processing, analytics, and remote management. Scale your IoT infrastructure.',
          techTags: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'MQTT'],
          icon: Cloud
        },
        {
          title: 'Smart Home Solutions',
          description: 'Intelligent home automation systems that enhance comfort, security, and energy efficiency. Control your home from anywhere.',
          techTags: ['Home Assistant', 'Zigbee', 'Z-Wave', 'Smart Sensors'],
          icon: Building
        },
        {
          title: 'Industrial IoT',
          description: 'Industrial-grade IoT solutions for manufacturing, agriculture, and logistics. Optimize operations with real-time monitoring.',
          techTags: ['Industrial Sensors', 'Edge Computing', 'Predictive Maintenance', 'SCADA'],
          icon: Building
        }
      ]
    },
    'devops': {
      title: 'DevOps',
      icon: Zap,
      description: 'Streamline development and operations with modern DevOps practices',
      services: [
        {
          title: 'CI/CD Pipeline Setup',
          description: 'Automated continuous integration and deployment pipelines that accelerate software delivery. Reduce manual errors and deployment time.',
          techTags: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps'],
          icon: Zap
        },
        {
          title: 'Infrastructure as Code',
          description: 'Manage and provision infrastructure using code. Ensure consistency, version control, and automated infrastructure management.',
          techTags: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi'],
          icon: Settings
        },
        {
          title: 'Container Orchestration',
          description: 'Deploy and manage containerized applications at scale. Ensure high availability, scalability, and efficient resource utilization.',
          techTags: ['Kubernetes', 'Docker Swarm', 'OpenShift', 'Rancher'],
          icon: Cloud
        },
        {
          title: 'Monitoring & Logging',
          description: 'Comprehensive monitoring and logging solutions for applications and infrastructure. Proactively identify and resolve issues.',
          techTags: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog'],
          icon: BarChart3
        }
      ]
    },
    'blockchain': {
      title: 'Blockchain',
      icon: Shield,
      description: 'Decentralized solutions and blockchain technology implementations',
      services: [
        {
          title: 'Smart Contract Development',
          description: 'Custom smart contracts for various blockchain platforms. Automate business processes with secure, transparent code.',
          techTags: ['Solidity', 'Ethereum', 'Web3', 'Smart Contracts'],
          icon: Shield
        },
        {
          title: 'DeFi Applications',
          description: 'Decentralized finance applications that provide financial services without traditional intermediaries. Build the future of finance.',
          techTags: ['DeFi', 'Yield Farming', 'Liquidity Pools', 'DEX'],
          icon: Shield
        },
        {
          title: 'NFT Marketplace',
          description: 'Non-fungible token marketplaces for digital assets. Create, trade, and manage unique digital collectibles and art.',
          techTags: ['NFT', 'IPFS', 'OpenSea', 'ERC-721'],
          icon: Shield
        },
        {
          title: 'Blockchain Integration',
          description: 'Integrate blockchain technology into existing business processes. Enhance transparency, security, and traceability.',
          techTags: ['Blockchain API', 'Web3 Integration', 'Wallet Integration', 'DApp'],
          icon: Shield
        }
      ]
    },
    'security': {
      title: 'Security',
      icon: Shield,
      description: 'Robust security measures to protect your digital assets',
      services: [
        {
          title: 'Cybersecurity Consulting',
          description: 'Expert guidance on developing and implementing a robust cybersecurity strategy. Identify vulnerabilities and build resilient defenses.',
          techTags: ['Risk Assessment', 'Compliance', 'Incident Response', 'Security Audit'],
          icon: Shield
        },
        {
          title: 'Penetration Testing',
          description: 'Simulated cyberattacks to identify weaknesses in your systems and applications. Proactively strengthen your security posture.',
          techTags: ['Web App Pentest', 'Network Pentest', 'Mobile Pentest', 'Social Engineering'],
          icon: Shield
        },
        {
          title: 'Identity & Access Management',
          description: 'Solutions for managing user identities and access privileges across your enterprise. Enhance security and streamline user experience.',
          techTags: ['SSO', 'MFA', 'Role-Based Access', 'Directory Services'],
          icon: Users
        },
        {
          title: 'Data Protection',
          description: 'Strategies and technologies to secure your sensitive data at rest and in transit. Ensure privacy and compliance with regulations.',
          techTags: ['Encryption', 'Data Masking', 'DLP', 'Backup & Recovery'],
          icon: Shield
        }
      ]
    },
    'qa-testing': {
      title: 'QA Testing',
      icon: Code,
      description: 'Comprehensive quality assurance and testing solutions',
      services: [
        {
          title: 'Automated Testing',
          description: 'Comprehensive test automation frameworks that accelerate testing cycles and improve software quality. Reduce manual testing effort.',
          techTags: ['Selenium', 'Cypress', 'Jest', 'TestCafe'],
          icon: Code
        },
        {
          title: 'Performance Testing',
          description: 'Load testing and performance optimization to ensure your applications can handle high traffic and maintain optimal performance.',
          techTags: ['JMeter', 'LoadRunner', 'K6', 'Performance Monitoring'],
          icon: BarChart3
        },
        {
          title: 'Security Testing',
          description: 'Specialized security testing to identify vulnerabilities and ensure your applications are protected against cyber threats.',
          techTags: ['OWASP', 'SAST', 'DAST', 'Security Scanning'],
          icon: Shield
        },
        {
          title: 'Mobile Testing',
          description: 'Comprehensive mobile application testing across different devices, platforms, and operating systems. Ensure flawless mobile experience.',
          techTags: ['Appium', 'Espresso', 'XCUITest', 'Device Testing'],
          icon: Code
        }
      ]
    },
    'mobile-development': {
      title: 'Mobile Development',
      icon: Smartphone,
      description: 'Native and cross-platform mobile applications',
      services: [
        {
          title: 'iOS App Development',
          description: 'Native iOS applications built with Swift and SwiftUI. Deliver exceptional user experiences on Apple devices.',
          techTags: ['Swift', 'SwiftUI', 'UIKit', 'Core Data'],
          icon: Smartphone
        },
        {
          title: 'Android App Development',
          description: 'Native Android applications built with Kotlin and Jetpack Compose. Create powerful mobile experiences for Android users.',
          techTags: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Room Database'],
          icon: Smartphone
        },
        {
          title: 'React Native Development',
          description: 'Cross-platform mobile applications using React Native. Build once, deploy everywhere with native performance.',
          techTags: ['React Native', 'JavaScript', 'TypeScript', 'Expo'],
          icon: Smartphone
        },
        {
          title: 'Flutter Development',
          description: 'Cross-platform mobile applications using Flutter. Create beautiful, fast mobile apps with a single codebase.',
          techTags: ['Flutter', 'Dart', 'Material Design', 'Cupertino'],
          icon: Smartphone
        }
      ]
    },
    'web-development': {
      title: 'Web Development',
      icon: Globe,
      description: 'Modern web applications and websites',
      services: [
        {
          title: 'Frontend Development',
          description: 'Modern, responsive web applications built with the latest frontend technologies. Create engaging user interfaces.',
          techTags: ['React', 'Vue.js', 'Angular', 'TypeScript'],
          icon: Globe
        },
        {
          title: 'Backend Development',
          description: 'Robust backend systems and APIs that power your applications. Build scalable server-side solutions.',
          techTags: ['Node.js', 'Python', 'PHP', 'Java'],
          icon: Globe
        },
        {
          title: 'Full-Stack Development',
          description: 'End-to-end web application development from frontend to backend. Complete solutions for your business needs.',
          techTags: ['MERN Stack', 'MEAN Stack', 'LAMP Stack', 'JAMstack'],
          icon: Globe
        },
        {
          title: 'E-commerce Development',
          description: 'Custom e-commerce platforms and online stores. Build powerful online retail solutions.',
          techTags: ['Shopify', 'WooCommerce', 'Magento', 'Custom E-commerce'],
          icon: Globe
        }
      ]
    },
    'data-analytics': {
      title: 'Data Analytics',
      icon: BarChart3,
      description: 'Transform raw data into strategic business insights',
      services: [
        {
          title: 'Data Engineering',
          description: 'Robust data pipelines and ETL processes that collect, clean, and prepare data for analysis. Ensure data quality and reliability.',
          techTags: ['ETL', 'Data Pipelines', 'Apache Spark', 'Data Quality'],
          icon: BarChart3
        },
        {
          title: 'Business Intelligence',
          description: 'Interactive dashboards and reporting solutions that provide real-time insights into business performance. Make data-driven decisions.',
          techTags: ['Tableau', 'Power BI', 'QlikView', 'Dashboard Design'],
          icon: BarChart3
        },
        {
          title: 'Real-Time Analytics',
          description: 'Streaming analytics solutions that process data in real-time. Get instant insights and respond to events as they happen.',
          techTags: ['Kafka', 'Apache Storm', 'Real-Time Processing', 'Stream Analytics'],
          icon: BarChart3
        },
        {
          title: 'Customer Analytics',
          description: 'Customer behavior analysis and segmentation solutions. Understand your customers better and personalize their experience.',
          techTags: ['Customer Segmentation', 'Behavioral Analytics', 'RFM Analysis', 'Personalization'],
          icon: Users
        }
      ]
    },
    'automation': {
      title: 'Automation',
      icon: Zap,
      description: 'Streamline operations and boost efficiency with intelligent automation',
      services: [
        {
          title: 'Robotic Process Automation (RPA)',
          description: 'Automate repetitive, rule-based tasks across various applications. Free up human resources for more strategic initiatives.',
          techTags: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Process Mining'],
          icon: Zap
        },
        {
          title: 'Workflow Automation',
          description: 'Design and implement automated workflows that connect systems and optimize business processes. Improve efficiency and reduce manual errors.',
          techTags: ['BPM', 'Integration', 'Process Orchestration', 'Low-Code Automation'],
          icon: Settings
        },
        {
          title: 'Intelligent Automation',
          description: 'Combine AI and RPA to automate complex, cognitive tasks. Enhance decision-making and achieve higher levels of operational efficiency.',
          techTags: ['AI', 'ML', 'RPA', 'Cognitive Automation'],
          icon: Brain
        },
        {
          title: 'Test Automation',
          description: 'Automate software testing processes to accelerate delivery and improve software quality. Reduce manual effort and catch bugs earlier.',
          techTags: ['Selenium', 'Cypress', 'JMeter', 'CI/CD'],
          icon: Code
        }
      ]
    },
    'digital-strategy': {
      title: 'Digital Strategy',
      icon: Target,
      description: 'Strategic guidance to navigate your digital transformation journey',
      services: [
        {
          title: 'IT Consulting',
          description: 'Expert strategic advice to align your IT initiatives with business goals. Drive innovation and achieve competitive advantage.',
          techTags: ['Digital Transformation', 'IT Roadmap', 'Enterprise Architecture', 'Cost Optimization'],
          icon: Target
        },
        {
          title: 'Technology Roadmap',
          description: 'Develop a clear technology roadmap that outlines key initiatives, timelines, and investments. Plan for future growth and innovation.',
          techTags: ['Strategic Planning', 'Innovation', 'Future-Proofing', 'ROI Analysis'],
          icon: TrendingUp
        },
        {
          title: 'Business Process Re-engineering',
          description: 'Optimize and redesign your core business processes for maximum efficiency and effectiveness. Leverage technology for process improvement.',
          techTags: ['Process Optimization', 'Lean Six Sigma', 'Workflow Design', 'Change Management'],
          icon: Settings
        },
        {
          title: 'Digital Transformation Consulting',
          description: 'Guide your organization through a holistic digital transformation. Embrace new technologies and operating models for sustained growth.',
          techTags: ['Agile Transformation', 'Customer Experience', 'Innovation', 'Culture Change'],
          icon: Sparkles
        }
      ]
    }
  };

  const currentCategory = serviceCategories[activeFolder as keyof typeof serviceCategories];
  const filteredServices = currentCategory.services.filter(service =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.techTags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleFolderChange = (folderId: string) => {
    setActiveFolder(folderId);
    setSearchQuery(''); // Clear search when switching folders
    setCurrentPage(0); // Reset to first page
    setExpandedCard(null); // Close any expanded card
  };

  const handleCardExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
    setExpandedCard(null);
  };

  const handleNextPage = () => {
    const maxPage = Math.ceil(filteredServices.length / itemsPerPage) - 1;
    setCurrentPage(prev => Math.min(maxPage, prev + 1));
    setExpandedCard(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Hero Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-main">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-gray-700 text-sm font-medium">Our Services</span>
            </div>
            
            <h1 className="heading-hero text-gray-900 mb-3">
              <span className="bg-gradient-to-r from-secondary-light via-secondary to-secondary-dark bg-clip-text text-transparent font-bold">Powering</span> Tomorrow's <span className="text-gray-900">Enterprise</span>
            </h1>
            
            <p className="text-hero-subtitle text-gray-600 mb-6 max-w-4xl mx-auto">
              <span className="text-gray-900">Dive into our curated collection of</span> <span className="bg-gradient-to-r from-secondary-light via-secondary to-secondary-dark bg-clip-text text-transparent font-semibold">next-generation </span> 
              IT solutions. Whether you're scaling with <span className="bg-gradient-to-r from-secondary-light via-secondary to-secondary-dark bg-clip-text text-transparent font-semibold">AI-driven insights</span>, securing with 
              <span className="bg-gradient-to-r from-secondary-light via-secondary to-secondary-dark bg-clip-text text-transparent font-semibold"> zero-trust architecture</span>, or building 
              <span className="bg-gradient-to-r from-secondary-light via-secondary to-secondary-dark bg-clip-text text-transparent font-semibold"> cloud-native applications</span>, we turn your technology vision into reality.
            </p>

            {/* Technology Stack with Animation */}
            <div className="mb-6">
              <p className="text-body-small text-gray-500 mb-4 font-medium">
                <span className="bg-gradient-to-r from-secondary-light via-secondary to-secondary-dark bg-clip-text text-transparent font-bold">Powering digital excellence with:</span>
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
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
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-secondary-light via-secondary to-secondary-dark text-white rounded-full text-sm font-medium hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-500">Expert Team</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-500">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Folder System */}
      <section className="section-padding-sm bg-gradient-to-r from-secondary-light via-secondary to-secondary-dark border-y border-white/10">
        <div className="container-main">
          {/* Folder Structure Header */}
          <div className="text-center mb-8">
            <h2 className="heading-secondary text-white mb-4">Our Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive service offerings
            </p>
          </div>

          {/* Folder Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.entries(serviceCategories).map(([key, category]) => {
              const IconComponent = category.icon;
              const isActive = activeFolder === key;
              
              return (
                <button
                  key={key}
                  onClick={() => handleFolderChange(key)}
                  className={`folder-tab px-6 py-4 rounded-t-2xl font-semibold transition-all duration-400 ease-out flex items-center gap-3 ${
                    isActive
                      ? 'active bg-white/20 text-white border-2 border-cyan-400/30 shadow-lg'
                      : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 border-2 border-transparent'
                  }`}
                  style={{
                    transform: isActive ? 'translateY(0)' : 'translateY(8px)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.transform = 'translateY(4px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.transform = 'translateY(8px)';
                    }
                  }}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{category.title}</span>
                  {isActive && (
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </div>
          
          {/* Current Folder Description */}
          <div className="text-center mb-8">
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">{currentCategory.description}</p>
          </div>

          {/* Services Grid with Navigation */}
          <div className="relative">
            {/* Navigation Arrows */}
            {filteredServices.length > itemsPerPage && (
              <>
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 0}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 ${
                    currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:scale-110'
                  }`}
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage >= Math.ceil(filteredServices.length / itemsPerPage) - 1}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 ${
                    currentPage >= Math.ceil(filteredServices.length / itemsPerPage) - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:scale-110'
                  }`}
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </>
            )}

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-12">
              {filteredServices
                .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
                .map((service, index) => {
                  const globalIndex = currentPage * itemsPerPage + index;
                  const isExpanded = expandedCard === globalIndex;
                  const IconComponent = service.icon;
                  
                  return (
                    <div
                      key={globalIndex}
                      data-index={globalIndex}
                      className={`group bg-white rounded-lg shadow-lg transition-all duration-500 ${
                        isExpanded ? 'col-span-1 md:col-span-2 lg:col-span-3' : ''
                      } opacity-100 translate-y-0`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* Compact Card View */}
                      {!isExpanded ? (
                        <div className="p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-gradient-to-r from-secondary-light via-secondary to-secondary-dark rounded-lg">
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                            </div>
                            <button
                              onClick={() => handleCardExpand(globalIndex)}
                              className="px-4 py-2 bg-gradient-to-r from-secondary-light via-secondary to-secondary-dark text-white text-sm font-medium rounded-lg hover:from-secondary-dark hover:to-secondary-light transition-all duration-300"
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* Expanded Card View */
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-4">
                              <div className="p-3 bg-gradient-to-r from-secondary-light via-secondary to-secondary-dark rounded-lg">
                                <IconComponent className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                <div className="flex items-center">
                                  {[1,2,3,4,5].map((star) => (
                                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => handleCardExpand(globalIndex)}
                              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
                            >
                              <X className="w-5 h-5 text-gray-500" />
                            </button>
                          </div>

                          <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {service.techTags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-purple-100 hover:text-purple-700 transition-colors duration-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                        </div>
                      )}
                    </div>
                  );
                })}
            </div>

            {/* Page Indicator */}
            {filteredServices.length > itemsPerPage && (
              <div className="flex justify-center mt-6 gap-2">
                {Array.from({ length: Math.ceil(filteredServices.length / itemsPerPage) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentPage(index);
                      setExpandedCard(null);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentPage === index ? 'bg-purple-600' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-2">No services found</div>
              <p className="text-gray-500">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding-lg bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="heading-primary text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-section-subtitle text-gray-600 max-w-3xl mx-auto">
              Partner with industry experts who understand your business challenges and deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Proven Expertise", desc: "15+ years of industry experience" },
              { icon: Shield, title: "Secure & Reliable", desc: "Enterprise-grade security standards" },
              { icon: Clock, title: "On-Time Delivery", desc: "100% projects delivered on schedule" },
              { icon: Users, title: "Dedicated Support", desc: "24/7 technical assistance" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center animate-zoom-flow"
                style={{
                  animationDelay: `${index * 0.5}s`,
                  animationDuration: '3s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'ease-in-out'
                }}
              >
                <div className="p-4 bg-gradient-to-r from-secondary-light via-secondary to-secondary-dark rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-quaternary text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gradient-to-r from-secondary-light via-secondary to-secondary-dark">
        <div className="container-content text-center">
          <h2 className="heading-tertiary text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-body text-white/90 mb-6 max-w-xl mx-auto">
            Join 5,400+ satisfied clients who have transformed their businesses with our expert IT consulting services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <button className="bg-white text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </button>
            <button className="btn-outline-enterprise px-6 py-3">
              <Users className="w-4 h-4 mr-2" />
              Schedule Consultation
            </button>
          </div>

          {/* Final Trust Indicators */}
          <div className="flex items-center justify-center space-x-6 pt-4 border-t border-white/20">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-white/80 text-xs">5.0/5 Rating</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white">100+</div>
              <div className="text-white/80 text-xs">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white">100+</div>
              <div className="text-xs text-white/80">Clients</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;