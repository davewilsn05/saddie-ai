export type Goal = {
  slug: string;
  headline: string;
  subheadline: string;
  intro: string;
  bullets: { icon: string; title: string; body: string }[];
  quote: string;
  cta: string;
  metaTitle: string;
  metaDescription: string;
};

export const GOALS: Goal[] = [
  {
    slug: "weight-loss",
    headline: "AI coaching built for weight loss",
    subheadline: "Not another calorie counter — a coach that connects your workouts and your eating.",
    intro: "Most weight loss apps track calories and call it coaching. They don't build you a training plan. They don't adapt when your week goes sideways. They don't talk to you mid-workout when you want to quit. Saddie does all three.",
    bullets: [
      { icon: "🏋️", title: "Training that burns fat, builds muscle", body: "Saddie programs the right balance of strength and cardio for fat loss — not just cardio-only plans that leave you skinny-fat." },
      { icon: "🥗", title: "Nutrition targets that update with your training", body: "On high-intensity days your calorie target increases automatically. Rest days it adjusts down. Your food plan isn't static — it follows your training." },
      { icon: "📈", title: "Adaptation when weight loss stalls", body: "Plateaus happen. Saddie detects them from your session data and adjusts before you even notice — changing volume, session pacing, or macros." },
      { icon: "🎙️", title: "A coach with you every session", body: "Voice coaching keeps you working harder and longer without feeling alone. Accountability built into every rep." },
    ],
    quote: "I lost 22 lbs in 4 months. The biggest difference was that TRLActive actually changed my plan when I needed it to — not when I remembered to update it.",
    cta: "Start your weight loss plan — free with TRLActive",
    metaTitle: "Best AI Fitness App for Weight Loss | Saddie",
    metaDescription: "Saddie builds and adapts your weight loss training plan in real time — connecting workouts, nutrition, and coaching in one AI system. Try TRLActive free.",
  },
  {
    slug: "muscle-building",
    headline: "Build muscle faster with AI coaching",
    subheadline: "Progressive overload, auto-managed. No spreadsheets. No guessing.",
    intro: "Building muscle requires progressive overload applied consistently over months. Most people fail not because they don't work hard enough — but because their program stops challenging them, or life interrupts their routine and they never get back on track. Saddie solves both.",
    bullets: [
      { icon: "💪", title: "Automatic progressive overload", body: "Saddie tracks your performance and increases load at the right time — not too fast (injury) and not too slow (plateau). You never have to calculate it yourself." },
      { icon: "🔄", title: "Program recalibration after breaks", body: "Took a week off? Saddie rebuilds your program from where you actually are, not where you were. No starting over." },
      { icon: "🥩", title: "Protein and macro targets for your goals", body: "Muscle growth requires eating right. Saddie's nutrition planning sets protein targets based on your body weight and training load — and adjusts as both change." },
      { icon: "📊", title: "Periodization without the complexity", body: "Phases of volume, intensity, and deload are programmed automatically. Saddie handles the science so you can focus on the training." },
    ],
    quote: "I've been lifting for 3 years and always managed my own programming. Using TRLActive, my bench went from 185 to 225 in 12 weeks. The auto-progression actually pushes me harder than I push myself.",
    cta: "Build your muscle plan — free with TRLActive",
    metaTitle: "Best AI App for Building Muscle | Saddie",
    metaDescription: "Saddie automates progressive overload, manages periodization, and adapts your muscle building plan based on actual performance. Try TRLActive free.",
  },
  {
    slug: "beginners",
    headline: "Start your fitness journey the right way",
    subheadline: "No gym experience needed. No jargon. Just a plan that works for where you actually are.",
    intro: "Most fitness apps are designed for people who already work out. They assume you know what RPE means, how to deadlift, and what 'progressive overload' is. If you're just starting out, that's overwhelming. Saddie was built to meet you exactly where you are.",
    bullets: [
      { icon: "👋", title: "Plain-language everything", body: "No jargon. Exercise instructions are clear, voice cues guide you through every movement, and nothing assumes you already know what you're doing." },
      { icon: "🏠", title: "Train anywhere — no gym required", body: "Start at home with bodyweight. Add equipment when you're ready. Saddie builds around what you have, not what a gym assumes you have." },
      { icon: "🐣", title: "Beginner-paced progression", body: "Saddie starts you at a sustainable level and increases intensity gradually. No week-1 burnout." },
      { icon: "💬", title: "Voice coaching to guide every session", body: "Real-time voice cues mean you're never confused mid-workout. It's like having a patient coach next to you." },
    ],
    quote: "I'd never worked out before. TRLActive felt like having a trainer who wasn't judging me for not knowing things. Three months later I'm going to the gym three times a week and actually enjoying it.",
    cta: "Start beginner-friendly training — free with TRLActive",
    metaTitle: "Best Fitness App for Complete Beginners | Saddie",
    metaDescription: "TRLActive and Saddie guide complete beginners through their first workouts with voice coaching, beginner-paced progression, and plain-language instructions. Free to start.",
  },
  {
    slug: "busy-people",
    headline: "Stay fit when your schedule never cooperates",
    subheadline: "Training plans that adapt to your real life — not the idealized version of it.",
    intro: "Every fitness app assumes you have 5 consistent hours a week, the same schedule every week, and a gym nearby. If that's not you — you're busy, you travel, you have kids, your hours shift — most apps set you up to fail. Saddie is designed for the real world.",
    bullets: [
      { icon: "⏱️", title: "Sessions as short as 20 minutes", body: "When your window is small, Saddie compresses your training into the time you have — without cutting what matters." },
      { icon: "📅", title: "Flexible scheduling that learns your patterns", body: "Saddie figures out when you actually train — not when you said you would — and plans around that reality." },
      { icon: "✈️", title: "Travel mode: hotel room workouts", body: "Away from your gym? Switch to travel mode for equipment-free sessions that keep your training on track." },
      { icon: "🔁", title: "No-guilt reentry after missed weeks", body: "Life happened. When you're back, Saddie picks up where you left off with a plan that accounts for the gap — not one that pretends it didn't happen." },
    ],
    quote: "I work 60-hour weeks. I've tried every fitness app. TRLActive is the only one that doesn't make me feel behind when I miss two sessions. It just adapts.",
    cta: "Build a plan that fits your real life — free with TRLActive",
    metaTitle: "Best Fitness App for Busy People | Saddie",
    metaDescription: "TRLActive and Saddie adapt to your actual schedule — short sessions, travel mode, missed-session recovery. Fitness coaching built for real life, not ideal conditions.",
  },
  {
    slug: "runners",
    headline: "AI coaching for runners who also lift",
    subheadline: "Stop choosing between cardio fitness and strength. Saddie programs both.",
    intro: "Most strength apps treat running as the enemy of gains. Most running apps treat the weight room like an afterthought. If you want to be a complete athlete — strong and fit — you need a coach that understands both. That's what Saddie was built to do.",
    bullets: [
      { icon: "🏃", title: "Run and lift without conflicting each other", body: "Saddie coordinates your running and strength sessions to minimize interference — periodizing both so you peak at the right time." },
      { icon: "📉", title: "Strength for injury prevention", body: "Hip, glute, and core strength work that reduces running injuries — programmed automatically alongside your runs." },
      { icon: "🥗", title: "Fueling for high-mileage weeks", body: "Higher run volume means higher calorie needs. Saddie's nutrition planning adjusts automatically when your weekly mileage increases." },
      { icon: "🎙️", title: "Voice coaching at the gym, not on the run", body: "Saddie coaches your strength sessions with real-time voice cues — so your runs stay quiet and your gym time stays focused." },
    ],
    quote: "I'd been running for years but always skipped the gym. TRLActive gave me a strength plan that actually worked around my marathon training. PR'd by 4 minutes.",
    cta: "Start your run + lift plan — free with TRLActive",
    metaTitle: "Best Fitness App for Runners Who Lift | Saddie",
    metaDescription: "Saddie programs running and strength training together — coordinated periodization, injury prevention lifting, and nutrition that adapts to your mileage. Try TRLActive free.",
  },
];

export function getGoal(slug: string): Goal | undefined {
  return GOALS.find((g) => g.slug === slug);
}
