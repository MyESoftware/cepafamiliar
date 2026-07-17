import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sofía Martínez",
    role: "Vecina de la Sexta Sección",
    text: "La calidad de los frutos secos y el aceite de oliva es de otro nivel. Los pedidos programados de verdura llegan impecables y con puntualidad absoluta. El trato familiar marca una diferencia gigante.",
    rating: 5,
  },
  {
    name: "Ignacio Garay",
    role: "Aficionado a la Gastronomía",
    text: "Hacer recetas con sus especias precordilleranas es un placer. Se nota la frescura del producto respecto al supermercado. Las mermeladas regionales también son una joya.",
    rating: 5,
  },
  {
    name: "Margarita Rossi",
    role: "Clienta Semanal",
    text: "Hago mis pedidos con el bot de WhatsApp con 24 hs de anticipación. Te llega todo súper fresco y seleccionado a mano. La calidad es constante, nunca falla.",
    rating: 5,
  },
  {
    name: "Francisco Altieri",
    role: "Vecino y Cocinero",
    text: "El tomate triturado artesanal y las aceitunas rellenas de Maipú son ingredientes fijos en mis domingos de pasta. Un orgullo mendocino que brinde este nivel de servicio.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-[#faf8f2] border-t border-[#dcdacb] relative overflow-hidden">
      {/* Decorative background leaf illustration */}
      <div className="absolute -left-10 bottom-0 opacity-5 text-[#245b3c] text-[180px] pointer-events-none select-none">✦</div>
      
      <div className="container mx-auto px-6">
        <div className="section-heading centered text-center mb-16">
          <span className="eyebrow block text-xs font-bold uppercase tracking-widest text-[#5f8d63] mb-3">
            Opiniones honestas
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#214f36] leading-[1.05]">
            La confianza que<br />
            <span className="text-[#9fbd79] italic font-medium">construimos día a día.</span>
          </h2>
        </div>

        {/* Embla Slider Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testi, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 px-4 md:px-12">
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-8 md:p-12 border border-[#dcdacb] shadow-sm flex flex-col items-center text-center relative"
                  >
                    <Quote size={40} className="text-[#9fbd79] opacity-25 mb-6" />
                    
                    {/* Stars row */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testi.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-[#d4b25e] text-[#d4b25e]" />
                      ))}
                    </div>

                    <p className="font-serif text-lg md:text-xl text-[#214f36] leading-relaxed italic mb-8 max-w-2xl">
                      "{testi.text}"
                    </p>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#245b3c] mb-1">
                        {testi.name}
                      </h4>
                      <span className="text-[10px] text-[#6e7769] tracking-normal font-medium">
                        {testi.role}
                      </span>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-[#dcdacb] bg-white text-[#245b3c] hover:bg-[#cfe3c7] hover:border-[#245b3c] transition-colors flex items-center justify-center shadow-sm"
              aria-label="Opinión anterior"
            >
              <ArrowLeft size={16} />
            </button>
            
            {/* Dot Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => emblaApi && emblaApi.scrollTo(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    selectedIndex === idx ? "w-6 bg-[#245b3c]" : "w-1.5 bg-[#dcdacb]"
                  }`}
                  aria-label={`Ir a opinión ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-[#dcdacb] bg-white text-[#245b3c] hover:bg-[#cfe3c7] hover:border-[#245b3c] transition-colors flex items-center justify-center shadow-sm"
              aria-label="Siguiente opinión"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
