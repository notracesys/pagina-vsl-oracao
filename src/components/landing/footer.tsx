import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link href="#inicio" className="text-2xl font-black text-white font-headline tracking-tighter">
              Dezenas da <span className="text-primary">Virada</span>
            </Link>
            <p className="text-sm text-gray-500 mt-2">© {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</Link>
            <Link href="mailto:suporte@megapack.com" className="text-gray-400 hover:text-white transition-colors">Contato: suporte@megapack.com</Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-xs text-gray-600">
          <p>
            AVISO LEGAL: Este produto não garante resultados ou ganho financeiro. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados. Loterias são jogos de sorte e envolvem risco. Jogue com responsabilidade.
          </p>
        </div>
      </div>
    </footer>
  );
}
