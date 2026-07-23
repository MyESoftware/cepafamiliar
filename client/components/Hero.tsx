import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const coverUrl = "https://cdn.builder.io/api/v1/image/assets%2F1df216b05e0144ac96861ec886ebd57c%2F9598506505524ace9b130fa212f9c076?format=webp&width=800&height=1200";

interface HeroProps {
  goTo: (id: string) => void;
}

export default function Hero({ goTo }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-[#163a24] px-4 pb-12 pt-28 text-white sm:px-6 sm:pt-32 lg:min-h-screen lg:px-16 lg:pb-20 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-10 [background-size:24px_24px] [background-image:radial-gradient(#ffffff_1px,transparent_1px)]" />
      <motion.div
        className="hero-orb orb-one absolute -z-10"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.75, scale: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="hero-orb orb-two absolute -z-10"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.15 }}
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="max-w-2xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#b8d48f]/40 bg-[#163a24]/50 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-[#b8d48f] shadow-[0_0_15px_rgba(184,212,143,0.15)] backdrop-blur-md sm:text-xs sm:tracking-wider">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <path d="M12 18.5c0 1.2-.5 2.2-1.5 3" />
              <path d="M12 18.5c-.8-.2-1.5-.7-2-1.3l-.8.5c-.5-.5-.8-1.2-.8-2l-1 .2c-.2-.8-.7-1.4-1.2-1.8l-.8.6c-.1-.8-.5-1.5-1.2-2l-.2 1c-.8-.2-1.5-.9-1.8-1.8l.8-.4c-.5-.8-.7-1.8-.4-2.8l1 .3c0-1 .5-2 1.2-2.6l.2.8c.6-.8 1.5-1.4 2.5-1.5l-.2-1c1 .2 1.8.8 2.4 1.6l.8-.5C11 4 11.5 3 12 3c.5 0 1 1 1.2 1.8l.8.5c.6-.8 1.4-1.4 2.4-1.6l-.2 1c1 .2 1.9.8 2.5 1.5l.2-.8c.7.6 1.2 1.6 1.2 2.6l1-.3c.3 1 .1 2-.4 2.8l.8.4c-.3.9-1 1.6-1.8 1.8l-.2-1c-.7.5-1.1 1.2-1.2 2l-.8-.6c-.5.4-1 1-1.2 1.8l-1-.2c0 .8-.3 1.5-.8 2l-.8-.5c-.5.6-1.2 1.1-2 1.3z" />
              <path d="M12 18.5V4" />
            </svg>
            <span>Selección natural desde Mendoza</span>
          </div>

          <span className="eyebrow light mb-3 block">Alimentos para disfrutar</span>
          <h1 className="text-[clamp(2.65rem,11vw,4.7rem)] font-serif font-bold leading-[0.92] tracking-[-0.04em] text-white">
            Calidad, frescura<br />
            y <span className="italic text-[#b7d487]">tradición</span> para<br />
            toda la familia.
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/85 sm:mt-7 sm:text-base">
            Seleccionamos cuidadosamente frutas, verduras, frutos secos, especias, conservas y productos naturales directo para tu mesa con un servicio pensado para vos.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
            <button className="button button-gold group w-full shadow-[0_4px_14px_rgba(159,189,121,0.3)] hover:shadow-[0_6px_20px_rgba(159,189,121,0.5)] sm:w-auto" onClick={() => goTo("categorias")}>
              Ver categorías
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button className="text-button group w-full sm:w-auto" onClick={() => goTo("contacto")}>
              Contactanos
              <span className="text-lg text-[#b7d487] transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          className="flex w-full justify-center lg:justify-end"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          <div className="relative w-full max-w-[17rem] sm:max-w-[22rem] lg:max-w-[25rem]">
            <div className="pointer-events-none absolute -inset-2 rounded-[1.7rem] border-2 border-[#b8d48f]/40 sm:-inset-3" />
            <img
              className="relative aspect-[3/4] w-full rounded-[1.45rem] object-cover shadow-[0_15px_35px_rgba(0,0,0,0.35)] sm:rounded-3xl"
              src={coverUrl}
              alt="Cepa Familiar, frutas y verduras frescas en Mendoza"
            />
          </div>
        </motion.div>
      </div>

      <button
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[0.65rem] font-medium uppercase tracking-widest text-white/75 transition-colors hover:text-white md:flex"
        onClick={() => goTo("nosotros")}
        aria-label="Ver más contenido"
      >
        <span>Conocenos</span>
        <ChevronDown size={18} className="text-[#b8d48f]" />
      </button>
    </section>
  );
}
