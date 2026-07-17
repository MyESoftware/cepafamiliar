import { Instagram, Facebook } from "lucide-react";
import { WhatsappIcon } from "./Header";

const logoUrl = "https://cdn.builder.io/api/v1/image/assets%2F1df216b05e0144ac96861ec886ebd57c%2F1570ad4b36a141c6aecef96b9e846deb?format=webp&width=800&height=1200";

interface FooterProps {
  goTo: (id: string) => void;
}

export default function Footer({ goTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-[#173d29] text-[#e1ecda] py-16 px-6 lg:px-24">
      <div className="container mx-auto">
        <div className="footer-main flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-12">
          {/* Logo and Tagline */}
          <div className="max-w-xs">
            <div className="footer-brand mb-6">
              <img className="footer-logo-image w-28 h-28 object-cover rounded-full border-2 border-[#9fbd79] shadow-md" src={logoUrl} alt="Logo de Cepa Familiar" />
            </div>
            <p className="font-serif text-2xl text-[#9fbd79] leading-tight italic">
              “Seleccionamos calidad,<br />
              brindamos confianza.”
            </p>
          </div>

          {/* Links sections */}
          <div className="footer-links flex flex-wrap gap-12 lg:gap-24">
            {/* Navegación */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] text-[#9fc286] font-bold tracking-widest uppercase mb-2">
                Explorá
              </span>
              {["Inicio", "Nosotros", "Categorías", "Recetas"].map((label) => (
                <button
                  key={label}
                  onClick={() => goTo(label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                  className="text-left text-xs text-[#dae4d4] hover:text-[#9fbd79] transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Redes */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] text-[#9fc286] font-bold tracking-widest uppercase mb-2">
                Contacto
              </span>
              <a
                href="https://wa.me/542612130058"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs text-[#dae4d4] hover:text-[#9fbd79] transition-colors"
              >
                <WhatsappIcon size={14} /> WhatsApp
              </a>
              <a
                href="https://www.instagram.com/cepafamiliar?utm_source=qr&igsh=dnB6dHBidnd6Nnh4"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs text-[#dae4d4] hover:text-[#9fbd79] transition-colors"
              >
                <Instagram size={14} /> Instagram
              </a>
              <a
                href="https://www.facebook.com/share/1Ja3mDFqm4/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs text-[#dae4d4] hover:text-[#9fbd79] transition-colors"
              >
                <Facebook size={14} /> Facebook
              </a>
            </div>

            {/* Horarios */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] text-[#9fc286] font-bold tracking-widest uppercase mb-2">
                Horarios
              </span>
              <p className="text-xs text-[#dae4d4] leading-relaxed">
                Lunes a Sábado<br />
                <span className="font-semibold">9:00 a 14:00 hs</span><br />
                <span className="font-semibold">17:00 a 21:00 hs</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-[#97ae9c]">
          <span>© {currentYear} Cepa Familiar. Todos los derechos reservados.</span>
          <span>Hecho con cuidado en Mendoza</span>
        </div>
      </div>
    </footer>
  );
}
