import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  AlertTriangle, 
  Users, 
  Package, 
  TrendingDown,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';


import { PiSelectionBackgroundDuotone } from "react-icons/pi";
import AnimateButton from '../components/ui/AnimateButton';
import SolutionGoButton from '../components/ui/SolutionGoButton';

gsap.registerPlugin(ScrollTrigger);

const problemAreas = [
  {
    title: "Fragmented Supply Chain",
    description: "Multiple intermediaries create information gaps and reduce transparency",
    icon: Package,
    impact: "60% of information lost",
    color: "text-red-500"
  },
  {
    title: "Quality Concerns",
    description: "Lack of verifiable quality control and testing documentation",
    icon: AlertTriangle,
    impact: "40% quality variations",
    color: "text-orange-500"
  },
  {
    title: "Consumer Trust",
    description: "Limited visibility into herb origins and processing methods",
    icon: Users,
    impact: "70% consumer distrust",
    color: "text-yellow-500"
  },
  {
    title: "Market Inefficiencies",
    description: "Poor coordination between farmers, processors, and manufacturers",
    icon: TrendingDown,
    impact: "30% revenue loss",
    color: "text-red-600"
  }
];

const supplyChainSteps = [
  { name: "Farmer", role: "Cultivation & Harvest", issues: ["No digital records", "Manual documentation", "Limited quality control"] },
  { name: "Processor", role: "Cleaning & Preparation", issues: ["Batch mixing", "Quality variations", "Incomplete traceability"] },
  { name: "Laboratory", role: "Quality Testing", issues: ["Paper certificates", "Data silos", "Delayed results"] },
  { name: "Manufacturer", role: "Final Products", issues: ["Supply uncertainty", "Quality inconsistency", "Brand risk"] },
  { name: "Consumer", role: "End User", issues: ["No transparency", "Trust concerns", "Limited information"] }
];

const Background = () => {
  const heroRef = useRef(null);
  const problemsRef = useRef(null);
  const supplyChainRef = useRef(null);
  const isProblemsInView = useInView(problemsRef, { once: true });
  const isSupplyChainInView = useInView(supplyChainRef, { once: true });

  useEffect(() => {
    gsap.from(heroRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Title Section  */}
       <motion.div 
               initial={{
                  top: '0px',
                  opacity: 0
                }}
                animate={{
                  top: '50px',
                  opacity: 1,
                  
                }}
      
                transition={{
                  duration: 2,
                  delay: 1
                }}
      
               className="w-fit first flex justify-center items-center gap-3 border border-red-600 px-4 py-1 my-10 rounded-full mx-auto  ">
                < PiSelectionBackgroundDuotone className='text-blue-500 w-fit ' />
                <p className='text-gray-200 text-xl w-fit '>Why Need This?  </p>
        </motion.div>

      {/* Problems Section */}
      <section ref={problemsRef} className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isProblemsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white ">
              <span className="gradient-text">Critical</span > Pain Points
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple stakeholders, fragmented processes, and lack of digital infrastructure 
              create systemic issues across the entire supply chain.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {problemAreas.map((problem, index) => (
              <motion.div
                key={index}
                className="card-glow p-8 group"
                initial={{ opacity: 0, y: 30 }}
                animate={isProblemsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/30 group-hover:scale-110 transition-transform duration-300">
                    <problem.icon className={`h-8 w-8 ${problem.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {problem.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-medium">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      {problem.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Visualization */}
      <section ref={supplyChainRef} className="py-24 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isSupplyChainInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white ">
              Current Supply Chain <span className="text-red-600 dark:text-red-400">Breakdown</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each step in the traditional supply chain introduces inefficiencies and reduces transparency.
            </p>
          </motion.div>

          {/* Supply Chain Flow */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-200 via-orange-200 to-yellow-200 dark:from-red-800/50 dark:via-orange-800/50 dark:to-yellow-800/50 rounded-full" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {supplyChainSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isSupplyChainInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="card-glow p-6 text-center relative z-10 group hover:shadow-xl transition-all duration-300">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>

                    <div className="mt-4 mb-4">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {step.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {step.role}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-3">
                        Current Issues:
                      </h4>
                      {step.issues.map((issue, issueIndex) => (
                        <div key={issueIndex} className="flex items-start space-x-2 text-xs">
                          <AlertTriangle className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-left">{issue}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow for mobile */}
                  {index < supplyChainSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-4 mb-4">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isSupplyChainInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="card-glow p-8 max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                It's Time for a <span className="gradient-text">Digital Revolution</span>
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Traditional supply chains can't meet modern demands for transparency, 
                quality, and consumer trust. Our blockchain solution addresses every pain point.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  "Complete Transparency",
                  "Immutable Records", 
                  "Real-time Tracking"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center justify-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

            </div>


            <SolutionGoButton />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Background;
