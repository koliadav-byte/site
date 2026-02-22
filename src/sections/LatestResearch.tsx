import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';

const items = [
  {
    id: 1,
    rubric: 'Business Intelligence',
    title: 'Серийное производство vs bespoke: где формируется прибыль (2026–2028)',
    meaning: 'Какие решения по мощности, SKU и сервису защищают маржу при турбулентности спроса.',
    image: '/images/valmark-article-1.jpg',
    date: 'Январь 2026',
  },
  {
    id: 2,
    rubric: 'Macro-View',
    title: 'Сырьё и логистика: сценарный коридор Base/Stress',
    meaning: 'Как меняется стоимость входа и оборотный капитал в цепочке мебели.',
    image: '/images/valmark-article-2.jpg',
    date: 'Январь 2026',
  },
  {
    id: 3,
    rubric: 'Future Habitat',
    title: '3D‑печать в интерьере: аддитивные технологии как фактор себестоимости',
    meaning: 'Где технология снижает прототипирование и где создаёт новые узкие места.',
    image: '/images/valmark-article-3.jpg',
    date: 'Февраль 2026',
  },
  {
    id: 4,
    rubric: 'Heritage & Code',
    title: 'Феномен Баухауса: функционализм в периоды турбулентности',
    meaning: 'Как “код” дизайна становится активом: риск‑карта и сценарии монетизации.',
    image: '/images/valmark-article-4.jpg',
    date: 'Февраль 2026',
  },
  {
    id: 5,
    rubric: 'Human Centric',
    title: 'Покупка “состояний” вместо вещей: психология потребителя 2026',
    meaning: 'Какие продуктовые и коммуникационные ошибки разрушают конверсию премиум‑сегмента.',
    image: '/images/valmark-article-5.jpg',
    date: 'Февраль 2026',
  },
  {
    id: 6,
    rubric: 'Business Intelligence',
    title: 'ЛКМ в СНГ: структурный аудит санкционного давления',
    meaning: 'Где возникают скрытые потери комплаенса и почему меняется экономика дистрибуции.',
    image: '/images/valmark-article-6.jpg',
    date: 'Январь 2026',
  },
];

export default function LatestResearch() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.latest-card',
        { opacity: 0, y: 30 },
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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Latest <span className="text-[#C9A962]">Research</span>
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl">
            Последние публикации: рубрика, тема и управленческий смысл.
          </p>
        </div>
        <a
          href="/#latest"
          className="inline-flex items-center gap-2 text-[#C9A962] hover:text-[#B8984F] transition-colors text-sm font-medium"
        >
          Архив исследований
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((it) => (
          <article
            key={it.id}
            className="latest-card group bg-[#111111] border border-gray-800 rounded-2xl overflow-hidden hover:border-[#C9A962]/30 transition-all duration-300 cursor-pointer"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={it.image}
                alt={it.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#C9A962] text-[#0A0A0A] text-xs font-semibold rounded-full">
                  {it.rubric}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="text-xs text-gray-500 mb-3">{it.date}</div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#C9A962] transition-colors leading-snug line-clamp-2">
                {it.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                {it.meaning}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 text-[#C9A962] text-sm font-medium">
                Читать
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
