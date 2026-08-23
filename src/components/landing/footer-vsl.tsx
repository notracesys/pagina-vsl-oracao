'use client';

export default function FooterVSL() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-4 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-xs md:text-sm text-gray-400">
          © {currentYear} - Todos os direitos reservados.
        </p>

        <nav className="flex justify-center gap-4 text-xs md:text-sm text-gray-400">
          <a href="#" className="hover:text-white underline">Política de Privacidade</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white underline">Termos de Uso</a>
        </nav>

        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] md:text-[11px] text-gray-500 leading-relaxed uppercase tracking-tighter">
            Aviso: Esse ensinamento é prática espiritual, com efeitos variáveis. Não é tratamento nem promessa de resultado. Conteúdo educativo, não substitui aconselhamento profissional. Depoimentos são individuais; alguns podem ser dramatizados. Proibida a cópia de imagens e textos; sanções legais se descumprido.
          </p>
        </div>
      </div>
    </footer>
  );
}
