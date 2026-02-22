import "./App.css";

function App() {
  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">
        <div className="hero-label">Valmark Intelligence Center</div>
        <h1>
          Think Tank для индустрии
          <br /> обустройства пространства
        </h1>
        <p>
          Мы переводим рыночные изменения в давление на управленческие решения:
          маржа, логистика, сырьё, спрос, продукт.
          Не новости. Не мнения. Управленческая аналитика.
        </p>

        <div className="hero-buttons">
          <button className="primary">Получать Navigator</button>
          <button className="secondary">Открыть архив</button>
        </div>
      </section>

      {/* VALUE */}
      <section className="section">
        <h2>Что вы получаете</h2>
        <ul>
          <li>Сценарные коридоры (Base / Stress) и карту рисков</li>
          <li>Экономические последствия для ролей</li>
          <li>2 публикации в неделю по ключевым рубрикам</li>
        </ul>
      </section>

      {/* PRODUCTS */}
      <section className="section">
        <h2>Продукты</h2>
        <div className="grid">
          <div className="card">
            <h3>Value Briefings</h3>
            <p>€120</p>
            <span>Разовые прикладные отчёты под управленческую задачу</span>
          </div>

          <div className="card">
            <h3>Navigator Solo</h3>
            <p>€1.000 / год</p>
            <span>Индивидуальный доступ к базе аналитики</span>
          </div>

          <div className="card">
            <h3>Navigator Team</h3>
            <p>€2.500 / год</p>
            <span>Корпоративный доступ + шаблоны решений</span>
          </div>

          <div className="card">
            <h3>Strategy-in-a-Box</h3>
            <p>€3.000</p>
            <span>Пакет для стратегической сессии компании</span>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="section">
        <h2>Подписка</h2>
        <p>Оставьте email — получите ближайший выпуск Navigator.</p>
        <div className="subscribe">
          <input type="email" placeholder="Email" />
          <button className="primary">Отправить</button>
        </div>
      </section>

      <footer>
        © 2026 Valmark • Intelligence Center
      </footer>

    </div>
  );
}

export default App;
