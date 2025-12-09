import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "../shared/reveal";

const faqs = [
  {
    question: "Como recebo o pack?",
    answer: "A entrega é 100% digital e automática. Assim que o pagamento for confirmado, você receberá um e-mail com o link para baixar seu pack em PDF. Simples e rápido!"
  },
  {
    question: "Quantas dezenas têm por jogo?",
    answer: "Todos os mais de 50 jogos do pack são completos, contendo 6 dezenas cada, que é o formato padrão de aposta da Mega Sena."
  },
  {
    question: "É garantido que vou ganhar?",
    answer: "Não. É importante ser transparente: nosso produto não oferece garantia de ganho. A Mega da Virada é um jogo de sorte. O que oferecemos é uma ferramenta para economizar seu tempo e dar acesso a jogos prontos e bem distribuídos."
  },
  {
    question: "Posso usar o pack no celular?",
    answer: "Sim! O pack é entregue em formato PDF, que é compatível com praticamente todos os dispositivos, incluindo smartphones, tablets e computadores."
  },
  {
    question: "É seguro comprar neste site?",
    answer: "Totalmente seguro. Utilizamos uma das maiores e mais seguras plataformas de pagamento do Brasil, com criptografia de ponta para proteger todos os seus dados."
  }
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-32 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Ainda tem dúvidas? Encontre as respostas aqui.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glassmorphism border-none rounded-lg px-6">
                  <AccordionTrigger className="text-white font-bold text-lg text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
