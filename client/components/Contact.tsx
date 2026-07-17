import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Truck, MapPin, Phone, Mail, Send, ArrowUpRight } from "lucide-react";
import { WhatsappIcon } from "./Header";

const deliveryUrl = "https://cdn.builder.io/api/v1/image/assets%2F1df216b05e0144ac96861ec886ebd57c%2F1b3661b8e3ca49c0b539059107b257e8?format=webp&width=800&height=1200";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name") as string;
    setSubmittedName(name);

    const subject = encodeURIComponent(`Consulta desde la web — ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${data.get("email")}\n\n${data.get("message")}`);
    window.location.href = `mailto:cepafamiliar@gmail.com?subject=${subject}&body=${body}`;
    
    setIsSubmitted(true);
  };

  return (
    <div id="contacto" className="w-full">
      {/* Delivery Info Section (Protagonist) */}
      <section className="delivery section-pad bg-[#163a24] text-white relative overflow-hidden py-24">
        {/* Background botanical blur */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1b5b34] rounded-full blur-[120px] opacity-40 pointer-events-none" />
        <div className="delivery-leaf absolute right-[4%] bottom-0 text-[240px] text-[#346b49] opacity-35 select-none pointer-events-none">✦</div>
        
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
          <div className="lg:col-span-7 delivery-copy">
            <span className="eyebrow light block text-xs font-bold uppercase tracking-widest text-[#b8d48f] mb-3">
              Logística Exclusiva
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-[1.05] mb-6">
              Frescura seleccionada.<br />
              <span className="text-[#b7d487] italic font-medium">Te lo acercamos a casa.</span>
            </h2>
            
            <div className="space-y-4 max-w-lg mb-8 text-[#d8e1ce] text-sm md:text-base leading-relaxed">
              <p>
                Para garantizar la máxima calidad y frescura en cada fruta y verdura, realizamos entregas programadas únicamente en la <strong className="text-white font-bold underline decoration-[#9fbd79] decoration-2">Sexta Sección de Mendoza.</strong>
              </p>
              
              {/* Highlight cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs font-semibold text-white">
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="text-[#b8d48f] text-lg">⏱</span>
                  <span>Mínimo 24 hs de anticipación</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="text-[#b8d48f] text-lg">📍</span>
                  <span>Envíos en la Sexta Sección</span>
                </div>
              </div>
            </div>

            <a
              className="button button-gold group inline-flex items-center gap-3 text-xs tracking-widest shadow-[0_4px_14px_rgba(159,189,121,0.25)] hover:scale-[1.03] transition-all"
              href="https://wa.me/542612130058"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsappIcon size={16} /> Hacer pedido con el Bot
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div 
              className="delivery-card bg-[#faf8f2] text-[#245b3c] p-6 rounded-[32px] shadow-2xl w-full max-w-[340px] border border-[#dcdacb] relative overflow-hidden"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 3 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 60 }}
            >
              {/* Decorative top dot */}
              <div className="absolute top-3 right-6 text-[#9fbd79] text-xl">✦</div>

              <div className="delivery-card-top flex items-center gap-3 text-[10px] font-bold tracking-wider uppercase mb-4 text-[#245b3c]">
                <Truck size={20} className="text-[#9fbd79]" />
                <span className="leading-tight">Bot de WhatsApp<br />Escanear QR</span>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden border border-[#d6cfb8] bg-white p-3">
                <img 
                  className="delivery-image w-full h-[240px] object-cover rounded-xl" 
                  src={deliveryUrl} 
                  alt="Código QR WhatsApp Cepa Familiar" 
                />
              </div>
              
              <div className="delivery-card-bottom border-t border-[#d6cfb8]/60 pt-4 mt-4 flex items-center justify-between text-[10px] font-bold text-[#245b3c]">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#9fbd79]" /> Sexta Sección · Mendoza
                </span>
                <span className="text-[#a78038] tracking-wider uppercase">Cepa Familiar</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Contact Form & Stylized Coverage Map Section */}
      <section className="contact section-pad bg-[#faf8f2] border-t border-[#dcdacb]">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Details Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="contact-intro max-w-lg mb-8">
              <span className="eyebrow block text-xs font-bold uppercase tracking-widest text-[#5f8d63] mb-3">
                Estamos Cerca
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#214f36] leading-[1.05] mb-6">
                Consultanos lo que<br />
                <span className="text-[#9fbd79] italic font-medium">necesites saber.</span>
              </h2>
              <p className="text-sm text-[#6a7768] leading-relaxed">
                Escribinos para consultar la variedad de cajones de verdura, frutos secos al por mayor, disponibilidad o coordinar entregas particulares.
              </p>
            </div>
            
            <div className="contact-details grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#d5d2c6]/60 pt-8">
              <a 
                href="https://wa.me/542612130058" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#dcdacb] text-[#245b3c] hover:text-[#719b6a] group transition-all"
              >
                <Phone size={18} className="text-[#9fbd79] shrink-0 mt-0.5" />
                <div className="text-[10px] font-bold tracking-wider uppercase">
                  WhatsApp
                  <small className="block text-xs font-semibold text-[#687464] normal-case tracking-normal mt-1">
                    +54 261 213 0058
                  </small>
                </div>
              </a>

              <a 
                href="mailto:cepafamiliar@gmail.com"
                className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#dcdacb] text-[#245b3c] hover:text-[#719b6a] group transition-all"
              >
                <Mail size={18} className="text-[#9fbd79] shrink-0 mt-0.5" />
                <div className="text-[10px] font-bold tracking-wider uppercase">
                  Correo
                  <small className="block text-xs font-semibold text-[#687464] normal-case tracking-normal mt-1">
                    cepafamiliar@gmail.com
                  </small>
                </div>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.form 
              className="contact-form bg-white p-8 rounded-3xl border border-[#dcdacb] shadow-sm relative overflow-hidden min-h-[420px] flex flex-col justify-center"
              onSubmit={sendMessage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Decorative side accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#9fbd79]" />

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 px-2"
                >
                  <div className="w-16 h-16 bg-[#e1eddc] text-[#245b3c] rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <Send size={28} className="translate-x-0.5 -translate-y-0.5 text-[#5f8d63]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#245b3c] mb-3">
                    ¡Gracias, {submittedName}!
                  </h3>
                  <p className="text-sm text-[#6a7768] leading-relaxed mb-6">
                    Preparamos el borrador de tu consulta en tu gestor de correo. 
                    Si no se abrió automáticamente, podés enviarlo directamente a:
                  </p>
                  <a 
                    href="mailto:cepafamiliar@gmail.com"
                    className="block text-sm font-bold text-[#a78038] hover:text-[#245b3c] bg-[#faf8f2] border border-[#dcdacb] py-3 px-4 rounded-xl mb-8 transition-colors select-all"
                  >
                    cepafamiliar@gmail.com
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-bold text-[#5c7665] hover:text-[#245b3c] tracking-wider uppercase underline transition-colors"
                  >
                    Enviar otra consulta
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="form-label font-serif text-2xl text-[#245b3c] flex justify-between items-center mb-6 pl-2">
                    Envianos un correo 
                    <Send size={18} className="text-[#9fbd79]" />
                  </div>

                  <div className="space-y-5 pl-2">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#5c7665] mb-1.5">
                        Nombre Completo
                      </label>
                      <input 
                        name="name" 
                        required 
                        placeholder="¿Cómo te llamás?" 
                        className="w-full bg-[#faf8f2] border border-[#dbd9d0] rounded-xl px-4 py-3 text-sm text-[#245b3c] focus:outline-none focus:border-[#245b3c] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#5c7665] mb-1.5">
                        Correo electrónico
                      </label>
                      <input 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="tu@email.com" 
                        className="w-full bg-[#faf8f2] border border-[#dbd9d0] rounded-xl px-4 py-3 text-sm text-[#245b3c] focus:outline-none focus:border-[#245b3c] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#5c7665] mb-1.5">
                        Mensaje o Consulta
                      </label>
                      <textarea 
                        name="message" 
                        required 
                        placeholder="Escribí aquí cómo podemos ayudarte..." 
                        rows={4} 
                        className="w-full bg-[#faf8f2] border border-[#dbd9d0] rounded-xl px-4 py-3 text-sm text-[#245b3c] focus:outline-none focus:border-[#245b3c] resize-none transition-colors"
                      />
                    </div>
                  </div>

                  <button 
                    className="button button-dark group w-full flex items-center justify-center gap-2 text-xs py-4.5 rounded-xl shadow-md mt-8 hover:bg-[#1a422b]"
                    type="submit"
                  >
                    Enviar mensaje 
                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </>
              )}
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}
