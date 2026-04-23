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
  faqs: { q: string; a: string }[];
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
      { icon: "📈", title: "Adaptation when weight loss stalls", body: "Plateaus happen. Saddie detects them from your session data and adjusts before you even notice." },
      { icon: "🎙️", title: "A coach with you every session", body: "Voice coaching keeps you working harder and longer without feeling alone. Accountability built into every rep." },
    ],
    quote: "I lost 22 lbs in 4 months. The biggest difference was that TRLActive actually changed my plan when I needed it to — not when I remembered to update it.",
    cta: "Start your weight loss plan — free with TRLActive",
    metaTitle: "Best AI Fitness App for Weight Loss | Saddie",
    metaDescription: "Saddie builds and adapts your weight loss training plan in real time — connecting workouts, nutrition, and coaching in one AI system. Try TRLActive free.",
    faqs: [
      { q: "Can an AI app help me lose weight?", a: "Yes. AI fitness apps like TRLActive help with weight loss by building personalized training plans, adapting when you miss sessions, and connecting your nutrition targets to your actual training load — all factors that matter for sustainable fat loss." },
      { q: "How long does it take to lose weight with an AI trainer?", a: "Most TRLActive users see noticeable changes within 4-6 weeks when following the plan consistently. The adaptive coaching means the plan gets more effective over time, not less." },
      { q: "Is strength training or cardio better for weight loss?", a: "Both are effective, but strength training preserves muscle while you lose fat — giving you a leaner result. Saddie programs a balance of both, biased toward strength, and adjusts the ratio based on your progress." },
    ],
  },
  {
    slug: "muscle-building",
    headline: "Build muscle faster with AI coaching",
    subheadline: "Progressive overload, auto-managed. No spreadsheets. No guessing.",
    intro: "Building muscle requires progressive overload applied consistently over months. Most people fail not because they don't work hard enough — but because their program stops challenging them. Saddie solves both.",
    bullets: [
      { icon: "💪", title: "Automatic progressive overload", body: "Saddie tracks your performance and increases load at the right time — not too fast (injury) and not too slow (plateau)." },
      { icon: "🔄", title: "Program recalibration after breaks", body: "Took a week off? Saddie rebuilds your program from where you actually are, not where you were." },
      { icon: "🥩", title: "Protein and macro targets for your goals", body: "Muscle growth requires eating right. Saddie's nutrition planning sets protein targets based on your body weight and training load." },
      { icon: "📊", title: "Periodization without the complexity", body: "Phases of volume, intensity, and deload are programmed automatically. Saddie handles the science." },
    ],
    quote: "My bench went from 185 to 225 in 12 weeks. The auto-progression actually pushes me harder than I push myself.",
    cta: "Build your muscle plan — free with TRLActive",
    metaTitle: "Best AI App for Building Muscle | Saddie",
    metaDescription: "Saddie automates progressive overload, manages periodization, and adapts your muscle building plan based on actual performance. Try TRLActive free.",
    faqs: [
      { q: "How much muscle can you gain in a month with AI coaching?", a: "Realistic muscle gain is 1-2 lbs per month for most people. AI coaching helps maximize that by ensuring progressive overload is applied consistently and nutrition targets support growth." },
      { q: "Do I need a gym to build muscle with TRLActive?", a: "No. Saddie builds effective muscle-building programs for home gyms, dumbbells-only setups, and full gym environments. You just tell it what equipment you have." },
      { q: "What's the best workout split for building muscle?", a: "The best split is the one you'll actually follow. Saddie determines your optimal split based on your schedule, recovery, and goals — typically upper/lower or push/pull/legs for most people." },
    ],
  },
  {
    slug: "beginners",
    headline: "Start your fitness journey the right way",
    subheadline: "No gym experience needed. No jargon. Just a plan that works for where you actually are.",
    intro: "Most fitness apps are designed for people who already work out. Saddie was built to meet you exactly where you are.",
    bullets: [
      { icon: "👋", title: "Plain-language everything", body: "No jargon. Exercise instructions are clear, voice cues guide you through every movement." },
      { icon: "🏠", title: "Train anywhere — no gym required", body: "Start at home with bodyweight. Add equipment when you're ready." },
      { icon: "🐣", title: "Beginner-paced progression", body: "Saddie starts you at a sustainable level and increases intensity gradually. No week-1 burnout." },
      { icon: "💬", title: "Voice coaching to guide every session", body: "Real-time voice cues mean you're never confused mid-workout." },
    ],
    quote: "I'd never worked out before. Three months later I'm going to the gym three times a week and actually enjoying it.",
    cta: "Start beginner-friendly training — free with TRLActive",
    metaTitle: "Best Fitness App for Complete Beginners | Saddie",
    metaDescription: "TRLActive and Saddie guide complete beginners with voice coaching, beginner-paced progression, and plain-language instructions. Free to start.",
    faqs: [
      { q: "What's the best workout app for someone who has never exercised?", a: "TRLActive is designed for complete beginners — it starts you at the right pace, explains everything in plain language, and uses voice coaching so you're never confused about what to do next." },
      { q: "How many days a week should a beginner work out?", a: "2-3 days per week is ideal for beginners. Saddie builds your plan around what you can realistically commit to, not what an ideal schedule would look like." },
      { q: "Do I need equipment to start working out as a beginner?", a: "No equipment is needed to start. Saddie builds effective bodyweight programs for beginners, with options to add equipment as you progress." },
    ],
  },
  {
    slug: "busy-people",
    headline: "Stay fit when your schedule never cooperates",
    subheadline: "Training plans that adapt to your real life — not the idealized version of it.",
    intro: "Every fitness app assumes you have 5 consistent hours a week. If that's not you — you're busy, you travel, you have kids — most apps set you up to fail. Saddie is designed for the real world.",
    bullets: [
      { icon: "⏱️", title: "Sessions as short as 20 minutes", body: "When your window is small, Saddie compresses your training into the time you have." },
      { icon: "📅", title: "Flexible scheduling that learns your patterns", body: "Saddie figures out when you actually train and plans around that reality." },
      { icon: "✈️", title: "Travel mode: hotel room workouts", body: "Away from your gym? Switch to travel mode for equipment-free sessions." },
      { icon: "🔁", title: "No-guilt reentry after missed weeks", body: "When you're back, Saddie picks up where you left off with a plan that accounts for the gap." },
    ],
    quote: "I work 60-hour weeks. TRLActive is the only app that doesn't make me feel behind when I miss two sessions. It just adapts.",
    cta: "Build a plan that fits your real life — free with TRLActive",
    metaTitle: "Best Fitness App for Busy People | Saddie",
    metaDescription: "TRLActive and Saddie adapt to your actual schedule — short sessions, travel mode, missed-session recovery. Fitness coaching built for real life.",
    faqs: [
      { q: "Can you get fit working out only 3 days a week?", a: "Yes. Three well-structured days per week is enough to build real fitness. Saddie optimizes your plan for the time you actually have." },
      { q: "What's the best workout app for people with no time?", a: "TRLActive is built for busy schedules — sessions can be as short as 20 minutes, and the plan adapts automatically when you miss days instead of falling apart." },
      { q: "How do you stay consistent with working out when you're busy?", a: "The key is having a plan that adapts to your reality instead of assuming ideal conditions. Saddie learns when you actually train and builds around that pattern." },
    ],
  },
  {
    slug: "runners",
    headline: "AI coaching for runners who also lift",
    subheadline: "Stop choosing between cardio fitness and strength. Saddie programs both.",
    intro: "Most strength apps treat running as the enemy of gains. Most running apps treat the weight room as an afterthought. Saddie was built to do both.",
    bullets: [
      { icon: "🏃", title: "Run and lift without conflicting each other", body: "Saddie coordinates your running and strength sessions to minimize interference." },
      { icon: "📉", title: "Strength for injury prevention", body: "Hip, glute, and core strength work that reduces running injuries — programmed automatically." },
      { icon: "🥗", title: "Fueling for high-mileage weeks", body: "Saddie's nutrition planning adjusts automatically when your weekly mileage increases." },
      { icon: "🎙️", title: "Voice coaching at the gym, not on the run", body: "Saddie coaches your strength sessions with real-time voice cues — your runs stay quiet." },
    ],
    quote: "I'd been running for years but always skipped the gym. TRLActive gave me a strength plan that actually worked around my marathon training. PR'd by 4 minutes.",
    cta: "Start your run + lift plan — free with TRLActive",
    metaTitle: "Best Fitness App for Runners Who Lift | Saddie",
    metaDescription: "Saddie programs running and strength training together — coordinated periodization, injury prevention lifting, and adaptive nutrition. Try TRLActive free.",
    faqs: [
      { q: "Should runners do strength training?", a: "Yes. Strength training reduces injury risk, improves running economy, and makes you faster. Saddie programs strength work that complements your running schedule instead of conflicting with it." },
      { q: "How do you combine running and weight training without overtraining?", a: "The key is periodization — scheduling hard sessions away from each other and managing total load. Saddie does this automatically based on your weekly training volume." },
    ],
  },
  {
    slug: "women",
    headline: "AI fitness coaching built for women",
    subheadline: "Strength, fat loss, and real coaching — not pink dumbbells and low-calorie circuits.",
    intro: "Most fitness apps treat women as an afterthought — light weights, high reps, low calories. Saddie builds real programs based on your goals, your physiology, and how you actually train.",
    bullets: [
      { icon: "💪", title: "Strength training that actually works", body: "Saddie programs compound lifts and progressive overload for women — not endless cardio circuits." },
      { icon: "🔄", title: "Cycle-aware training (optional)", body: "If you want it, Saddie can adjust training intensity around your cycle — harder in the follicular phase, easier around your period." },
      { icon: "🥗", title: "Nutrition for your goals", body: "Whether you want to lose fat, build muscle, or both, Saddie sets nutrition targets based on your actual training load — not a generic female calorie minimum." },
      { icon: "🎙️", title: "Coaching that doesn't talk down to you", body: "Real cues, real progression, real results. No pink-washing, no condescension." },
    ],
    quote: "I've been lifting for two years but never had a real program. Saddie gave me structure I didn't know I needed. Up 15 lbs on my deadlift in 6 weeks.",
    cta: "Start training seriously — free with TRLActive",
    metaTitle: "Best AI Fitness App for Women | Saddie",
    metaDescription: "Saddie builds real strength and fat loss programs for women — progressive overload, adaptive nutrition, and voice coaching without the pink-washing. Try TRLActive free.",
    faqs: [
      { q: "What's the best fitness app for women in 2026?", a: "TRLActive is the best fitness app for women who want real coaching — strength training with progressive overload, adaptive nutrition, and voice guidance — not watered-down workouts." },
      { q: "Should women lift heavy weights?", a: "Yes. Heavy compound lifting builds the muscle that gives you a lean, athletic look. Saddie programs appropriate loads for your strength level and increases them progressively." },
      { q: "Can women build muscle with an AI coach?", a: "Absolutely. TRLActive's Saddie AI builds muscle-building programs for women with the same rigor as for men — adjusted for starting strength, recovery, and goals." },
    ],
  },
  {
    slug: "seniors",
    headline: "Fitness coaching for people over 50",
    subheadline: "Stay strong, mobile, and independent. Saddie builds programs that work with your body — not against it.",
    intro: "Fitness after 50 isn't about doing less. It's about doing the right things. Strength training, mobility work, and adequate recovery are more important than ever — and Saddie knows how to program them together.",
    bullets: [
      { icon: "🦴", title: "Bone density and muscle mass", body: "Strength training is the most effective way to combat age-related muscle and bone loss. Saddie programs it safely with progressive loads." },
      { icon: "🧘", title: "Mobility built into every plan", body: "Saddie includes mobility and flexibility work in your weekly plan — not as an afterthought, but as a pillar of longevity." },
      { icon: "💤", title: "Recovery-first scheduling", body: "Older adults need more recovery between sessions. Saddie schedules rest days based on your age and training history." },
      { icon: "🎙️", title: "Clear coaching at every step", body: "Voice cues guide you through every movement. No confusion, no guessing." },
    ],
    quote: "I'm 58 and haven't been this fit since my 30s. Saddie builds around my joints and recovery — not some 25-year-old's program.",
    cta: "Train smarter after 50 — free with TRLActive",
    metaTitle: "Best Fitness App for Seniors and People Over 50 | Saddie",
    metaDescription: "TRLActive and Saddie build strength and mobility programs for people over 50 — recovery-first scheduling, joint-friendly programming, and voice coaching. Try free.",
    faqs: [
      { q: "Is strength training safe for people over 50?", a: "Yes, and it's highly recommended. Strength training after 50 preserves muscle mass, improves bone density, and maintains metabolic health. Saddie programs it at the right intensity for your fitness level." },
      { q: "What's the best workout app for seniors?", a: "TRLActive is excellent for seniors because it adapts to your recovery needs, programs joint-friendly movements, and uses voice coaching so you never have to stare at your phone mid-exercise." },
      { q: "How often should someone over 50 work out?", a: "2-3 days of strength training per week with active recovery days in between is ideal for most people over 50. Saddie builds this schedule automatically based on your age and fitness level." },
    ],
  },
  {
    slug: "home-gym",
    headline: "AI coaching for your home gym",
    subheadline: "No commercial gym needed. Saddie builds serious programs around the equipment you have.",
    intro: "You don't need a $150/month gym membership to train seriously. A few dumbbells, a barbell, or even just your bodyweight — Saddie builds a complete, progressive program around exactly what you have.",
    bullets: [
      { icon: "🏠", title: "Built around your equipment", body: "Tell Saddie what you have — dumbbells, barbell, bands, nothing. It builds your program around that, not a fantasy commercial gym." },
      { icon: "📈", title: "Real progressive overload at home", body: "Saddie applies the same progressive overload principles at home as in any gym — increasing reps, sets, tempo, or load as you get stronger." },
      { icon: "🔇", title: "No noise, no commute, no awkwardness", body: "Voice coaching fills the silence without the gym social dynamics. Just you and your workout." },
      { icon: "💡", title: "Smart substitutions", body: "Missing a piece of equipment? Saddie automatically substitutes exercises that hit the same muscles with what you have." },
    ],
    quote: "I built a home gym during lockdown and TRLActive was the only app that actually worked with it properly. Six months later I'm stronger than I've ever been.",
    cta: "Build your home gym program — free with TRLActive",
    metaTitle: "Best AI Workout App for Home Gym | Saddie",
    metaDescription: "Saddie builds serious training programs around your home gym equipment — dumbbells, barbell, bands, or bodyweight. Real progressive overload, no commercial gym needed.",
    faqs: [
      { q: "Can you build a good physique with a home gym?", a: "Absolutely. With consistent progressive overload, a home gym is as effective as a commercial gym. Saddie ensures you're progressing correctly with whatever equipment you have." },
      { q: "What equipment do you need for a home gym?", a: "A set of adjustable dumbbells covers most bases. Add a barbell and rack if you want to go heavier. Saddie builds effective programs around any setup — including bodyweight only." },
      { q: "What's the best app for home gym workouts?", a: "TRLActive is the best home gym app because it builds programs around your specific equipment and applies progressive overload automatically — unlike apps that assume you have a full commercial gym." },
    ],
  },
  {
    slug: "fat-loss-muscle-gain",
    headline: "Lose fat and build muscle at the same time",
    subheadline: "Body recomposition is possible. Here's how Saddie programs it.",
    intro: "Most fitness plans make you choose: bulk or cut. But for most people — especially beginners and intermediates — body recomposition (losing fat while building muscle simultaneously) is genuinely achievable with the right programming and nutrition.",
    bullets: [
      { icon: "⚖️", title: "Calorie cycling that supports both goals", body: "Saddie sets slightly higher calories on training days to support muscle growth and slightly lower on rest days to promote fat loss." },
      { icon: "🏋️", title: "Strength-first programming", body: "Recomp works best with progressive strength training as the foundation. Saddie builds around compound lifts with cardio as a supplement." },
      { icon: "📊", title: "Progress tracking beyond the scale", body: "The scale often doesn't move during recomp even when your body composition is changing dramatically. Saddie tracks performance metrics to show real progress." },
      { icon: "🥩", title: "High protein targets", body: "High protein intake is essential for recomp. Saddie sets targets based on your body weight and ensures you're hitting them." },
    ],
    quote: "I lost 8% body fat and gained 10 lbs of muscle in 5 months. The scale barely moved. Saddie kept me sane by showing my actual progress.",
    cta: "Start your recomp plan — free with TRLActive",
    metaTitle: "AI Coaching for Body Recomposition: Lose Fat, Build Muscle | Saddie",
    metaDescription: "Saddie programs body recomposition — losing fat and building muscle simultaneously — with calorie cycling, strength-first training, and adaptive nutrition. Try free.",
    faqs: [
      { q: "Is it possible to lose fat and build muscle at the same time?", a: "Yes, especially for beginners and intermediates. Body recomposition requires a slight calorie deficit paired with high protein and consistent strength training — exactly what Saddie programs." },
      { q: "How long does body recomposition take?", a: "Most people see noticeable recomposition results in 3-6 months. Progress is slower than a pure bulk or cut but the result — losing fat while gaining muscle — is worth it." },
    ],
  },
  {
    slug: "athletes",
    headline: "AI coaching for competitive athletes",
    subheadline: "Periodization, peak performance, and programming that fits your sport.",
    intro: "Competitive athletes need more than a generic fitness app. You need periodization, sport-specific conditioning, and a training system that peaks you at the right time. Saddie builds around your competitive calendar.",
    bullets: [
      { icon: "🏆", title: "Competition-calendar periodization", body: "Saddie structures your training phases — base, build, peak, taper — around your competition dates." },
      { icon: "⚡", title: "Power and speed development", body: "Beyond hypertrophy training, Saddie programs explosive work and neuromuscular development for athletic performance." },
      { icon: "🔄", title: "In-season vs off-season programming", body: "Your training needs to change during season. Saddie adjusts volume and intensity automatically around your game schedule." },
      { icon: "💤", title: "Recovery management under high load", body: "High training loads require smart recovery scheduling. Saddie monitors your fatigue signals and adjusts before overtraining becomes an issue." },
    ],
    quote: "As a competitive cyclist, I needed a strength program that didn't kill my legs before races. Saddie figured it out without me having to explain it.",
    cta: "Train like an athlete — free with TRLActive",
    metaTitle: "AI Training App for Competitive Athletes | Saddie",
    metaDescription: "Saddie programs periodized training for competitive athletes — competition calendar peaking, sport-specific conditioning, and in-season load management. Try TRLActive free.",
    faqs: [
      { q: "Can AI coaching work for competitive athletes?", a: "Yes. AI coaching excels at the programming complexity that competitive athletes need — periodization, load management, and peaking. Saddie handles the programming logic so you can focus on performing." },
      { q: "How do athletes use AI for training?", a: "Athletes use AI like Saddie to automate the programming decisions — periodization phases, load progression, recovery scheduling — that would otherwise require a high-end human coach." },
    ],
  },
  {
    slug: "post-pregnancy",
    headline: "Safe return to fitness after pregnancy",
    subheadline: "Rebuild your strength gradually and safely. Saddie knows the difference.",
    intro: "Returning to fitness after pregnancy isn't just about getting back to where you were. It's about rebuilding the right way — respecting core and pelvic floor recovery, managing energy levels, and building sustainable habits that fit your new life.",
    bullets: [
      { icon: "🤱", title: "Core and pelvic floor first", body: "Saddie starts with foundation work — deep core, pelvic floor — before adding load. This isn't optional; it's the right order." },
      { icon: "🐌", title: "Gradual load progression", body: "Return-to-fitness post-pregnancy needs a slower ramp than normal. Saddie knows the timeline and doesn't rush it." },
      { icon: "⏱️", title: "Short sessions that fit new-parent life", body: "20-30 minute sessions that fit between feeds, naps, and everything else that comes with a new baby." },
      { icon: "💬", title: "Non-judgmental coaching", body: "Saddie doesn't compare you to where you were. It coaches you from where you are." },
    ],
    quote: "I was cleared at 6 weeks but had no idea where to start. TRLActive built me back up slowly and I feel stronger than before I was pregnant.",
    cta: "Rebuild your strength safely — free with TRLActive",
    metaTitle: "Best Fitness App for Returning to Exercise After Pregnancy | Saddie",
    metaDescription: "Saddie guides safe return to fitness after pregnancy — core and pelvic floor first, gradual progression, short sessions that fit new-parent life. Try TRLActive free.",
    faqs: [
      { q: "When can I start working out after having a baby?", a: "Most doctors clear exercise at 6 weeks postpartum, but the right starting point depends on your delivery and recovery. Saddie starts with gentle core work and progresses based on how you're feeling." },
      { q: "What exercises are safe after pregnancy?", a: "Walking, gentle core work, and pelvic floor exercises are safe early on. Saddie builds your program in the right order — foundation first, load second." },
    ],
  },
];

export function getGoal(slug: string): Goal | undefined {
  return GOALS.find((g) => g.slug === slug);
}
