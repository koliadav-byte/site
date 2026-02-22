import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, TrendingUp, Building2, Users, Landmark, Heart } from 'lucide-react';

const categories = [
  {
    id: 'macro',
    title: 'Macro-View',
    subtitle: 'Макроанализ рынков',
    description: 'Глубокий анализ рыночных трендов, экономических индикаторов и инвестиционных возможностей',
    icon: TrendingUp,
    articles: [
      {
        id: 1,
        title: 'Динамика цен на премиальную недвижимость: Q4 2024',
        excerpt: 'Анализ изменений стоимости элитного жилья в ключевых регионах',
        image: '/images/valmark-article-1.jpg',
        featured: true,
      },
      {
        id: 2,
        title: 'Инфляция и строительные материалы: прогноз на год',
        excerpt: 'Как изменятся цены на ключевые материалы',
        image: '/images/valmark-article-2.jpg',
        featured: false,
      },
      {
        id: 3,
        title: 'Ипотечный рынок: ставки и спрос',
        excerpt: 'Влияние ключевой ставки на покупательскую активность',
        image: '/images/valmark-article-3.jpg',
        featured: false,
      },
    ],
  },
  {
    id: 'habitat',
    title: 'Future Habitat',
    subtitle: 'Недвижимость будущего',
    description: 'Инновационные подходы к проектированию и строительству жилых пространств',
    icon: Building2,
    articles: [
      {
        id: 4,
        title: 'Smart City: цифровая инфраструктура жилых комплексов',
        excerpt: 'Как технологии трансформируют городскую среду',
        image: '/images/valmark-hero-2.jpg',
        featured: true,
      },
      {
        id: 5,
        title: 'Зелёное строительство: стандарты и сертификация',
        excerpt: 'ESG-требования к современной недвижимости',
        image: '/images/valmark-article-5.jpg',
        featured: false,
      },
      {
        id: 6,
        title: 'Модульное строительство: преимущества и риски',
        excerpt: 'Анализ технологии prefab в премиум-сегменте',
        image: '/images/valmark-article-6.jpg',
        featured: false,
      },
    ],
  },
  {
    id: 'business',
    title: 'Business Intelligence',
    subtitle: 'Бизнес-аналитика',
    description: 'Стратегические инсайты для собственников бизнеса и топ-менеджмента',
    icon: Users,
    articles: [
      {
        id: 7,
        title: 'Мебельные фабрики: пути оптимизации производства',
        excerpt: 'Как снизить издержки без потери качества',
        image: '/images/valmark-article-2.jpg',
        featured: true,
      },
      {
        id: 8,
        title: 'Ритейл интерьеров: новые форматы магазинов',
        excerpt: 'Омниканальность и клиентский опыт',
        image: '/images/valmark-hero-3.jpg',
        featured: false,
      },
      {
        id: 9,
        title: 'B2B продажи: стратегии работы с девелоперами',
        excerpt: 'Построение долгосрочных партнёрств',
        image: '/images/valmark-hero-4.jpg',
        featured: false,
      },
    ],
  },
  {
    id: 'heritage',
    title: 'Heritage & Code',
    subtitle: 'Наследие и инновации',
    description: 'Баланс между сохранением исторической ценности и современными требованиями',
    icon: Landmark,
    articles: [
      {
        id: 10,
        title: 'Адаптивная реконструкция: успешные кейсы',
        excerpt: 'Как исторические здания обретают новую жизнь',
        image: '/images/valmark-article-4.jpg',
        featured: true,
      },
      {
        id: 11,
        title: 'Лофты в бывших промзонах: тренд или новая норма',
        excerpt: 'Анализ спроса на industrial-формат',
        image: '/images/valmark-hero-1.jpg',
        featured: false,
      },
      {
        id: 12,
        title: 'Культурный код в архитектуре',
        excerpt: 'Интеграция локальной идентичности в проекты',
        image: '/images/valmark-article-3.jpg',
        featured: false,
      },
    ],
  },
  {
    id: 'human',
    title: 'Human Centric',
    subtitle: 'Человеко-ориентированность',
    description: 'Дизайн и планировка, ориентированные на потребности и комфорт человека',
    icon: Heart,
    articles: [
      {
        id: 13,
        title: 'Biophilic design: природа в интерьере',
        excerpt: 'Научное обоснование и практическое применение',
        image: '/images/valmark-article-5.jpg',
        featured: true,
      },
      {
        id: 14,
        title: 'Эргономика жилых пространств: исследование',
        excerpt: 'Как планировка влияет на качество жизни',
        image: '/images/valmark-hero-3.jpg',
        featured: false,
      },
      {
        id: 15,
        title: 'Wellness-инфраструктура в ЖК',
        excerpt: 'SPA, фитнес, зоны релаксации как конкурентное преимущество',
        image: '/images/valmark-article-6.jpg',
        featured: false,
      },
    ],
  },
];

export default function CategoryGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.category-block',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
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

  return (
    <div ref={sectionRef} className="py-16 bg-[#0A0A0A]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Направления <span className="text-[#C9A962]">исследований</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Пять ключевых областей аналитики, охватывающих все аспекты рынка недвижимости и интерьеров
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-20">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <section key={category.id} className="category-block">
                {/* Category Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#C9A962]/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#C9A962]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                      <p className="text-[#C9A962] text-sm">{category.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm max-w-md">{category.description}</p>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.articles.map((article) => (
                    <article
                      key={article.id}
                      className={`group cursor-pointer ${article.featured ? 'md:col-span-2' : ''}`}
                    >
                      <div
                        className={`relative overflow-hidden rounded-xl mb-4 ${
                          article.featured ? 'h-64' : 'h-48'
                        }`}
                      >
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
                      </div>
                      <h4 className="font-semibold text-white group-hover:text-[#C9A962] transition-colors leading-snug mb-2">
                        {article.title}
                      </h4>
                      <p className="text-gray-500 text-sm line-clamp-2">{article.excerpt}</p>
                    </article>
                  ))}
                </div>

                {/* View All Link */}
                <div className="mt-6 text-right">
                  <a
                    href="/#rubrics"
                    className="inline-flex items-center gap-2 text-[#C9A962] hover:text-[#B8984F] transition-colors text-sm font-medium"
                  >
                    Все материалы раздела
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
