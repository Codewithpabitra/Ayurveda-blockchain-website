import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, Package, Shield, QrCode, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const colorClasses = {
  primary: { text: "text-primary", bg: "bg-primary/20", ping: "bg-primary" },
  secondary: { text: "text-secondary", bg: "bg-secondary/20", ping: "bg-secondary" },
  accent: { text: "text-accent", bg: "bg-accent/20", ping: "bg-accent" },
};

const blockchainSteps = [
  { id: 1, title: "Collection Event", subtitle: "Farm to Basket", description: "Farmers geo-tag harvest locations, record quality parameters, and timestamp collection events on the blockchain.", icon: Leaf, color: "primary", features: ["GPS coordinates", "Harvest timestamp", "Quality metrics", "Farmer certification"] },
  { id: 2, title: "Processing Step", subtitle: "Transformation", description: "Processing facilities record cleaning, drying, and preparation methods with quality control checkpoints.", icon: Package, color: "secondary", features: ["Processing methods", "Quality control", "Batch tracking", "Facility certification"] },
  { id: 3, title: "Quality Testing", subtitle: "Verification", description: "Independent labs conduct comprehensive testing and upload digital certificates to the blockchain.", icon: Shield, color: "accent", features: ["Lab analysis", "Digital certificates", "Compliance verification", "Test results"] },
  { id: 4, title: "Packaging & QR", subtitle: "Final Step", description: "Products receive unique QR codes linking to complete provenance history for consumer access.", icon: QrCode, color: "primary", features: ["Unique QR codes", "Complete history", "Consumer access", "Final packaging"] },
];

const BlockchainTimeline = () => {
  const timelineRef = useRef(null);
  const stepsRef = useRef([]);
  const isInView = useInView(timelineRef, { once: true });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline nodes
      stepsRef.current.filter(Boolean).forEach((step, i) => {
        gsap.fromTo(
          step,
          { y: 50, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
            },
          }
        );
      });

      // Animate vertical timeline line fill
      const timelineLine = timelineRef.current.querySelector(".timeline-line");
      gsap.fromTo(
        timelineLine,
        { height: 0 },
        {
          height: "100%",
          duration: 1,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen pt-16 bg-background">

        <div className="conatiner flex flex-col gap-3 ">
            <h1 className="text-green-500 text-4xl font-bold ">Blokchain Title</h1>
            <p className="text-xl text-gray-400 ">Every step is recorded on an immutable blockchain, creating complete transparency and trust.</p>

        </div>

      <section ref={timelineRef} className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="relative lg:flex lg:flex-col lg:items-center">
            {/* Vertical Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-0.5 w-1 bg-gray-300 rounded-full h-full">
              <div className="timeline-line absolute top-0 w-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full h-0" />
            </div>

            <div className="space-y-16 lg:w-2/3">
              {blockchainSteps.map((step, index) => (
                <div
                  key={step.id}
                  ref={(el) => (stepsRef.current[index] = el)}
                  className={`flex flex-col lg:flex-row ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center`}
                >
                  {/* Content Card */}
                  <motion.div
                    className={`w-full lg:w-5/12 p-6 bg-white rounded-2xl shadow-lg group`}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-4 rounded-2xl ${colorClasses[step.color].bg} group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className={`${colorClasses[step.color].text} h-8 w-8`} />
                      </div>
                      <div className="flex-1">
                        <span className={`text-sm font-medium ${colorClasses[step.color].text} mb-2 block`}>
                          Step {step.id}
                        </span>
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-lg text-muted-foreground font-medium mb-4">{step.subtitle}</p>
                        <p className="text-muted-foreground leading-relaxed mb-6">{step.description}</p>
                        <div className="grid grid-cols-2 gap-3">
                          {step.features.map((feature, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <CheckCircle className={`h-4 w-4 ${colorClasses[step.color].text}`} />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Timeline Node */}
                  <div className="hidden lg:flex w-2/12 justify-center relative">
                    <motion.div
                      className={`w-6 h-6 rounded-full ${colorClasses[step.color].ping} relative z-10 shadow-lg`}
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={`absolute inset-0 rounded-full ${colorClasses[step.color].ping} animate-ping opacity-30`} />
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlockchainTimeline;
