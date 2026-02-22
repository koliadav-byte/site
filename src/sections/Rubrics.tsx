import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TrendingUp, Building2, Users, Landmark, Heart } from 'lucide-react';

const rubrics = [
  {
    title: 'Macro-View',
    subtitle: 'сырьё • логистика • стоимость капитала',
    desc: 'Куда смещаются издержки и риск‑премия. Что это делает с маржой и оборотным капиталом.',
    icon: TrendingUp,
  },
  {
    title: 'Future Habitat',
    subtitle: 'технологии • материалы • среда',
    desc: 'Какие технологии реально входят в себестоимость и какие создают новый спрос.',
    icon: Building2,
  },
  {
    title: 'Business Intelligence',
    subtitle: 'цепочка мебели • продажи • экономика',
    desc: 'Где формируется прибыль по звеньям цепочки и где возникают скрытые потери.',
    icon: Users,
  },
  {
    title: 'Heritage & Code',
    subtitle: 'код • дизайн‑язык • наследие',
    desc: 'Как “культурный код” превращается в актив (или в издержку) в премиум‑сегменте.',
    icon: Landmark,
  },
  {
    title: 'Human Centric',
    subtitle: 'потребитель • психология • статус',
    desc: 'Как меняется логика выбора и какие ошибки ломают конверсию и LTV.',
    icon: Heart,
  },
];

export default function Rubrics() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.rubric-card',
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-16 animate-section">
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Rubrics / <span className="text-[#C9A962]">Framework</span>
        </h2>
        <p className="text-gray-400 mt-2 max-w-2xl">
          Пять рубрик — это не “темы”, а типы управленческих вопросов.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rubrics.map((r) => {
          const Icon = r.icon;
          return (
            <div
              key={r.title}
              className="rubric-card bg-[#111111] border border-gray-800 rounded-2xl p-6 hover:border-[#C9A962]/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#C9A962]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#C9A962]" />
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">{r.title}</div>
                  <div className="text-[#C9A962] text-xs tracking-wide uppercase mt-1">{r.subtitle}</div>
                  <p className="text-gray-400 text-sm leading-relaxed mt-3">{r.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
