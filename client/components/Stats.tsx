import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, ShieldCheck, Sprout, Star } from "lucide-react";

interface CounterProps {
  to: number;
  duration?: number;
  suffix?: string;
}

function Counter({ to, duration = 1.5, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const end = to;
    const totalMiliseconds = duration * 1000;
    const intervalTime = 30; // 30ms step
    const steps = totalMiliseconds / intervalTime;
    const increment = end / steps;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [inView, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const statsList = [
  {
    icon: Heart,
    to: 1000,
    suffix: "+",
    label: "Familias Felices",
    desc: "Clientes recurrentes en la Sexta Sección que confían en nosotros.",
  },
  {
    icon: Sprout,
    to: 100,
    suffix: "%",
    label: "Selección Manual",
    desc: "Elegimos cada fruta, verdura y fruto seco individualmente.",
  },
  {
    icon: ShieldCheck,
    to: 24,
    suffix: "hs",
    label: "Selección Diaria",
    desc: "Pedido con anticipación para seleccionar en la feria y entregar el mismo día.",
  },
  {
    icon: Star,
    to: 5,
    suffix: "/5",
    label: "Calidad Gourmet",
    desc: "Calificación promedio de nuestros clientes regionales.",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#163a24] text-white py-16 md:py-20 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#1b5b34] rounded-full blur-[100px] opacity-40 z-0 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsList.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-6 border border-white/5 rounded-2xl bg-white/[0.02] backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-full bg-[#1b5b34] flex items-center justify-center text-[#d4b25e] mb-4 shadow-lg">
                  <Icon size={20} />
                </div>
                
                <h3 className="font-serif text-4xl lg:text-5xl font-bold text-[#d4b25e] mb-2">
                  <Counter to={stat.to} suffix={stat.suffix} />
                </h3>
                
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
                  {stat.label}
                </h4>
                
                <p className="text-[11px] text-white/70 leading-relaxed max-w-[200px]">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
