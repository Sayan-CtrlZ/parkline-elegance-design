import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid sm:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-4">Plazzo Cafe</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Where Taste Meets Elegance. A premium multi-cuisine restaurant in the heart of Agartala.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-primary mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["Home", "About", "Menu", "Gallery", "Reservations", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-primary mb-4">Opening Hours</h4>
            <p className="text-sm text-muted-foreground mb-4">Open 24 Hours — Every Day</p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground tracking-wide">
            © 2026 Plazzo Cafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
