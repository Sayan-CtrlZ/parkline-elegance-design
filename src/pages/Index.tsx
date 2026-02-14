import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SignatureDishes from "@/components/SignatureDishes";
import ExperienceSection from "@/components/ExperienceSection";
import MenuPreview from "@/components/MenuPreview";
import Testimonials from "@/components/Testimonials";
import ReservationSection from "@/components/ReservationSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import StickyReserveButton from "@/components/StickyReserveButton";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SignatureDishes />
      <ExperienceSection />
      <MenuPreview />
      <Testimonials />
      <ReservationSection />
      <LocationSection />
      <Footer />
      <StickyReserveButton />
    </main>
  );
};

export default Index;
