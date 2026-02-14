import { motion } from "framer-motion";

const StickyReserveButton = () => {
  return (
    <motion.a
      href="#reservation"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 md:hidden px-6 py-3 bg-primary text-primary-foreground text-sm tracking-[0.15em] uppercase shadow-lg"
    >
      Reserve
    </motion.a>
  );
};

export default StickyReserveButton;
