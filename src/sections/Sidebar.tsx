import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const recentReports = [
  {
    id: 1,
    title: 'Годовой обзор рынка премиальной недвижимости 2024',
    date: 'Январь 2025',
    type: 'Отчёт',
  },
  {
    id: 2,
    title: 'Тренды мебельного рынка: прогноз до 2027',
    date: 'Декабрь 2024',
    type: 'Исследование',
  },
  {
    id: 3,
    title: 'Smart-технологии в жилых комплексах',
    date: 'Ноябрь 2024',
    type: 'Аналитика',
  },
];

const services = [
  'Стратегический консалтинг',
  'Рыночные исследования',
  'Дью-дилиженс',
  'Брендинг и позиционирование',
  'Разработка концепций',
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
    <aside
      ref={sidebarRef}
      className="hidden lg:block w-[320px] flex-shrink-0"
    >
      <div className="sticky top-[140px] space-y-6">
        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-[#C9A962]/20 to-[#C9A962]/5 border border-[#C9A962]/30 rounded-2xl p-6">
          <h4 className="font-bold text-white text-lg mb-2">Обсудить проект</h4>
          <p className="text-gray-400 text-sm mb-6">
            Получите бесплатную консультацию от наших экспертов
          </p>
          <button className="w-full bg-[#C9A962] hover:bg-[#B8984F] text-[#0A0A0A] font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
            Оставить заявку
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Recent Reports */}
        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">
          <h4 className="font-bold text-white mb-4">Свежие отчёты</h4>
          <div className="space-y-4">
            {recentReports.map((report) => (
              <a
                key={report.id}
                href="#"
                className="block p-3 bg-[#0A0A0A] rounded-lg hover:bg-[#161616] transition-colors group"
              >
                <span className="text-xs text-[#C9A962] mb-1 block">{report.type}</span>
                <h5 className="text-sm text-white group-hover:text-[#C9A962] transition-colors line-clamp-2">
                  {report.title}
                </h5>
                <span className="text-xs text-gray-500 mt-2 block">{report.date}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">
          <h4 className="font-bold text-white mb-4">Услуги</h4>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-[#C9A962] transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-[#C9A962] rounded-full" />
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">
          <h4 className="font-bold text-white mb-4">Контакты</h4>
          <div className="space-y-4">
            <a href="tel:+74951234567" className="flex items-center gap-3 text-gray-400 hover:text-[#C9A962] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+7 (495) 123-45-67</span>
            </a>
            <a href="mailto:info@valmark.ru" className="flex items-center gap-3 text-gray-400 hover:text-[#C9A962] transition-colors">
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@valmark.ru</span>
            </a>
            <div className="flex items-start gap-3 text-gray-400">
              <MapPin className="w-4 h-4 mt-0.5" />
              <span className="text-sm">Москва, Пресненская наб., 12</span>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">
          <h4 className="font-bold text-white mb-2">Рассылка</h4>
          <p className="text-gray-400 text-sm mb-4">
            Еженедельная аналитика рынка
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-[#0A0A0A] border border-gray-800 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-[#C9A962] focus:outline-none transition-colors"
            />
            <button className="bg-[#C9A962] hover:bg-[#B8984F] text-[#0A0A0A] px-4 py-2 rounded-lg transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
