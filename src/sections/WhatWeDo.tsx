import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ShieldCheck, FileSearch, UsersRound } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: 'Не новости / не медиа',
    text: 'Мы не пересказываем повестку. Мы фиксируем, где ломается экономика и почему.',
  },
  {
    icon: FileSearch,
    title: 'Не консалтинг',
    text: 'Мы не «делаем вместо вас». Мы строим причинно‑следственные модели давления на решения.',
  },
  {
    icon: UsersRound,
    title: 'Рынок → давление на роли',
    text: 'Собственник, закупки, коммерция, девелопер: что становится неизбежным в горизонте 6–18 месяцев.',
  },
];

export default function WhatWeDo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.wwd-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
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
          Что делает <span className="text-[#C9A962]">Valmark</span>
        </h2>
        <p className="text-gray-400 mt-2 max-w-2xl">
          Интеллектуальный центр для индустрии обустройства пространства (СНГ и Европа).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <div
              key={it.title}
              className="wwd-card bg-[#111111] border border-gray-800 rounded-2xl p-6 hover:border-[#C9A962]/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C9A962]/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-[#C9A962]" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{it.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{it.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
