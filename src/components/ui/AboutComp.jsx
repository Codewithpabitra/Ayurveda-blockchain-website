import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Heart, 
  Users, 
  Award,
  Leaf,
  Globe,
  Shield,
  Zap
} from 'lucide-react';
import ImplementationButton from './ImplementationButton';

const values = [
  {
    icon: Shield,
    title: "Transparency",
    description: "Complete visibility into every step of the supply chain"
  },
  {
    icon: Heart,
    title: "Sustainability", 
    description: "Protecting traditional practices while embracing innovation"
  },
  {
    icon: Users,
    title: "Community",
    description: "Empowering farmers and strengthening local communities"
  },
  {
    icon: Award,
    title: "Quality",
    description: "Uncompromising commitment to the highest standards"
  }
];

const team = [
  {
    name: "Dhritish Mukherjee",
    role: "Blockchain Developer",
    expertise: "Blockchain , Smart Contract and Backend Engineer",
    bio: "2+ years of experience"
  },
  {
    name: "Pabitra Maity",
    role: "Frontend Developer", 
    expertise: "Proficiency in Frontend Application",
    bio: "1+ years of experience"
  },
  {
    name: "Smadrita Bag",
    role: "Hardware Engineer",
    expertise: "Well spent in Harware Design",
    bio: "1+ Years of experience"
  },
  {
    name: "Mayukh Saha",
    role: "Designer",
    expertise: "Design of Application",
    bio: "1+ Years of experience"
  },
  {
    name: "Advay Mondal",
    role: "Hardware Engineer",
    expertise: "Well expreience in Harware Design",
    bio: "2+ Years of experience"
  },
  {
    name: "Adityaraj Paul",
    role: "ML Engineer",
    expertise: "Machine Learing and Hardware",
    bio: "1+ Years of experience"
  },


];

const milestones = [
  {
    year: "2022",
    title: "Company Founded",
    description: "Started with a vision to revolutionize herb traceability"
  },
  {
    year: "2023", 
    title: "Pilot Launch",
    description: "Successful Ashwagandha pilot with 500+ farmers"
  },
  {
    year: "2024",
    title: "Platform Expansion",
    description: "Multi-herb platform serving 50+ manufacturers"
  },
  {
    year: "2025",
    title: "Global Reach",
    description: "Expanding to Southeast Asia and Latin America"
  }
];

const AboutComp = () => {
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
              <Heart className="h-4 w-4 mr-2" />
              Our Story
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Bridging <span className="text-glow-gold">Ancient Wisdom</span>
              <br />
              with Modern Technology
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              We're on a mission to preserve the integrity of Ayurvedic traditions while 
              building trust through transparency and technological innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card-glow p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To revolutionize the Ayurvedic herbal supply chain through blockchain 
                  technology, ensuring complete transparency, quality assurance, and fair 
                  compensation for farmers while preserving traditional knowledge and practices.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card-glow p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Globe className="h-8 w-8 text-secondary" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A world where every Ayurvedic herb can be traced back to its source, 
                  where consumers trust what they consume, farmers are fairly compensated, 
                  and traditional medicine thrives in the modern world.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-white lg:text-5xl font-bold mb-6">
              Our <span className="text-green-500">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do, from technology development to farmer partnerships.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="card-feature text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-white lg:text-5xl font-bold mb-6">
              Meet Our <span className="text-green-500">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate experts combining deep domain knowledge with cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="card-glow p-6 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{member.expertise}</p>
                <p className="text-xs text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      

      {/* Call to Action */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className=" p-12 max-w-4xl mx-auto my-0">
              
              <h2 className="text-4xl text-white font-bold mb-6">
                Join Our <span className="text-green-500">Mission</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're a farmer, manufacturer, or consumer passionate about quality 
                and transparency, there's a place for you in our ecosystem.
              </p>
              
              
            </div>
          </motion.div>


        </div>
        </section>

        <ImplementationButton />
    </div>
  );
};

export default AboutComp;