import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const coverUrl = "https://cdn.builder.io/api/v1/image/assets%2F1df216b05e0144ac96861ec886ebd57c%2F9598506505524ace9b130fa212f9c076?format=webp&width=800&height=1200";

interface HeroProps {
  goTo: (id: string) => void;
}

export default function Hero({ goTo }: HeroProps) {
  return (
    <section id="inicio" className="hero relative overflow-hidden flex items-center justify-between min-h-[750px] lg:min-h-screen pt-36 lg:pt-44 pb-16 px-6 lg:px-24">
      {/* Background Orbs & Effects */}
      <div className="absolute inset-0 z-0 bg-[#163a24]" />
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      <motion.div 
        className="hero-orb orb-one z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.75, scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="hero-orb orb-two z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
      />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Text Content */}
        <motion.div 
          className="hero-content text-left max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-seal flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b8d48f] border border-[#b8d48f]/40 rounded-full px-4 py-1.5 w-fit mb-6 shadow-[0_0_15px_rgba(184,212,143,0.15)] bg-[#163a24]/50 backdrop-blur-md">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#b8d48f]"
            >
              {/* Stem */}
              <path d="M12 18.5c0 1.2-.5 2.2-1.5 3" />
              {/* Outline */}
              <path d="M12 18.5c-.8-.2-1.5-.7-2-1.3l-.8.5c-.5-.5-.8-1.2-.8-2l-1 .2c-.2-.8-.7-1.4-1.2-1.8l-.8.6c-.1-.8-.5-1.5-1.2-2l-.2 1c-.8-.2-1.5-.9-1.8-1.8l.8-.4c-.5-.8-.7-1.8-.4-2.8l1 .3c0-1 .5-2 1.2-2.6l.2.8c.6-.8 1.5-1.4 2.5-1.5l-.2-1c1 .2 1.8.8 2.4 1.6l.8-.5C11 4 11.5 3 12 3c.5 0 1 1 1.2 1.8l.8.5c.6-.8 1.4-1.4 2.4-1.6l-.2 1c1 .2 1.9.8 2.5 1.5l.2-.8c.7.6 1.2 1.6 1.2 2.6l1-.3c.3 1 .1 2-.4 2.8l.8.4c-.3.9-1 1.6-1.8 1.8l-.2-1c-.7.5-1.1 1.2-1.2 2l-.8-.6c-.5.4-1 1-1.2 1.8l-1-.2c0 .8-.3 1.5-.8 2l-.8-.5c-.5.6-1.2 1.1-2 1.3z" />
              {/* Veins */}
              <path d="M12 18.5V4" />
              <path d="M12 15.5c-1.5-1.2-3.5-2.2-5-1" />
              <path d="M12 15.5c1.5-1.2 3.5-2.2 5-1" />
              <path d="M12 12c-2-1.5-4-3-5.5-2" />
              <path d="M12 12c2-1.5 4-3 5.5-2" />
            </svg> Selección natural desde Mendoza
          </div>
          
          <span className="eyebrow light block text-[#b8d48f] text-xs font-bold uppercase tracking-widest mb-3">
            Alimentos para disfrutar
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[0.95] mb-6">
            Calidad, frescura<br />
            y <span className="text-[#b7d487] italic">tradición</span> para<br />
            toda la familia.
          </h1>
          
          <p className="hero-copy text-sm md:text-base text-white/80 leading-relaxed max-w-md mb-8">
            Seleccionamos cuidadosamente frutas, verduras, frutos secos, especias, conservas y productos naturales directo para tu mesa con un servicio pensado para vos.
          </p>
          
          <div className="hero-actions flex flex-wrap items-center gap-6">
            <button 
              className="button button-gold group shadow-[0_4px_14px_rgba(159,189,121,0.3)] hover:shadow-[0_6px_20px_rgba(159,189,121,0.5)] transition-all duration-300"
              onClick={() => goTo("categorias")}
            >
              Ver Categorías 
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button 
              className="text-button flex items-center group font-semibold text-sm tracking-wider text-white hover:text-[#b7d487] transition-colors"
              onClick={() => goTo("contacto")}
            >
              Contactanos 
              <span className="inline-block transform transition-transform group-hover:translate-x-1.5 duration-300 ml-2 text-lg text-[#b7d487]">→</span>
            </button>
          </div>
        </motion.div>

        {/* Hero Image Frame */}
        <motion.div 
          className="hero-still-life flex justify-center lg:justify-end w-full"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative max-w-[380px] md:max-w-[420px] aspect-[3/4] w-full">
            {/* Elegant glassmorphic background layer */}
            <div className="absolute -inset-3 border-2 border-[#b8d48f]/40 rounded-[34px] z-0 pointer-events-none" />
            <img 
              className="hero-brand-image w-full h-full object-cover rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.35)] relative z-10 transition-transform duration-700 hover:scale-[1.02]" 
              src={coverUrl} 
              alt="Cepa Familiar, frutas y verduras frescas en Mendoza" 
            />
          </div>
        </motion.div>
      </div>

      {/* Down Hint */}
      <motion.button 
        className="scroll-hint absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer text-white/70 hover:text-white transition-colors z-20"
        onClick={() => goTo("nosotros")}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        aria-label="Ver más contenido"
      >
        <span className="text-[10px] tracking-widest uppercase font-medium">Conocenos</span>
        <ChevronDown size={18} className="text-[#b8d48f]" />
      </motion.button>
    </section>
  );
}
