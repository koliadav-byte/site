import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Linkedin, Send } from 'lucide-react';

const footerLinks = {
  research: {
    title: 'Исследования',
    links: [
      'Macro-View',
      'Future Habitat',
      'Business Intelligence',
      'Heritage & Code',
      'Human Centric',
    ],
  },
  services: {
    title: 'Услуги',
    links: [
      'Стратегический консалтинг',
      'Рыночные исследования',
      'Дью-дилиженс',
      'Брендинг',
      'Разработка концепций',
    ],
  },
  company: {
    title: 'Компания',
    links: [
      'О нас',
      'Команда',
      'Карьера',
      'Мероприятия',
      'Контакты',
    ],
  },
  resources: {
    title: 'Ресурсы',
    links: [
      'Отчёты',
      'Презентации',
      'Методология',
      'Пресса о нас',
      'Блог',
    ],
  },
};

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-column',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#0A0A0A] border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          {/* Logo & Description */}
          <div className="lg:max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C9A962] to-[#8B7355] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-wide">VALMARK</span>
                <span className="text-xs text-[#C9A962] tracking-[0.2em] uppercase">Think Tank</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Аналитический центр рынка недвижимости и интерьеров. 
              Мы моделируем будущее и объясняем, как на этом заработать.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="/#subscribe"
                className="w-10 h-10 bg-[#111111] border border-gray-800 rounded-lg flex items-center justify-center hover:border-[#C9A962] hover:bg-[#161616] transition-all"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#C9A962]" />
              </a>
              <a
                href="/#subscribe"
                className="w-10 h-10 bg-[#111111] border border-gray-800 rounded-lg flex items-center justify-center hover:border-[#C9A962] hover:bg-[#161616] transition-all"
              >
                <Send className="w-5 h-5 text-gray-400 hover:text-[#C9A962]" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title} className="footer-column">
                <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="/#subscribe"
                        className="text-gray-400 hover:text-[#C9A962] transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-500">
              <a href="/#subscribe" className="hover:text-[#C9A962] transition-colors">
                Политика конфиденциальности
              </a>
              <a href="/#subscribe" className="hover:text-[#C9A962] transition-colors">
                Пользовательское соглашение
              </a>
              <a href="/#subscribe" className="hover:text-[#C9A962] transition-colors">
                Карта сайта
              </a>
            </div>
            <div className="text-sm text-gray-600">
              © 2025 Valmark. Все права защищены.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
