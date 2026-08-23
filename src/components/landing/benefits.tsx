import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Shield, Sparkles, Home, Flame } from "lucide-react";
import { Reveal } from "../shared/reveal";

const benefits = [
  {
    icon: Sparkles,
    title: "Ativação da Prosperidade",
    description: "Aprenda o método exato para remover os bloqueios espirituais que impedem o fluxo de abundância na sua vida financeira.",
  },
  {
    icon: Shield,
    title: "Escudo de Proteção Total",
    description: "Crie uma barreira intransponível contra inveja, feitiçaria e males que tentam atingir você e sua caminhada.",
  },
  {
    icon: Home,
    title: "Restauração do Lar",
    description: "Limpeza profunda do ambiente familiar, afastando brigas e trazendo a paz que só a intercessão de São Bento proporciona.",
  },
  {
    icon: Flame,
    title: "Estratégia de Oração",
    description: "Não é apenas rezar; é saber como ativar as palavras sagradas com fé e ordem para obter resultados imediatos e reais.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-black text-center text-[#1a1a1a] mb-4 tracking-tight">O que você vai destravar hoje</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Ao ativar esse ensinamento sagrado, você terá acesso a transformações reais em todas as áreas.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 100}>
              <Card className="border-2 border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#1a1a1a]">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
