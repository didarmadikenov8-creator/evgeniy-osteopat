// Mock data for Евгений Нигматуллин — остеопат (frontend-only demo)

export const WHATSAPP_URL = "https://wa.me/77024723352";
export const INSTAGRAM_URL = "https://instagram.com/evgeniy_osteopat";
export const INSTAGRAM_HANDLE = "@evgeniy_osteopat";
export const PHONE = "+7 702 472-33-52";
// 2GIS: no real URL provided yet — kept non-clickable until a real link is available.
export const TWOGIS_URL = null;

// Real assets uploaded to the project
export const EVGENIY_PHOTO =
  "https://customer-assets-jai6qajn.emergentagent.net/job_healing-hands-182/artifacts/oy51opte_%D1%84%D0%BE%D1%82%D0%BE%20%D0%BE%D1%81%D1%82%D0%B5%D0%BE%D0%BF%D0%B0%D1%82.jpeg";
export const VIDEO_MAIN =
  "https://customer-assets-jai6qajn.emergentagent.net/job_healing-hands-182/artifacts/abtom1vh_%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%20%D0%BE%D1%81%D1%82%D0%B5%D0%BE%D0%BF%D0%B0%D1%82.mp4";
export const VIDEO_SECOND =
  "https://customer-assets-jai6qajn.emergentagent.net/job_healing-hands-182/artifacts/b0rr00qa_%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%20%D0%BE%D1%81%D1%82%D0%BA%D0%BE%D0%BF%D0%B0%D1%82.mp4";

// Atmospheric osteopathy imagery (composition-matched to reference)
export const IMG = {
  hero: "https://images.unsplash.com/photo-1598901986949-f593ff2a31a6",
  shoulder: "https://images.unsplash.com/photo-1494228766058-1430438d10fc",
  backHands: "https://images.unsplash.com/photo-1699523229208-be1e1dd9252d",
  neckWork: "https://images.unsplash.com/photo-1649751295468-953038600bef",
  stretch: "https://images.unsplash.com/photo-1706353399656-210cca727a33",
  roomSofa: "https://images.unsplash.com/photo-1787496994323-59ac5cff09f9",
  roomTable: "https://images.unsplash.com/photo-1630835425197-50feeba99ecd",
  roomTable2: "https://images.unsplash.com/photo-1630835474626-b4de96a25186",
  reviewer: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
};

// Nav
export const NAV = [
  { label: "Остеопатия", href: "#osteopathy" },
  { label: "Обо мне", href: "#about" },
  { label: "Как проходит приём", href: "#process" },
  { label: "Видео", href: "#video" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Стоимость", href: "#price" },
  { label: "Контакты", href: "#contacts" },
];

// Section: С чем обращаются
export const COMPLAINTS = [
  {
    id: "back",
    icon: "PersonStanding",
    title: "Спина",
    subtitle: "Боль, напряжение, ограничение подвижности",
    text: "Напряжение, дискомфорт и ограничение подвижности в спине. Мягко работаю с причиной, а не только с симптомом.",
  },
  {
    id: "neck",
    icon: "Bone",
    title: "Шея",
    subtitle: "Боль, скованность, хруст",
    text: "Скованность и дискомфорт в шейном отделе, ощущение зажатости. Аккуратные техники без резких движений.",
  },
  {
    id: "head",
    icon: "Brain",
    title: "Головные боли",
    subtitle: "Частые, напряжение, мигрень",
    text: "Частое напряжение, тяжесть в голове, мигренозные состояния. Работаю мягко и внимательно.",
  },
  {
    id: "joints",
    icon: "Dumbbell",
    title: "Суставы",
    subtitle: "Боль, ограничение движений",
    text: "Дискомфорт и ограничение движений в суставах. Помогаю восстановить естественную подвижность тела.",
  },
  {
    id: "posture",
    icon: "MoveVertical",
    title: "Осанка",
    subtitle: "Нарушения, асимметрия",
    text: "Нарушения осанки, асимметрия, привычные перекосы тела. Помогаю телу вернуться к балансу.",
  },
  {
    id: "wellbeing",
    icon: "HeartPulse",
    title: "Общее самочувствие",
    subtitle: "Стресс, усталость, нарушение сна",
    text: "Стресс, усталость, ощущение сниженного тонуса. Помогаю телу восстановить ресурс.",
  },
];

// Section: Обо мне
export const STATS = [
  { value: "20+ лет", label: "в медицине" },
  { value: "7 лет", label: "в остеопатии" },
  { value: "Тысячи", label: "довольных пациентов" },
];

// Section: Как проходит приём
export const PROCESS_STEPS = [
  { num: "01", title: "Беседа", text: "Обсуждаем жалобы и историю здоровья." },
  { num: "02", title: "Диагностика", text: "Провожу мягкое остеопатическое обследование." },
  { num: "03", title: "Работа с телом", text: "Мягкие техники без хруста и резких движений." },
  { num: "04", title: "Рекомендации", text: "При необходимости даю советы для поддержания результата." },
];

// Section: Видео (2 реальных видео)
export const VIDEOS = {
  main: {
    src: VIDEO_MAIN,
    title: "Евгений о том, как проходит приём",
    caption: "О здоровье, остеопатии и работе с телом простыми словами",
  },
  second: {
    src: VIDEO_SECOND,
    title: "Об остеопатии простыми словами",
    caption: "Короткое объяснение подхода",
  },
};

// Section: Остеопатия — больше, чем массаж
export const OSTEO_FEATURES = [
  { icon: "Target", text: "Работа с причиной, а не только с симптомом" },
  { icon: "Feather", text: "Мягкие и безопасные техники" },
  { icon: "HeartPulse", text: "Комплексный подход к здоровью" },
  { icon: "Users", text: "Подходит взрослым и детям" },
];

// Section: Отзывы (только реальный отзыв из материалов проекта)
export const REVIEWS = [
  {
    name: "Алия, 34 года",
    avatar: IMG.reviewer,
    text: "После нескольких приёмов ушли головные боли, улучшилось общее самочувствие. Очень благодарна Евгению за внимательный подход и профессионализм.",
  },
];

// Section: Стоимость
export const PRICE = {
  title: "Приём врача-остеопата",
  note: "60 минут",
  value: "25 000 ₸",
};

// Section: Контакты
export const CONTACTS = {
  city: "Приём в Алматы",
  address: ["ЖК «Рапсодия»", "ул. Кажымукана, 37"],
  hours: ["Пн–Пт  11:00–20:00", "Сб  10:00–15:00"],
  phone: PHONE,
};
