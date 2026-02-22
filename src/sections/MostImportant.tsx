import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const tabs = ['Все', 'Macro-View', 'Future Habitat', 'Business Intelligence', 'Heritage & Code', 'Human Centric'];

const articles = [
  {
    id: 1,
    title: 'Рынок премиальной недвижимости: прогноз на 2025-2026',
    category: 'Macro-View',
    excerpt: 'Анализ трендов, ценовых сегментов и инвестиционной привлекательности рынка элитной недвижимости',
    image: '/images/valmark-hero-1.jpg',
    date: '18 фев 2025',
  },
  {
    id: 2,
    title: 'Smart-резиденции: как технологии меняют жильё премиум-класса',
    category: 'Future Habitat',
    excerpt: 'Интеграция IoT, AI и устойчивых технологий в современные жилые комплексы',
    image: '/images/valmark-hero-2.jpg',
    date: '15 фев 2025',
  },
  {
    id: 3,
    title: 'Мебельный рынок: стратегии роста для производителей',
    category: 'Business Intelligence',
    excerpt: 'Ключевые факторы успеха мебельных фабрик в условиях трансформации рынка',
    image: '/images/valmark-hero-3.jpg',
    date: '12 фев 2025',
  },
  {
    id: 4,
    title: 'Адаптивная реконструкция: новая жизнь исторических зданий',
    category: 'Heritage & Code',
    excerpt: 'Кейсы успешной трансформации промышленной и культурной архитектуры',
    image: '/images/valmark-hero-4.jpg',
    date: '10 фев 2025',
  },
  {
    id: 5,
    title: 'Wellness-ориентированный дизайн: тренды 2025',
    category: 'Human Centric',
    excerpt: 'Как создавать пространства, которые заботятся о здоровье и комфорте жителей',
    image: '/images/valmark-article-5.jpg',
    date: '8 фев 2025',
  },
  {
    id: 6,
    title: 'Инвестиции в девелопмент: ROI и риски',
    category: 'Macro-View',
    excerpt: 'Сравнительный анализ доходности различных сегментов недвижимости',
    image: '/images/valmark-article-6.jpg',
    date: '5 фев 2025',
  },
];

export default function MostImportant() {
  const [activeTab, setActiveTab] = useState('Все');
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

  const filteredArticles = activeTab === 'Все' 
    ? articles 
    : articles.filter(article => article.category === activeTab);

  return (
    <section ref={sectionRef} className="py-16 animate-section bg-[#0A0A0A]">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="featured-title text-3xl md:text-4xl font-bold text-white mb-2">
              Аналитика <span className="text-[#C9A962]">Valmark</span>
            </h2>
            <p className="text-gray-400">Исследования и прогнозы для принятия решений</p>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-[#C9A962] text-[#0A0A0A]'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="relative max-w-[1400px] mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#111111] border border-gray-800 rounded-full flex items-center justify-center hover:border-[#C9A962] hover:bg-[#161616] transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-gray-300" />
        </button>

        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#111111] border border-gray-800 rounded-full flex items-center justify-center hover:border-[#C9A962] hover:bg-[#161616] transition-all"
        >
          <ChevronRight className="w-5 h-5 text-gray-300" />
        </button>

        {/* Cards Container */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-20"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group flex-shrink-0 w-[500px] bg-[#111111] border border-gray-800 rounded-2xl overflow-hidden cursor-pointer hover:border-[#C9A962]/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#C9A962] text-[#0A0A0A] text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-gray-500 mb-3">{article.date}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C9A962] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-[#C9A962] text-sm font-medium group-hover:gap-2 transition-all">
                  <span>Читать</span>
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
