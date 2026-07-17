import { useEffect, useState } from "react";
import { Instagram, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import Header, { WhatsappIcon } from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import Categories from "@/components/Categories";
import Recipes from "@/components/Recipes";
import MasonryGallery from "@/components/MasonryGallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  const [showTop, setShowTop] = useState(false);
  const [isLoaderFinished, setIsLoaderFinished] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 650);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    
    // Set loader finish flag matching loader timer (1800ms + margin)
    const timer = setTimeout(() => {
      setIsLoaderFinished(true);
    }, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* 1. Loader Screen */}
      <Loader />

      <AnimatePresence>
        {isLoaderFinished && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="site-shell relative min-h-screen bg-[#faf8f2] text-[#1f5b34] overflow-x-hidden selection:bg-[#9fbd79] selection:text-[#163a24]"
          >
            {/* Header / Navbar */}
            <Header goTo={goTo} />

            {/* Mega Hero Section */}
            <Hero goTo={goTo} />

            {/* About / History Section */}
            <About />

            {/* Animated statistics */}
            <Stats />

            {/* Timeline of Brand History */}
            <Timeline />

            {/* Interactive Catalog Explorer */}
            <Categories />

            {/* Recipes Section */}
            <Recipes goTo={goTo} />

            {/* Masonry visual showcase */}
            <MasonryGallery />

            {/* Testimonials Slider */}
            <Testimonials />

            {/* FAQ Accordion */}
            <FAQ />

            {/* Contact Form and Delivery Block */}
            <Contact />

            {/* Footer Section */}
            <Footer goTo={goTo} />

            {/* Floating Social Media Access (Left/Right rail - Premium custom animations) */}
            <aside 
              className="premium-social-rail fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4" 
              aria-label="Redes sociales flotantes"
            >
              {/* WhatsApp Floating CTA with Glow and Bounce */}
              <motion.a
                className="social-whatsapp h-12 w-12 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.75)] hover:scale-110 relative group"
                href="https://wa.me/542612130058"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                animate={{ y: [0, -6, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5, 
                  ease: "easeInOut",
                  delay: 0.1
                }}
                whileTap={{ scale: 0.9 }}
              >
                <WhatsappIcon size={22} />
                <span className="absolute right-14 bg-[#163a24] text-[#faf8f2] text-[10px] uppercase font-bold tracking-widest px-3 py-2 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 shadow-xl transition-all duration-300 whitespace-nowrap border border-white/10 select-none">
                  Hacer Pedido
                </span>
              </motion.a>
              
              {/* Instagram Floating CTA */}
              <motion.a
                className="h-12 w-12 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center shadow-[0_0_15px_rgba(238,42,123,0.4)] hover:shadow-[0_0_25px_rgba(238,42,123,0.75)] hover:scale-110 relative group"
                href="https://www.instagram.com/cepafamiliar?utm_source=qr&igsh=dnB6dHBidnd6Nnh4"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                animate={{ y: [0, -6, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5, 
                  ease: "easeInOut",
                  delay: 0.3
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={22} />
                <span className="absolute right-14 bg-[#163a24] text-[#faf8f2] text-[10px] uppercase font-bold tracking-widest px-3 py-2 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 shadow-xl transition-all duration-300 whitespace-nowrap border border-white/10 select-none">
                  Instagram
                </span>
              </motion.a>

              {/* Facebook Floating CTA */}
              <motion.a
                className="h-12 w-12 rounded-full bg-[#1877f2] text-white flex items-center justify-center shadow-[0_0_15px_rgba(24,119,242,0.4)] hover:shadow-[0_0_25px_rgba(24,119,242,0.75)] hover:scale-110 relative group"
                href="https://www.facebook.com/share/1Ja3mDFqm4/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                animate={{ y: [0, -6, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={22} />
                <span className="absolute right-14 bg-[#163a24] text-[#faf8f2] text-[10px] uppercase font-bold tracking-widest px-3 py-2 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 shadow-xl transition-all duration-300 whitespace-nowrap border border-white/10 select-none">
                  Facebook
                </span>
              </motion.a>
            </aside>

            {/* Back to top button */}
            {showTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="back-top fixed right-6 bottom-6 w-12 h-12 rounded-full bg-[#cfe3c7] hover:bg-[#245b3c] text-[#245b3c] hover:text-white flex items-center justify-center text-lg z-50 shadow-lg border border-[#245b3c]/10 hover:-translate-y-1 transition-all"
                onClick={() => goTo("inicio")}
                aria-label="Volver arriba"
              >
                ↑
              </motion.button>
            )}
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
