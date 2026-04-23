export type Topic = {
  slug: string;
  title: string;
  description: string;
  posts: string[]; // post slugs
  metaTitle: string;
  metaDescription: string;
};

export const TOPICS: Topic[] = [
  {
    slug: "adaptive-training",
    title: "Adaptive Training",
    description: "How AI-driven plans adjust to your real performance, schedule, and life — and why static plans plateau.",
    posts: ["fitness-app-for-inconsistent-schedules", "how-ai-adapts-when-you-miss-workouts", "progressive-overload-without-spreadsheet"],
    metaTitle: "Adaptive Training: How AI Fitness Plans Actually Work | Saddie",
    metaDescription: "Explore how adaptive AI training plans outperform static programs — covering progressive overload, miss-session recovery, and behavioral learning.",
  },
  {
    slug: "voice-coaching",
    title: "Voice Coaching",
    description: "Real-time voice cues change how hard you train and how long you stick with it. Everything you need to know.",
    posts: ["workout-app-that-talks-to-you"],
    metaTitle: "Voice Coaching for Fitness: How It Works and Why It Matters | Saddie",
    metaDescription: "Voice-guided training keeps you in the workout, not on your phone. Learn how real-time AI voice coaching improves performance and adherence.",
  },
  {
    slug: "comparisons",
    title: "App Comparisons",
    description: "Honest side-by-side breakdowns of the major fitness apps — strengths, weaknesses, and who each is actually for.",
    posts: ["is-fitbod-worth-it", "fitbod-vs-trlactive-detailed", "best-fitness-app-beginners-2026", "ai-personal-trainer-cost"],
    metaTitle: "Fitness App Comparisons: Honest Reviews | Saddie",
    metaDescription: "Side-by-side comparisons of Fitbod, Future, Freeletics, Peloton, and more — covering price, features, and who each app is actually built for.",
  },
  {
    slug: "lifestyle",
    title: "Fitness for Real Life",
    description: "Training that works around inconsistent schedules, shift work, travel, and everything else that gets in the way.",
    posts: ["workout-app-for-people-who-hate-the-gym", "night-shift-workout-tips", "fitness-app-for-inconsistent-schedules"],
    metaTitle: "Fitness for Real Life: Training When Life Gets in the Way | Saddie",
    metaDescription: "Practical fitness advice for busy people, shift workers, travelers, and everyone whose life doesn't match what standard fitness apps assume.",
  },
  {
    slug: "ai-coaching",
    title: "AI Personal Training",
    description: "What AI coaching actually is, what it can and can't do, and how it compares to having a human trainer.",
    posts: ["ai-personal-trainer-cost", "best-fitness-app-beginners-2026"],
    metaTitle: "AI Personal Training: What It Is and Whether It's Worth It | Saddie",
    metaDescription: "An honest look at AI personal training — costs, capabilities, limitations, and how it compares to human coaches. Powered by Saddie.",
  },
];

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}
