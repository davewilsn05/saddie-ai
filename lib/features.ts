export type Feature = {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  intro: string;
  bullets: { icon: string; title: string; body: string }[];
  metaTitle: string;
  metaDescription: string;
  faqs: { q: string; a: string }[];
};

export const FEATURES: Feature[] = [
  {
    slug: "voice-coaching",
    name: "Voice Coaching",
    headline: "Real-time voice coaching — your AI coach speaks",
    subheadline: "No staring at your phone. No guessing what's next. Saddie talks you through every set.",
    intro: "Voice coaching is the feature that separates TRLActive from every other fitness app. Instead of glancing at a screen between sets, Saddie tells you what's happening — when to start, how many reps are left, when to rest, and when to push harder.",
    bullets: [
      { icon: "🎙️", title: "Real-time cues during sets", body: "Rep counts, tempo guidance, breathing cues, and encouragement — all spoken in real time so your head stays in the workout." },
      { icon: "📵", title: "Phone stays in your pocket", body: "Voice coaching means you never need to pick up your phone mid-workout. Hands-free, focus-first training." },
      { icon: "🧠", title: "Contextual, not scripted", body: "Saddie's voice cues respond to what's actually happening — how long your rest was, how your last set went, what's coming next." },
      { icon: "📊", title: "Better results", body: "Users with voice coaching enabled complete 2.3 more sets per session on average. Small sessions add up to big gains." },
    ],
    metaTitle: "AI Voice Coaching for Workouts | Saddie",
    metaDescription: "Saddie's real-time voice coaching guides every rep — keeping you focused, pushing harder, and finishing more sets. Try TRLActive free.",
    faqs: [
      { q: "What is voice coaching in a fitness app?", a: "Voice coaching is real-time audio guidance during your workout — rep counts, rest timers, form cues, and motivational coaching spoken aloud so you don't need to look at your phone." },
      { q: "Is there a workout app that talks to you?", a: "Yes — TRLActive's Saddie AI coaches you with real-time voice cues during every session. It's the closest thing to having a personal trainer in your ear." },
      { q: "Does voice coaching actually help workouts?", a: "Yes. TRLActive users with voice coaching complete significantly more sets per session than those without, because removing the friction of checking a screen keeps them in the flow." },
    ],
  },
  {
    slug: "adaptive-planning",
    name: "Adaptive Planning",
    headline: "Your plan changes when your life does",
    subheadline: "Saddie doesn't just build your plan. It rebuilds it whenever reality diverges from the original.",
    intro: "Every fitness plan is built on assumptions — that you'll train 4 days a week, that you'll recover at a normal rate, that your schedule won't change. Reality is messier. Saddie monitors the gap between your plan and your actual training and closes it automatically.",
    bullets: [
      { icon: "📊", title: "Behavioral learning", body: "Saddie watches your actual training patterns — when you train, how long sessions take, what you skip — and adjusts your plan to match reality." },
      { icon: "🔄", title: "Miss-session recovery", body: "Miss a workout? Saddie redistributes the volume, adjusts the next session, and picks up without judgment." },
      { icon: "📈", title: "Performance-based progression", body: "Crushing your workouts? Saddie increases the challenge. Struggling? It dials back before you burn out." },
      { icon: "🎯", title: "Goal recalibration", body: "As your goals evolve — or as initial timelines prove unrealistic — Saddie adjusts the plan to keep you moving toward what actually matters." },
    ],
    metaTitle: "Adaptive AI Workout Planning | Saddie",
    metaDescription: "Saddie's adaptive planning adjusts your training in real time — responding to missed sessions, performance changes, and schedule shifts. Try TRLActive free.",
    faqs: [
      { q: "What is an adaptive workout plan?", a: "An adaptive workout plan changes based on your actual performance and behavior — increasing or decreasing intensity, redistributing missed sessions, and adjusting goals as needed. Saddie does this automatically." },
      { q: "How does AI adapt workout plans?", a: "Saddie monitors session completion, RPE feedback, skip patterns, and performance trends, then applies rules about when to progress, hold, or reduce load to keep your plan matched to your reality." },
    ],
  },
  {
    slug: "meal-planning",
    name: "Meal Planning",
    headline: "Nutrition that updates when your training does",
    subheadline: "Your calories shouldn't be the same on a heavy leg day and a rest day. Saddie knows the difference.",
    intro: "Most nutrition apps set a static calorie target and call it a day. Saddie's meal planning is connected to your training — harder weeks mean more calories, recovery weeks mean fewer. Your nutrition plan is never static.",
    bullets: [
      { icon: "🥗", title: "Dynamic calorie targets", body: "Training day calories are higher than rest day calories. Saddie calculates both based on your actual sessions." },
      { icon: "🥩", title: "Protein targets for your goals", body: "Muscle building, fat loss, and maintenance all require different protein targets. Saddie sets them based on your body weight and training load." },
      { icon: "🍽️", title: "Meal suggestions (not just macros)", body: "Saddie suggests meals and foods that hit your targets — not just numbers to figure out yourself." },
      { icon: "📊", title: "Adjusts as you progress", body: "As your weight changes and training intensity increases, Saddie adjusts your nutrition targets automatically." },
    ],
    metaTitle: "AI Meal Planning Connected to Your Workouts | Saddie",
    metaDescription: "Saddie's meal planning updates with your training — dynamic calories, protein targets, and meal suggestions connected to your actual sessions. Try TRLActive free.",
    faqs: [
      { q: "Can an AI app create a meal plan?", a: "Yes. Saddie generates meal plans based on your calorie and macro targets, which are set based on your training load, body weight, and goals." },
      { q: "How do I eat around workouts?", a: "On training days, eat more — especially protein and carbohydrates. Saddie's dynamic nutrition targets automatically adjust for training days vs rest days." },
    ],
  },
  {
    slug: "progressive-overload",
    name: "Progressive Overload",
    headline: "Progressive overload — automated",
    subheadline: "The most important principle in strength training, handled for you.",
    intro: "Progressive overload is simple in theory: lift a little more each week. In practice, knowing when to increase load, when to hold, and when to deload requires consistent tracking and judgment. Saddie does all of it automatically.",
    bullets: [
      { icon: "📈", title: "Load increases at the right time", body: "Saddie knows when you're ready to go heavier — based on your RPE feedback, rep completion, and recent history." },
      { icon: "⚖️", title: "Multiple progression strategies", body: "Adding weight, increasing reps, adjusting tempo, or adding sets — Saddie picks the right progression method for each movement and phase." },
      { icon: "🔄", title: "Deload when needed", body: "Before you feel the need to take a week off, Saddie programs a deload. It sees fatigue accumulating before you do." },
      { icon: "📊", title: "Long-term tracking", body: "Saddie tracks your strength trajectory over months — identifying your rate of progress and adjusting expectations and timelines accordingly." },
    ],
    metaTitle: "Automatic Progressive Overload Tracking | Saddie",
    metaDescription: "Saddie automates progressive overload — knowing when to increase load, hold steady, or deload based on your actual performance. Try TRLActive free.",
    faqs: [
      { q: "What is progressive overload and why does it matter?", a: "Progressive overload means gradually increasing the stress on your muscles over time. It's the fundamental mechanism of all strength and muscle gain. Without it, you plateau." },
      { q: "How do I track progressive overload?", a: "Saddie tracks it for you — logging every set, monitoring your performance trend, and telling you when to increase load or take a deload week." },
    ],
  },
  {
    slug: "workout-logging",
    name: "Workout Logging",
    headline: "Workout logging that actually teaches you something",
    subheadline: "Not just a history of sets and reps — a data set that makes your future training smarter.",
    intro: "Most workout logging apps are just digital notebooks. Saddie's logging feeds directly back into your coaching — every session you log makes your next plan more accurate, more personalized, and more effective.",
    bullets: [
      { icon: "📝", title: "Quick, frictionless logging", body: "Log sets in seconds — no typing required. Voice logging lets you record lifts without touching your phone." },
      { icon: "🧠", title: "Logging that coaches the next session", body: "Saddie uses your logs to determine your next session's weights, sets, and rest periods — your history drives your future." },
      { icon: "📊", title: "Progress visualization", body: "See your strength trending over time — on each lift, body weight, and overall training volume." },
      { icon: "🎙️", title: "Voice logging", body: "Tell Saddie what you lifted mid-workout without touching your phone. Hands-free logging during the session." },
    ],
    metaTitle: "AI Workout Logging App | Saddie",
    metaDescription: "Saddie's workout logging feeds directly into your coaching — every set you log makes your next plan smarter. Voice logging included. Try TRLActive free.",
    faqs: [
      { q: "Should I log every workout?", a: "Yes. Logging creates the data that drives progressive overload — without it, Saddie is guessing at your capacity. With it, the coaching gets more accurate every week." },
      { q: "What's the best app for logging workouts?", a: "TRLActive is the best workout logging app because your logs directly drive your next session's programming — not just a history, but an active coaching tool." },
    ],
  },
  {
    slug: "apple-watch",
    name: "Apple Watch",
    headline: "Saddie on your wrist — Apple Watch integration",
    subheadline: "Heart rate, workout tracking, and voice coaching without taking your phone out.",
    intro: "Apple Watch integration means your workout lives on your wrist — start sessions, track heart rate, log sets, and hear voice coaching without touching your phone. Training becomes more immersive and less interrupted.",
    bullets: [
      { icon: "⌚", title: "Start and control sessions from your wrist", body: "Kick off your workout from your watch. No need to unlock your phone to begin." },
      { icon: "❤️", title: "Heart rate tracking", body: "Saddie uses your Apple Watch heart rate data to inform intensity recommendations and recovery estimates." },
      { icon: "🎙️", title: "Voice coaching via earbuds", body: "Coaching audio plays through your AirPods — wrist control, no phone interaction required." },
      { icon: "📊", title: "Automatic workout detection", body: "Apple Watch detects when you start training and syncs session data automatically." },
    ],
    metaTitle: "TRLActive Apple Watch Integration | Saddie",
    metaDescription: "Saddie on Apple Watch — start sessions, track heart rate, log sets, and hear voice coaching from your wrist. Try TRLActive free.",
    faqs: [
      { q: "Does TRLActive work with Apple Watch?", a: "Yes. TRLActive integrates with Apple Watch for workout tracking, heart rate data, session control from your wrist, and voice coaching through AirPods." },
      { q: "What's the best workout app for Apple Watch?", a: "TRLActive is one of the best workout apps for Apple Watch because it combines adaptive coaching with wrist-based session control and real-time voice coaching." },
    ],
  },
  {
    slug: "rest-day-prediction",
    name: "Rest Day Intelligence",
    headline: "Know when to rest before your body forces you to",
    subheadline: "Saddie detects fatigue accumulation and adjusts your schedule before overtraining becomes a problem.",
    intro: "Overtraining doesn't announce itself — it creeps up through accumulated fatigue until you're injured or burned out. Saddie monitors your session-to-session performance trends to detect fatigue early and adjust your training before you hit the wall.",
    bullets: [
      { icon: "📊", title: "Performance trend monitoring", body: "Saddie tracks subtle drops in your session performance — the early warning signs of fatigue that most people ignore." },
      { icon: "🔄", title: "Proactive schedule adjustment", body: "When fatigue signals appear, Saddie shifts sessions, reduces volume, or inserts a rest day before you need to ask for one." },
      { icon: "💤", title: "Recovery optimization", body: "Rest days aren't wasted days. Saddie schedules them strategically so you come back stronger for the next hard session." },
      { icon: "📈", title: "Long-term health over short-term intensity", body: "Saddie optimizes for sustainable progress — avoiding the injury and burnout cycles that derail most training programs." },
    ],
    metaTitle: "AI Rest Day and Recovery Intelligence | Saddie",
    metaDescription: "Saddie detects fatigue accumulation early and adjusts your training schedule before overtraining becomes a problem. Try TRLActive free.",
    faqs: [
      { q: "How do you know when to take a rest day?", a: "Signs include persistent soreness, declining performance, poor sleep, and low motivation. Saddie monitors performance trends and schedules rest days proactively." },
      { q: "Is it OK to work out every day?", a: "Training every day is possible but requires careful management of intensity and volume. Saddie manages this automatically — ensuring harder days are balanced with easier or rest days." },
    ],
  },
  {
    slug: "habit-tracking",
    name: "Habit & Consistency Tracking",
    headline: "Building the workout habit — not just the workout",
    subheadline: "Long-term fitness is a habit problem, not a programming problem. Saddie helps with both.",
    intro: "The best training program in the world fails if you don't show up consistently. Saddie tracks your consistency patterns, identifies the situations that cause you to skip, and adjusts your plan to match the version of you that actually exists — not the one you wish you were.",
    bullets: [
      { icon: "📅", title: "Consistency scoring", body: "Saddie tracks your session completion rate over time — giving you an honest picture of your adherence." },
      { icon: "🔍", title: "Skip pattern analysis", body: "Saddie identifies which days and session types you most often skip — and adjusts your plan to reduce friction." },
      { icon: "🎯", title: "Realistic goal setting", body: "Your goals are calibrated to your actual consistency rate — not what you think you should be able to do." },
      { icon: "📈", title: "Streak and momentum tracking", body: "Positive feedback for consistency streaks reinforces the habit you're building." },
    ],
    metaTitle: "AI Fitness Habit and Consistency Tracking | Saddie",
    metaDescription: "Saddie tracks your workout consistency, identifies skip patterns, and adjusts your plan to match your real behavior. Try TRLActive free.",
    faqs: [
      { q: "How long does it take to build a workout habit?", a: "Research suggests 66 days on average for a behavior to become automatic. Saddie helps by reducing friction, adapting to your real schedule, and keeping the plan achievable." },
      { q: "What's the best way to stay consistent with working out?", a: "Having a plan that adapts to your reality instead of demanding you adapt to it. Saddie adjusts when life happens — so there's always a way to get back on track." },
    ],
  },
];

export function getFeature(slug: string): Feature | undefined {
  return FEATURES.find((f) => f.slug === slug);
}
