export type Project = {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  result?: string;
  coverImage: string;
  images: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "client-project-tracker",
    title: "Client & Project Tracker",
    tagline: "iOS & Android",
    problem: "Freelancers and small agencies lose track of client details and project status across scattered notes and chats.",
    solution: "A cross-platform React Native app to log clients, track each project's status (Not Started → In Progress → Review → Completed), and see an at-a-glance dashboard — all with on-device data persistence.",
    result: "A working proof-of-concept for the Mobile App Development service, built and tested on both iOS Simulator and Expo Go.",
   coverImage: "/projects/client-cover.jpg",
    images: [
      "/projects/client-tracker.jpg",
      "/projects/client-tracker-2.jpg",
      "/projects/client-tracker-3.jpg",
    ],
    tags: ["React Native", "Expo", "Mobile"],
    githubUrl: "https://github.com/Vishvrajsinh2003-Rathod/client-project-tracker",
  },
  {
    slug: "career-recommender",
    title: "Career Recommender",
    tagline: "MSc IT Capstone",
    problem: "Students struggle to map their academic background and skills to a fitting career path.",
    solution: "A Random Forest ML model trained on academic and skill inputs to recommend fitting career tracks. Built as an MSc IT capstone, covering the full pipeline — data prep, model training, and a usable interface.",
    coverImage: "/projects/weather.jpg",
    images: [
      "/projects/career-ai.jpg",
      "/projects/career-ai-1.jpg",
      "/projects/career-ai-2.jpg",
    ],
    tags: ["Python", "ML", "Random Forest"],
    githubUrl: "https://github.com/Vishvrajsinh2003-Rathod/career-recommender",
  },
  {
    slug: "premium-portfolio",
    title: "Premium Portfolio",
    tagline: "Single-file build",
    problem: "Needed a personal portfolio that stood out from templated designs, without a heavy framework.",
    solution: "Single-file personal portfolio with AI chat, 3D effects, scroll animations, and live GitHub integration — all in one HTML file.",
    coverImage: "/projects/portfolio.jpg",
    images: ["/projects/portfolio.jpg"],
    tags: ["HTML", "JS", "3D"],
    githubUrl: "https://github.com/Vishvrajsinh2003-Rathod/premium-portfolio",
  },
  {
    slug: "tic-tac-toe-ai",
    title: "Tic-Tac-Toe AI",
    tagline: "Unbeatable opponent",
    problem: "Wanted to build a classic browser game with genuinely challenging AI, not just random moves.",
    solution: "Browser game with an unbeatable opponent powered by the Minimax algorithm, plus score tracking and replay.",
    coverImage: "/projects/tictactoe.jpg",
    images: ["/projects/tictactoe.jpg"],
    tags: ["JavaScript", "Minimax", "Game"],
    githubUrl: "https://github.com/Vishvrajsinh2003-Rathod/tic-tac-toe",
    liveUrl: "https://vishvrajsinh2003-rathod.github.io/tic-tac-toe/",
  },
  {
    slug: "snake-game",
    title: "Snake Game",
    tagline: "HTML5 Canvas",
    problem: "Wanted to rebuild a classic game to practice Canvas rendering and game-loop logic.",
    solution: "Classic Snake rebuilt with HTML5 Canvas — smooth movement, increasing difficulty, and high-score memory via localStorage.",
    coverImage: "/projects/snake.jpg",
    images: ["/projects/snake.jpg"],
    tags: ["Canvas", "JavaScript", "Game"],
    githubUrl: "https://github.com/Vishvrajsinh2003-Rathod/snake-game",
    liveUrl: "https://vishvrajsinh2003-rathod.github.io/snake-game/",
  },
  {
    slug: "restaurant-booking",
    title: "Restaurant Booking Site",
    tagline: "Web · Restaurant",
    problem: "Small restaurants often rely on phone calls for table bookings, losing reservations after hours.",
    solution: "A responsive booking site with a digital menu and a table reservation form with client-side validation, so guests can book anytime from any device.",
    coverImage: "/projects/restaurant.jpg",
    images: ["/projects/restaurant.jpg"],
    tags: ["HTML", "CSS", "JS"],
    githubUrl: "https://github.com/Vishvrajsinh2003-Rathod/restaurant-booking",
    liveUrl: "https://vishvrajsinh2003-rathod.github.io/restaurant-booking/",
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    tagline: "Web · Weather",
    problem: "Most weather widgets look identical regardless of conditions.",
    solution: "A live dashboard that pulls real-time data by city search and adapts its UI dynamically to current conditions, built around a public weather API.",
    coverImage: "/projects/weather.jpg",
    images: ["/projects/weather.jpg"],
    tags: ["API", "JavaScript", "Dashboard"],
    githubUrl: "https://github.com/Vishvrajsinh2003-Rathod/weather-dashboard",
    liveUrl: "https://vishvrajsinh2003-rathod.github.io/weather-dashboard/",
  },
];

export function getProjectBySlug(slug: string) {                  
  return projects.find((p) => p.slug === slug);
}
