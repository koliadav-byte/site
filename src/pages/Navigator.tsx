import Header from '../sections/Header';
import Sidebar from '../sections/Sidebar';
import Footer from '../sections/Footer';
import MostImportant from '../sections/MostImportant';

export default function NavigatorPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main className="pt-[120px]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Valmark Navigator
            </h1>
            <p className="text-gray-400 mt-3 max-w-3xl">
              Ежемесячный управленческий синтез для собственников и топ-менеджмента.
              Сценарный коридор (Base/Stress), Risk Map и Hidden Loss Map — в логике решений, а не “обзора рынка”.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/#subscribe"
                className="inline-flex items-center gap-2 bg-[#C9A962] hover:bg-[#B8984F] text-[#0A0A0A] font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Получать Navigator
              </a>
              <a
                href="/archive"
                className="inline-flex items-center gap-2 bg-[#111111] border border-gray-800 hover:border-[#C9A962]/40 text-gray-200 px-6 py-3 rounded-lg transition-colors"
              >
                Смотреть архив
              </a>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex-1">
              {/* Reuse the “Navigator center” slider as a preview of issues */}
              <MostImportant />

              <section className="py-12 border-t border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">
                    <h2 className="text-white font-bold text-lg mb-2">Что внутри</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      5 неизбежных решений, сценарные диапазоны эффектов, карта взаимосвязанных рисков и “скрытые потери”
                      по ролям: собственник, закупки, коммерция, производство.
                    </p>
                  </div>
                  <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">
                    <h2 className="text-white font-bold text-lg mb-2">Кому</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Собственникам и директорам, которые управляют маржой и оборотным капиталом в мебельной промышленности,
                      девелопменте и индустрии материалов.
                    </p>
                  </div>
                  <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">
                    <h2 className="text-white font-bold text-lg mb-2">Доступ</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Navigator (Solo/Team) + Briefings. Подключим оплату/доступ позже — сейчас делаем структуру и маршрутизацию.
                    </p>
                  </div>
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
