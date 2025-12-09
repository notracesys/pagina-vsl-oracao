import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Mail, TrendingUp, CalendarDays, Copy } from 'lucide-react';
import { Reveal } from "../shared/reveal";

const features = [
  {
    icon: Copy,
    title: "+50 Jogos Completos",
    description: "Cada jogo com 6 dezenas, prontos para copiar e apostar sem complicação."
  },
  {
    icon: TrendingUp,
    title: "Padrões Matemáticos",
    description: "Jogos estudados para incluir padrões e combinações comumente analisados por especialistas."
  },
  {
    icon: FileText,
    title: "Organizados em PDF",
    description: "Um arquivo PDF premium, fácil de visualizar em qualquer dispositivo, seja celular ou computador."
  },
  {
    icon: Mail,
    title: "Entrega Imediata",
    description: "Receba o pack no seu e-mail automaticamente, minutos após a confirmação do pagamento."
  },
  {
    icon: CalendarDays,
    title: "Atualizado 2024/2025",
    description: "Nosso material é 100% atualizado para o sorteio da Mega da Virada deste ano."
  }
];

export default function WhatYouGet() {
  return (
    <section id="o-que-voce-recebe" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">O que você recebe ao adquirir o Pack?</h2>
          <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Um conjunto completo de ferramentas para facilitar suas apostas e otimizar seu tempo.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 100}>
              <Card className="glassmorphism h-full hover:-translate-y-2 transition-transform duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
