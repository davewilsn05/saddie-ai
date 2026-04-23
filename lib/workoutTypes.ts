export type WorkoutType = {
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

export const WORKOUT_TYPES: WorkoutType[] = [
  {
    slug: "hiit",
    name: "HIIT",
    headline: "HIIT workouts with AI coaching",
    subheadline: "High-intensity intervals that adapt to your fitness level — not a one-size-fits-all burnout session.",
    intro: "HIIT is one of the most time-efficient ways to burn fat and improve cardiovascular fitness. But most HIIT apps give everyone the same brutal workout regardless of fitness level. Saddie builds HIIT sessions calibrated to where you actually are — and increases intensity as you improve.",
    bullets: [
      { icon: "⚡", title: "Adaptive intensity", body: "Saddie adjusts work-to-rest ratios and exercise selection based on your fitness level. Beginner HIIT looks different from advanced HIIT." },
      { icon: "🎙️", title: "Voice-guided intervals", body: "Saddie calls your work and rest periods so you don't need to watch a timer. Hands-free, head-up training." },
      { icon: "⏱️", title: "20-30 minute sessions", body: "HIIT is efficient by design. Saddie keeps sessions tight without sacrificing effectiveness." },
      { icon: "📈", title: "Progress that compounds", body: "As your fitness improves, Saddie increases the challenge — shorter rest, harder movements, more rounds." },
    ],
    metaTitle: "AI-Coached HIIT Workouts | Saddie",
    metaDescription: "Saddie builds adaptive HIIT workouts calibrated to your fitness level — voice-guided intervals, progressive intensity, and sessions under 30 minutes. Try TRLActive free.",
    faqs: [
      { q: "How many times a week should I do HIIT?", a: "2-3 times per week is optimal for most people. More than that risks overtraining. Saddie programs HIIT alongside recovery and strength work for a balanced plan." },
      { q: "Is HIIT good for weight loss?", a: "Yes. HIIT burns a high number of calories in a short time and creates an afterburn effect. Saddie pairs HIIT with strength training and nutrition targets for maximum fat loss." },
      { q: "Can beginners do HIIT?", a: "Yes, with the right programming. Saddie scales HIIT for beginners with longer rest periods and lower-impact movements before progressing to more intense versions." },
    ],
  },
  {
    slug: "strength-training",
    name: "Strength Training",
    headline: "Strength training with AI progressive overload",
    subheadline: "Get stronger every week — automatically. No spreadsheets, no guessing.",
    intro: "Strength training is the foundation of long-term fitness — building muscle, protecting joints, boosting metabolism, and making everything else easier. Saddie automates the hardest part: figuring out when and how to progress.",
    bullets: [
      { icon: "📊", title: "Automatic progressive overload", body: "Saddie tracks every set and applies load increases at the right time — based on your actual performance, not a fixed schedule." },
      { icon: "🏗️", title: "Periodized programming", body: "Base, strength, and peak phases are built into your plan. Saddie manages the cycles so you don't have to." },
      { icon: "🎙️", title: "Form and tempo coaching", body: "Voice cues guide your tempo, breathing, and rest periods so you're training with intent, not just going through the motions." },
      { icon: "🔄", title: "Deload weeks built in", body: "Saddie programs planned deloads before you need them — preventing burnout and keeping long-term progress on track." },
    ],
    metaTitle: "AI Strength Training App with Progressive Overload | Saddie",
    metaDescription: "Saddie automates progressive overload for strength training — periodized programming, voice coaching, and automatic deloads. Try TRLActive free.",
    faqs: [
      { q: "How do I start strength training?", a: "Start with the main compound movements — squat, deadlift, press, row — at a light weight and focus on form. Saddie guides complete beginners through the process with voice coaching and progressive loading." },
      { q: "How long does it take to see results from strength training?", a: "Most people notice strength improvements within 2-4 weeks and visible muscle changes within 6-8 weeks. Consistent progressive overload is the key — Saddie manages that automatically." },
      { q: "Is 3 days a week enough for strength training?", a: "Yes. 3 days of well-programmed strength training is enough to build significant strength and muscle. Saddie optimizes your 3 days for maximum results." },
    ],
  },
  {
    slug: "cardio",
    name: "Cardio",
    headline: "Cardio training that actually fits your plan",
    subheadline: "Not just 'go for a run' — cardio programmed around your strength work and recovery.",
    intro: "Cardio is most effective when it's programmed intentionally — not just tacked on after strength work. Saddie integrates cardio into your overall training plan, balancing it with strength sessions and recovery to maximize both without burning you out.",
    bullets: [
      { icon: "❤️", title: "Zone-based cardio programming", body: "Saddie programs cardio at the right intensity — zone 2 for aerobic base, higher zones for performance — based on your goals." },
      { icon: "⚖️", title: "Cardio that doesn't kill your lifts", body: "Saddie schedules cardio sessions away from heavy strength days to minimize interference and maximize recovery." },
      { icon: "📱", title: "Works with any cardio modality", body: "Running, cycling, rowing, swimming — Saddie programs cardio around what you prefer and have access to." },
      { icon: "📈", title: "Cardiovascular progression", body: "Cardio volume and intensity increase progressively just like strength work — so your aerobic fitness keeps improving." },
    ],
    metaTitle: "AI-Programmed Cardio Training | Saddie",
    metaDescription: "Saddie integrates cardio into your full training plan — zone-based programming, interference minimization, and progressive volume. Try TRLActive free.",
    faqs: [
      { q: "How much cardio should I do per week?", a: "It depends on your goals. For general health, 150 minutes of moderate cardio per week is recommended. For fat loss or endurance, more. Saddie programs the right amount based on your specific goals." },
      { q: "Is cardio or strength training better for fat loss?", a: "Strength training wins for long-term fat loss because it builds muscle that burns more calories at rest. Saddie programs both — cardio for calorie burn, strength for metabolic rate." },
    ],
  },
  {
    slug: "bodyweight",
    name: "Bodyweight Training",
    headline: "Serious bodyweight training — no gym, no excuses",
    subheadline: "Your bodyweight is enough equipment. Saddie proves it.",
    intro: "Bodyweight training gets dismissed as beginner stuff. It isn't. With the right progression — adding difficulty through leverage, tempo, unilateral movements, and volume — you can build serious strength and muscle with zero equipment.",
    bullets: [
      { icon: "🏠", title: "Train anywhere", body: "Hotel room, living room, park — no gym required. Saddie builds your sessions around your space and what you can actually do." },
      { icon: "📈", title: "Progressive difficulty without weights", body: "Saddie progresses bodyweight training through harder variations, tempo changes, and unilateral movements — not just 'do more reps.'" },
      { icon: "💰", title: "Zero equipment cost", body: "No gym membership, no equipment. Just your body and a plan that works." },
      { icon: "🎙️", title: "Voice coaching through every movement", body: "Saddie guides your bodyweight sessions with real-time cues for form, breathing, and tempo." },
    ],
    metaTitle: "AI-Coached Bodyweight Workout App | Saddie",
    metaDescription: "Saddie builds progressive bodyweight programs — serious training with zero equipment, anywhere. Voice coaching included. Try TRLActive free.",
    faqs: [
      { q: "Can you build muscle with bodyweight exercises only?", a: "Yes, if you apply progressive overload through harder variations, volume, and tempo. Saddie manages bodyweight progression just like weight training." },
      { q: "What are the best bodyweight exercises?", a: "Push-ups, rows, squats, lunges, and their progressions cover most muscle groups effectively. Saddie programs these with appropriate variations for your level." },
    ],
  },
  {
    slug: "powerlifting",
    name: "Powerlifting",
    headline: "AI coaching for powerlifters",
    subheadline: "Squat, bench, deadlift. Programmed intelligently. Peaked at the right time.",
    intro: "Powerlifting requires precise programming — peaking cycles, competition preparation, and managing the cumulative fatigue of heavy training. Saddie handles the programming complexity so you can focus on moving weight.",
    bullets: [
      { icon: "🏋️", title: "Periodized powerlifting blocks", body: "Saddie programs hypertrophy, strength, and peaking blocks in the right order — building toward your best competition total." },
      { icon: "📅", title: "Meet-day peaking", body: "Saddie works backward from your competition date to ensure you're peaking at the right time — not two weeks early." },
      { icon: "📊", title: "Percentage-based and RPE programming", body: "Saddie programs both percentage-based and RPE-based sessions depending on the phase and your performance that day." },
      { icon: "🔄", title: "Deload management", body: "Powerlifting accumulates fatigue fast. Saddie programs deloads before your body forces one on you." },
    ],
    metaTitle: "AI Powerlifting Program App | Saddie",
    metaDescription: "Saddie programs periodized powerlifting — hypertrophy blocks, strength phases, competition peaking, and RPE-based loading. Try TRLActive free.",
    faqs: [
      { q: "What's a good powerlifting program for beginners?", a: "Beginners should start with a 3-day full-body program focused on the squat, bench, and deadlift with linear progression. Saddie builds this automatically and progresses it as you get stronger." },
      { q: "How do you peak for a powerlifting competition?", a: "A powerlifting peak typically involves reducing volume and increasing intensity over 3-4 weeks before competition. Saddie programs this automatically when you enter your competition date." },
    ],
  },
  {
    slug: "yoga",
    name: "Yoga",
    headline: "Yoga and AI coaching — a surprisingly good combination",
    subheadline: "Saddie programs yoga as part of a complete fitness plan — not as a standalone practice.",
    intro: "Yoga is one of the best tools for mobility, recovery, and mental clarity in a fitness plan. Saddie integrates yoga sessions into your weekly schedule strategically — on recovery days, after heavy training days, or as a standalone practice if that's what you want.",
    bullets: [
      { icon: "🧘", title: "Yoga as recovery", body: "Saddie schedules yoga on days when your body needs active recovery — keeping you moving without adding training stress." },
      { icon: "🔄", title: "Mobility integration", body: "Yoga sessions target the mobility limitations that affect your strength training — hip flexors, thoracic spine, hamstrings." },
      { icon: "😌", title: "Mental recovery", body: "Saddie recognizes that mental fatigue affects training too. Yoga days aren't just physical recovery." },
      { icon: "📅", title: "Flexible scheduling", body: "Want yoga on specific days? Saddie works around your preferences while keeping your overall training load balanced." },
    ],
    metaTitle: "AI Fitness App with Yoga Integration | Saddie",
    metaDescription: "Saddie integrates yoga into your training plan strategically — active recovery, mobility work, and mental reset. Try TRLActive free.",
    faqs: [
      { q: "Can you do yoga and weight training on the same day?", a: "Yes. Yoga is best done after strength training, not before — you want full muscle activation for lifting. Saddie schedules them in the right order." },
      { q: "How often should I do yoga for flexibility?", a: "2-3 times per week of yoga or focused mobility work produces measurable flexibility gains within 4-6 weeks." },
    ],
  },
  {
    slug: "running",
    name: "Running",
    headline: "Run coaching with AI — without the GPS watch price tag",
    subheadline: "From your first 5K to marathon training — Saddie builds the program around your pace and schedule.",
    intro: "Running programs fail most people because they're too generic. Too much volume too fast leads to injury. Too little structure leads to no improvement. Saddie builds a running plan around your current fitness, your schedule, and your goal race — and adapts it as you improve.",
    bullets: [
      { icon: "🏃", title: "Goal-race programming", body: "5K, 10K, half marathon, or marathon — Saddie builds a periodized plan working backward from your race date." },
      { icon: "💪", title: "Strength for runners built in", body: "Saddie programs injury-prevention strength work alongside your runs — the combination most running apps ignore." },
      { icon: "📊", title: "Easy/hard day structure", body: "Most runners run too hard on easy days and not hard enough on hard days. Saddie programs the right intensity for each session." },
      { icon: "🔄", title: "Injury prevention built in", body: "Saddie monitors your weekly mileage increase and keeps it within safe limits — preventing the overuse injuries that sideline most new runners." },
    ],
    metaTitle: "AI Running Coach App — 5K to Marathon | Saddie",
    metaDescription: "Saddie builds adaptive running programs for every distance — goal-race periodization, strength for runners, and safe mileage progression. Try TRLActive free.",
    faqs: [
      { q: "How do I start running from scratch?", a: "Start with run/walk intervals — run 1 minute, walk 2, repeat. Saddie builds a couch-to-5K style progression that gets you running continuously within 6-8 weeks." },
      { q: "How long does it take to train for a 5K?", a: "Most beginners can run a 5K within 8-10 weeks with consistent training. Saddie builds the program around your current fitness and gets you to the start line." },
    ],
  },
  {
    slug: "mobility",
    name: "Mobility & Flexibility",
    headline: "Mobility training that actually improves how you move",
    subheadline: "Not just stretching — systematic mobility work that fixes the restrictions limiting your training.",
    intro: "Most people stretch the same muscles every day and wonder why they never get more flexible. Real mobility work targets the specific restrictions that are limiting your movement — in your hips, shoulders, thoracic spine, or ankles — and makes systematic progress on them.",
    bullets: [
      { icon: "🎯", title: "Targeted restriction work", body: "Saddie identifies your movement restrictions from your training patterns and targets them specifically — not a generic stretching routine." },
      { icon: "📅", title: "Programmed into your week", body: "Mobility work is scheduled on recovery days and post-training — so it actually gets done instead of always being skipped." },
      { icon: "📈", title: "Progressive mobility", body: "Mobility improves with progressive overload just like strength — increasing range of motion systematically over weeks." },
      { icon: "💤", title: "Recovery and relaxation", body: "Mobility sessions double as active recovery — reducing soreness and improving sleep quality." },
    ],
    metaTitle: "AI Mobility and Flexibility Training App | Saddie",
    metaDescription: "Saddie programs systematic mobility work targeting your specific restrictions — built into your weekly plan, not an afterthought. Try TRLActive free.",
    faqs: [
      { q: "How long does it take to improve flexibility?", a: "Consistent mobility work produces noticeable improvements within 4-6 weeks. The key is regularity — 3-4 sessions per week of 15-20 minutes beats one long session per week." },
      { q: "What's the difference between flexibility and mobility?", a: "Flexibility is passive range of motion. Mobility is active control through that range. Saddie trains both — flexibility for the range and mobility for the control." },
    ],
  },
  {
    slug: "crossfit",
    name: "CrossFit-style Training",
    headline: "CrossFit-style training with smarter programming",
    subheadline: "The variety and intensity of CrossFit — with the progressive structure it often lacks.",
    intro: "CrossFit's variety and community are genuinely motivating. But random WOD selection without periodization leads to plateaus and injury. Saddie takes the best of CrossFit — functional movement, mixed modalities, intensity — and adds the programming structure to make it actually work long-term.",
    bullets: [
      { icon: "🔥", title: "Functional movement variety", body: "Olympic lifts, gymnastics, cardio — Saddie programs the CrossFit modalities with proper periodization and progression." },
      { icon: "📊", title: "Structure within the chaos", body: "Saddie ensures skill work, strength, and conditioning are balanced over time — not just whatever feels hard today." },
      { icon: "💪", title: "Skill progression", body: "Working toward your first pull-up, muscle-up, or handstand? Saddie programs the accessory work to get you there." },
      { icon: "🔄", title: "Scaled options for every level", body: "Every session has appropriate scaling — you train at the right intensity for your level." },
    ],
    metaTitle: "AI CrossFit-Style Training App | Saddie",
    metaDescription: "Saddie programs CrossFit-style training with proper periodization — functional movement variety, skill progression, and balanced conditioning. Try TRLActive free.",
    faqs: [
      { q: "Can I do CrossFit at home?", a: "Yes. Most CrossFit workouts can be scaled for home with minimal equipment. Saddie programs CrossFit-style sessions for any equipment setup." },
      { q: "Is CrossFit good for weight loss?", a: "CrossFit's high-intensity, varied programming is effective for fat loss and body composition. Saddie pairs it with appropriate nutrition targets for your goals." },
    ],
  },
  {
    slug: "pilates",
    name: "Pilates",
    headline: "Pilates and AI coaching — core strength meets smart programming",
    subheadline: "Pilates for core strength, posture, and recovery — integrated into a complete training plan.",
    intro: "Pilates builds the core strength, body awareness, and postural control that make everything else in fitness better. Saddie integrates Pilates sessions into your plan strategically — as a complement to strength training, as active recovery, or as a standalone practice.",
    bullets: [
      { icon: "🎯", title: "Core strength that transfers", body: "Pilates builds the deep core that stabilizes your spine under load — making your squats, deadlifts, and runs more powerful and safer." },
      { icon: "🧘", title: "Posture and body awareness", body: "Saddie programs Pilates work targeting the postural imbalances that come from desk work and heavy training." },
      { icon: "💤", title: "Active recovery sessions", body: "Pilates on recovery days keeps you moving, builds core strength, and accelerates muscle repair." },
      { icon: "📅", title: "Flexible integration", body: "Whether you want Pilates daily or just once a week, Saddie builds it into your schedule without disrupting your training load." },
    ],
    metaTitle: "AI Fitness App with Pilates Integration | Saddie",
    metaDescription: "Saddie integrates Pilates into your training plan — core strength, posture work, and active recovery. Try TRLActive free.",
    faqs: [
      { q: "Can Pilates help with back pain?", a: "Yes. Pilates builds the deep core muscles that support the spine — one of the most effective approaches for chronic lower back pain." },
      { q: "Is Pilates enough exercise on its own?", a: "Pilates is excellent for core, flexibility, and body awareness, but it's most effective as part of a broader training plan that includes strength and cardio. Saddie integrates all three." },
    ],
  },
];

export function getWorkoutType(slug: string): WorkoutType | undefined {
  return WORKOUT_TYPES.find((w) => w.slug === slug);
}
