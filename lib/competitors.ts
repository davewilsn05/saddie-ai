export type Competitor = {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  verdict: string;
  strengths: string[];
  weaknesses: string[];
  saddieWins: string[];
  whoShouldUse: string;
  cta: string;
};

export const COMPETITORS: Competitor[] = [
  {
    slug: "fitbod",
    name: "Fitbod",
    tagline: "Fitbod vs Saddie (TRLActive): Which is right for you?",
    price: "$13/month or $80/year",
    verdict: "Fitbod is a solid gym logging tool with smart muscle tracking. Saddie (TRLActive) is a full coaching system with voice, nutrition, and adaptive plans. Different tools for different needs.",
    strengths: ["Best-in-class muscle fatigue tracking", "Huge exercise library", "Fast, clean UI", "Good Apple Watch integration"],
    weaknesses: ["No long-term plan structure", "No voice coaching", "No nutrition integration", "Doesn't adapt when you miss sessions", "Heavy gym-equipment focus"],
    saddieWins: ["Full adaptive training plan (not just next session)", "Real-time voice coaching", "Integrated meal planning", "Behavioral adaptation — learns your real schedule", "Works for home, gym, or equipment-free training"],
    whoShouldUse: "Use Fitbod if you're a consistent gym-goer who wants smart exercise suggestions. Use TRLActive if you want something that actually coaches you through a complete fitness journey.",
    cta: "Try TRLActive free — no credit card needed.",
  },
  {
    slug: "future",
    name: "Future",
    tagline: "Future app vs Saddie (TRLActive): Is $149/month worth it?",
    price: "$149/month",
    verdict: "Future offers real human coaches and is genuinely excellent — if you can afford it. At $149/month, it's out of reach for most people. TRLActive delivers most of the same outcomes at a fraction of the cost.",
    strengths: ["Real human coaches", "High accountability", "Personalized plans from certified trainers", "Apple Watch integration"],
    weaknesses: ["$149/month is expensive for most people", "Coach availability can be inconsistent", "No voice coaching during sessions", "No AI adaptation between check-ins"],
    saddieWins: ["Fraction of the cost", "Real-time in-session voice coaching (Future coaches aren't with you mid-workout)", "Instant adaptation — no waiting for check-in", "Always available — no scheduling required"],
    whoShouldUse: "Use Future if budget isn't a concern and you value the accountability of a human relationship. Use TRLActive if you want intelligent coaching that's always available and continuously adapts.",
    cta: "Get the coaching experience without the $149/month price tag.",
  },
  {
    slug: "freeletics",
    name: "Freeletics",
    tagline: "Freeletics vs Saddie (TRLActive): Which AI coach wins?",
    price: "$13–$40/month depending on plan",
    verdict: "Freeletics pioneered AI coaching in fitness and has a massive bodyweight exercise library. But its coaching model is dated compared to modern AI, and the intensity-first approach burns out beginners.",
    strengths: ["Large bodyweight exercise library", "Good for HIIT-style training", "Strong community features", "Long-established platform"],
    weaknesses: ["One-size-fits-all intensity burns out beginners", "No voice coaching", "Nutrition plan is separate (extra cost)", "Limited gym equipment integration", "Coaching model hasn't evolved much"],
    saddieWins: ["Adaptive intensity — doesn't grind everyone into the same brutal workouts", "Voice coaching built in", "Nutrition included", "Gym and home training, not just bodyweight HIIT"],
    whoShouldUse: "Use Freeletics if you love high-intensity bodyweight training and want a battle-tested platform. Use TRLActive for a more personalized, adaptive experience that works whether you have equipment or not.",
    cta: "Start training smarter — try TRLActive free.",
  },
  {
    slug: "myfitnesspal",
    name: "MyFitnessPal",
    tagline: "MyFitnessPal vs Saddie (TRLActive): Training + nutrition in one app",
    price: "$20/month or $80/year",
    verdict: "MyFitnessPal is the gold standard for calorie and macro tracking. But it's a nutrition app, not a training coach. TRLActive unifies both — and actively connects your training load to your nutrition targets.",
    strengths: ["Best food database in the industry", "Strong barcode scanner", "Huge user community", "Integrates with most fitness devices"],
    weaknesses: ["No training plan or workout coaching", "Nutrition targets are static — don't update based on training", "No voice coaching", "Workout logging is basic", "Two separate apps = two separate habits to maintain"],
    saddieWins: ["Training and nutrition in one system", "Nutrition targets update automatically based on your training load", "Voice-coached workouts", "AI-built training plan", "One app, not two"],
    whoShouldUse: "Use MyFitnessPal if nutrition tracking is your primary focus and you already have a training setup you love. Use TRLActive if you want training and nutrition to work together as one coached system.",
    cta: "Stop managing two apps — try TRLActive free.",
  },
  {
    slug: "peloton",
    name: "Peloton",
    tagline: "Peloton app vs Saddie (TRLActive): Do you need the hardware?",
    price: "$13/month (app only) or $44/month with hardware subscription",
    verdict: "Peloton's app content is high quality and its instructors are legitimately motivating. But it's content-first, not coaching-first. There's no personalization, no plan building, and no adaptation based on how you're actually doing.",
    strengths: ["World-class instructor content", "Great cycling and cardio classes", "Strong community and live features", "Works without Peloton hardware now"],
    weaknesses: ["No personalized training plan", "No adaptive coaching", "Strength training is generic classes, not structured programming", "No nutrition integration", "You follow the instructor — it doesn't follow you"],
    saddieWins: ["Builds and adapts your specific training plan", "Voice coaching that responds to your performance", "Nutrition planning included", "Strength programming with progressive overload", "Learns how you train and adjusts accordingly"],
    whoShouldUse: "Use Peloton if you love instructor-led classes and group energy, especially for cardio. Use TRLActive if you want a training plan that's built for you and adapts as you progress.",
    cta: "Get a plan built around you — try TRLActive free.",
  },
];

export function getCompetitor(slug: string): Competitor | undefined {
  return COMPETITORS.find((c) => c.slug === slug);
}
