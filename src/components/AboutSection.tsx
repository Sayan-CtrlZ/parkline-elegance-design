import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import interior1 from "@/assets/interior-1.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding max-w-7xl mx-auto" ref={ref}>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Our Story</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            A Legacy of<br />
            <span className="gold-text-gradient">Culinary Excellence</span>
          </h2>
          <div className="divider-gold mb-8" />
          <p className="text-muted-foreground leading-relaxed mb-6">
            Nestled in the heart of Agartala, Plazzo Cafe is more than a restaurant — 
            it's a sanctuary for those who appreciate the finer things. Our chefs craft each dish 
            with passion, blending traditional flavours with contemporary artistry.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From intimate dinners to grand celebrations, we offer an ambience that transforms 
            every meal into a cherished memory. Indulge in a dining experience crafted with 
            passion, flavour and elegance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <img
            src={interior1}
            alt="Plazzo Cafe interior dining room"
            className="w-full aspect-[4/5] object-cover"
          />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-primary/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
