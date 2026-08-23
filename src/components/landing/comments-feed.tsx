'use client';

import { ThumbsUp, Facebook } from 'lucide-react';

const comments = [
  {
    id: 1,
    name: 'Frei Gilson/Som Do Monte',
    avatar: 'https://picsum.photos/seed/frei/48/48',
    text: 'Essa oração sagrada tem sido instrumento de milagres em tantos lares. Já acompanhei pessoas que encontraram cura, reconciliação e até libertação de males antigos. Deus age com poder através dela.',
    likes: '2.587',
    time: '47 m',
  },
  {
    id: 2,
    name: 'Helena Souza',
    avatar: 'https://picsum.photos/seed/helena/40/40',
    text: '@FreiGilson, comecei ontem e hoje acordei sentindo uma paz que nunca havia experimentado. 🙌✨',
    likes: '53',
    time: '38 m',
    isReply: true,
  },
  {
    id: 3,
    name: 'Padre Paulo Ricardo',
    avatar: 'https://picsum.photos/seed/padre/48/48',
    text: 'Posso afirmar com toda convicção: esta oração é um canal de milagres. Em Roma, vi pessoas se levantarem em fé e viverem curas impossíveis aos olhos humanos. Que ninguém perca essa graça!',
    likes: '1.347',
    time: '1 h',
  },
  {
    id: 4,
    name: 'Antônio Martins',
    avatar: 'https://picsum.photos/seed/antonio/40/40',
    text: '@PadrePauloRicardo, o senhor tem razão. Tenho 68 anos e estava muito abatido, sem esperança. Depois que iniciei a oração, ganhei ânimo novo. Até meus netos perceberam a mudança em mim.',
    likes: '45',
    time: '29 m',
    isReply: true,
  },
  {
    id: 5,
    name: 'Padre Chrystian Shankar',
    avatar: 'https://picsum.photos/seed/shankar/48/48',
    text: 'Eu vivi exatamente o que está sendo mostrado nesse vídeo. A devoção de São Bento não é apenas uma leitura, é um encontro verdadeiro com Deus. Quem seguir com fé vai perceber a mudança. Assista até o final e se permita viver essa experiência!',
    likes: '751',
    time: '1 h',
  },
  {
    id: 6,
    name: 'Joelma',
    avatar: 'https://picsum.photos/seed/joelma/40/40',
    text: '@PadreChrystianShankar no final eu só conseguia chorar. Foi muito forte pra mim 😭Obrigada por confirmar aquilo que senti, padre!',
    likes: '15',
    time: '1 h',
    isReply: true,
  },
  {
    id: 7,
    name: 'Padre Fábio De Melo',
    avatar: 'https://picsum.photos/seed/fabio/48/48',
    text: 'Essa oração tocou meu coração de uma forma que não sei explicar. Espero que mais pessoas tenham a oportunidade de viver isso. É forte demais.',
    likes: '568',
    time: '1 h',
  },
  {
    id: 8,
    name: 'Clarice Silva',
    avatar: 'https://picsum.photos/seed/clarice/40/40',
    text: '@FabioDeMelo meu pai chorou enquanto ouvia. Ele estava afastado de Deus há muitos anos. Hoje, rezou comigo 🙏',
    likes: '15',
    time: '1 h',
    isReply: true,
  },
  {
    id: 9,
    name: 'Maria Do Carmo',
    avatar: 'https://picsum.photos/seed/carmo/48/48',
    text: 'Tenho 59 anos e vivia triste porque estava desempregada há quase 2 anos. Em menos de uma semana de oração, consegui um novo trabalho. Minha fé foi renovada!',
    likes: '39',
    time: '2 h',
  },
  {
    id: 10,
    name: 'Ricardo Nogueira',
    avatar: 'https://picsum.photos/seed/ricardo/48/48',
    text: 'Sou avô e confesso que comecei a oração desconfiado. Mas no primeiro dia já senti paz no coração, e minha netinha que não dormia bem finalmente teve uma noite tranquila. Só posso agradecer a Deus!',
    likes: '27',
    time: '2 h',
  },
  {
    id: 11,
    name: 'Solange Abreu',
    avatar: 'https://picsum.photos/seed/solange/48/48',
    text: 'Meu marido voltou a trabalhar depois de rezar por 7 dias seguidos! Deus é fiel! 🙌',
    likes: '43',
    time: '2 h',
  },
  {
    id: 12,
    name: 'João Da Silva',
    avatar: 'https://picsum.photos/seed/joaodasilva/48/48',
    text: 'Com 66 anos, eu já tinha perdido a esperança de resolver meus problemas financeiros. Mas em apenas 2 semanas de oração, dívidas antigas foram quitadas e novas oportunidades apareceram. Milagre puro!',
    likes: '196',
    time: '2 h',
  },
  {
    id: 13,
    name: 'Maria De Fátima',
    avatar: 'https://picsum.photos/seed/fatima/40/40',
    text: 'Eu já estava conformada com a solidão, mas depois de tantas recomendações do Frei Gilson, do Padre Paulo e do Padre Chrystian, decidi orar. Em pouco tempo, meu filho, que não falava comigo há anos, voltou a me procurar. Foi um presente de Deus!',
    likes: '66',
    time: '1 h',
    isReply: true,
  },
];

export default function CommentsFeed() {
  return (
    <section className="border-t border-gray-200 pt-8 pb-16">
      <h3 className="text-gray-600 text-sm mb-6">13 de 1.245 comentários</h3>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className={`flex gap-3 ${comment.isReply ? 'ml-12' : ''}`}>
            <img
              src={comment.avatar}
              alt={comment.name}
              className={`${comment.isReply ? 'w-10 h-10' : 'w-12 h-12'} rounded-full flex-shrink-0`}
            />
            <div className="flex-1">
              <div className="bg-[#f0f2f5] p-3 rounded-2xl">
                <p className="font-bold text-blue-900 text-sm">{comment.name}</p>
                <p className="text-sm mt-1">{comment.text}</p>
              </div>
              <div className="flex gap-4 mt-1 text-xs text-gray-500 font-bold ml-2">
                <button className="hover:underline">Curtir</button>
                <button className="hover:underline">Responder</button>
                <div className="flex items-center gap-1">
                  <div className="bg-[#1877F2] p-0.5 rounded-full">
                    <ThumbsUp className="w-2.5 h-2.5 text-white fill-white" />
                  </div>
                  <span>{comment.likes}</span>
                </div>
                <span>{comment.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t border-gray-100">
        <button className="text-blue-600 font-semibold text-sm flex items-center gap-2">
          <Facebook className="w-5 h-5 text-[#1877F2] fill-[#1877F2]" />
          Plugin de comentários do Facebook
        </button>
      </div>
    </section>
  );
}
