import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    value: "faq-1",
    question: "¿Cómo realizo mi pedido a través de WhatsApp?",
    answer: "Al hacer clic en cualquiera de nuestros enlaces de WhatsApp, se abrirá un chat directo con nuestro bot inteligente. Él te guiará amigablemente para armar tu listado, elegir variedades y confirmar los datos de envío.",
  },
  {
    value: "faq-2",
    question: "¿Con cuánta anticipación debo agendar mi entrega?",
    answer: "Solicitamos programar los pedidos con un mínimo de 24 horas de anticipación. Este tiempo nos permite realizar una selección manual óptima directo de origen y garantizar la máxima frescura en tu puerta.",
  },
  {
    value: "faq-3",
    question: "¿Cuál es la zona exacta de cobertura para los envíos?",
    answer: "Realizamos envíos de forma exclusiva dentro de la Sexta Sección de la Ciudad de Mendoza. Esta delimitación geográfica nos permite dar un servicio sumamente rápido, de confianza y personalizado.",
  },
  {
    value: "faq-4",
    question: "¿Cuáles son los medios de pago disponibles?",
    answer: "Aceptamos efectivo al recibir tu entrega, transferencias directas o Mercado Pago. Al finalizar el pedido con nuestro bot de WhatsApp, se coordinarán los detalles y datos de facturación necesarios.",
  },
  {
    value: "faq-5",
    question: "¿Qué pasa si algún producto no cumple con mis expectativas?",
    answer: "Al ser un servicio de selección manual y familiar, tu satisfacción es lo primero. Si algún producto no te conforma al momento de la entrega, lo cambiamos en el acto o te reintegramos el valor. Queremos asegurar tu total confianza.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-[#f1f6ed] border-t border-[#dcdacb] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="section-heading centered text-center mb-16">
          <span className="eyebrow block text-xs font-bold uppercase tracking-widest text-[#5f8d63] mb-3">
            Dudas frecuentes
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#214f36] leading-[1.05]">
            Preguntas que<br />
            <span className="text-[#9fbd79] italic font-medium">resolvemos con transparencia.</span>
          </h2>
        </div>

        {/* Accordion Component */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 md:p-10 border border-[#dcdacb] shadow-sm"
        >
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value} className="border-b border-[#f0eee4] last:border-0">
                <AccordionTrigger className="font-serif text-base md:text-lg text-[#214f36] font-bold py-5 hover:text-[#719b6a] hover:no-underline text-left transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm text-[#6e7769] leading-relaxed pb-5 pr-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
