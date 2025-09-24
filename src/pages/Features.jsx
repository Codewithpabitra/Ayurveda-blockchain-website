import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  MapPin, 
  QrCode, 
  Users, 
  Database, 
  BarChart3,
  Smartphone,
  Globe,
  Lock,
  Zap,
  Eye,
  FileCheck
} from 'lucide-react';
import SolutionGoButton from '../components/ui/SolutionGoButton';

const features = [
  {
    category: "Blockchain Technology",
    items: [
      {
        icon: Shield,
        title: "Permissioned Blockchain Network",
        description: "Private blockchain ensuring data security while maintaining transparency for authorized stakeholders.",
        benefits: ["Enterprise-grade security", "Controlled access", "Immutable records", "Consensus mechanisms"],
        color: "primary"
      },
      {
        icon: Lock,
        title: "Smart Contracts",
        description: "Automated verification and execution of supply chain agreements and quality standards.",
        benefits: ["Automated compliance", "Reduced disputes", "Instant verification", "Trust automation"],
        color: "accent"
      }
    ]
  },
  {
    category: "Data Capture & Tracking",
    items: [
      {
        icon: MapPin,
        title: "Geo-tagged Data Capture",
        description: "Precise GPS coordinates and environmental data captured at every stage of the supply chain.",
        benefits: ["Exact farm locations", "Climate data", "Soil information", "Harvest conditions"],
        color: "secondary"
      },
      {
        icon: Database,
        title: "Comprehensive Data Storage",
        description: "Structured storage of all relevant information from cultivation to consumption.",
        benefits: ["Complete herb profiles", "Processing records", "Quality metrics", "Batch tracking"],
        color: "primary"
      }
    ]
  },
  {
    category: "Consumer Interface",
    items: [
      {
        icon: QrCode,
        title: "Smart Labeling & QR Codes",
        description: "Dynamic QR codes linking to complete product history and real-time information.",
        benefits: ["Instant access", "Mobile-friendly", "Always updated", "Interactive experience"],
        color: "accent"
      },
      {
        icon: Smartphone,
        title: "Consumer Portal",
        description: "User-friendly mobile application for consumers to access product information.",
        benefits: ["Easy scanning", "Detailed reports", "Farmer profiles", "Quality certificates"],
        color: "secondary"
      }
    ]
  },
  {
    category: "Analytics & Reporting",
    items: [
      {
        icon: BarChart3,
        title: "Advanced Analytics",
        description: "Real-time insights and predictive analytics for supply chain optimization.",
        benefits: ["Performance metrics", "Trend analysis", "Quality insights", "Supply forecasting"],
        color: "primary"
      },
      {
        icon: Eye,
        title: "Transparency Dashboard",
        description: "Comprehensive dashboards providing visibility into all supply chain activities.",
        benefits: ["Real-time monitoring", "Custom views", "Alert systems", "Export capabilities"],
        color: "accent"
      }
    ]
  },
  {
    category: "Integration & Compliance",
    items: [
      {
        icon: Globe,
        title: "APIs & FHIR Interoperability",
        description: "Seamless integration with existing systems and healthcare standards compliance.",
        benefits: ["Easy integration", "Healthcare standards", "Third-party APIs", "Data exchange"],
        color: "secondary"
      },
      {
        icon: FileCheck,
        title: "Regulatory Compliance",
        description: "Built-in compliance with international quality and safety standards.",
        benefits: ["Automated reporting", "Audit trails", "Standards compliance", "Documentation"],
        color: "primary"
      }
    ]
  }
];

const stats = [
  { number: "99.9%", label: "Data Accuracy", description: "Blockchain-verified information" },
  { number: "< 2s", label: "QR Scan Response", description: "Lightning-fast access" },
  { number: "24/7", label: "Real-time Monitoring", description: "Continuous tracking" },
  { number: "100%", label: "Transparency", description: "Complete supply chain visibility" }
];

const Features = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Comprehensive Feature Set
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 mt-9">
              Powerful <span className="text-glow-gold">Features</span>
              <br />
              for Complete Traceability
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Advanced blockchain technology combined with user-friendly interfaces 
              to revolutionize the Ayurvedic herbal supply chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16  ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-green-400 font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-white/70">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {features.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    <span className="text-green-400 ">{category.category}</span>
                  </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {category.items.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="card-feature group"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: featureIndex * 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8 }}
                    >
                      <div className="flex items-start space-x-6">
                        <div className={`p-4 rounded-2xl bg-${feature.color}/10 group-hover:scale-110 transition-transform duration-300`}>
                          <feature.icon className={`h-8 w-8 text-${feature.color}`} />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {feature.description}
                          </p>

                          <div className="grid grid-cols-2 gap-3">
                            {feature.benefits.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="flex items-center space-x-2">
                                <div className={`w-2 h-2 rounded-full bg-${feature.color}`} />
                                <span className="text-sm text-muted-foreground">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Integration Section */}
          <motion.div
            className="mt-24 mb-0 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className=" p-12 text-center ">
              <h3 className="text-3xl font-bold mb-6 text-white ">
                Seamless <span className="text-green-500">Integration</span>
              </h3>
              <p className="text-xl text-muted-foreground  max-w-3xl mx-auto">
                Our platform integrates with existing systems, scales with your business, 
                and adapts to your specific supply chain requirements.
              </p>

            </div>
          </motion.div>

          <SolutionGoButton />
        </div>
      </section>
    </div>
  );
};

export default Features;
