import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Layers, FileText, Users, PackageOpen } from 'lucide-react';

const products = [
  {
    title: 'Briefings Light',
    price: '€120',
    desc: 'Короткий прикладной разбор под один управленческий вопрос.',
    icon: FileText,
    cta: 'Запросить',
  },
  {
    title: 'Briefings',
    price: 'по запросу',
    desc: 'Глубокий отчёт: гипотезы → модель → сценарии (Base/Stress) → выводы для ролей.',
    icon: Layers,
    cta: 'Обсудить',
  },
  {
    title: 'Valmark Navigator',
    price: 'Solo / Team',
    desc: 'Ежемесячный синтез: 5 неизбежных решений и карта скрытых потерь.',
    icon: Users,
    cta: 'Получить выпуск',
  },
  {
    title: 'Strategy-in-a-Box',
    price: '€3.000',
    desc: 'Пакет для стратегической сессии: материалы, рамки решений, риск‑карты.',
    icon: PackageOpen,
    cta: 'Запросить',
  },
];

export default function ProductsAccess() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.product-card',
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.10,
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
          Products / <span className="text-[#C9A962]">Access</span>
        </h2>
        <p className="text-gray-400 mt-2 max-w-2xl">
          Форматы доступа к аналитике: от точечного брифинга до системы регулярных выпусков.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="product-card bg-[#111111] border border-gray-800 rounded-2xl p-6 hover:border-[#C9A962]/30 transition-all"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A962]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#C9A962]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg leading-tight">{p.title}</h3>
                    <div className="text-[#C9A962] text-sm font-medium">{p.price}</div>
                  </div>
                </div>
                <button className="hidden sm:inline-flex bg-[#0A0A0A] border border-gray-800 hover:border-[#C9A962]/40 text-gray-200 px-4 py-2 rounded-lg text-sm transition-colors">
                  {p.cta}
                </button>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>

              <button className="sm:hidden w-full bg-[#0A0A0A] border border-gray-800 hover:border-[#C9A962]/40 text-gray-200 px-4 py-3 rounded-lg text-sm transition-colors">
                {p.cta}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
