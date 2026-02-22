import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CalendarDays, Clock3 } from 'lucide-react';

const upcoming = [
  { date: 'Вт', topic: 'Рынок ЛКМ: комплаенс и скрытые потери в дистрибуции' },
  { date: 'Чт', topic: '3D‑печать: где технология снижает издержки, а где создаёт риск' },
  { date: 'Вт', topic: 'Психология потребителя 2026: покупка “состояний” вместо вещей' },
  { date: 'Чт', topic: 'Bauhaus как актив: функционализм в эпохи турбулентности' },
];

export default function CadenceCalendar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cad-row',
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
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
          Cadence / <span className="text-[#C9A962]">Calendar</span>
        </h2>
        <p className="text-gray-400 mt-2 max-w-2xl">
          Ритм публикаций: <span className="text-white font-medium">2 раза в неделю</span> (вторник / четверг).
          Ближайшие темы — ручной календарь, обновляется ежемесячно.
        </p>
      </div>

      <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C9A962]/10 flex items-center justify-center">
              <CalendarDays className="w-5 h-5 text-[#C9A962]" />
            </div>
            <div className="text-white font-semibold">Ближайшие публикации</div>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Clock3 className="w-4 h-4" />
            публикации утром (CET)
          </div>
        </div>

        <div className="divide-y divide-gray-800">
          {upcoming.map((u, idx) => (
            <div key={idx} className="cad-row py-4 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] border border-gray-800 flex items-center justify-center text-[#C9A962] font-semibold">
                {u.date}
              </div>
              <div className="text-gray-200 leading-relaxed">{u.topic}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
