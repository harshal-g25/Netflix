// Memory rows — replace titles, dates, descriptions, and media paths with your own

const createMemory = (id, title, date, overview, mediaFile, isLarge = false) => ({
  id,
  title,
  name: title,
  overview,
  release_date: date,
  first_air_date: date,
  vote_average: 10,
  genre_ids: [10749],
  backdrop_path: null,
  poster_path: null,
  isLarge,
  mediaHint: mediaFile,
});

export const memorySections = [
  {
    key: "best-memories",
    title: "Our Best Memories",
    first: true,
    islarge: false,
    items: [
      createMemory(1, "WET'NJOY", "3-5-2026", "You dumbo", "memories/memory-1.jpg"),
      createMemory(2, "Cafe Arosha", "20-7-2025", "The rose Is still with me", "memories/memory-2.jpg"),
      createMemory(3, "Kiga Fc Road", "9-9-2025", "The Gajra is still with me.", "memories/memory-3.jpg"),
      createMemory(4, "Mahabaleshwar", "12-5-2026", "I Will never forget this.", "memories/memory-4.jpg"),
      createMemory(5, "Quater Bars& kitchen","12-5-2026", "I paid for the food.", "memories/memory-5.jpg"),
      createMemory(6, "Our First Navratri", "2-8-2025", "Your Garba.", "memories/memory-6.jpg"),
    ],
  },
  {
    key: "never-forget",
    title: "Moments I'll Never Forget",
    items: [
      createMemory(7, "our Matheran Kiss", "27-6-2025", "A moment that changed everything.", "moments/moment-1.jpg"),
      createMemory(8, "Eating Appe", "9-9-2025", "A moment that changed everything.", "moments/moment-2.jpg"),
      createMemory(9, "You calling Me Motu", "12-5-2026", "A moment that changed everything.", "moments/moment-3.jpg"),
      createMemory(10, "our Navratri", "2-8-2025", "A moment that changed everything.", "moments/moment-4.jpg"),
      createMemory(11, "Our reel", "2-8-2025", "A moment that changed everything.", "moments/moment-5.jpg"),
    ],
  },
  {
    key: "continue-loving",
    title: "Continue Loving",
    items: [
      createMemory(12, "Still Falling", "Add date", "Every day I choose you.", "loving/loving-1.jpg"),
      createMemory(13, "Late Night Talks", "Add date", "Our favorite kind of movie.", "loving/loving-2.jpg"),
      createMemory(14, "Little Things", "Add date", "The details that make us us.", "loving/loving-3.jpg"),
      createMemory(15, "Adventures", "Add date", "More chapters to write.", "loving/loving-4.jpg"),
    ],
  },
  {
    key: "our-journey",
    title: "Our Journey",
    islarge: true,
    items: [
      createMemory(16, "Chapter One", "Add date", "Where it all began.", "journey/journey-1.jpg", true),
      createMemory(17, "Chapter Two", "Add date", "Growing closer.", "journey/journey-2.jpg", true),
      createMemory(18, "Chapter Three", "Add date", "One year strong.", "journey/journey-3.jpg", true),
      createMemory(19, "Chapter Four", "Add date", "The best is yet to come.", "journey/journey-4.jpg", true),
    ],
  },
  {
    key: "favorite-moments",
    title: "Favorite Moments",
    items: [
      createMemory(20, "Favorite 1", "Add date", "This one makes me smile.", "favorites/fav-1.jpg"),
      createMemory(21, "Favorite 2", "Add date", "This one makes me smile.", "favorites/fav-2.jpg"),
      createMemory(22, "Favorite 3", "Add date", "This one makes me smile.", "favorites/fav-3.jpg"),
      createMemory(23, "Favorite 4", "Add date", "This one makes me smile.", "favorites/fav-4.jpg"),
      createMemory(24, "Favorite 5", "Add date", "This one makes me smile.", "favorites/fav-5.jpg"),
    ],
  },
  {
    key: "forever-together",
    title: "Forever Together",
    items: [
      createMemory(25, "Promise 1", "Forever", "You are my always.", "forever/forever-1.jpg"),
      createMemory(26, "Promise 2", "Forever", "You are my always.", "forever/forever-2.jpg"),
      createMemory(27, "Promise 3", "Forever", "You are my always.", "forever/forever-3.jpg"),
      createMemory(28, "Promise 4", "Forever", "You are my always.", "forever/forever-4.jpg"),
    ],
  },
];

export const journeyTimeline = [
  {
    id: 1,
    date: "Chapter 1 — 13-12-2024",
    title: "The Beginning",
    text: "The First time I saw You .",
    mediaHint: "journey/timeline-1.jpg",
    mediaHint2: "journey/timeline-1-2.jpg",
  },
  {
    id: 2,
    date: "Chapter 2 — Everytime",
    title: "Falling For You",
    text: "My Kissing Machine.",
    mediaHint: "journey/timeline-2.jpg",
    mediaHint2: "journey/timeline-2-2.jpg",
  },
  {
    id: 3,
    date: "Chapter 3 — More To Go",
    title: "One Year Together",
    text: "Ajun Khup Saare Anghol baki ahe sobt.",
    mediaHint: "journey/timeline-3.jpg",
    mediaHint2: "journey/timeline-3-2.jpg",
  },
  {
    id: 4,
    date: "Chapter 4 — I Will love You Forever",
    title: "Still Writing Our Story",
    text: "I LOVE YOU 3000.",
    mediaHint: "journey/timeline-4.jpg",
    mediaHint2: "journey/timeline-4-2.jpg",
  },
];

export const journeySlideshow = [
  { id: 1, caption: "Slide 1 — I LOVE YOU", mediaHint: "journey/slide-1.jpg" },
  { id: 2, caption: "Slide 2 — I LOVE YOU", mediaHint: "journey/slide-2.jpg" },
  { id: 3, caption: "Slide 3 — I LOVE YOU", mediaHint: "journey/slide-3.jpg" },
  { id: 4, caption: "Slide 4 — I LOVE YOU", mediaHint: "journey/slide-4.jpg" },
  { id: 5, caption: "Slide 5 — I LOVE YOU", mediaHint: "journey/slide-5.jpg" },
];

export const typingLines = [
  "Once upon a time, two hearts found each other...",
  "And every day since has been my favorite scene.",
  "Happy one year, my love. This story is ours.",
];

export const loveLetters = [
  {
    id: 1,
    label: "Open when you miss me",
    preview: "A letter for the quiet moments.",
   content:
"Even when I’m not beside you, please remember you are loved more than words can explain ❤️",

mediaHint: "letters/letter-1.jpg",
  },
  {
    id: 2,
    label: "Open when you're proud of us",
    preview: "A letter for celebrating us.",
    content:
"I hope you always look at us and realize how beautifully we’ve grown together ❤️ Through every moment, every fight, and every memory — I’m proud that it’s always been you 🥺",

mediaHint: "letters/letter-2.jpg",
  },
  {
    id: 3,
    label: "Open on a hard day",
    preview: "A letter for when the world feels heavy.",
    content:
"On your hardest days, please remember that you are stronger than you think and deeply loved by me always ❤️ No bad day could ever change how special you are to me 🥺",

mediaHint: "letters/letter-3.jpg",
  },
  {
    id: 4,
    label: "Open on our next anniversary",
    preview: "A letter for the future.",
   content:
"If we’re reading this on our next anniversary, then thank you for choosing me again every single day ❤️ I hope we’re still creating beautiful memories together and loving each other even more 🥺",

mediaHint: "letters/letter-4.jpg",
  },
];

export const futureDreams = [
  {
    id: 1,
    title: "Dream 1 — Adventures We'll Take Together",
    promise: "",
    mediaHint: "future/dream-1.jpg",
  },
  {
    id: 2,
    title: "Dream 2 — Forever Starts With Us",
    promise: "",
    mediaHint: "future/dream-2.jpg",
  },
  {
    id: 3,
    title: "Dream 3 —The Love Story We'll Keep Writing",
    promise: "",
    mediaHint: "future/dream-3.jpg",
  },
  {
    id: 4,
    title: "A Lifetime of Tiny Moments",
    promise: "",
    mediaHint: "future/dream-4.jpg",
  },
];

export const finaleMessage = {
  title: "To My Favorite Person",
  lines: [
    "One year ago, you became the plot twist I never saw coming —",
    "and the happiest ending I could ever wish for.",
    "Thank you for every laugh, every hug, every ordinary day",
    "that feels extraordinary because you're in it.",
    "Here's to us — scene after scene, forever.",
  ],
  surpriseLabel: "One Last Surprise",
};
