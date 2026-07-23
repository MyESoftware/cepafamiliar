import { Instagram, Facebook } from "lucide-react";
import { WhatsappIcon } from "./Header";

const logoUrl = "https://cdn.builder.io/api/v1/image/assets%2F1df216b05e0144ac96861ec886ebd57c%2F1570ad4b36a141c6aecef96b9e846deb?format=webp&width=800&height=1200";

interface FooterProps {
  goTo: (id: string) => void;
}

export default function Footer({ goTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#173d29] px-4 py-12 text-[#e1ecda] sm:px-6 sm:py-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-10 lg:mb-12 lg:flex-row lg:gap-8">
          {/* Logo and Tagline */}
          <div className="max-w-xs">
            <div className="mb-5">
              <img className="h-24 w-24 rounded-full border-2 border-[#9fbd79] object-cover shadow-md sm:h-28 sm:w-28" src={logoUrl} alt="Logo de Cepa Familiar" />
            </div>
            <p className="font-serif text-2xl text-[#9fbd79] leading-tight italic">
              “Seleccionamos calidad,<br />
              brindamos confianza.”
            </p>
          </div>

          {/* Links sections */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:flex sm:flex-wrap sm:gap-12 lg:gap-24">
            {/* Navegación */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] text-[#9fc286] font-bold tracking-widest uppercase mb-2">
                Explorá
              </span>
              {["Inicio", "Nosotros", "Categorías", "Recetas"].map((label) => (
                <button
                  key={label}
                  onClick={() => goTo(label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                  className="min-h-11 text-left text-xs text-[#dae4d4] transition-colors hover:text-[#9fbd79] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9fbd79]"
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
                className="flex min-h-11 items-center gap-2 text-xs text-[#dae4d4] transition-colors hover:text-[#9fbd79] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9fbd79]"
              >
                <WhatsappIcon size={14} /> WhatsApp
              </a>
              <a
                href="https://www.instagram.com/cepafamiliar?utm_source=qr&igsh=dnB6dHBidnd6Nnh4"
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center gap-2 text-xs text-[#dae4d4] transition-colors hover:text-[#9fbd79] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9fbd79]"
              >
                <Instagram size={14} /> Instagram
              </a>
              <a
                href="https://www.facebook.com/share/1Ja3mDFqm4/"
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center gap-2 text-xs text-[#dae4d4] transition-colors hover:text-[#9fbd79] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9fbd79]"
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
        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[10px] text-[#97ae9c] sm:pt-8 md:flex-row md:items-center md:gap-4">
          <span>© {currentYear} Cepa Familiar. Todos los derechos reservados.</span>
          <span>Hecho con cuidado en Mendoza</span>
        </div>
      </div>
    </footer>
  );
}
