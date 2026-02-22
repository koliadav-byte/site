import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const issues = [
  {
    id: 1,
    title: 'Navigator • Январь 2026: 5 неизбежных решений собственника фабрики',
    tag: 'Navigator',
    excerpt: 'Сценарный коридор Base/Stress, карта скрытых потерь и взаимосвязь рисков по цепочке.',
    image: '/images/valmark-hero-3.jpg',
    date: 'Январь 2026',
  },
  {
    id: 2,
    title: 'Navigator • Февраль 2026: Спрос, маржа и оборотный капитал в премиум‑сегменте',
    tag: 'Navigator',
    excerpt: 'Где “проседает” доход и какие решения становятся неизбежными в горизонте 6–18 месяцев.',
    image: '/images/valmark-hero-1.jpg',
    date: 'Февраль 2026',
  },
  {
    id: 3,
    title: 'Navigator • Special: ЛКМ и санкции — структурный аудит комплаенса',
    tag: 'Navigator',
    excerpt: 'Как меняется экономика дистрибуции (Китай/Турция/прокси СНГ) и где возникают скрытые потери.',
    image: '/images/valmark-hero-2.jpg',
    date: 'Февраль 2026',
  },
  {
    id: 4,
    title: 'Navigator • Special: Серийное производство vs bespoke (2026–2028)',
    tag: 'Navigator',
    excerpt: 'Где формируется прибыль, где растут издержки сервиса и почему меняется модель мощности.',
    image: '/images/valmark-hero-4.jpg',
    date: 'Январь 2026',
  },
];

export default function MostImportant() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.featured-title',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -600 : 600;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="py-16 animate-section bg-[#0A0A0A]">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="featured-title text-3xl md:text-4xl font-bold text-white mb-2">
              Valmark <span className="text-[#C9A962]">Navigator</span>
            </h2>
            <p className="text-gray-400">
              Ежемесячный управленческий синтез для собственников и топ‑менеджмента.
            </p>
          </div>

          <a
            href="/#subscribe"
            className="inline-flex items-center gap-2 bg-[#111111] border border-gray-800 hover:border-[#C9A962]/40 text-gray-200 px-5 py-3 rounded-lg transition-colors text-sm font-medium"
          >
            Получить выпуск
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Slider */}
      <div className="relative max-w-[1400px] mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#111111] border border-gray-800 rounded-full flex items-center justify-center hover:border-[#C9A962] hover:bg-[#161616] transition-all"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-gray-300" />
        </button>

        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#111111] border border-gray-800 rounded-full flex items-center justify-center hover:border-[#C9A962] hover:bg-[#161616] transition-all"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-gray-300" />
        </button>

        {/* Cards Container */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-20"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {issues.map((issue) => (
            <article
              key={issue.id}
              className="group flex-shrink-0 w-[500px] bg-[#111111] border border-gray-800 rounded-2xl overflow-hidden cursor-pointer hover:border-[#C9A962]/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={issue.image}
                  alt={issue.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#C9A962] text-[#0A0A0A] text-xs font-semibold rounded-full">
                    {issue.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-gray-500 mb-3">{issue.date}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C9A962] transition-colors line-clamp-2">
                  {issue.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                  {issue.excerpt}
                </p>
                <div className="flex items-center text-[#C9A962] text-sm font-medium group-hover:gap-2 transition-all">
                  <span>Открыть</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
