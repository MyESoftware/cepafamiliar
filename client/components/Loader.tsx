import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#163a24] text-white"
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Decorative Background Botanical Pattern */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="relative flex flex-col items-center">
            {/* Pulsing Leaf Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.1, 1], 
                opacity: 1,
                rotate: [0, 360, 360]
              }}
              transition={{ 
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.6, 1.5]
              }}
              className="w-20 h-20 rounded-full border border-[#d4b25e]/30 flex items-center justify-center bg-[#1b5b34] shadow-2xl relative mb-6"
            >
              {/* Stylized realistic gold grape vine leaf SVG */}
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d4b25e"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#d4b25e]"
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
                <path d="M12 8.5c-1-1-2-1.5-3-.8" />
                <path d="M12 8.5c1-1 2-1.5 3-.8" />
              </svg>
              
              {/* Spinning gold loader circle around it */}
              <motion.div 
                className="absolute inset-[-4px] border-2 border-transparent border-t-[#d4b25e] rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Premium Typography Brand */}
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-serif text-3xl tracking-widest font-bold text-white text-center"
            >
              CEPA <span className="text-[#d4b25e] italic font-medium">Familiar</span>
            </motion.h2>
            
            {/* Subtle Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-[10px] uppercase tracking-widest text-[#e1ecda] mt-2 font-medium"
            >
              Selección Natural Mendoza
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
