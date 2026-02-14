import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">The Experience</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            An Ambience of <span className="gold-text-gradient">Sophistication</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden aspect-[4/3]"
          >
            <img src={interior1} alt="Dining room" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative overflow-hidden aspect-[4/3]"
          >
            <img src={interior2} alt="Bar lounge" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mt-12 leading-relaxed"
        >
          Step into a world where crystal chandeliers cast a warm glow over rich mahogany,
          where every detail — from the table settings to the ambient melodies — is curated
          to elevate your dining journey.
        </motion.p>
      </div>
    </section>
  );
};

export default ExperienceSection;
