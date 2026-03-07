import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Find Us</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Visit <span className="gold-text-gradient">Plazzo Cafe</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lenine Sharoni, A, Orient Chowmuhani, Jacksan Gate, K. Road,
                  opposite Saha Cycle, Indranagar, Agartala, Tripura 799001
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">Hours</h3>
                <p className="text-primary font-medium">Open 24 Hours</p>
                <p className="text-muted-foreground text-sm">Every day of the week</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">Phone</h3>
                <a href="tel:+911234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 123 456 7890
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">Email</h3>
                <a href="mailto:info@plazzocafe.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@plazzocafe.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="aspect-[4/3] bg-card border border-border overflow-hidden"
          >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.0!2d91.2868!3d23.8315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ5JzUzLjQiTiA5McKwMTcnMTIuNSJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Plazzo Cafe location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
