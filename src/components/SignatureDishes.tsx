import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";

const dishes = [
  { name: "Pan-Seared Salmon", desc: "With herb butter, edible flowers & citrus reduction", image: dish1 },
  { name: "Paneer Tikka Masala", desc: "Char-grilled cottage cheese in a rich spiced tomato gravy", image: dish2 },
  { name: "Chocolate Fondant", desc: "Rich molten core with gold leaf & cocoa dust", image: dish3 },
  { name: "Royal Prawn Curry", desc: "Tiger prawns in a fragrant spiced coconut broth", image: dish4 },
];

const SignatureDishes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Signature Creations</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Crafted to <span className="gold-text-gradient">Perfection</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-square mb-4">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-1">{dish.name}</h3>
              <p className="text-sm text-muted-foreground">{dish.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
