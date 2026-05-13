import Icon from "@/components/ui/icon";
import { COMMUNITY_POSTS, GALLERY_ITEMS, NAV_ITEMS } from "./data";

interface CommunitySectionsProps {
  contactForm: { name: string; email: string; message: string };
  setContactForm: (form: { name: string; email: string; message: string }) => void;
  scrollTo: (id: string) => void;
}

export default function CommunitySections({ contactForm, setContactForm, scrollTo }: CommunitySectionsProps) {
  return (
    <>
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
    </>
  );
}
