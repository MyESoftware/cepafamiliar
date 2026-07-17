import { motion } from "framer-motion";
import { Sprout, Leaf, Truck, Heart } from "lucide-react";

const benefits = [
  {
    icon: Sprout,
    title: "Productos frescos",
    text: "Elegidos a diario directamente del productor, asegurando el sabor y origen.",
  },
  {
    icon: Leaf,
    title: "Frutos secos premium",
    text: "Texturas óptimas y nutrientes seleccionados para tu bienestar cotidiano.",
  },
  {
    icon: Truck,
    title: "Delivery programado",
    text: "Planificá tu pedido con tranquilidad para recibirlo en la Sexta Sección.",
  },
  {
    icon: Heart,
    title: "Atención familiar",
    text: "Cercanía en cada consulta y detalle de tu pedido, directo por WhatsApp.",
  },
];

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } },
  };

  return (
    <section id="nosotros" className="story section-pad bg-[#f1f6ed]">
      <div className="container mx-auto">
        <div className="section-heading mb-16">
          <span className="eyebrow block text-xs font-bold uppercase tracking-widest text-[#5f8d63] mb-3">
            Nuestra esencia
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#214f36] leading-[1.05]">
            Una historia que se<br />
            <span className="text-[#9fbd79] italic font-medium">cultiva en familia.</span>
          </h2>
        </div>

        <div className="story-layout grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Visual Artwork */}
          <motion.div 
            className="story-art relative max-w-sm mx-auto w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="arch-image relative h-[380px] rounded-t-[200px] rounded-b-lg bg-[#cfe3c7] overflow-hidden shadow-inner">
              <div className="art-sun absolute h-40 w-40 rounded-full bg-[#a9c990] right-12 top-12" />
              <div className="art-hills absolute inset-x-[-10px] bottom-0 h-48 bg-[#75905b] rounded-t-[100%] transform -rotate-3 shadow-[100px_20px_0_#4e7852]" />
              <span className="art-leaf absolute text-[150px] left-8 top-16 text-[#245b3c] transform -rotate-12 select-none pointer-events-none">✦</span>
            </div>
            
            {/* Experience Stamp */}
            <motion.div 
              className="experience-stamp absolute -right-6 -bottom-6 bg-[#245b3c] border-[6px] border-[#f1f6ed] text-[#f6e9c4] w-28 h-28 rounded-full flex flex-col justify-center items-center text-center shadow-lg"
              initial={{ rotate: -15, scale: 0.8 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            >
              <strong className="font-serif text-3xl leading-none">100%</strong>
              <span className="text-[7px] font-bold uppercase tracking-wider mt-1.5">selección<br />consciente</span>
            </motion.div>
          </motion.div>

          {/* Copywriter Text */}
          <div className="story-copy">
            <p className="lead text-2xl font-serif text-[#214f36] leading-relaxed mb-6">
              Somos un emprendimiento familiar nacido con el compromiso de elegir productos honestos, frescos y de excelente calidad para tu mesa.
            </p>
            <p className="text-sm text-[#687464] leading-relaxed mb-6">
              Trabajamos cada día para brindar una atención cercana y la confianza que caracteriza a un negocio tradicional. Seleccionamos y preparamos cada pedido a mano, garantizando que solo lo mejor llegue a tu hogar.
            </p>
            
            <div className="signature flex items-center gap-2 mt-8 text-[#214f36]">
              <span className="text-xs font-extrabold tracking-widest uppercase">CEPA</span>
              <span className="font-serif text-2xl text-[#719b6a] italic">Familiar</span>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <motion.div 
          className="benefits grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-24 border-y border-[#dcdacb] bg-[#f1f6ed]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.article 
                className="benefit-card group p-8 border-b md:border-b-0 md:border-r border-[#dcdacb] last:border-0 relative overflow-hidden transition-all duration-300 hover:bg-white hover:-translate-y-2 shadow-none hover:shadow-xl"
                key={benefit.title}
                variants={itemVariants}
              >
                <div className="benefit-icon text-[#6d9b69] mb-6 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#214f36] mb-3">{benefit.title}</h3>
                <p className="text-xs text-[#778171] leading-relaxed">{benefit.text}</p>
                <span className="absolute right-6 top-8 text-[#6d9b69] opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-xl font-light">↗</span>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
