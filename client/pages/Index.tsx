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
            className="site-shell relative min-h-screen overflow-x-clip bg-[#faf8f2] pb-24 text-[#1f5b34] selection:bg-[#9fbd79] selection:text-[#163a24] sm:pb-0"
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
              className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 flex-row gap-3 sm:bottom-auto sm:left-auto sm:right-5 sm:top-1/2 sm:translate-x-0 sm:-translate-y-1/2 sm:flex-col sm:gap-4"
              aria-label="Redes sociales flotantes"
            >
              {/* WhatsApp Floating CTA with Glow and Bounce */}
              <motion.a
                className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_0_15px_rgba(37,211,102,0.4)] transition-shadow hover:shadow-[0_0_25px_rgba(37,211,102,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#163a24] sm:h-12 sm:w-12"
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
                <span className="pointer-events-none absolute right-14 hidden select-none whitespace-nowrap rounded-xl border border-white/10 bg-[#163a24] px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-[#faf8f2] opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100 sm:block">
                  Hacer Pedido
                </span>
              </motion.a>
              
              {/* Instagram Floating CTA */}
              <motion.a
                className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-[0_0_15px_rgba(238,42,123,0.4)] transition-shadow hover:shadow-[0_0_25px_rgba(238,42,123,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#163a24] sm:h-12 sm:w-12"
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
                <span className="pointer-events-none absolute right-14 hidden select-none whitespace-nowrap rounded-xl border border-white/10 bg-[#163a24] px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-[#faf8f2] opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100 sm:block">
                  Instagram
                </span>
              </motion.a>

              {/* Facebook Floating CTA */}
              <motion.a
                className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-[0_0_15px_rgba(24,119,242,0.4)] transition-shadow hover:shadow-[0_0_25px_rgba(24,119,242,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#163a24] sm:h-12 sm:w-12"
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
                <span className="pointer-events-none absolute right-14 hidden select-none whitespace-nowrap rounded-xl border border-white/10 bg-[#163a24] px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-[#faf8f2] opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100 sm:block">
                  Facebook
                </span>
              </motion.a>
            </aside>

            {/* Back to top button */}
            {showTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed bottom-5 right-3 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[#245b3c]/10 bg-[#cfe3c7] text-lg text-[#245b3c] shadow-lg transition-colors hover:bg-[#245b3c] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#245b3c] focus-visible:ring-offset-2 sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
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
