import Header from '../sections/Header';
import Sidebar from '../sections/Sidebar';
import Footer from '../sections/Footer';
import LatestResearch from '../sections/LatestResearch';

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main className="pt-[120px]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Архив исследований
            </h1>
            <p className="text-gray-400 mt-3 max-w-3xl">
              Все публикации Valmark по рубрикам: Macro-View, Future Habitat, Business Intelligence,
              Heritage &amp; Code, Human Centric. Формат — управленческий смысл и экономические последствия.
            </p>
          </div>

          <div className="flex gap-8">
            <div className="flex-1">
              <section id="archive">
                <LatestResearch />
              </section>

              <section className="py-10 border-t border-gray-800">
                <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">
                  <h2 className="text-white font-bold text-xl mb-2">Далее</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Здесь можно подключить реальный источник данных (Markdown/MDX, CMS, Notion-export или статический JSON),
                    добавить фильтры по рубрикам и пагинацию. Сейчас блок — структурная “заглушка”, чтобы роутинг и UI работали.
                  </p>
                </div>
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
