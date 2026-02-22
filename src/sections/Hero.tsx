import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, TrendingUp, Building2, Users, Landmark, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const researchAreas = [
  { icon: TrendingUp, name: 'Macro-View', desc: 'Макроанализ рынков' },
  { icon: Building2, name: 'Future Habitat', desc: 'Недвижимость будущего' },
  { icon: Users, name: 'Business Intelligence', desc: 'Бизнес-аналитика' },
  { icon: Landmark, name: 'Heritage & Code', desc: 'Наследие и инновации' },
  { icon: Heart, name: 'Human Centric', desc: 'Человеко-ориентированность' },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Title animation
      tl.fromTo(
        '.hero-title',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        }
      );

      // Subtitle animation
      tl.fromTo(
        '.hero-subtitle',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      );

      // Tagline animation
      tl.fromTo(
        '.hero-tagline',
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      );

      // CTA animation
      tl.fromTo(
        '.hero-cta',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.3'
      );

      // Research areas animation
      tl.fromTo(
        '.research-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
        },
        '-=0.3'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#1a1a2e]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#C9A962]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#C9A962]/3 rounded-full blur-3xl" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <div className="hero-tagline inline-flex items-center gap-2 px-4 py-2 bg-[#C9A962]/10 border border-[#C9A962]/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-[#C9A962] rounded-full animate-pulse" />
            <span className="text-sm text-[#C9A962]">Think Tank</span>
          </div>

          <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            <span className="text-[#C9A962]">VALMARK</span>
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-4">
            Think Tank для индустрии обустройства пространства (СНГ и Европа)
          </p>

          <p className="hero-tagline text-lg text-[#C9A962] italic mb-10">
            «Рынок → давление на решения собственника»
          </p>

                    <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="bg-[#C9A962] hover:bg-[#B8984F] text-[#0A0A0A] px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A962]/20 hover:scale-[1.02]"
            >
              <a href="/navigator">
                Получать Navigator
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-6 text-base rounded-lg transition-all duration-300"
            >
              <a href="/archive">Открыть архив</a>
            </Button>
          </div>
        </div>

        {/* Research Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {researchAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <a
                key={index}
                href="/#rubrics"
                className="research-card group p-6 bg-[#111111] border border-gray-800 rounded-xl hover:border-[#C9A962]/50 hover:bg-[#161616] transition-all duration-300 cursor-pointer block"
              >
                <div className="w-12 h-12 bg-[#C9A962]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C9A962]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#C9A962]" />
                </div>
                <h3 className="text-white font-semibold mb-1 group-hover:text-[#C9A962] transition-colors">
                  {area.name}
                </h3>
                <p className="text-sm text-gray-500">{area.desc}</p>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
