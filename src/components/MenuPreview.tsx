import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const menuData = {
  Starters: [
    { name: "Truffle Mushroom Soup", price: "₹320" },
    { name: "Prawn Tempura", price: "₹450" },
    { name: "Paneer Tikka Platter", price: "₹280" },
    { name: "Crispy Calamari", price: "₹380" },
  ],
  "Main Course": [
    { name: "Grilled Lamb Chops", price: "₹780" },
    { name: "Butter Chicken Classic", price: "₹420" },
    { name: "Pan-Seared Salmon", price: "₹680" },
    { name: "Hyderabadi Biryani", price: "₹380" },
  ],
  Beverages: [
    { name: "Classic Mojito", price: "₹220" },
    { name: "Mango Lassi", price: "₹150" },
    { name: "Espresso Martini", price: "₹350" },
    { name: "Fresh Lime Soda", price: "₹120" },
  ],
  Desserts: [
    { name: "Chocolate Fondant", price: "₹380" },
    { name: "Gulab Jamun", price: "₹180" },
    { name: "Crème Brûlée", price: "₹320" },
    { name: "Rasmalai", price: "₹200" },
  ],
};

const categories = Object.keys(menuData);

const MenuPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="menu" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Our Menu</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            A Curated <span className="gold-text-gradient">Selection</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 text-sm tracking-[0.15em] uppercase transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <div className="space-y-0">
          {menuData[active as keyof typeof menuData].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-baseline justify-between py-5 border-b border-border/50"
            >
              <span className="font-serif text-lg text-foreground">{item.name}</span>
              <span className="flex-1 mx-4 border-b border-dotted border-border/30" />
              <span className="text-primary font-medium">{item.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
