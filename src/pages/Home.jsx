import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { HerbalGlobe } from '../components/three/HarbalGlobe';
import { Button } from '../components/ui/button';
import { Mouse } from "lucide-react";

import { 
  ArrowRight, 
  Sparkles, 
  Shield, 
  MapPin,
  QrCode,
  Leaf,
  ChevronDown
} from 'lucide-react';
import { HeroScrollDemo } from '../components/HeroScrollDemo';
import AnimateButton from '../components/ui/AnimateButton';

const Home = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);
  const featuresRef = useRef(null);
  const isInView = useInView(featuresRef, { once: true });

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(ctaRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.3");
  }, []);

  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen min-w-full ">

      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center"
        style={{
          position: 'relative',
          // background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 50%, hsl(var(--background)) 100%)',
          overflow: 'hidden'
        }}
      >
        {/* 3D Globe Background */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <HerbalGlobe />
        </div>

        {/* Overlay gradient */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // background: 'linear-gradient(to right, hsl(var(--background) / 0.9) 0%, hsl(var(--background) / 0.5) 50%, transparent 100%)',
          zIndex: 10
        }} />

        {/* Hero Content */}
        <div className="container" style={{ position: 'relative', zIndex: 20 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
            <motion.div 
              ref={textRef}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
              initial={{ opacity: 0 }}
            >
              {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <motion.div
                  className="text-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    backgroundColor: 'hsl(var(--primary) / 0.1)',
                    border: '1px solid hsl(var(--primary) / 0.2)',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    maxWidth: 'fit-content'
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles style={{ height: '1rem', width: '1rem', marginRight: '0.5rem' }} />
                  Blockchain-Powered Transparency
                </motion.div>
                
                <h1 style={{ 
                  fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
                  fontWeight: '700', 
                  lineHeight: '1.1',
                  marginBottom: '1rem'
                }}>
                  <span className="gradient-text-hero">Trace Ayurvedic</span>
                  <br />
                  <span className="text-foreground">Herbs from</span>
                  <br />
                  <span className="gradient-text">Farm to Formulation</span>
                </h1>
                
                <p className="text-xl text-muted-foreground" style={{ 
                  lineHeight: '1.75',
                  maxWidth: '50rem',
                  margin: '0 auto'
                }}>
                  Revolutionary blockchain traceability system ensuring complete transparency 
                  in the Ayurvedic herbal supply chain with geo-tagging and QR-code provenance.
                </p>
              </div> */}

              {/* <motion.div 
                ref={ctaRef}
                className="flex gap-4"
                style={{ 
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem'
                }}
                initial={{ opacity: 0 }}
              >
                <div className="flex gap-4" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Link to="/solution">
                    <div className="btn-hero" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      Explore Solution
                      <ArrowRight style={{ height: '1.25rem', width: '1.25rem' }} />
                    </div>
                  </Link>
                  
                  <Link to="/contact">
                    <div className="btn-hero-outline">
                      Contact Us
                    </div>
                  </Link>
                </div>
              </motion.div> */}

              {/* <div className="flex items-center gap-8 mt-8" style={{ 
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '2rem'
              }}>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">50K+</div>
                  <div style={{ fontSize: '0.875rem' }} className="text-muted-foreground">Herbs Tracked</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">99.9%</div>
                  <div style={{ fontSize: '0.875rem' }} className="text-muted-foreground">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">500+</div>
                  <div style={{ fontSize: '0.875rem' }} className="text-muted-foreground">Partners</div>
                </div>
              </div> */}
            </motion.div>

            {/* Globe space - content flows around it */}
            <div style={{ 
              position: 'relative', 
              height: '24rem',
              minHeight: '31.25rem'
            }}>
              {/* Floating feature cards */}
              <motion.div
                className="card-glow"
                style={{
                  position: 'absolute',
                  top: '2.5rem',
                  right: 0,
                  maxWidth: '18rem',
                  zIndex: 30
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center" style={{ gap: '0.75rem' }}>
                  <QrCode className="text-primary" style={{ height: '2rem', width: '2rem' }} />
                  <div>
                    <h3 className="font-semibold">QR Provenance</h3>
                    <p style={{ fontSize: '0.875rem' }} className="text-muted-foreground">Instant herb history</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="card-glow"
                style={{
                  position: 'absolute',
                  bottom: '5rem',
                  left: 0,
                  maxWidth: '18rem',
                  zIndex: 30
                }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center" style={{ gap: '0.75rem' }}>
                  <MapPin className="text-secondary" style={{ height: '2rem', width: '2rem' }} />
                  <div>
                    <h3 className="font-semibold">Geo-Tagging</h3>
                    <p style={{ fontSize: '0.875rem' }} className="text-muted-foreground">Precise farm locations</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToFeatures}
          className="glass text-primary mt-40"
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20,
            padding: '0.5rem',
            borderRadius: '9999px',
            cursor: 'pointer',
            border: 'none',
            marginTop: '40px',
            transition: 'all 0.3s ease',
          
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          {/* <ChevronDown style={{ height: '1.5rem', width: '1.5rem' }} /> */}
           <Mouse className="w-8 h-8 text-green-600 " />
        </motion.button>
      </section>

      

      {/* Quick Features Section */}
      <section ref={featuresRef} style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        
      }}>
        <div className="container px-4">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >

            
            <h2 className="text-4xl font-bold mb-6 text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              <span className="gradient-text-hero">Revolutionary</span> Supply Chain Transparency
            </h2>
            <p className="text-xl text-muted-foreground" style={{ 
              maxWidth: '48rem',
              margin: '0 auto'
            }}>
              Every herb tells a story. From the farmer who grew it to the consumer who benefits from it.
            </p>
          </motion.div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {[
              {
                icon: Shield,
                title: "Blockchain Security",
                description: "Immutable records ensuring data integrity and trust throughout the supply chain",
                color: "text-primary",
                delay: 0.2
              },
              {
                icon: MapPin,
                title: "Geo-Tagging",
                description: "Precise location tracking from farm to final product with GPS coordinates",
                color: "text-secondary",
                delay: 0.4
              },
              {
                icon: Leaf,
                title: "Quality Assurance",
                description: "Real-time quality monitoring and certification at every step of the process",
                color: "text-primary",
                delay: 0.6
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className=" mt-20 card-feature text-center cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg hover:shadow-green-400"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: feature.delay }}
                whileHover={{ y: -8 }}
              >
                <div  style={{
                  display: 'inline-flex',
                  padding: '1rem',
                  borderRadius: '1rem',
                  backgroundColor: 'hsl(var(--primary) / 0.1)',
                  marginBottom: '1.5rem',

                }}>
                  <feature.icon className={feature.color} style={{ height: '2rem', width: '2rem' }} />
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{
                  transition: 'color 0.3s ease'
                }}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground" style={{ lineHeight: '1.75' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <AnimateButton/>
        </div>
      </section>
    </div>
  );
};

export default Home;