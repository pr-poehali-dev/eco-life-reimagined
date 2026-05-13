import Icon from "@/components/ui/icon";
import { GALLERY_ITEMS, MATERIAL_FILTERS, DIFFICULTY_FILTERS, TYPE_FILTERS } from "./data";

interface GallerySectionProps {
  materialFilter: string;
  setMaterialFilter: (f: string) => void;
  difficultyFilter: string;
  setDifficultyFilter: (f: string) => void;
  typeFilter: string;
  setTypeFilter: (f: string) => void;
  likedItems: number[];
  toggleLike: (id: number) => void;
}

export default function GallerySection({
  materialFilter,
  setMaterialFilter,
  difficultyFilter,
  setDifficultyFilter,
  typeFilter,
  setTypeFilter,
  likedItems,
  toggleLike,
}: GallerySectionProps) {
  const filteredGallery = GALLERY_ITEMS.filter((item) => {
    const matOk = materialFilter === "все" || item.material === materialFilter;
    const diffOk = difficultyFilter === "любая" || item.difficulty === difficultyFilter;
    const typeOk = typeFilter === "все" || item.type === typeFilter;
    return matOk && diffOk && typeOk;
  });

  return (
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
  );
}
