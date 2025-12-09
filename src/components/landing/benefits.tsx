import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Clock, Sparkles, BarChart3, UserCheck } from "lucide-react";
import { Reveal } from "../shared/reveal";

const benefits = [
  {
    icon: Clock,
    title: "Economia de Tempo",
    description: "Não gaste horas ou dias montando jogos. Nós já fizemos o trabalho duro para você.",
  },
  {
    icon: Sparkles,
    title: "Praticidade Total",
    description: "Tudo pronto, organizado e de fácil acesso para você apenas copiar e registrar sua aposta.",
  },
  {
    icon: BarChart3,
    title: "Baseado em Estratégia",
    description: "Nossos jogos são montados utilizando padrões populares entre apostadores experientes.",
  },
  {
    icon: UserCheck,
    title: "Simples e Intuitivo",
    description: "Perfeito para todos! Até quem nunca apostou antes consegue usar sem nenhuma dificuldade.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 sm:py-32 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Vantagens que só o MegaPack Oferece</h2>
          <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Veja por que nosso pack é a ferramenta que faltava para suas apostas.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 100}>
              <Card className="glassmorphism h-full text-center hover:shadow-primary/20 hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-white">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
