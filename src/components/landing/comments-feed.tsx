'use client';

import { ThumbsUp } from 'lucide-react';

const comments = [
  {
    id: 1,
    name: 'Frei Gilson/Som Do Monte',
    avatar: 'https://picsum.photos/seed/frei/48/48',
    text: 'Essa oração sagrada tem sido instrumento de milagres em tantos lares. Já acompanhei pessoas que encontraram cura, reconciliação e até libertação de males antigos. Deus age com poder através dela.',
    likes: '2.587',
    time: '47 m',
    isOfficial: true,
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
          <span className="w-5 h-5 bg-[#1877F2] rounded flex items-center justify-center text-white font-bold text-[10px]">f</span>
          Plugin de comentários do Facebook
        </button>
      </div>
    </section>
  );
}
