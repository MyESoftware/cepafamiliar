import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, ShieldCheck, Heart, BookOpen, Star } from "lucide-react";
import { RECIPES, Recipe } from "@/data/catalog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { WhatsappIcon } from "./Header";

interface RecipesProps {
  goTo: (id: string) => void;
}

export default function Recipes({ goTo }: RecipesProps) {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleOpenRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseRecipe = () => {
    setSelectedRecipe(null);
  };

  const getWhatsAppMessage = (recipeTitle: string) => {
    const text = `¡Hola Cepa Familiar! Me gustaría pedir la ensalada "${recipeTitle}" de su línea Cepa Fresh.`;
    return `https://wa.me/542612130058?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="recetas" className="section-pad relative overflow-hidden bg-[#e1eddc]">
      <div className="mx-auto max-w-7xl">
        
        {/* Banner Línea Ensaladas Cepa Fresh */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative mb-12 flex h-72 flex-col justify-end overflow-hidden rounded-3xl border border-[#cfe3c7] p-5 shadow-xl sm:h-80 sm:p-8 md:mb-16 md:p-12"
        >
          <img
            src="/cepa_fresh_salads.png"
            alt="Línea Ensaladas Cepa Fresh"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#163a24]/90 via-[#163a24]/40 to-transparent" />
          
          <div className="relative z-10 max-w-lg">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#b8d48f] bg-[#163a24]/60 border border-[#b8d48f]/20 backdrop-blur-sm mb-4">
              <Star size={12} className="fill-[#b8d48f]" /> Nueva Línea Exclusiva
            </span>
            <h2 className="mb-2 text-3xl font-serif font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Ensaladas Cepa Fresh
            </h2>
            <p className="text-xs md:text-sm text-white/80 leading-relaxed">
              Preparadas en el día con los vegetales más frescos de la feria. Sanas, ricas y listas para disfrutar donde quieras.
            </p>
          </div>
        </motion.div>

        {/* Section Heading */}
        <div className="mb-10 flex flex-col items-stretch justify-between gap-5 md:mb-12 md:flex-row md:items-end md:gap-6">
          <div>
            <span className="eyebrow block text-xs font-bold uppercase tracking-widest text-[#5f8d63] mb-3">
              Almuerzos Saludables
            </span>
            <h3 className="text-4xl md:text-5xl font-serif font-semibold text-[#214f36] leading-[1.05]">
              Elegí tu ensalada<br />
              <span className="text-[#9fbd79] italic font-medium">favorita de la semana.</span>
            </h3>
          </div>
          <button
            className="outline-button group w-full hover:border-[#245b3c] hover:bg-[#245b3c] hover:text-white sm:w-auto"
            onClick={() => goTo("contacto")}
          >
            Hacer un pedido especial
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Salad Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {RECIPES.map((recipe) => (
            <motion.article
              className="group flex min-w-0 flex-col justify-between overflow-hidden rounded-2xl border border-[#dcdacb] bg-[#fbfaf4] shadow-sm transition-shadow duration-300 hover:shadow-xl"
              key={recipe.id}
              whileHover={{ scale: 1.01 }}
            >
              <div>
                <div className={`recipe-${recipe.kind} relative flex h-44 items-center justify-center overflow-hidden sm:h-48`}>
                  <span className="absolute top-4 left-4 text-xs font-bold text-white tracking-widest uppercase z-10 bg-black/25 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                    {recipe.number}
                  </span>
                  
                  {/* Rustic illustrative plate elements */}
                  <div className="plate-art relative" />
                </div>

                <div className="p-5 sm:p-6">
                  <h4 className="mb-3 font-serif text-2xl font-bold leading-tight text-[#214f36] transition-colors group-hover:text-[#719b6a]">
                    {recipe.title}
                  </h4>
                  <p className="text-xs text-[#6e7769] leading-relaxed mb-4 line-clamp-3">
                    {recipe.text}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 sm:p-6 sm:pt-0">
                <button
                  onClick={() => handleOpenRecipe(recipe)}
                  className="group/btn flex min-h-11 w-full items-center gap-2 border-t border-[#f0eee4] pt-4 text-left text-xs font-bold uppercase tracking-wider text-[#a78038] transition-colors hover:text-[#245b3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#719b6a]"
                >
                  <BookOpen size={14} />
                  <span>Ver Detalles</span>
                  <ArrowUpRight size={14} className="ml-auto transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Interactive Salad Details Modal */}
      <Dialog open={selectedRecipe !== null} onOpenChange={handleCloseRecipe}>
        <DialogContent className="max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-2xl border-[#dcdacb] bg-[#fbfaf4] p-5 sm:w-full sm:p-6 md:p-8">
          {selectedRecipe && (
            <>
              <DialogHeader className="mb-6 text-left border-b border-[#f0eee4] pb-4">
                <span className="text-[10px] text-[#719b6a] font-bold tracking-widest uppercase mb-1">
                  Ensaladas Cepa Fresh
                </span>
                <DialogTitle className="font-serif text-3xl md:text-4xl font-bold text-[#214f36] leading-tight">
                  {selectedRecipe.title}
                </DialogTitle>
                <DialogDescription className="text-xs md:text-sm text-[#6e7769] leading-relaxed mt-2">
                  {selectedRecipe.text}
                </DialogDescription>
              </DialogHeader>

              {/* Salad Meta Info */}
              <div className="mb-6 flex flex-col gap-3 rounded-xl bg-[#e1eddc] p-4 text-xs font-bold uppercase tracking-wider text-[#214f36] sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[#6d9b69]" />
                  <span>{selectedRecipe.prepTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#6d9b69]" />
                  <span>Frescura Seleccionada</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart size={16} className="text-[#6d9b69]" />
                  <span>{selectedRecipe.servings}</span>
                </div>
              </div>

              {/* Ingredients & Inclusions Section */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Ingredients */}
                <div className="md:col-span-2">
                  <h4 className="font-serif text-lg font-bold text-[#214f36] mb-4 pb-1 border-b border-[#cfe3c7]">
                    Ingredientes
                  </h4>
                  <ul className="space-y-3">
                    {selectedRecipe.ingredients.map((ingredient, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#6e7769] leading-tight">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#719b6a] mt-1.5 shrink-0" />
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What's included / Condiments */}
                <div className="md:col-span-3">
                  <h4 className="font-serif text-lg font-bold text-[#214f36] mb-4 pb-1 border-b border-[#cfe3c7]">
                    ¿Qué incluye tu ensalada?
                  </h4>
                  <ol className="space-y-3">
                    {selectedRecipe.instructions.map((step, i) => (
                      <li key={i} className="flex gap-4 items-start text-xs text-[#6e7769] leading-relaxed">
                        <span className="font-serif text-sm font-bold text-[#9fbd79] leading-none shrink-0 w-5">
                          ✦
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Modal CTA */}
              <div className="mt-8 flex flex-col gap-4 border-t border-[#f0eee4] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-[10px] text-[#6e7769] text-center sm:text-left">
                  ¿Te gustaría pedir esta ensalada? Escribile directo a nuestro bot.
                </span>
                <a
                  href={getWhatsAppMessage(selectedRecipe.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-gold group w-full shadow-md sm:w-auto"
                >
                  <WhatsappIcon size={14} /> Pedir Ensalada
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
