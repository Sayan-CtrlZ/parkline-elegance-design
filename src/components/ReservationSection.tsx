import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";

const ReservationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", date: "", time: "", guests: "2", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hi, I'd like to reserve a table at The Parkline Classic.\nName: ${formData.name}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}`;
    window.open(`https://wa.me/911234567890?text=${encodeURIComponent(whatsappMsg)}`, "_blank");
  };

  return (
    <section id="reservation" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Reservations</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Book Your <span className="gold-text-gradient">Table</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="grid sm:grid-cols-2 gap-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-card border border-border px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-card border border-border px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-card border border-border px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
          />
          <select
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            className="bg-card border border-border px-5 py-3.5 text-foreground focus:border-primary focus:outline-none transition-colors"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
            ))}
          </select>
          <input
            type="date"
            required
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="bg-card border border-border px-5 py-3.5 text-foreground focus:border-primary focus:outline-none transition-colors"
          />
          <input
            type="time"
            required
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="bg-card border border-border px-5 py-3.5 text-foreground focus:border-primary focus:outline-none transition-colors"
          />
          <textarea
            placeholder="Special requests..."
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="sm:col-span-2 bg-card border border-border px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
          />
          <div className="sm:col-span-2 flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              className="flex-1 px-8 py-3.5 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300"
            >
              Reserve via WhatsApp
            </button>
            <a
              href="tel:+911234567890"
              className="flex items-center justify-center gap-2 px-8 py-3.5 border border-border text-foreground text-sm tracking-[0.15em] uppercase hover:border-primary hover:text-primary transition-colors duration-300"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3.5 border border-border text-foreground text-sm tracking-[0.15em] uppercase hover:border-primary hover:text-primary transition-colors duration-300"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ReservationSection;
