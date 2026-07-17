import { motion } from "framer-motion";
import { Award, Heart, Shield, Landmark } from "lucide-react";

const timelineEvents = [
  {
    year: "2015",
    title: "El Origen",
    description: "Cepa Familiar nace en Mendoza bajo la convicción de seleccionar y llevar lo mejor de la feria y los productores locales directo a la mesa familiar, garantizando máxima calidad.",
    icon: Landmark,
  },
  {
    year: "2018",
    title: "Valores Compartidos",
    description: "Consolidamos lazos de confianza con pequeños productores seleccionados del Valle de Uco, priorizando técnicas de cultivo respetuosas.",
    icon: Heart,
  },
  {
    year: "2021",
    title: "Foco en la Sexta Sección",
    description: "Centralizamos nuestro delivery exclusivamente en la Sexta Sección de Mendoza para brindar una atención personalizada y entregas en menos de 24 hs.",
    icon: Shield,
  },
  {
    year: "2026",
    title: "Evolución Gourmet",
    description: "Expandimos nuestra selección a frutos secos premium, especias especiadas y aceites regionales, manteniendo el alma y calidad familiar original.",
    icon: Award,
  },
];

export default function Timeline() {
  return (
    <section className="py-20 bg-[#faf8f2] relative overflow-hidden border-t border-[#dcdacb]">
      {/* Botanical Watermark Background (Soft Leaf SVG pattern) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#1f5b34_1.5px,transparent_1.5px)] [background-size:32px_32px]" />

      <div className="container mx-auto px-6">
        <div className="section-heading centered text-center mb-16">
          <span className="eyebrow block text-xs font-bold uppercase tracking-widest text-[#5f8d63] mb-3">
            Nuestra Trayectoria
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#214f36] leading-[1.05]">
            La tradición que<br />
            <span className="text-[#9fbd79] italic font-medium">respalda nuestra selección.</span>
          </h2>
        </div>

        {/* Vertical Timeline Wrapper */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#cfe3c7]" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineEvents.map((event, idx) => {
              const Icon = event.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={event.year} className="relative flex flex-col md:flex-row md:items-center">
                  {/* Left Box (Text for even items, placeholder for odd items in desktop) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:order-last md:pl-12 md:text-left"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="p-6 rounded-2xl bg-white border border-[#dcdacb] shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <span className="inline-block px-3 py-1 bg-[#cfe3c7] text-[#245b3c] font-bold text-xs rounded-full mb-3">
                        {event.year}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[#214f36] mb-2">
                        {event.title}
                      </h3>
                      <p className="text-xs text-[#6e7769] leading-relaxed">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Bullet Center Indicator */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-auto transform -translate-x-[15px] md:-translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 100, delay: idx * 0.15 }}
                      className="w-[30px] h-[30px] rounded-full bg-[#245b3c] border-4 border-[#faf8f2] flex items-center justify-center text-white shadow-lg"
                    >
                      <Icon size={12} className="text-[#f6e9c4]" />
                    </motion.div>
                  </div>

                  {/* Empty Right Box for spacing in desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
