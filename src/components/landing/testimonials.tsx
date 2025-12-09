import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Reveal } from '../shared/reveal';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'João S.',
    text: 'Incrível! Economizei um tempo enorme. Os jogos são bem distribuídos e fáceis de usar. Recomendo demais!',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Maria L.',
    text: 'A praticidade é o ponto alto. Recebi na hora por e-mail e já fiz minhas apostas. A organização é impecável.',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Carlos P.',
    text: 'Gostei da transparência do produto. Não promete milagres, mas entrega uma ferramenta útil. Valeu o investimento.',
    rating: 5,
  },
  {
    id: 'testimonial-4',
    name: 'Ana B.',
    text: 'Sou iniciante e achei super fácil. O PDF é claro e direto. Agora é só torcer! Com certeza usarei nos próximos anos.',
    rating: 5,
  },
];

const Rating = ({ value }: { value: number }) => (
  <div className="flex items-center">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < value ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`}
      />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Milhares de Clientes Satisfeitos</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Veja o que nossos clientes estão dizendo sobre o MegaPack.
            </p>
            <div className="mt-4 flex justify-center items-center gap-2">
              <Rating value={5} />
              <span className="font-bold text-white">Nota Média 5/5</span>
            </div>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => {
            const image = PlaceHolderImages.find(img => img.id === testimonial.id);
            return (
              <Reveal key={testimonial.id} delay={index * 100}>
                <Card className="glassmorphism h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full border-2 border-primary"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-bold text-white">{testimonial.name}</h3>
                          <Rating value={testimonial.rating} />
                        </div>
                        <p className="text-gray-300 italic">"{testimonial.text}"</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
