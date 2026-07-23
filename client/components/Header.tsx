import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const logoUrl = "https://cdn.builder.io/api/v1/image/assets%2F1df216b05e0144ac96861ec886ebd57c%2F1570ad4b36a141c6aecef96b9e846deb?format=webp&width=800&height=1200";

export function WhatsappIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.45A11.78 11.78 0 0 0 12.05 0C5.54 0 .24 5.3.24 11.82c0 2.08.54 4.1 1.56 5.88L.14 24l6.46-1.63a11.83 11.83 0 0 0 5.45 1.38h.01c6.51 0 11.81-5.3 11.81-11.82 0-3.15-1.22-6.11-3.35-8.48Zm-8.47 18.3h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.83.97 1.02-3.73-.23-.38a9.84 9.84 0 0 1-1.51-5.21C2.12 6.38 6.57 1.93 12.05 1.93a9.82 9.82 0 0 1 6.99 2.9 9.85 9.85 0 0 1 2.89 7.01c0 5.49-4.45 9.91-9.88 9.91Zm5.43-7.42c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.51-1.78-1.69-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.78-.73 2.03-1.44.25-.71.25-1.32.18-1.45-.08-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

interface HeaderProps {
  goTo: (id: string) => void;
}

const navigationItems = [
  ["Inicio", "inicio"],
  ["Nosotros", "nosotros"],
  ["Categorías", "categorias"],
  ["Recetas", "recetas"],
  ["Contacto", "contacto"],
] as const;

export default function Header({ goTo }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen || window.innerWidth >= 640) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const handleNavClick = (id: string) => {
    goTo(id);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] flex h-[4.5rem] items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-16 ${
        isScrolled
          ? "bg-[#faf8f2]/95 text-[#1f5134] shadow-[0_7px_28px_rgba(31,74,43,0.11)] backdrop-blur-xl"
          : "bg-transparent text-white"
      }`}
    >
      <button
        className="relative z-[61] flex min-h-11 min-w-11 items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9fbd79] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        onClick={() => handleNavClick("inicio")}
        aria-label="Ir al inicio"
      >
        <img className="h-11 w-11 rounded-full border-2 border-[#9fbd79] object-cover shadow-md sm:h-14 sm:w-14" src={logoUrl} alt="Logo de Cepa Familiar" />
      </button>

      <nav
        id="main-navigation"
        className={`fixed inset-x-0 top-[4.5rem] z-[55] max-h-[calc(100dvh-4.5rem)] flex-col overflow-y-auto border-t border-[#dcdacb] bg-[#faf8f2] px-5 py-5 text-[#245b3c] shadow-xl ${
          isMenuOpen ? "flex" : "hidden"
        } sm:static sm:z-auto sm:flex sm:max-h-none sm:flex-row sm:items-center sm:gap-5 sm:overflow-visible sm:border-0 sm:bg-transparent sm:p-0 sm:text-[inherit] sm:shadow-none lg:gap-8`}
        aria-label="Navegación principal"
      >
        {navigationItems.map(([label, id]) => (
          <button
            key={id}
            onClick={() => handleNavClick(id)}
            className="min-h-11 w-full rounded-lg px-3 text-left text-xs font-semibold uppercase tracking-[0.09em] transition-colors hover:bg-[#e1eddc] hover:text-[#245b3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#719b6a] sm:w-auto sm:px-1 sm:text-center sm:hover:bg-transparent"
          >
            {label}
          </button>
        ))}
        <a
          className="group mt-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#8eb36b] px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[#183d29] transition-colors hover:bg-[#9fbd79] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#719b6a] focus-visible:ring-offset-2 sm:mt-0 sm:w-auto"
          href="https://wa.me/542612130058"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsappIcon size={15} />
          <span>Hacer un pedido</span>
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </nav>

      <button
        className="relative z-[61] inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9fbd79] sm:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}
