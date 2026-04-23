import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.join(__dirname, "../content/blog");
const OPENAI_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_KEY) { console.error("OPENAI_API_KEY not set"); process.exit(1); }

const TOPICS = [
  // Lifestyle / real-life fitness
  { slug: "working-out-with-a-newborn", title: "How to keep working out after having a baby", tag: "Lifestyle", cluster: "lifestyle" },
  { slug: "fitness-after-40", title: "Getting fit after 40: what changes and what doesn't", tag: "Lifestyle", cluster: "lifestyle" },
  { slug: "gym-intimidation-how-to-get-over-it", title: "Gym intimidation is real — here's how to get over it", tag: "Lifestyle", cluster: "lifestyle" },
  { slug: "working-out-when-depressed", title: "Working out when you're depressed: a real guide", tag: "Lifestyle", cluster: "lifestyle" },
  { slug: "fitness-for-people-who-hate-exercise", title: "Fitness tips for people who genuinely hate exercising", tag: "Lifestyle", cluster: "lifestyle" },
  { slug: "training-through-stress", title: "Should you train when you're stressed? What the research says", tag: "Lifestyle", cluster: "lifestyle" },
  { slug: "working-out-in-small-apartments", title: "Real workouts for small apartments with no equipment", tag: "Lifestyle", cluster: "lifestyle" },
  { slug: "fitness-for-people-who-travel-constantly", title: "How to stay fit when you travel for work every week", tag: "Lifestyle", cluster: "lifestyle" },
  { slug: "working-out-with-chronic-pain", title: "Training with chronic pain: how to keep moving safely", tag: "Lifestyle", cluster: "lifestyle" },
  { slug: "getting-back-in-shape-after-years-off", title: "How to get back in shape after years off the gym", tag: "Lifestyle", cluster: "lifestyle" },
  { slug: "fitness-for-introverts", title: "The introvert's guide to building a fitness routine", tag: "Lifestyle", cluster: "lifestyle" },
  { slug: "working-out-at-6am", title: "How to actually become a morning workout person", tag: "Lifestyle", cluster: "lifestyle" },
  { slug: "gym-for-people-with-adhd", title: "How to stick to a workout routine when you have ADHD", tag: "Lifestyle", cluster: "lifestyle" },
  { slug: "working-out-in-your-40s-vs-20s", title: "Training in your 40s vs your 20s: the real differences", tag: "Lifestyle", cluster: "lifestyle" },
  { slug: "fitness-for-desk-workers", title: "Fitness for desk workers: undoing 8 hours of sitting", tag: "Lifestyle", cluster: "lifestyle" },
  { slug: "exercising-with-bad-knees", title: "How to exercise effectively with bad knees", tag: "Lifestyle", cluster: "lifestyle" },
  { slug: "working-out-during-lunch-break", title: "How to get a real workout done in a 30-minute lunch break", tag: "Lifestyle", cluster: "lifestyle" },
  { slug: "fitness-for-people-over-60", title: "Fitness over 60: what to focus on and what to skip", tag: "Lifestyle", cluster: "lifestyle" },
  { slug: "maintaining-fitness-during-busy-seasons", title: "How to maintain fitness during the busiest seasons of your life", tag: "Lifestyle", cluster: "lifestyle" },
  { slug: "training-when-you-work-from-home", title: "Working from home and staying fit: the real challenge", tag: "Lifestyle", cluster: "lifestyle" },

  // Adaptive training / smart programming
  { slug: "why-you-stop-seeing-results", title: "Why you stopped seeing results — and how to fix it", tag: "Adaptive Training", cluster: "adaptive-training" },
  { slug: "what-is-deload-week", title: "What is a deload week and do you actually need one?", tag: "Adaptive Training", cluster: "adaptive-training" },
  { slug: "overtraining-symptoms-recovery", title: "Signs you're overtraining and how to recover", tag: "Adaptive Training", cluster: "adaptive-training" },
  { slug: "how-to-break-a-fitness-plateau", title: "How to break a fitness plateau for good", tag: "Adaptive Training", cluster: "adaptive-training" },
  { slug: "periodization-explained-simply", title: "Periodization explained simply — why your training needs phases", tag: "Adaptive Training", cluster: "adaptive-training" },
  { slug: "training-frequency-how-often", title: "How often should you really work out? The honest answer", tag: "Adaptive Training", cluster: "adaptive-training" },
  { slug: "sets-reps-beginners-guide", title: "Sets, reps, and rest explained for beginners", tag: "Adaptive Training", cluster: "adaptive-training" },
  { slug: "rpe-guide-beginners", title: "What is RPE and why it matters for your workouts", tag: "Adaptive Training", cluster: "adaptive-training" },
  { slug: "how-to-structure-a-workout", title: "How to structure a workout from start to finish", tag: "Adaptive Training", cluster: "adaptive-training" },
  { slug: "1rm-calculator-why-it-matters", title: "Your 1-rep max and why it should drive your programming", tag: "Adaptive Training", cluster: "adaptive-training" },
  { slug: "best-workout-splits-explained", title: "PPL vs upper/lower vs full body: which split is right for you?", tag: "Adaptive Training", cluster: "adaptive-training" },
  { slug: "how-long-to-see-results-lifting", title: "How long does it actually take to see results from lifting?", tag: "Adaptive Training", cluster: "adaptive-training" },
  { slug: "muscle-memory-how-it-works", title: "Muscle memory is real — here's what it means for you", tag: "Adaptive Training", cluster: "adaptive-training" },
  { slug: "beginner-gains-why-they-end", title: "Beginner gains: why they stop and what comes next", tag: "Adaptive Training", cluster: "adaptive-training" },
  { slug: "training-volume-for-muscle-growth", title: "How much volume do you actually need to build muscle?", tag: "Adaptive Training", cluster: "adaptive-training" },
  { slug: "training-to-failure-pros-cons", title: "Training to failure: when it helps and when it hurts", tag: "Adaptive Training", cluster: "adaptive-training" },
  { slug: "compound-vs-isolation-exercises", title: "Compound vs isolation exercises: how to use both", tag: "Adaptive Training", cluster: "adaptive-training" },
  { slug: "functional-fitness-what-it-means", title: "What functional fitness actually means (and why it matters)", tag: "Adaptive Training", cluster: "adaptive-training" },
  { slug: "hypertrophy-vs-strength-training", title: "Training for size vs training for strength: the real difference", tag: "Adaptive Training", cluster: "adaptive-training" },
  { slug: "tempo-training-guide", title: "Tempo training: how slowing down helps you get stronger", tag: "Adaptive Training", cluster: "adaptive-training" },

  // Voice coaching / AI coaching
  { slug: "ai-fitness-coaching-how-it-works", title: "How AI fitness coaching actually works", tag: "AI Coaching", cluster: "ai-coaching" },
  { slug: "hands-free-workout-logging-guide", title: "The case for hands-free workout logging", tag: "Voice Coaching", cluster: "voice-coaching" },
  { slug: "future-of-ai-personal-training", title: "The future of AI personal training — where it's headed", tag: "AI Coaching", cluster: "ai-coaching" },
  { slug: "ai-coach-vs-fitness-influencer", title: "AI coach vs fitness influencer: who should you listen to?", tag: "AI Coaching", cluster: "ai-coaching" },
  { slug: "does-ai-coaching-replace-personal-trainers", title: "Will AI replace personal trainers? An honest take", tag: "AI Coaching", cluster: "ai-coaching" },
  { slug: "best-free-ai-fitness-apps", title: "The best free AI fitness apps in 2026", tag: "AI Coaching", cluster: "ai-coaching" },
  { slug: "ai-nutrition-coaching-explained", title: "AI nutrition coaching: what it can and can't do", tag: "AI Coaching", cluster: "ai-coaching" },
  { slug: "personalized-workout-plan-ai", title: "How AI builds a truly personalized workout plan", tag: "AI Coaching", cluster: "ai-coaching" },
  { slug: "workout-app-with-voice-commands", title: "Workout apps with voice commands: what's actually useful", tag: "Voice Coaching", cluster: "voice-coaching" },
  { slug: "chatgpt-for-fitness-plans", title: "Using ChatGPT for workout plans: what actually works", tag: "AI Coaching", cluster: "ai-coaching" },

  // Comparisons
  { slug: "best-workout-app-iphone-2026", title: "Best workout apps for iPhone in 2026", tag: "Comparison", cluster: "comparisons" },
  { slug: "best-workout-app-android-2026", title: "Best workout apps for Android in 2026", tag: "Comparison", cluster: "comparisons" },
  { slug: "free-vs-paid-fitness-apps", title: "Free vs paid fitness apps: is the upgrade worth it?", tag: "Comparison", cluster: "comparisons" },
  { slug: "best-app-for-home-workouts", title: "The best apps for home workouts in 2026", tag: "Comparison", cluster: "comparisons" },
  { slug: "best-workout-app-no-gym", title: "Best workout apps if you don't have a gym membership", tag: "Comparison", cluster: "comparisons" },
  { slug: "jefit-vs-trlactive", title: "JEFIT vs TRLActive: which gym tracker wins?", tag: "Comparison", cluster: "comparisons" },
  { slug: "strong-app-vs-trlactive", title: "Strong app vs TRLActive: serious lifters compared", tag: "Comparison", cluster: "comparisons" },
  { slug: "hevy-vs-trlactive", title: "Hevy vs TRLActive: workout logging compared", tag: "Comparison", cluster: "comparisons" },
  { slug: "seven-app-vs-trlactive", title: "7-Minute Workout app vs TRLActive: quick vs thorough", tag: "Comparison", cluster: "comparisons" },
  { slug: "sweat-app-vs-trlactive", title: "Sweat app vs TRLActive: women's fitness compared", tag: "Comparison", cluster: "comparisons" },
  { slug: "obé-fitness-vs-trlactive", title: "Obé Fitness vs TRLActive: class-based vs coaching", tag: "Comparison", cluster: "comparisons" },
  { slug: "trainerize-vs-trlactive", title: "Trainerize vs TRLActive: for coaches and for athletes", tag: "Comparison", cluster: "comparisons" },
  { slug: "noom-vs-trlactive", title: "Noom vs TRLActive: weight loss coaching compared", tag: "Comparison", cluster: "comparisons" },
  { slug: "caliber-vs-trlactive", title: "Caliber vs TRLActive: online coaching compared", tag: "Comparison", cluster: "comparisons" },
  { slug: "best-fitness-app-for-muscle-gain-2026", title: "Best fitness apps for building muscle in 2026", tag: "Comparison", cluster: "comparisons" },
  { slug: "best-fitness-app-weight-loss-2026", title: "Best fitness apps for weight loss in 2026", tag: "Comparison", cluster: "comparisons" },

  // Strength & muscle building
  { slug: "how-to-squat-properly", title: "How to squat properly — a beginner's guide", tag: "Strength", cluster: "adaptive-training" },
  { slug: "how-to-deadlift-for-beginners", title: "How to deadlift: a beginner's guide to the best exercise", tag: "Strength", cluster: "adaptive-training" },
  { slug: "bench-press-guide-beginners", title: "Bench press for beginners: form, sets, and progression", tag: "Strength", cluster: "adaptive-training" },
  { slug: "pull-up-progressions", title: "How to get your first pull-up (and beyond)", tag: "Strength", cluster: "adaptive-training" },
  { slug: "best-exercises-for-fat-loss", title: "The best exercises for fat loss (ranked by effectiveness)", tag: "Strength", cluster: "adaptive-training" },
  { slug: "glute-training-guide", title: "How to actually build stronger glutes", tag: "Strength", cluster: "adaptive-training" },
  { slug: "shoulder-training-for-beginners", title: "Shoulder training for beginners: what to do and what to avoid", tag: "Strength", cluster: "adaptive-training" },
  { slug: "leg-day-guide", title: "How to program leg day for maximum results", tag: "Strength", cluster: "adaptive-training" },
  { slug: "back-exercises-guide", title: "The best back exercises and how to program them", tag: "Strength", cluster: "adaptive-training" },
  { slug: "core-training-beyond-crunches", title: "Core training beyond crunches: what actually works", tag: "Strength", cluster: "adaptive-training" },
  { slug: "how-to-increase-bench-press", title: "How to increase your bench press — a systematic approach", tag: "Strength", cluster: "adaptive-training" },
  { slug: "how-to-increase-squat", title: "How to increase your squat — the fundamentals", tag: "Strength", cluster: "adaptive-training" },
  { slug: "dumbbell-only-workout-plan", title: "A complete dumbbell-only workout plan for strength", tag: "Strength", cluster: "adaptive-training" },
  { slug: "resistance-bands-workout-guide", title: "A proper resistance bands workout guide", tag: "Strength", cluster: "adaptive-training" },
  { slug: "full-body-workout-routine", title: "The best full-body workout routine for most people", tag: "Strength", cluster: "adaptive-training" },
  { slug: "how-long-should-workouts-be", title: "How long should workouts actually be?", tag: "Strength", cluster: "adaptive-training" },
  { slug: "rest-periods-between-sets", title: "How long to rest between sets: the science-based answer", tag: "Strength", cluster: "adaptive-training" },
  { slug: "warm-up-before-workout", title: "How to warm up properly before a workout", tag: "Strength", cluster: "adaptive-training" },
  { slug: "cooldown-after-workout", title: "What to do after a workout for faster recovery", tag: "Strength", cluster: "adaptive-training" },
  { slug: "muscle-soreness-explained", title: "Muscle soreness explained — DOMS, what causes it, what helps", tag: "Strength", cluster: "adaptive-training" },

  // Nutrition
  { slug: "how-much-protein-per-day", title: "How much protein do you actually need per day?", tag: "Nutrition", cluster: "lifestyle" },
  { slug: "what-to-eat-before-workout", title: "What to eat before a workout for maximum energy", tag: "Nutrition", cluster: "lifestyle" },
  { slug: "what-to-eat-after-workout", title: "What to eat after a workout for recovery", tag: "Nutrition", cluster: "lifestyle" },
  { slug: "meal-prep-for-fitness", title: "Meal prep for fitness people: a practical guide", tag: "Nutrition", cluster: "lifestyle" },
  { slug: "calorie-deficit-explained", title: "Calorie deficit explained — how much is enough?", tag: "Nutrition", cluster: "lifestyle" },
  { slug: "calorie-surplus-for-muscle", title: "Calorie surplus for muscle building: how much is too much?", tag: "Nutrition", cluster: "lifestyle" },
  { slug: "creatine-guide", title: "Creatine: the one supplement that actually works", tag: "Nutrition", cluster: "lifestyle" },
  { slug: "protein-powder-guide", title: "Protein powder: do you need it and which kind to choose", tag: "Nutrition", cluster: "lifestyle" },
  { slug: "intermittent-fasting-and-fitness", title: "Intermittent fasting and exercise: what you need to know", tag: "Nutrition", cluster: "lifestyle" },
  { slug: "hydration-for-performance", title: "How much water you actually need for performance", tag: "Nutrition", cluster: "lifestyle" },
  { slug: "best-foods-for-muscle-recovery", title: "The best foods for muscle recovery after hard training", tag: "Nutrition", cluster: "lifestyle" },
  { slug: "eating-for-energy-all-day", title: "How to eat for sustained energy throughout the day", tag: "Nutrition", cluster: "lifestyle" },
  { slug: "nutrition-myths-debunked", title: "10 nutrition myths that just won't die", tag: "Nutrition", cluster: "lifestyle" },
  { slug: "how-to-count-macros-beginners", title: "How to count macros without losing your mind", tag: "Nutrition", cluster: "lifestyle" },
  { slug: "cheat-meals-and-fitness", title: "Cheat meals and fitness: what the research actually says", tag: "Nutrition", cluster: "lifestyle" },

  // Recovery
  { slug: "sleep-and-muscle-growth", title: "How sleep affects muscle growth more than your workouts do", tag: "Recovery", cluster: "lifestyle" },
  { slug: "how-to-reduce-muscle-soreness", title: "How to reduce muscle soreness effectively", tag: "Recovery", cluster: "lifestyle" },
  { slug: "active-recovery-what-to-do", title: "Active recovery: what it is and the best ways to do it", tag: "Recovery", cluster: "lifestyle" },
  { slug: "foam-rolling-does-it-work", title: "Does foam rolling actually work? What the research says", tag: "Recovery", cluster: "lifestyle" },
  { slug: "cold-plunge-benefits-fitness", title: "Cold plunge and ice baths: real benefits for fitness", tag: "Recovery", cluster: "lifestyle" },
  { slug: "sauna-for-recovery", title: "Sauna for workout recovery: what it does and doesn't do", tag: "Recovery", cluster: "lifestyle" },
  { slug: "how-many-rest-days-per-week", title: "How many rest days per week do you actually need?", tag: "Recovery", cluster: "lifestyle" },
  { slug: "stretching-before-vs-after", title: "Stretching before vs after workouts: what actually matters", tag: "Recovery", cluster: "lifestyle" },
  { slug: "overtraining-syndrome-signs", title: "Overtraining syndrome: signs you've gone too far", tag: "Recovery", cluster: "lifestyle" },
  { slug: "stress-and-workout-recovery", title: "Why stress wrecks your recovery and what to do about it", tag: "Recovery", cluster: "lifestyle" },

  // Running
  { slug: "couch-to-5k-guide", title: "Couch to 5K: the honest beginner's guide", tag: "Running", cluster: "lifestyle" },
  { slug: "how-to-run-faster", title: "How to run faster — the methods that actually work", tag: "Running", cluster: "lifestyle" },
  { slug: "running-form-guide", title: "Running form: the basics that make a real difference", tag: "Running", cluster: "lifestyle" },
  { slug: "best-shoes-for-running-beginners", title: "How to choose running shoes as a beginner", tag: "Running", cluster: "lifestyle" },
  { slug: "half-marathon-training-plan-guide", title: "How to train for your first half marathon", tag: "Running", cluster: "lifestyle" },
  { slug: "running-and-weight-loss", title: "Running for weight loss: how to do it right", tag: "Running", cluster: "lifestyle" },
  { slug: "how-to-prevent-running-injuries", title: "How to prevent the most common running injuries", tag: "Running", cluster: "lifestyle" },
  { slug: "running-in-the-heat", title: "How to run in heat without dying", tag: "Running", cluster: "lifestyle" },
  { slug: "treadmill-vs-outdoor-running", title: "Treadmill vs outdoor running: real differences", tag: "Running", cluster: "lifestyle" },
  { slug: "zone-2-cardio-explained", title: "Zone 2 cardio explained — why running slow makes you faster", tag: "Running", cluster: "lifestyle" },

  // Bodyweight / home
  { slug: "push-up-variations-guide", title: "Push-up variations from beginner to advanced", tag: "Bodyweight", cluster: "adaptive-training" },
  { slug: "bodyweight-leg-workout", title: "A complete bodyweight leg workout that actually challenges you", tag: "Bodyweight", cluster: "adaptive-training" },
  { slug: "calisthenics-for-beginners", title: "Calisthenics for beginners: where to start", tag: "Bodyweight", cluster: "adaptive-training" },
  { slug: "how-to-do-dips-properly", title: "How to do dips properly and progress them", tag: "Bodyweight", cluster: "adaptive-training" },
  { slug: "plank-variations-core", title: "Plank variations that build real core strength", tag: "Bodyweight", cluster: "adaptive-training" },
  { slug: "home-workout-no-equipment", title: "A full home workout program with zero equipment", tag: "Bodyweight", cluster: "adaptive-training" },
  { slug: "burpee-alternatives", title: "Burpee alternatives for people who hate burpees", tag: "Bodyweight", cluster: "adaptive-training" },
  { slug: "jump-rope-workout-guide", title: "Jump rope workouts: the underrated cardio option", tag: "Bodyweight", cluster: "adaptive-training" },
  { slug: "pistol-squat-progression", title: "How to work up to a pistol squat", tag: "Bodyweight", cluster: "adaptive-training" },
  { slug: "handstand-progression-guide", title: "How to learn a handstand: a realistic progression", tag: "Bodyweight", cluster: "adaptive-training" },

  // Women's fitness
  { slug: "strength-training-myths-women", title: "Strength training myths for women — debunked", tag: "Women", cluster: "lifestyle" },
  { slug: "best-exercises-for-women-beginners", title: "Best exercises for women just starting out", tag: "Women", cluster: "lifestyle" },
  { slug: "training-around-menstrual-cycle", title: "How to train around your menstrual cycle", tag: "Women", cluster: "lifestyle" },
  { slug: "women-building-muscle-realistically", title: "How fast can women build muscle? The realistic answer", tag: "Women", cluster: "lifestyle" },
  { slug: "postpartum-fitness-guide", title: "Getting back to fitness after pregnancy: a complete guide", tag: "Women", cluster: "lifestyle" },
  { slug: "fitness-through-menopause", title: "Fitness through menopause: what changes and how to adapt", tag: "Women", cluster: "lifestyle" },
  { slug: "womens-body-recomposition", title: "Body recomposition for women: what actually works", tag: "Women", cluster: "lifestyle" },
  { slug: "best-glute-exercises-women", title: "The best glute exercises for women (evidence-based)", tag: "Women", cluster: "lifestyle" },
  { slug: "women-and-protein-intake", title: "Protein intake for women: how much you actually need", tag: "Women", cluster: "lifestyle" },
  { slug: "fitness-confidence-for-women", title: "Building fitness confidence as a woman in the gym", tag: "Women", cluster: "lifestyle" },

  // Goals / motivation
  { slug: "how-to-set-realistic-fitness-goals", title: "How to set fitness goals you'll actually hit", tag: "Goals", cluster: "lifestyle" },
  { slug: "staying-motivated-to-work-out", title: "How to stay motivated to work out long term", tag: "Goals", cluster: "lifestyle" },
  { slug: "fitness-habit-building-guide", title: "Building a workout habit that actually sticks", tag: "Goals", cluster: "lifestyle" },
  { slug: "tracking-fitness-progress", title: "How to track fitness progress beyond the scale", tag: "Goals", cluster: "lifestyle" },
  { slug: "fitness-mindset-long-term", title: "The mindset shift that separates people who stay fit", tag: "Goals", cluster: "lifestyle" },
  { slug: "how-to-not-quit-gym-in-january", title: "How to not quit going to the gym in January", tag: "Goals", cluster: "lifestyle" },
  { slug: "when-to-change-workout-routine", title: "When to change your workout routine — and how", tag: "Goals", cluster: "lifestyle" },
  { slug: "fitness-progress-photos-guide", title: "Progress photos: how to take them and what they tell you", tag: "Goals", cluster: "lifestyle" },
  { slug: "training-accountability-strategies", title: "How to hold yourself accountable to your training", tag: "Goals", cluster: "lifestyle" },
  { slug: "consistency-over-perfection-training", title: "Why consistency beats intensity every single time", tag: "Goals", cluster: "lifestyle" },
];

async function generatePost(topic) {
  const prompt = `Write a practical, consumer-friendly fitness blog post for saddie.ai — the home of Saddie, an AI fitness coach.

Title: "${topic.title}"

Voice: Warm, direct, knowledgeable. Like a smart friend who trains, not a fitness magazine. Write as Saddie's perspective where relevant.

Requirements:
- 500-700 words
- Practical, actionable advice
- Mention Saddie or TRLActive (trlactive.com) naturally once or twice
- Use ## for 2-3 section headings
- End with a brief CTA to try TRLActive
- No fluff opener, no "In conclusion"

Return ONLY the markdown body. Start with the first paragraph.`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 900,
      temperature: 0.75,
    }),
  });

  if (!res.ok) throw new Error(`OpenAI error: ${await res.text()}`);
  const data = await res.json();
  return data.choices[0].message.content.trim();
}

function backdatePost(index, total) {
  // Spread posts from Oct 2024 to Apr 2026 (18 months)
  const start = new Date("2024-10-01").getTime();
  const end = new Date("2026-04-20").getTime();
  const t = start + (end - start) * (index / total);
  return new Date(t).toISOString().split("T")[0];
}

async function main() {
  const existing = new Set(fs.readdirSync(BLOG_DIR).map(f => f.replace(/\.(mdx|md)$/, "")));
  const toGenerate = TOPICS.filter(t => !existing.has(t.slug));

  console.log(`Generating ${toGenerate.length} posts (${existing.size} already exist)...`);

  for (let i = 0; i < toGenerate.length; i++) {
    const topic = toGenerate[i];
    const date = backdatePost(i, toGenerate.length);

    try {
      console.log(`[${i + 1}/${toGenerate.length}] ${topic.slug}`);
      const body = await generatePost(topic);

      const mdx = `---\ntitle: "${topic.title}"\ndescription: "${topic.title} — practical advice from Saddie, your AI fitness coach."\ndate: "${date}"\ntag: "${topic.tag}"\ncluster: "${topic.cluster}"\n---\n\n${body}`;

      fs.writeFileSync(path.join(BLOG_DIR, `${topic.slug}.mdx`), mdx);

      // Rate limit: 3 req/sec
      await new Promise(r => setTimeout(r, 350));
    } catch (err) {
      console.error(`Failed ${topic.slug}:`, err.message);
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  console.log("Done.");
}

main();
