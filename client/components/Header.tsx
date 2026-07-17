import { useState, useEffect } from "react";
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

export default function Header({ goTo }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    goTo(id);
    setIsMenuOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <button className="brand" onClick={() => handleNavClick("inicio")} aria-label="Ir al inicio">
        <img className="brand-logo-image" src={logoUrl} alt="Logo de Cepa Familiar" />
      </button>

      <nav className={isMenuOpen ? "nav-links open" : "nav-links"} aria-label="Navegación principal">
        {[
          ["Inicio", "inicio"],
          ["Nosotros", "nosotros"],
          ["Categorías", "categorias"],
          ["Recetas", "recetas"],
          ["Contacto", "contacto"],
        ].map(([label, id]) => (
          <button key={id} onClick={() => handleNavClick(id)} className="transition-all hover:text-accent duration-300">
            {label}
          </button>
        ))}
        <a
          className="nav-cta group transition-all duration-300 hover:scale-105"
          href="https://wa.me/542612130058"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsappIcon size={15} />
          <span>Hacer un pedido</span>
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </nav>

      <button className="menu-toggle hover:text-accent transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}
