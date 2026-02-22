export type PublicationType = 'research' | 'navigator';

export type Publication = {
  slug: string;
  type: PublicationType;
  rubric: 'Macro-View' | 'Future Habitat' | 'Business Intelligence' | 'Heritage & Code' | 'Human Centric' | 'Special';
  title: string;
  date: string; // e.g. '2026-02-01'
  summary: string; // 1–2 lines
  note?: string; // optional: management meaning line
  pdfUrl: string; // put PDF into /public/research and reference as '/research/<file>.pdf'
};

/**
 * How to publish new analytics (simple workflow):
 * 1) Put PDF into: public/research/<file>.pdf
 * 2) Add one entry below with pdfUrl: '/research/<file>.pdf'
 * 3) Commit + push -> Vercel deploys.
 */
export const publications: Publication[] = [
  {
    slug: 'navigator-2026-01',
    type: 'navigator',
    rubric: 'Special',
    title: 'Valmark Navigator • Январь 2026: 5 неизбежных решений собственника фабрики',
    date: '2026-01-15',
    summary: 'Сценарный коридор Base/Stress, карта скрытых потерь и взаимосвязь рисков по цепочке.',
    note: 'После прочтения: какие решения становятся неизбежными в горизонте 12 месяцев.',
    pdfUrl: '/research/navigator-2026-01.pdf',
  },
  {
    slug: 'lkm-sanctions-sng',
    type: 'research',
    rubric: 'Business Intelligence',
    title: 'Рынок ЛКМ в СНГ под санкционным давлением: структурный аудит',
    date: '2026-01-20',
    summary: 'Турция/Китай, прокси-логистика, перезапуск цепочек поставок и давление на маржу.',
    note: 'Управленческий смысл: где ломается экономия закупки и растёт стоимость владения.',
    pdfUrl: '/research/lkm-sng-2026.pdf',
  },
];
