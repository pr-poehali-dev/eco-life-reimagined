import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "ideas", label: "Идеи" },
  { id: "tips", label: "Советы" },
  { id: "gallery", label: "Галерея" },
  { id: "community", label: "Сообщество" },
  { id: "about", label: "О проекте" },
  { id: "contact", label: "Контакты" },
];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Скамья из поддонов",
    image: "https://cdn.poehali.dev/projects/fd1e510d-b558-48fa-bc68-9f87a786930d/files/60e6d46e-8aad-4dc9-b0e5-bb3e18877a75.jpg",
    material: "дерево",
    difficulty: "средне",
    type: "мебель",
    author: "Мария К.",
    likes: 247,
    badge: "ТОП",
    badgeColor: "bg-amber-400 text-amber-900",
  },
  {
    id: 2,
    title: "Вазы из стеклотары",
    image: "https://cdn.poehali.dev/projects/fd1e510d-b558-48fa-bc68-9f87a786930d/files/1d7a645d-dcff-4b01-a86a-e9bf8424d4bf.jpg",
    material: "стекло",
    difficulty: "легко",
    type: "декор",
    author: "Ольга П.",
    likes: 183,
    badge: "Новинка",
    badgeColor: "bg-green-400 text-green-900",
  },
  {
    id: 3,
    title: "Сумка из джинсов",
    image: "https://cdn.poehali.dev/projects/fd1e510d-b558-48fa-bc68-9f87a786930d/files/b24fc233-7a7e-4816-8553-be626ba359a7.jpg",
    material: "ткань",
    difficulty: "легко",
    type: "мода",
    author: "Анна С.",
    likes: 312,
    badge: "Популярное",
    badgeColor: "bg-orange-400 text-orange-900",
  },
  {
    id: 4,
    title: "Полки из ящиков",
    image: "https://cdn.poehali.dev/projects/fd1e510d-b558-48fa-bc68-9f87a786930d/files/608719c0-4814-4fdc-aadc-c236b3902416.jpg",
    material: "дерево",
    difficulty: "средне",
    type: "мебель",
    author: "Дмитрий В.",
    likes: 156,
    badge: null,
    badgeColor: "",
  },
  {
    id: 5,
    title: "Мастерская апсайклинга",
    image: "https://cdn.poehali.dev/projects/fd1e510d-b558-48fa-bc68-9f87a786930d/files/19454e53-a6f1-49cb-a394-e46666661945.jpg",
    material: "разное",
    difficulty: "сложно",
    type: "мастер-класс",
    author: "Eco Studio",
    likes: 421,
    badge: "Мастер",
    badgeColor: "bg-purple-400 text-purple-900",
  },
  {
    id: 6,
    title: "Кашпо из консервных банок",
    image: "https://cdn.poehali.dev/projects/fd1e510d-b558-48fa-bc68-9f87a786930d/files/de4b3841-17c1-40f8-84b5-0390b1a04b4e.jpg",
    material: "металл",
    difficulty: "легко",
    type: "сад",
    author: "Светлана М.",
    likes: 198,
    badge: "Новинка",
    badgeColor: "bg-green-400 text-green-900",
  },
];

const IDEAS = [
  { icon: "🪵", title: "Дерево и поддоны", desc: "Мебель, полки, рамки, клумбы", count: "143 идеи" },
  { icon: "👕", title: "Одежда и ткань", desc: "Сумки, аксессуары, подушки, ковры", count: "218 идей" },
  { icon: "🍶", title: "Стекло и тара", desc: "Вазы, светильники, органайзеры", count: "97 идей" },
  { icon: "🥫", title: "Металл и банки", desc: "Кашпо, светильники, органайзеры", count: "76 идей" },
  { icon: "📦", title: "Картон и бумага", desc: "Коробки, рамки, игрушки, поделки", count: "134 идеи" },
  { icon: "💻", title: "Электроника", desc: "Арт-объекты, лампы, декор", count: "52 идеи" },
];

const TIPS = [
  {
    number: "01",
    title: "Оцени потенциал",
    text: "Прежде чем выбросить — осмотри вещь. Трещина на кружке? Цветочный горшок. Старый ящик? Полка.",
    color: "bg-amber-50 border-amber-200",
    accent: "text-amber-500",
  },
  {
    number: "02",
    title: "Нужны только базовые инструменты",
    text: "Клей, краска, наждачка и фантазия. 80% проектов не требуют специального оборудования.",
    color: "bg-green-50 border-green-200",
    accent: "text-green-600",
  },
  {
    number: "03",
    title: "Начни с малого",
    text: "Первый проект — стеклянная банка или жестяная банка из-под кофе. Час работы — красивый результат.",
    color: "bg-orange-50 border-orange-200",
    accent: "text-orange-500",
  },
  {
    number: "04",
    title: "Делись и вдохновляй",
    text: "Публикуй результат в нашем сообществе. Каждая идея может вдохновить сотни людей на переработку.",
    color: "bg-purple-50 border-purple-200",
    accent: "text-purple-500",
  },
];

const COMMUNITY_POSTS = [
  { name: "Мария К.", avatar: "МК", text: "Сделала скамью из старых поддонов — соседи в восторге! Потратила 2 вечера и 300 рублей на краску.", time: "2 часа назад", likes: 34, color: "bg-amber-400" },
  { name: "Дмитрий В.", avatar: "ДВ", text: "Собрал целую мастерскую для апсайклинга. Делюсь списком инструментов и советами для начинающих.", time: "вчера", likes: 67, color: "bg-green-500" },
  { name: "Анна С.", avatar: "АС", text: "Переработала 5 пар старых джинсов в сумки и продала на ярмарке. Экология + заработок!", time: "3 дня назад", likes: 89, color: "bg-orange-400" },
];

const STATS = [
  { value: "12 000+", label: "участников" },
  { value: "720+", label: "проектов" },
  { value: "50 т", label: "сохранено от мусора" },
  { value: "98%", label: "довольны результатом" },
];

const MATERIAL_FILTERS = ["все", "дерево", "стекло", "ткань", "металл", "разное"];
const DIFFICULTY_FILTERS = ["любая", "легко", "средне", "сложно"];
const TYPE_FILTERS = ["все", "мебель", "декор", "мода", "сад", "мастер-класс"];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [materialFilter, setMaterialFilter] = useState("все");
  const [difficultyFilter, setDifficultyFilter] = useState("любая");
  const [typeFilter, setTypeFilter] = useState("все");
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLike = (id: number) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredGallery = GALLERY_ITEMS.filter((item) => {
    const matOk = materialFilter === "все" || item.material === materialFilter;
    const diffOk = difficultyFilter === "любая" || item.difficulty === difficultyFilter;
    const typeOk = typeFilter === "все" || item.type === typeFilter;
    return matOk && diffOk && typeOk;
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--eco-cream)", fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-lg font-black shadow-md eco-gradient">Э</div>
              <span className="font-black text-xl" style={{ fontFamily: "Montserrat, sans-serif", color: "var(--eco-dark)" }}>
                Эко<span style={{ color: "var(--eco-green)" }}>Жизнь</span>
              </span>
            </button>

            <div className="hidden md:flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`nav-link text-sm font-medium transition-colors ${activeSection === item.id ? "active text-green-700" : "text-gray-600 hover:text-green-700"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollTo("community")}
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all hover:scale-105 eco-gradient"
              >
                <Icon name="Sprout" size={16} />
                Вступить
              </button>
              <button className="md:hidden p-2 rounded-lg hover:bg-green-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-green-100 px-4 py-3 flex flex-col gap-2 animate-fade-in">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left py-2 px-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden min-h-[92vh] flex items-center">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1a2e0e 0%, #2d5016 40%, #1e3a10 70%, #0f1f08 100%)" }} />
        <div className="hero-blob w-96 h-96 bg-amber-400 top-10 right-10" />
        <div className="hero-blob w-80 h-80 bg-green-400 bottom-20 left-20" style={{ animationDelay: "3s" }} />
        <div className="hero-blob w-64 h-64 bg-orange-400 top-40 right-1/3" style={{ animationDelay: "5s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Экологичный образ жизни
            </div>
            <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-fade-up-delay-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Дай вещам<br />
              <span style={{ background: "linear-gradient(135deg, #a3d65c, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                вторую жизнь
              </span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-10 max-w-lg animate-fade-up-delay-2">
              Сотни идей как превратить старые вещи в стильные новые. Фото, инструкции, вдохновение — всё здесь.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <button
                onClick={() => scrollTo("gallery")}
                className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white shadow-2xl transition-all hover:scale-105 hover:-translate-y-1"
                style={{ background: "linear-gradient(135deg, #f59e0b, #ea580c)" }}
              >
                <Icon name="Images" size={20} />
                Смотреть галерею
              </button>
              <button
                onClick={() => scrollTo("ideas")}
                className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white/90 bg-white/10 border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
              >
                <Icon name="Lightbulb" size={20} />
                Идеи
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14 pt-10 border-t border-white/10">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-black text-white mb-1" style={{ fontFamily: "Montserrat" }}>{stat.value}</div>
                  <div className="text-white/50 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48 shadow-2xl card-hover" style={{ marginTop: "2rem" }}>
                  <img src={GALLERY_ITEMS[0].image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden h-36 shadow-2xl card-hover">
                  <img src={GALLERY_ITEMS[2].image} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-36 shadow-2xl card-hover">
                  <img src={GALLERY_ITEMS[1].image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden h-48 shadow-2xl card-hover">
                  <img src={GALLERY_ITEMS[5].image} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 border border-green-100">
              <div className="w-10 h-10 rounded-xl eco-gradient flex items-center justify-center">
                <Icon name="Leaf" size={20} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-sm text-gray-900">50 тонн</div>
                <div className="text-xs text-gray-500">сохранено от мусора</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/10 bg-black/20 backdrop-blur-sm py-3">
          <div className="flex gap-8 marquee-track" style={{ width: "200%" }}>
            {["♻️ Апсайклинг", "🌿 Эко-стиль", "🪵 Дерево", "👕 Ткань", "🍶 Стекло", "🥫 Металл", "🌱 Нулевые отходы", "💡 Идеи", "🔨 DIY проекты", "🌍 Спасём планету", "♻️ Апсайклинг", "🌿 Эко-стиль", "🪵 Дерево", "👕 Ткань", "🍶 Стекло", "🥫 Металл", "🌱 Нулевые отходы", "💡 Идеи"].map((t, i) => (
              <span key={i} className="text-white/50 text-sm font-medium whitespace-nowrap">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* IDEAS */}
      <section id="ideas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-semibold mb-4">
              <Icon name="Lightbulb" size={16} />
              Категории идей
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: "Montserrat" }}>
              Идеи по{" "}
              <span style={{ background: "linear-gradient(135deg, #4a7c2f, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                материалам
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Выбери материал и найди сотни идей как дать ему новую жизнь</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {IDEAS.map((idea, i) => (
              <div
                key={i}
                className="card-hover cursor-pointer bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm hover:border-green-200"
              >
                <div className="text-4xl mb-3">{idea.icon}</div>
                <h3 className="font-bold text-sm text-gray-900 mb-1" style={{ fontFamily: "Montserrat" }}>{idea.title}</h3>
                <p className="text-xs text-gray-400 mb-3 leading-relaxed">{idea.desc}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">{idea.count}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl overflow-hidden relative" style={{ background: "linear-gradient(135deg, #1a2e0e, #2d5016)" }}>
            <div className="hero-blob w-64 h-64 bg-amber-400 top-0 right-0 opacity-20" />
            <div className="relative z-10 p-10 sm:p-14 grid sm:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-3xl font-black text-white mb-3" style={{ fontFamily: "Montserrat" }}>
                  Каждый предмет<br />считается
                </h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  В среднем один переработанный предмет экономит 2.5 кг CO₂. Наши участники уже спасли 50 тонн материалов от свалки.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {[["2.5 кг", "CO₂ на 1 предмет"], ["50 т", "спасено материалов"], ["12 000", "участников"], ["720+", "проектов"]].map(([val, lbl]) => (
                  <div key={lbl} className="bg-white/10 rounded-2xl px-5 py-4 border border-white/10">
                    <div className="text-2xl font-black text-white" style={{ fontFamily: "Montserrat" }}>{val}</div>
                    <div className="text-white/50 text-sm">{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section id="tips" className="py-24" style={{ backgroundColor: "var(--eco-cream)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-semibold mb-4">
              <Icon name="BookOpen" size={16} />
              Советы для начинающих
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: "Montserrat" }}>
              С чего{" "}
              <span style={{ background: "linear-gradient(135deg, #f59e0b, #ea580c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                начать?
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">4 шага к первому успешному эко-проекту</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIPS.map((tip, i) => (
              <div key={i} className={`card-hover rounded-2xl p-7 border ${tip.color}`}>
                <div className={`text-5xl font-black mb-4 opacity-20 ${tip.accent}`} style={{ fontFamily: "Montserrat" }}>
                  {tip.number}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3" style={{ fontFamily: "Montserrat" }}>{tip.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid sm:grid-cols-3 gap-6">
            {[
              { icon: "🔨", title: "Инструменты", items: ["Клеевой пистолет", "Наждачная бумага", "Акриловые краски", "Лобзик (по желанию)"] },
              { icon: "🎨", title: "Материалы для декора", items: ["Декупажный лак", "Кракелюр", "Патина", "Штукатурка"] },
              { icon: "📚", title: "Полезные техники", items: ["Декупаж", "Мозаика", "Макраме", "Вязание из ткани"] },
            ].map((block, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover">
                <div className="text-3xl mb-4">{block.icon}</div>
                <h3 className="font-bold text-gray-900 mb-4" style={{ fontFamily: "Montserrat" }}>{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold mb-4">
              <Icon name="Images" size={16} />
              Галерея работ
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: "Montserrat" }}>
              Вдохновляющие{" "}
              <span style={{ background: "linear-gradient(135deg, #7c3aed, #db2777)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                проекты
              </span>
            </h2>
            <p className="text-gray-500 text-lg">Реальные работы нашего сообщества — фильтруй и находи идеи</p>
          </div>

          <div className="space-y-4 mb-10">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-2">Материал:</span>
              {MATERIAL_FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setMaterialFilter(f)}
                  className={`filter-pill px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                    materialFilter === f
                      ? "bg-green-600 text-white border-green-600 shadow-md"
                      : "bg-white text-gray-600 border-gray-200 hover:border-green-300"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-2">Сложность:</span>
              {DIFFICULTY_FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setDifficultyFilter(f)}
                  className={`filter-pill px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                    difficultyFilter === f
                      ? "bg-amber-500 text-white border-amber-500 shadow-md"
                      : "bg-white text-gray-600 border-gray-200 hover:border-amber-300"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-2">Тип:</span>
              {TYPE_FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setTypeFilter(f)}
                  className={`filter-pill px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                    typeFilter === f
                      ? "bg-purple-600 text-white border-purple-600 shadow-md"
                      : "bg-white text-gray-600 border-gray-200 hover:border-purple-300"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {filteredGallery.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-gray-400 text-lg">По заданным фильтрам ничего не найдено</p>
              <button
                onClick={() => { setMaterialFilter("все"); setDifficultyFilter("любая"); setTypeFilter("все"); }}
                className="mt-4 px-6 py-2 rounded-full bg-green-600 text-white font-semibold text-sm hover:bg-green-700 transition-colors"
              >
                Сбросить фильтры
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item) => (
                <div key={item.id} className="group card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {item.badge && (
                      <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    )}
                    <button
                      onClick={() => toggleLike(item.id)}
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                    >
                      <Icon
                        name="Heart"
                        size={18}
                        className={likedItems.includes(item.id) ? "text-red-500 fill-red-500" : "text-gray-400"}
                      />
                    </button>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "Montserrat" }}>{item.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs font-medium">{item.material}</span>
                      <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                        item.difficulty === "легко" ? "bg-blue-50 text-blue-600" :
                        item.difficulty === "средне" ? "bg-amber-50 text-amber-600" :
                        "bg-red-50 text-red-600"
                      }`}>{item.difficulty}</span>
                      <span className="px-2 py-1 rounded-lg bg-purple-50 text-purple-600 text-xs font-medium">{item.type}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Icon name="User" size={12} />
                        {item.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Heart" size={12} />
                        {item.likes + (likedItems.includes(item.id) ? 1 : 0)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <button className="px-10 py-4 rounded-2xl font-bold text-white eco-gradient shadow-lg hover:shadow-green-200 transition-all hover:scale-105">
              Загрузить ещё проекты
            </button>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="py-24" style={{ backgroundColor: "var(--eco-cream)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-700 text-sm font-semibold mb-4">
              <Icon name="Users" size={16} />
              Сообщество
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: "Montserrat" }}>
              12 000{" "}
              <span style={{ background: "linear-gradient(135deg, #ea580c, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                единомышленников
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Делись своими проектами, получай советы и вдохновляй других</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {COMMUNITY_POSTS.map((post, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-xl ${post.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {post.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{post.name}</div>
                    <div className="text-gray-400 text-xs">{post.time}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.text}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                    <Icon name="Heart" size={14} />
                    {post.likes}
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                    <Icon name="MessageCircle" size={14} />
                    Ответить
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500 transition-colors ml-auto">
                    <Icon name="Share2" size={14} />
                    Поделиться
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)" }}>
            <div className="p-10 sm:p-14 text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-3xl font-black text-white mb-3" style={{ fontFamily: "Montserrat" }}>Вступи в сообщество</h3>
              <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
                Делись своими проектами, задавай вопросы, получай лайки и становись частью эко-движения
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-8 py-4 rounded-2xl font-bold bg-white text-orange-600 hover:bg-orange-50 transition-all hover:scale-105 shadow-lg">
                  Загрузить проект
                </button>
                <button className="px-8 py-4 rounded-2xl font-bold bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all hover:scale-105">
                  Посмотреть всех
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-semibold mb-6">
                <Icon name="Info" size={16} />
                О проекте
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6" style={{ fontFamily: "Montserrat" }}>
                Почему{" "}
                <span style={{ background: "linear-gradient(135deg, #4a7c2f, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  ЭкоЖизнь?
                </span>
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Каждый год в мире производится <strong className="text-gray-900">2 миллиарда тонн мусора</strong>. Большая часть — вещи, которые легко дать вторую жизнь.
                </p>
                <p>
                  ЭкоЖизнь — это платформа для тех, кто хочет жить осознанно. Мы собрали сотни идей с реальными фотографиями и пошаговыми инструкциями.
                </p>
                <p>
                  Апсайклинг — это не только экология, но и творчество, экономия и уникальные вещи, которых нет ни у кого другого.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  { icon: "🌍", val: "−50 т", lbl: "CO₂ в год" },
                  { icon: "💚", val: "12 000", lbl: "участников" },
                  { icon: "✨", val: "720+", lbl: "проектов" },
                ].map((s) => (
                  <div key={s.lbl} className="text-center p-4 rounded-2xl bg-green-50 border border-green-100">
                    <div className="text-2xl mb-1">{s.icon}</div>
                    <div className="font-black text-xl text-green-700" style={{ fontFamily: "Montserrat" }}>{s.val}</div>
                    <div className="text-xs text-gray-500">{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-80 lg:h-[480px]">
                <img
                  src={GALLERY_ITEMS[4].image}
                  alt="Мастерская"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">♻️</div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm mb-1" style={{ fontFamily: "Montserrat" }}>Миссия проекта</div>
                    <div className="text-xs text-gray-500 leading-relaxed">Сделать апсайклинг доступным для каждого и вдохновить миллионы людей на осознанное потребление</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24" style={{ backgroundColor: "var(--eco-cream)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4">
              <Icon name="Mail" size={16} />
              Контакты
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: "Montserrat" }}>
              Напиши{" "}
              <span style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                нам
              </span>
            </h2>
            <p className="text-gray-500 text-lg">Предложение, вопрос или хочешь поделиться своим проектом?</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Имя</label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all text-gray-800"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all text-gray-800"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Сообщение</label>
              <textarea
                rows={5}
                placeholder="Расскажи о своём проекте или задай вопрос..."
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all text-gray-800 resize-none"
              />
            </div>
            <button className="w-full py-4 rounded-2xl font-bold text-white text-lg eco-gradient shadow-lg hover:shadow-green-200 transition-all hover:scale-[1.01]">
              Отправить сообщение
            </button>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
              {[
                { icon: "📧", title: "Email", val: "hello@ecolife.ru" },
                { icon: "💬", title: "Telegram", val: "@ecolife_ru" },
                { icon: "📷", title: "Instagram", val: "@ecolife.ru" },
              ].map((c) => (
                <div key={c.title} className="text-center">
                  <div className="text-2xl mb-1">{c.icon}</div>
                  <div className="text-xs font-semibold text-gray-400 mb-0.5">{c.title}</div>
                  <div className="text-sm text-green-700 font-medium">{c.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12" style={{ background: "var(--eco-dark)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-4 gap-8 mb-10">
            <div className="sm:col-span-2">
              <button onClick={() => scrollTo("home")} className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl eco-gradient flex items-center justify-center text-white text-lg font-black">Э</div>
                <span className="font-black text-xl text-white" style={{ fontFamily: "Montserrat" }}>
                  Эко<span style={{ color: "#6aab3d" }}>Жизнь</span>
                </span>
              </button>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Платформа для апсайклинга и осознанного потребления. Дай старым вещам вторую жизнь.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm mb-4" style={{ fontFamily: "Montserrat" }}>Разделы</h4>
              <ul className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <button onClick={() => scrollTo(item.id)} className="text-gray-500 hover:text-white text-sm transition-colors">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm mb-4" style={{ fontFamily: "Montserrat" }}>Следи за нами</h4>
              <div className="flex flex-col gap-2">
                {[["📷", "Instagram"], ["💬", "Telegram"], ["▶️", "YouTube"]].map(([icon, label]) => (
                  <button key={label} className="flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors">
                    <span>{icon}</span> {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">© 2026 ЭкоЖизнь — Вторая жизнь вещей</p>
            <p className="text-gray-600 text-sm">🌿 Сделано с заботой о планете</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
