import { ShieldCheck, Cpu, CheckCircle } from "lucide-react";
import { Reveal } from "../shared/reveal";

export default function Credibility() {
  return (
    <section id="garantia" className="py-20 sm:py-32 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sua Compra 100% Segura e Garantida</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Investimos em tecnologia de ponta para garantir sua total segurança e satisfação.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="w-full lg:w-2/3">
            <Reveal>
              <div className="glassmorphism p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Nossa Filosofia: Praticidade e Transparência</h3>
                <p className="text-gray-300 mb-6">
                  Acreditamos em fornecer uma ferramenta que otimiza seu tempo e oferece novas perspectivas para suas apostas. Nosso foco é na praticidade de ter jogos prontos, baseados em análises de padrões populares, sem promessas de ganhos.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <p className="font-semibold text-primary">
                    “Não vendemos promessa de ganho. Vendemos praticidade. A sorte é quem decide.”
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <Reveal delay={100}>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5">
                <ShieldCheck className="h-8 w-8 text-green-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Garantia de 7 Dias</h4>
                  <p className="text-sm text-gray-400">Risco zero. Se não gostar, devolvemos seu dinheiro.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5">
                <Cpu className="h-8 w-8 text-accent shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Entrega Automática</h4>
                  <p className="text-sm text-gray-400">Acesso imediato no seu e-mail após o pagamento.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5">
                <CheckCircle className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Compra Segura</h4>
                  <p className="text-sm text-gray-400">Ambiente de pagamento criptografado de ponta a ponta.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
