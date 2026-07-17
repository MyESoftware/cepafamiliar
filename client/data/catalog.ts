export interface Product {
  name: string;
  price: string;
  unit: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  items: string[];
  classKey: string;
}

export interface Recipe {
  id: string;
  number: string;
  title: string;
  text: string;
  kind: string;
  prepTime: string;
  difficulty: "Fácil" | "Medio" | "Difícil";
  servings: string;
  ingredients: string[];
  instructions: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: "frutas",
    name: "Frutas Frescas",
    description: "Manzanas, bananas, cítricos y frutillas seleccionadas a diario.",
    items: ["Manzana Roja/Verde", "Bananas Premium", "Naranjas de Jugo", "Limones", "Frutillas de Estación"],
    classKey: "fruits",
  },
  {
    id: "greens",
    name: "Verduras y Hojas",
    description: "Tomates, lechugas, espinacas y vegetales frescos de huerta.",
    items: ["Tomate Redondo", "Lechuga Capuchina/Criolla", "Zanahorias", "Espinaca", "Palta Selection"],
    classKey: "greens",
  },
  {
    id: "nuts",
    name: "Frutos Secos",
    description: "Mixes, almendras, nueces y castañas llenas de energía natural.",
    items: ["Almendras Peladas"],
    classKey: "nuts",
  },
  {
    id: "spices",
    name: "Especias y Condimentos",
    description: "Aromas y sabores para realzar cada uno de tus platos.",
    items: ["Orégano Precordillerano", "Pimentón Dulce/Ahumado", "Cúrcuma Pura", "Chimichurri Casero"],
    classKey: "spices",
  },
  {
    id: "regional",
    name: "Productos Regionales",
    description: "Aceite de oliva extra virgen mendocino, miel pura y dulces típicos.",
    items: ["Aceite de Oliva Extra Virgen"],
    classKey: "regional",
  },
];

export const RECIPES: Recipe[] = [
  {
    id: "salads-1",
    number: "01",
    title: "La Tradicional ⭐",
    text: "La combinación clásica que nunca falla. Fresca, liviana y preparada en el momento con ingredientes seleccionados.",
    kind: "tomatoes",
    prepTime: "Preparación al instante",
    difficulty: "Fácil",
    servings: "Ideal para: todos los días.",
    ingredients: [
      "Lechuga Repollada o Mantecosa",
      "Zanahoria rallada",
      "Huevo duro",
    ],
    instructions: [
      "Aceite de oliva/girasol",
      "Vinagre",
      "Sal",
      "Incluye tenedor descartable",
      "Incluye servilleta",
    ],
  },
  {
    id: "salads-2",
    number: "02",
    title: "La Campestre",
    text: "Colores, frescura y sabor en una ensalada liviana con vegetales recién seleccionados de la feria.",
    kind: "toast",
    prepTime: "Preparación al instante",
    difficulty: "Fácil",
    servings: "Ideal para: quienes buscan algo más completo.",
    ingredients: [
      "Lechuga fresca",
      "Tomate seleccionado",
      "Cebolla morada",
      "Zanahoria rallada",
    ],
    instructions: [
      "Aceite de oliva/girasol",
      "Vinagre",
      "Sal",
    ],
  },
  {
    id: "salads-3",
    number: "03",
    title: "La Mediterránea",
    text: "Inspirada en los sabores del Mediterráneo, con ingredientes frescos y un toque gourmet único.",
    kind: "granola",
    prepTime: "Preparación al instante",
    difficulty: "Fácil",
    servings: "Ideal para: un sabor más gourmet.",
    ingredients: [
      "Lechuga seleccionada",
      "Tomate Perita",
      "Aceitunas premium (Cepa)",
      "Morrón rojo fresco",
    ],
    instructions: [
      "Aceite de oliva/girasol",
      "Vinagre",
      "Sal",
    ],
  },
  {
    id: "salads-4",
    number: "04",
    title: "La Power 💪",
    text: "Una opción nutritiva con proteínas y grasas saludables para mantener la energía durante tu jornada.",
    kind: "citrus",
    prepTime: "Preparación al instante",
    difficulty: "Fácil",
    servings: "Ideal para: oficina, gimnasio y almuerzos saludables.",
    ingredients: [
      "Espinaca seleccionada",
      "Huevo duro",
      "Zanahoria rallada",
      "Nueces premium (Cepa)",
    ],
    instructions: [
      "Aceite de oliva/girasol",
      "Vinagre",
      "Sal",
    ],
  },
];
