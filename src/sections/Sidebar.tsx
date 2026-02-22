import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Mail, MessageCircle, ArrowUpRight, FileText, Users, PackageOpen } from 'lucide-react';

const highlights = [
  { icon: Users, title: 'Valmark Navigator', note: 'Ежемесячный синтез для собственников и топ‑менеджмента' },
  { icon: FileText, title: 'Briefings', note: 'Точечные разборы под управленческий вопрос' },
  { icon: PackageOpen, title: 'Strategy-in-a-Box', note: 'Пакет для стратегической сессии компании' },
];

const recent = [
  { id: 1, title: 'Navigator • Январь 2026: 5 неизбежных решений', date: 'Январь 2026' },
  { id: 2, title: 'ЛКМ в СНГ: структурный аудит санкционного давления', date: 'Январь 2026' },
  { id: 3, title: '3D‑печать в интерьере: аддитивные технологии', date: 'Февраль 2026' },
];

export default function Sidebar() {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sidebarRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sidebarRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sidebarRef);

    return () => ctx.revert();
  }, []);

  return (
    <aside ref={sidebarRef} className="hidden lg:block w-[320px] flex-shrink-0">
      <div className="sticky top-[140px] space-y-6">
        {/* Subscribe */}
        <div className="bg-gradient-to-br from-[#C9A962]/20 to-[#C9A962]/5 border border-[#C9A962]/30 rounded-2xl p-6">
          <h4 className="font-bold text-white text-lg mb-2">Получать Navigator</h4>
          <p className="text-gray-300 text-sm mb-5">
            Анонсы и выпуски. Без “маркетинговой ленты” — только управленческий смысл.
          </p>

          <div className="space-y-3">
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#0A0A0A] border border-gray-800 rounded-lg pl-9 pr-3 py-3 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-[#C9A962]/60"
              />
            </div>

            <button className="w-full bg-[#C9A962] hover:bg-[#B8984F] text-[#0A0A0A] font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
              Отправить
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 text-sm">
              <a href="/#subscribe" className="inline-flex items-center gap-2 text-gray-200 hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4 text-[#C9A962]" />
                Telegram
              </a>
              <span className="text-gray-600">•</span>
              <a href="mailto:info@valmark.pro" className="text-gray-200 hover:text-white transition-colors">
                info@valmark.pro
              </a>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">
          <h4 className="font-bold text-white text-lg mb-4">Access</h4>
          <div className="space-y-4">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.title} className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A962]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#C9A962]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{h.title}</div>
                    <div className="text-gray-400 text-xs leading-relaxed">{h.note}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent */}
        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">
          <h4 className="font-bold text-white text-lg mb-4">Последние материалы</h4>
          <div className="space-y-4">
            {recent.map((r) => (
              <div key={r.id} className="group cursor-pointer">
                <div className="text-white text-sm font-semibold group-hover:text-[#C9A962] transition-colors">
                  {r.title}
                </div>
                <div className="text-gray-500 text-xs mt-1">{r.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
