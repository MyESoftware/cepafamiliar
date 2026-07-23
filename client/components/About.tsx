import { motion, useReducedMotion } from "framer-motion";
import { Sprout, Leaf, Truck, Heart } from "lucide-react";

const benefits = [
  { icon: Sprout, title: "Productos frescos", text: "Elegidos a diario directamente del productor, asegurando el sabor y origen." },
  { icon: Leaf, title: "Frutos secos premium", text: "Texturas óptimas y nutrientes seleccionados para tu bienestar cotidiano." },
  { icon: Truck, title: "Delivery programado", text: "Planificá tu pedido con tranquilidad para recibirlo en la Sexta Sección." },
  { icon: Heart, title: "Atención familiar", text: "Cercanía en cada consulta y detalle de tu pedido, directo por WhatsApp." },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="nosotros" className="section-pad bg-[#f1f6ed]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <span className="eyebrow mb-3 block">Nuestra esencia</span>
          <h2 className="max-w-3xl text-4xl font-serif font-semibold leading-[1.02] tracking-[-0.04em] text-[#214f36] sm:text-5xl lg:text-6xl">
            Una historia que se<br />
            <span className="font-medium italic text-[#9fbd79]">cultiva en familia.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <motion.div
            className="relative mx-auto w-full max-w-sm px-2 pb-6"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <div className="relative h-[19rem] overflow-hidden rounded-b-lg rounded-t-[10rem] bg-[#cfe3c7] shadow-inner sm:h-[23.75rem] sm:rounded-t-[12.5rem]">
              <div className="absolute right-8 top-9 h-32 w-32 rounded-full bg-[#a9c990] sm:right-12 sm:top-12 sm:h-40 sm:w-40" />
              <div className="absolute inset-x-[-0.6rem] bottom-0 h-40 rotate-[-3deg] rounded-t-[100%] bg-[#75905b] shadow-[90px_20px_0_#4e7852] sm:h-48 sm:shadow-[100px_20px_0_#4e7852]" />
              <span className="pointer-events-none absolute left-6 top-14 select-none text-[8rem] text-[#245b3c] sm:left-8 sm:top-16 sm:text-[9.4rem]">✦</span>
            </div>
            <motion.div
              className="absolute -bottom-2 right-0 flex h-24 w-24 flex-col items-center justify-center rounded-full border-[5px] border-[#f1f6ed] bg-[#245b3c] text-center text-[#f6e9c4] shadow-lg sm:-bottom-4 sm:-right-3 sm:h-28 sm:w-28 sm:border-[6px]"
              initial={shouldReduceMotion ? false : { scale: 0.85 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, delay: 0.15 }}
            >
              <strong className="font-serif text-2xl leading-none sm:text-3xl">100%</strong>
              <span className="mt-1 text-[0.4rem] font-bold uppercase tracking-wide sm:text-[0.45rem]">selección<br />consciente</span>
            </motion.div>
          </motion.div>

          <div className="mx-auto max-w-xl">
            <p className="mb-5 font-serif text-2xl leading-snug text-[#214f36] sm:mb-6 sm:text-3xl">
              Somos un emprendimiento familiar nacido con el compromiso de elegir productos honestos, frescos y de excelente calidad para tu mesa.
            </p>
            <p className="text-sm leading-relaxed text-[#687464] sm:text-base">
              Trabajamos cada día para brindar una atención cercana y la confianza que caracteriza a un negocio tradicional. Seleccionamos y preparamos cada pedido a mano, garantizando que solo lo mejor llegue a tu hogar.
            </p>
            <div className="mt-7 flex items-center gap-2 text-[#214f36] sm:mt-8">
              <span className="text-xs font-extrabold uppercase tracking-widest">CEPA</span>
              <span className="font-serif text-2xl italic text-[#719b6a]">Familiar</span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 overflow-hidden border-y border-[#dcdacb] sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.article
                className={`group relative min-h-52 border-b border-[#dcdacb] bg-[#f1f6ed] p-6 transition-colors hover:bg-white sm:p-7 lg:min-h-0 lg:border-b-0 lg:border-r ${index === benefits.length - 1 ? "border-b-0 lg:border-r-0" : ""}`}
                key={benefit.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <Icon size={24} className="mb-5 text-[#6d9b69]" />
                <h3 className="mb-2 pr-5 font-serif text-xl font-bold text-[#214f36]">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-[#778171]">{benefit.text}</p>
                <span className="absolute right-6 top-6 text-xl text-[#6d9b69]/50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
