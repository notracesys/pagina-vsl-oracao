import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Copy, BrainCircuit, Filter, Zap } from "lucide-react";
import { Reveal } from "../shared/reveal";

const benefits = [
  {
    icon: Copy,
    title: "Aumente Suas Combinações",
    description: "Com mais de 50 jogos prontos, você aposta em uma variedade muito maior de combinações, cobrindo mais possibilidades.",
  },
  {
    icon: BrainCircuit,
    title: "Jogos Inteligentes",
    description: "Nossas dezenas evitam vícios comuns (sequências, datas) e são criadas com base em padrões estratégicos para otimizar sua aposta.",
  },
  {
    icon: Filter,
    title: "Filtros de Especialistas",
    description: "As combinações passam por filtros que analisam a distribuição de dezenas, buscando um equilíbrio inteligente em cada jogo.",
  },
  {
    icon: Zap,
    title: "Aposta Pronta em Minutos",
    description: "Receba, copie e aposte. Transforme a tarefa de escolher dezenas em um processo de poucos cliques, com muito mais estratégia.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 sm:py-32 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Vantagens que Colocam Você à Frente</h2>
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
