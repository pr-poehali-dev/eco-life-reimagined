export const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "ideas", label: "Идеи" },
  { id: "tips", label: "Советы" },
  { id: "gallery", label: "Галерея" },
  { id: "community", label: "Сообщество" },
  { id: "about", label: "О проекте" },
  { id: "contact", label: "Контакты" },
];

export const GALLERY_ITEMS = [
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

export const IDEAS = [
  { icon: "🪵", title: "Дерево и поддоны", desc: "Мебель, полки, рамки, клумбы", count: "143 идеи" },
  { icon: "👕", title: "Одежда и ткань", desc: "Сумки, аксессуары, подушки, ковры", count: "218 идей" },
  { icon: "🍶", title: "Стекло и тара", desc: "Вазы, светильники, органайзеры", count: "97 идей" },
  { icon: "🥫", title: "Металл и банки", desc: "Кашпо, светильники, органайзеры", count: "76 идей" },
  { icon: "📦", title: "Картон и бумага", desc: "Коробки, рамки, игрушки, поделки", count: "134 идеи" },
  { icon: "💻", title: "Электроника", desc: "Арт-объекты, лампы, декор", count: "52 идеи" },
];

export const TIPS = [
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

export const COMMUNITY_POSTS = [
  { name: "Мария К.", avatar: "МК", text: "Сделала скамью из старых поддонов — соседи в восторге! Потратила 2 вечера и 300 рублей на краску.", time: "2 часа назад", likes: 34, color: "bg-amber-400" },
  { name: "Дмитрий В.", avatar: "ДВ", text: "Собрал целую мастерскую для апсайклинга. Делюсь списком инструментов и советами для начинающих.", time: "вчера", likes: 67, color: "bg-green-500" },
  { name: "Анна С.", avatar: "АС", text: "Переработала 5 пар старых джинсов в сумки и продала на ярмарке. Экология + заработок!", time: "3 дня назад", likes: 89, color: "bg-orange-400" },
];

export const STATS = [
  { value: "12 000+", label: "участников" },
  { value: "720+", label: "проектов" },
  { value: "50 т", label: "сохранено от мусора" },
  { value: "98%", label: "довольны результатом" },
];

export const MATERIAL_FILTERS = ["все", "дерево", "стекло", "ткань", "металл", "разное"];
export const DIFFICULTY_FILTERS = ["любая", "легко", "средне", "сложно"];
export const TYPE_FILTERS = ["все", "мебель", "декор", "мода", "сад", "мастер-класс"];
