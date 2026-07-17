import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import { CATEGORIES } from "@/data/catalog";
import { WhatsappIcon } from "./Header";

const PRODUCT_IMAGES: Record<string, string> = {
  // Frutas Frescas
  "Manzana Roja/Verde": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&q=80",
  "Bananas Premium": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=400&q=80",
  "Naranjas de Jugo": "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=400&q=80",
  "Limones": "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=400&q=80",
  "Frutillas de Estación": "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=400&q=80",

  // Verduras y Hojas
  "Tomate Redondo": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80",
  "Lechuga Capuchina/Criolla": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80",
  "Zanahorias": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80",
  "Espinaca": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=400&q=80",
  "Palta Selection": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=400&q=80",

  // Frutos Secos
  "Almendras Peladas": "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=400&q=80",

  // Especias y Condimentos
  "Orégano Precordillerano": "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=400&q=80",
  "Pimentón Dulce/Ahumado": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80",
  "Cúrcuma Pura": "/curcuma.png",
  "Chimichurri Casero": "/chimichurri.png",

  // Productos Regionales
  "Aceite de Oliva Extra Virgen": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80",
};

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleCategorySelect = (id: string) => {
    setSelectedCategory(id);
  };

  const filteredCategories = CATEGORIES.filter((cat) => {
    if (selectedCategory === "todos") return true;
    return cat.id === selectedCategory;
  });

  // Get all items that match the search query across filtered categories
  const allItems = CATEGORIES.flatMap((cat) =>
    cat.items.map((item) => ({
      name: item,
      categoryName: cat.name,
      categoryId: cat.id,
      categoryClass: cat.classKey,
    }))
  ).filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "todos" || item.categoryId === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getWhatsAppLink = (categoryName: string, productName?: string) => {
    const text = productName
      ? `Hola Cepa Familiar! Me gustaría consultar por la disponibilidad de: ${productName}.`
      : `Hola Cepa Familiar! Me gustaría consultar por los productos de la categoría: ${categoryName}.`;
    return `https://wa.me/542612130058?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="categorias" className="gallery-section section-pad bg-[#f1f6ed]">
      <div className="container mx-auto">
        <div className="section-heading centered mb-12 text-center">
          <span className="eyebrow block text-xs font-bold uppercase tracking-widest text-[#5f8d63] mb-3">
            Aromas, colores y frescura
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#214f36] leading-[1.05] mb-6">
            Todo lo bueno de la<br />
            <span className="text-[#9fbd79] italic font-medium">naturaleza, cerca tuyo.</span>
          </h2>
        </div>

        {/* Filter Controls & Search bar */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 border-b border-[#dcdacb] pb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <button
              onClick={() => handleCategorySelect("todos")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full ${
                selectedCategory === "todos"
                  ? "bg-[#245b3c] text-white shadow-md"
                  : "bg-transparent text-[#245b3c] hover:bg-[#cfe3c7]"
              }`}
            >
              Todos
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full ${
                  selectedCategory === cat.id
                    ? "bg-[#245b3c] text-white shadow-md"
                    : "bg-transparent text-[#245b3c] hover:bg-[#cfe3c7]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#f8fcf6] border border-[#dbd9d0] rounded-full py-2 pl-10 pr-4 text-sm text-[#245b3c] focus:outline-none focus:border-[#245b3c] focus:ring-1 focus:ring-[#245b3c] transition-all"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6e7769]" size={16} />
          </div>
        </div>

        {/* Category Details (Only when specific category selected and no active search filtering all items) */}
        {selectedCategory !== "todos" && searchQuery === "" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 bg-white rounded-2xl border border-[#dcdacb] shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#214f36] mb-1">
                {CATEGORIES.find((c) => c.id === selectedCategory)?.name}
              </h3>
              <p className="text-sm text-[#687464]">
                {CATEGORIES.find((c) => c.id === selectedCategory)?.description}
              </p>
            </div>
            <a
              href={getWhatsAppLink(CATEGORIES.find((c) => c.id === selectedCategory)?.name || "")}
              target="_blank"
              rel="noreferrer"
              className="button button-gold group flex items-center gap-2 text-xs py-3 px-5 shadow-[0_4px_12px_rgba(159,189,121,0.2)] hover:shadow-[0_6px_16px_rgba(159,189,121,0.4)]"
            >
              <WhatsappIcon size={14} /> Consultar por WhatsApp
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        )}

        {/* Items Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {allItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={`${item.categoryId}-${item.name}`}
                className="bg-white rounded-2xl overflow-hidden border border-[#dcdacb] group shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Product Image Head */}
                <div className="h-36 relative overflow-hidden flex items-center justify-center bg-[#cfe3c7]">
                  <img
                    src={PRODUCT_IMAGES[item.name] || "/placeholder.svg"}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle glassmorphic category tag over image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-[9px] font-bold text-white tracking-widest uppercase bg-[#163a24]/65 px-2.5 py-1 rounded-full backdrop-blur-sm shadow-sm border border-white/10">
                    {item.categoryName} · {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] text-[#719b6a] font-bold tracking-wider block uppercase mb-1">
                      Mendoza natural
                    </span>
                    <h4 className="font-serif text-lg md:text-xl font-bold text-[#214f36] leading-tight mb-4">
                      {item.name}
                    </h4>
                  </div>

                  <a
                    href={getWhatsAppLink(item.categoryName, item.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between text-[10px] text-[#a78038] hover:text-[#245b3c] font-bold tracking-wider uppercase border-t border-[#f0eee4] pt-3 transition-colors group/link"
                  >
                    <span>Consultar Stock</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 text-[#a78038]" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {allItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#6e7769] text-base">No encontramos productos que coincidan con tu búsqueda.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("todos");
              }}
              className="mt-4 text-xs font-bold uppercase tracking-wider text-[#a78038] hover:underline"
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
