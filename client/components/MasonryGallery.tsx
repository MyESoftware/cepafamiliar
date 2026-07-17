import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=600&q=80",
    alt: "Frutas frescas de estación",
    title: "Frescura Diaria",
    span: "row-span-2 col-span-2 md:col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    alt: "Hojas verdes y ensaladas reales",
    title: "Hojas Seleccionadas",
    span: "row-span-1 col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=600&q=80",
    alt: "Frutos secos premium",
    title: "Frutos Secos Premium",
    span: "row-span-1 col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    alt: "Aceite de oliva extra virgen mendoza",
    title: "Olivas de Maipú",
    span: "row-span-2 col-span-2 md:col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    alt: "Especias seleccionadas precordillera",
    title: "Especias y Aromas",
    span: "row-span-1 col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=600&q=80",
    alt: "Cajón de verduras a domicilio",
    title: "Directo a tu Mesa",
    span: "row-span-1 col-span-1",
  },
];

export default function MasonryGallery() {
  return (
    <section className="py-20 bg-[#f1f6ed] overflow-hidden border-t border-[#dcdacb]">
      <div className="container mx-auto px-6">
        <div className="section-heading centered text-center mb-16">
          <span className="eyebrow block text-xs font-bold uppercase tracking-widest text-[#5f8d63] mb-3">
            Inspiración visual
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#214f36] leading-[1.05]">
            Nuestros productos<br />
            <span className="text-[#9fbd79] italic font-medium">hablan por sí solos.</span>
          </h2>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px] max-w-6xl mx-auto">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className={`relative overflow-hidden rounded-3xl border border-[#dcdacb] group bg-[#cfe3c7] shadow-sm hover:shadow-xl transition-all duration-500 ${img.span}`}
            >
              {/* Image with zoom effect on hover */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-750 ease-out group-hover:scale-105"
              />

              {/* Glassmorphic Elegant Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#163a24]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[9px] uppercase tracking-wider text-[#b8d48f] font-bold mb-1">
                  Cepa Familiar
                </span>
                <h3 className="font-serif text-lg md:text-xl font-bold text-white leading-tight">
                  {img.title}
                </h3>
              </div>

              {/* Minimal Border Frame Effect */}
              <div className="absolute inset-4 border border-white/0 rounded-2xl group-hover:border-white/10 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
