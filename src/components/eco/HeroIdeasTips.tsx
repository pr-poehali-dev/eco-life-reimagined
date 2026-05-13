import Icon from "@/components/ui/icon";
import { GALLERY_ITEMS, STATS, IDEAS, TIPS } from "./data";

interface HeroIdeasTipsProps {
  scrollTo: (id: string) => void;
}

export default function HeroIdeasTips({ scrollTo }: HeroIdeasTipsProps) {
  return (
    <>
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
    </>
  );
}
