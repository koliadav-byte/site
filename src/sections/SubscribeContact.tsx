import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Mail, Send, MessageCircle } from 'lucide-react';

export default function SubscribeContact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.sub-card',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
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
      <div className="sub-card bg-gradient-to-br from-[#C9A962]/15 to-[#C9A962]/5 border border-[#C9A962]/25 rounded-2xl p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Subscribe / <span className="text-[#C9A962]">Contact</span>
            </h2>
            <p className="text-gray-300 max-w-2xl">
              Получайте Navigator и анонсы публикаций. Без “маркетинговой ленты” — только управленческий смысл.
            </p>
          </div>

          <div className="w-full lg:w-[420px] space-y-3">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-[#0A0A0A] border border-gray-800 rounded-lg pl-9 pr-3 py-3 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-[#C9A962]/60"
                />
              </div>
              <button className="bg-[#C9A962] hover:bg-[#B8984F] text-[#0A0A0A] font-semibold px-5 rounded-lg transition-colors inline-flex items-center gap-2">
                <Send className="w-4 h-4" />
                Отправить
              </button>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <a
                href="/#subscribe"
                className="inline-flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#C9A962]" />
                Telegram
              </a>
              <span className="text-gray-500">•</span>
              <a href="mailto:info@valmark.pro" className="text-gray-200 hover:text-white transition-colors">
                info@valmark.pro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
