import Header from '../sections/Header';
import Sidebar from '../sections/Sidebar';
import Footer from '../sections/Footer';
import { publications } from '../content/publications';

export default function NavigatorPage() {
  const items = publications.filter((p) => p.type === 'navigator');

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />

      <main className="pt-[120px]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <div className="flex-1">
              <section className="py-10 border-b border-gray-800">
                <h1 className="text-3xl md:text-4xl font-bold text-white">Valmark Navigator</h1>
                <p className="text-gray-400 mt-2 max-w-2xl">
                  Ежемесячный управленческий синтез для собственников и топ-менеджмента.
                  Формат: PDF + краткий смысл.
                </p>
              </section>

              <section className="py-12">
                <div className="space-y-6">
                  {items.map((p) => (
                    <div
                      key={p.slug}
                      className="bg-[#111111] border border-gray-800 rounded-2xl p-6 hover:border-[#C9A962]/30 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#C9A962]/15 text-[#C9A962] border border-[#C9A962]/25">
                          {p.rubric}
                        </span>
                        <span className="text-xs text-gray-500">{p.date}</span>
                      </div>

                      <h3 className="text-white font-bold text-lg leading-snug mt-4">{p.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mt-3">{p.summary}</p>

                      {p.note && (
                        <p className="text-gray-500 text-sm leading-relaxed mt-3">
                          <span className="text-gray-300">Управленческий смысл: </span>
                          {p.note}
                        </p>
                      )}

                      <div className="mt-5 flex items-center gap-3">
                        <a
                          href={p.pdfUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#C9A962] text-[#0A0A0A] font-semibold hover:bg-[#B8984F] transition-colors text-sm"
                        >
                          Открыть PDF
                        </a>
                        <a
                          href="/#subscribe"
                          className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-gray-700 text-gray-200 hover:border-[#C9A962]/40 hover:text-white transition-colors text-sm"
                        >
                          Получить выпуск
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {items.length === 0 && (
                  <div className="text-gray-400 mt-8">
                    Пока нет опубликованных выпусков. Добавьте PDF в public/research и запись в src/content/publications.ts
                  </div>
                )}
              </section>
            </div>

            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
