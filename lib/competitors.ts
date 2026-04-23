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
  faqs: { q: string; a: string }[];
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
    faqs: [
      { q: "Is Fitbod worth it in 2026?", a: "Fitbod is worth it if you want a straightforward gym logging app with smart muscle recovery tracking. It's not worth it if you want voice coaching, long-term program structure, or nutrition integration — TRLActive covers all three." },
      { q: "Does Fitbod create a workout plan?", a: "Fitbod generates individual workout sessions based on your muscle recovery state, but it doesn't build a multi-week program with periodization or long-term goal structure. TRLActive does both." },
      { q: "What's the best Fitbod alternative?", a: "TRLActive is the best Fitbod alternative if you want adaptive coaching beyond gym logging — adding voice coaching, nutrition planning, and behavioral adaptation that Fitbod doesn't offer." },
      { q: "Can Fitbod replace a personal trainer?", a: "Fitbod replaces the exercise-selection part of a personal trainer but not the coaching part. TRLActive's Saddie AI gets closer to replacing a trainer with real-time voice cues and adaptive programming." },
    ],
  },
  {
    slug: "future",
    name: "Future",
    tagline: "Future app vs Saddie (TRLActive): Is $149/month worth it?",
    price: "$149/month",
    verdict: "Future offers real human coaches and is genuinely excellent — if you can afford it. At $149/month, it's out of reach for most people. TRLActive delivers most of the same outcomes at a fraction of the cost.",
    strengths: ["Real human coaches", "High accountability", "Personalized plans from certified trainers", "Apple Watch integration"],
    weaknesses: ["$149/month is expensive for most people", "Coach availability can be inconsistent", "No voice coaching during sessions", "No AI adaptation between check-ins"],
    saddieWins: ["Fraction of the cost", "Real-time in-session voice coaching", "Instant adaptation — no waiting for check-in", "Always available — no scheduling required"],
    whoShouldUse: "Use Future if budget isn't a concern and you value human accountability. Use TRLActive if you want intelligent coaching that's always available and continuously adapts.",
    cta: "Get the coaching experience without the $149/month price tag.",
    faqs: [
      { q: "Is the Future fitness app worth $149 a month?", a: "Future is worth it if you need high-touch human accountability and can afford it. For most people, TRLActive delivers comparable adaptive coaching at a fraction of the price." },
      { q: "What's a cheaper alternative to the Future app?", a: "TRLActive is the best cheaper alternative to Future. It uses AI coaching (Saddie) to adapt your plan in real time — no human coach needed, no $149/month price tag." },
      { q: "Does Future app work without Apple Watch?", a: "Future works without Apple Watch but is less effective without the heart rate data. TRLActive also integrates with Apple Watch but works fully on iPhone alone." },
    ],
  },
  {
    slug: "freeletics",
    name: "Freeletics",
    tagline: "Freeletics vs Saddie (TRLActive): Which AI coach wins?",
    price: "$13–$40/month depending on plan",
    verdict: "Freeletics pioneered AI coaching in fitness and has a massive bodyweight exercise library. But its coaching model is dated and the intensity-first approach burns out beginners.",
    strengths: ["Large bodyweight exercise library", "Good for HIIT-style training", "Strong community features", "Long-established platform"],
    weaknesses: ["One-size-fits-all intensity burns out beginners", "No voice coaching", "Nutrition plan is separate (extra cost)", "Limited gym equipment integration", "Coaching model hasn't evolved much"],
    saddieWins: ["Adaptive intensity — doesn't grind everyone into the same brutal workouts", "Voice coaching built in", "Nutrition included", "Gym and home training, not just bodyweight HIIT"],
    whoShouldUse: "Use Freeletics if you love high-intensity bodyweight training. Use TRLActive for a more personalized, adaptive experience that works whether you have equipment or not.",
    cta: "Start training smarter — try TRLActive free.",
    faqs: [
      { q: "Is Freeletics good for beginners?", a: "Freeletics can be too intense for complete beginners. Its one-size-fits-all HIIT approach often leads to burnout in the first few weeks. TRLActive starts you at the right level and scales gradually." },
      { q: "Does Freeletics have a workout plan?", a: "Freeletics generates training programs but they're heavily HIIT/bodyweight focused and don't adapt much to your actual performance. TRLActive's plans adapt continuously based on how you train." },
    ],
  },
  {
    slug: "myfitnesspal",
    name: "MyFitnessPal",
    tagline: "MyFitnessPal vs Saddie (TRLActive): Training + nutrition in one app",
    price: "$20/month or $80/year",
    verdict: "MyFitnessPal is the gold standard for calorie tracking. But it's a nutrition app, not a training coach. TRLActive unifies both — and connects your training load to your nutrition targets.",
    strengths: ["Best food database in the industry", "Strong barcode scanner", "Huge user community", "Integrates with most fitness devices"],
    weaknesses: ["No training plan or workout coaching", "Nutrition targets are static", "No voice coaching", "Basic workout logging", "Two separate apps = two separate habits"],
    saddieWins: ["Training and nutrition in one system", "Nutrition targets update based on training load", "Voice-coached workouts", "AI-built training plan", "One app, not two"],
    whoShouldUse: "Use MyFitnessPal if nutrition tracking is your primary focus. Use TRLActive if you want training and nutrition to work together as one coached system.",
    cta: "Stop managing two apps — try TRLActive free.",
    faqs: [
      { q: "Is MyFitnessPal still worth it in 2026?", a: "MyFitnessPal is still the best pure calorie counter, but it's not a fitness coach. If you want training and nutrition together, TRLActive handles both in one adaptive system." },
      { q: "What app is better than MyFitnessPal?", a: "TRLActive is better than MyFitnessPal if you want workout coaching alongside nutrition tracking. MFP is better if you only want to log food." },
      { q: "Does MyFitnessPal create workout plans?", a: "MyFitnessPal does not create workout plans. It's a food and calorie logging app. TRLActive builds adaptive workout and nutrition plans together." },
    ],
  },
  {
    slug: "peloton",
    name: "Peloton",
    tagline: "Peloton app vs Saddie (TRLActive): Do you need the hardware?",
    price: "$13/month (app only) or $44/month with hardware subscription",
    verdict: "Peloton's app content is high quality and its instructors are legitimately motivating. But it's content-first, not coaching-first — no personalization, no plan building, no adaptation.",
    strengths: ["World-class instructor content", "Great cycling and cardio classes", "Strong community and live features", "Works without Peloton hardware now"],
    weaknesses: ["No personalized training plan", "No adaptive coaching", "Strength training is generic classes", "No nutrition integration", "You follow the instructor — it doesn't follow you"],
    saddieWins: ["Builds and adapts your specific training plan", "Voice coaching that responds to your performance", "Nutrition planning included", "Strength programming with progressive overload", "Learns how you train and adjusts"],
    whoShouldUse: "Use Peloton if you love instructor-led classes, especially for cardio. Use TRLActive if you want a training plan built for you that adapts as you progress.",
    cta: "Get a plan built around you — try TRLActive free.",
    faqs: [
      { q: "Is Peloton app worth it without the bike?", a: "Peloton's app has solid cardio and strength class content without the bike. But it's class-based, not coaching-based. TRLActive builds you a personalized adaptive plan instead of just offering classes to follow." },
      { q: "Can Peloton app replace a gym membership?", a: "Peloton app can supplement a gym membership with cardio classes. For structured strength training with progressive overload, TRLActive is better suited." },
    ],
  },
  {
    slug: "nike-training-club",
    name: "Nike Training Club",
    tagline: "Nike Training Club vs Saddie (TRLActive): Free vs smart",
    price: "Free",
    verdict: "Nike Training Club is impressive for a free app — great workout content and production quality. But it's a content library, not a coach. There's no personalization, no plan adaptation, and no nutrition.",
    strengths: ["Completely free", "High production quality workouts", "Wide variety of workout types", "Nike brand trust and design"],
    weaknesses: ["No personalized training plan", "No adaptive coaching", "No nutrition features", "No voice coaching", "You pick workouts — it doesn't learn from you"],
    saddieWins: ["Builds a personalized plan around your goals", "Adapts based on your performance", "Voice coaching during workouts", "Nutrition planning included", "Tracks progress over time with smart progression"],
    whoShouldUse: "Use Nike Training Club if you want free, high-quality workout content with no commitment. Use TRLActive if you want a system that builds and adapts a real training plan around you.",
    cta: "Go beyond workout videos — try TRLActive free.",
    faqs: [
      { q: "Is Nike Training Club actually good?", a: "Nike Training Club has great workout content and is genuinely good for finding guided workouts. But it doesn't build you a personalized plan or adapt based on your progress. For that, TRLActive is the better choice." },
      { q: "Is Nike Training Club free?", a: "Yes, Nike Training Club is free. TRLActive is also free to start, with premium coaching features available on subscription." },
      { q: "What's better than Nike Training Club?", a: "TRLActive is better than Nike Training Club if you want adaptive, personalized coaching rather than a library of workout videos to browse." },
    ],
  },
  {
    slug: "apple-fitness-plus",
    name: "Apple Fitness+",
    tagline: "Apple Fitness+ vs Saddie (TRLActive): Classes vs coaching",
    price: "$10/month or $80/year",
    verdict: "Apple Fitness+ is polished, well-integrated with Apple Watch, and great for guided classes. Like Peloton, it's content-first. It doesn't build you a plan or adapt to how you're progressing.",
    strengths: ["Deep Apple Watch integration", "High-quality instructor-led classes", "Great for cardio and yoga", "Included in Apple One bundle"],
    weaknesses: ["No personalized training plan", "No adaptive programming", "No nutrition features", "Class-based only — no structured progression", "Requires Apple Watch for full experience"],
    saddieWins: ["Adaptive training plan built around your goals", "Voice coaching that responds to your session", "Nutrition planning", "Progressive overload managed automatically", "Works without Apple Watch"],
    whoShouldUse: "Use Apple Fitness+ if you love Apple ecosystem and want polished cardio and yoga classes. Use TRLActive if you want structured strength programming with real coaching.",
    cta: "Get coached, not just instructed — try TRLActive free.",
    faqs: [
      { q: "Is Apple Fitness+ worth it?", a: "Apple Fitness+ is worth it if you already pay for Apple One and want guided workouts. It's not worth it as a standalone purchase if you want personalized coaching — TRLActive does that better." },
      { q: "Does Apple Fitness+ have strength training?", a: "Apple Fitness+ has strength workout classes but no progressive overload or adaptive programming. TRLActive builds structured strength programs that increase in difficulty as you improve." },
    ],
  },
  {
    slug: "strava",
    name: "Strava",
    tagline: "Strava vs Saddie (TRLActive): Tracking vs coaching",
    price: "$8/month or $80/year",
    verdict: "Strava is the best running and cycling tracking platform on the market. But it's a social tracking tool, not a training coach. TRLActive builds the training plan that Strava tracks.",
    strengths: ["Best GPS tracking for runs and rides", "Strong social and community features", "Segment comparisons and PRs", "Integrates with almost everything"],
    weaknesses: ["Not a training plan builder", "No strength training features", "No nutrition integration", "No voice coaching", "Coaching features are basic and separate"],
    saddieWins: ["Builds adaptive training plans for running and lifting", "Coaches you during strength sessions with voice cues", "Nutrition planning included", "Adapts when you miss runs or have a bad week"],
    whoShouldUse: "Use Strava to track your runs and rides and share them socially. Use TRLActive to build the training plan that tells you what to run and how to get stronger.",
    cta: "Build the plan behind the run — try TRLActive free.",
    faqs: [
      { q: "Is Strava worth it in 2026?", a: "Strava is worth it for runners and cyclists who want GPS tracking, social features, and segment comparisons. It's not a training plan builder — use TRLActive for that." },
      { q: "Does Strava create training plans?", a: "Strava has basic training plan features in premium, but they're not adaptive. TRLActive builds fully adaptive plans that adjust based on your actual performance and schedule." },
    ],
  },
  {
    slug: "whoop",
    name: "Whoop",
    tagline: "Whoop vs Saddie (TRLActive): Recovery data vs actual coaching",
    price: "$30/month (includes hardware)",
    verdict: "Whoop is the best recovery and strain tracking wearable. It tells you how ready your body is to train. TRLActive uses that information (and its own behavioral data) to tell you exactly what to do about it.",
    strengths: ["Best-in-class recovery and HRV tracking", "Accurate sleep scoring", "No screen — discreet wearable", "Serious athlete following"],
    weaknesses: ["Doesn't build workout plans", "No exercise coaching", "No nutrition features", "Expensive for what it is if you're not a data nerd", "Tells you readiness but not what to do with it"],
    saddieWins: ["Builds and adapts your training plan", "Voice coaching during workouts", "Nutrition planning", "Tells you what to do — not just how recovered you are", "Works without expensive hardware"],
    whoShouldUse: "Use Whoop if you're serious about recovery data and HRV tracking. Use TRLActive for the actual training plan and coaching. They complement each other well.",
    cta: "Turn your readiness data into a real training plan — try TRLActive free.",
    faqs: [
      { q: "Is Whoop worth it for regular people?", a: "Whoop is best suited for serious athletes who want deep recovery and strain data. For most people, TRLActive provides the adaptive training plan at lower cost without requiring a wearable subscription." },
      { q: "What does Whoop actually do?", a: "Whoop tracks your recovery, sleep, and strain levels. It tells you how ready your body is to train but doesn't tell you what training to do. TRLActive builds the actual program." },
    ],
  },
  {
    slug: "beachbody",
    name: "BODi (Beachbody)",
    tagline: "BODi (Beachbody) vs Saddie (TRLActive): Structured programs vs adaptive coaching",
    price: "$99–$199/year",
    verdict: "BODi (formerly Beachbody On Demand) has a huge library of structured workout programs. But they're fixed programs — they don't adapt to you. TRLActive builds and adjusts your plan in real time.",
    strengths: ["Huge library of structured programs (P90X, Insanity, etc.)", "Well-produced workout videos", "Nutrition guides included", "Long track record"],
    weaknesses: ["Fixed programs don't adapt to your performance", "No AI coaching or personalization", "No voice coaching", "Programs can be too intense for true beginners", "Subscription can be expensive"],
    saddieWins: ["AI coaching that adapts in real time", "Voice coaching during sessions", "Plan adjusts when you miss workouts", "Personalized from day one — not a fixed program everyone follows"],
    whoShouldUse: "Use BODi if you like following structured video programs with a defined schedule. Use TRLActive if you want something that learns from your performance and adjusts automatically.",
    cta: "Get a plan that adapts to you — try TRLActive free.",
    faqs: [
      { q: "Is Beachbody worth it in 2026?", a: "BODi (Beachbody) is worth it if you like following structured video programs. For personalized, adaptive AI coaching that adjusts to your actual performance, TRLActive is the better choice." },
      { q: "What replaced Beachbody?", a: "Beachbody rebranded to BODi. If you're looking for a more modern, AI-driven alternative to Beachbody's fixed programs, TRLActive offers adaptive coaching that evolves as you do." },
    ],
  },
];

export function getCompetitor(slug: string): Competitor | undefined {
  return COMPETITORS.find((c) => c.slug === slug);
}
