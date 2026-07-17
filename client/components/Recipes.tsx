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
    <section id="recetas" className="recipes section-pad bg-[#e1eddc] relative overflow-hidden">
      <div className="container mx-auto">
        
        {/* Banner Línea Ensaladas Cepa Fresh */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden mb-16 h-64 md:h-80 shadow-xl border border-[#cfe3c7] flex flex-col justify-end p-8 md:p-12 group"
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold !text-white mb-2 leading-tight">
              Ensaladas Cepa Fresh
            </h2>
            <p className="text-xs md:text-sm text-white/80 leading-relaxed">
              Preparadas en el día con los vegetales más frescos de la feria. Sanas, ricas y listas para disfrutar donde quieras.
            </p>
          </div>
        </motion.div>

        {/* Section Heading */}
        <div className="recipes-head flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
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
            className="outline-button group flex items-center gap-2 hover:bg-[#245b3c] hover:text-white hover:border-[#245b3c] transition-all duration-300"
            onClick={() => goTo("contacto")}
          >
            Hacer un pedido especial
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Salad Grid */}
        <div className="recipe-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RECIPES.map((recipe) => (
            <motion.article
              className="recipe-card bg-[#fbfaf4] rounded-2xl overflow-hidden border border-[#dcdacb] flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              key={recipe.id}
              whileHover={{ scale: 1.01 }}
            >
              <div>
                <div className={`recipe-image recipe-${recipe.kind} relative h-48 overflow-hidden flex items-center justify-center bg-[#dbb561]`}>
                  <span className="absolute top-4 left-4 text-xs font-bold text-white tracking-widest uppercase z-10 bg-black/25 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                    {recipe.number}
                  </span>
                  
                  {/* Rustic illustrative plate elements */}
                  <div className="plate-art relative" />
                </div>

                <div className="p-6">
                  <h4 className="font-serif text-2xl font-bold text-[#214f36] mb-3 group-hover:text-[#719b6a] transition-colors leading-tight">
                    {recipe.title}
                  </h4>
                  <p className="text-xs text-[#6e7769] leading-relaxed mb-4 line-clamp-3">
                    {recipe.text}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => handleOpenRecipe(recipe)}
                  className="flex items-center gap-2 text-xs text-[#a78038] hover:text-[#245b3c] font-bold tracking-wider uppercase border-t border-[#f0eee4] pt-4 w-full text-left transition-colors group/btn"
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
        <DialogContent className="max-w-2xl bg-[#fbfaf4] border-[#dcdacb] rounded-2xl overflow-y-auto max-h-[85vh] p-6 md:p-8">
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
              <div className="flex flex-wrap gap-4 items-center text-xs text-[#214f36] font-bold tracking-wider uppercase bg-[#e1eddc] p-4 rounded-xl mb-6">
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
              <div className="mt-8 pt-6 border-t border-[#f0eee4] flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-[10px] text-[#6e7769] text-center sm:text-left">
                  ¿Te gustaría pedir esta ensalada? Escribile directo a nuestro bot.
                </span>
                <a
                  href={getWhatsAppMessage(selectedRecipe.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-gold group flex items-center gap-2 text-xs py-3 px-5 w-full sm:w-auto shadow-md"
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
