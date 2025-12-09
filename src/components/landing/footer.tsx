import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";


export default function Footer() {
  const privacyPolicyText = `Sua privacidade é importante para nós. É política do Dezenas da Virada respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site. Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado. Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas и roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados. Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.`;

  const termsOfUseText = `Ao adquirir e usar o pack de jogos "Dezenas da Virada", você concorda com os seguintes termos: 1. O produto consiste em um conjunto de combinações de números para a loteria Mega da Virada, gerados com base em análises estatísticas e padrões. 2. Este produto não garante qualquer tipo de ganho ou premiação. Loterias são jogos de sorte e o resultado é imprevisível. 3. O uso dos jogos é de inteira responsabilidade do comprador. Jogue com moderação. 4. O material é para uso pessoal e intransferível, não sendo permitida a sua distribuição, revenda ou compartilhamento. 5. O acesso ao produto é imediato após a confirmação do pagamento e enviado via e-mail.`;

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
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="link" className="text-gray-400 hover:text-white transition-colors p-0 h-auto">Política de Privacidade</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Política de Privacidade</AlertDialogTitle>
                  <AlertDialogDescription className="text-left max-h-[400px] overflow-y-auto">
                    {privacyPolicyText}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Fechar</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="link" className="text-gray-400 hover:text-white transition-colors p-0 h-auto">Termos de Uso</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Termos de Uso</AlertDialogTitle>
                  <AlertDialogDescription className="text-left max-h-[400px] overflow-y-auto">
                    {termsOfUseText}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Fechar</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
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