import { NextResponse } from "next/server";

// Different topic pool from trlactive.com — saddie.ai targets Saddie-persona and lifestyle angles
const TOPIC_POOL = [
  { slug: "workout-app-for-shift-workers", tag: "Lifestyle", cluster: "lifestyle", keyword: "best workout app for shift workers" },
  { slug: "ai-coach-vs-gym-bro-advice", tag: "AI Coaching", cluster: "ai-coaching", keyword: "AI fitness coach vs gym bro advice" },
  { slug: "fitbod-worth-it-2026", tag: "Comparison", cluster: "comparisons", keyword: "Is Fitbod worth it in 2026" },
  { slug: "how-to-stay-consistent-with-working-out", tag: "Lifestyle", cluster: "lifestyle", keyword: "how to stay consistent with working out" },
  { slug: "ai-personal-trainer-for-beginners", tag: "Beginners", cluster: "ai-coaching", keyword: "AI personal trainer for complete beginners" },
  { slug: "best-workout-app-no-equipment", tag: "Lifestyle", cluster: "lifestyle", keyword: "best workout app with no equipment" },
  { slug: "progressive-overload-explained-simply", tag: "Strength", cluster: "adaptive-training", keyword: "progressive overload explained simply" },
  { slug: "fitness-app-that-adapts-to-you", tag: "Adaptive Training", cluster: "adaptive-training", keyword: "fitness app that actually adapts to you" },
  { slug: "future-app-cheaper-alternative", tag: "Comparison", cluster: "comparisons", keyword: "cheaper alternative to Future fitness app" },
  { slug: "voice-workout-coaching-benefits", tag: "Voice Coaching", cluster: "voice-coaching", keyword: "benefits of voice coaching during workouts" },
  { slug: "working-out-when-you-have-no-motivation", tag: "Lifestyle", cluster: "lifestyle", keyword: "working out when you have no motivation" },
  { slug: "how-ai-builds-workout-plan", tag: "AI Coaching", cluster: "ai-coaching", keyword: "how AI builds your workout plan" },
  { slug: "strength-training-for-runners", tag: "Strength", cluster: "adaptive-training", keyword: "strength training for runners" },
  { slug: "best-gym-app-for-introverts", tag: "Lifestyle", cluster: "lifestyle", keyword: "best gym app for introverts" },
  { slug: "workout-app-that-talks-back", tag: "Voice Coaching", cluster: "voice-coaching", keyword: "workout app that actually talks to you" },
  { slug: "freeletics-vs-trlactive", tag: "Comparison", cluster: "comparisons", keyword: "Freeletics vs TRLActive comparison" },
  { slug: "missed-workout-what-to-do", tag: "Adaptive Training", cluster: "adaptive-training", keyword: "what to do when you miss a workout" },
  { slug: "ai-coaching-worth-it", tag: "AI Coaching", cluster: "ai-coaching", keyword: "is AI personal training actually worth it" },
  { slug: "training-around-kids-schedule", tag: "Lifestyle", cluster: "lifestyle", keyword: "how to train consistently with kids" },
  { slug: "myfitnesspal-vs-trlactive-2026", tag: "Comparison", cluster: "comparisons", keyword: "MyFitnessPal vs TRLActive in 2026" },
];

function getTodaysTopic() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  return TOPIC_POOL[dayOfYear % TOPIC_POOL.length];
}

export async function GET(req: Request) {
  const secret = req.headers.get("x-cron-secret") ?? new URL(req.url).searchParams.get("secret");
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const topic = getTodaysTopic();
  const date = new Date().toISOString().split("T")[0];

  // Generate post via OpenAI
  const prompt = `Write a practical, consumer-friendly fitness blog post for saddie.ai — the home of Saddie, an AI fitness coach.

Topic: "${topic.keyword}"

Voice: Write as if Saddie (an AI coach) is speaking directly to the reader. Warm, direct, no jargon. Like a knowledgeable friend, not a fitness magazine.

Requirements:
- 500-750 words
- Practical, actionable advice
- Mention that Saddie powers TRLActive (trlactive.com) naturally once or twice
- Use ## headings
- End with a short CTA encouraging the reader to try TRLActive
- No fluff, no filler

Return ONLY the markdown body. Start with the first paragraph, not a heading.`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1000,
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    return NextResponse.json({ error: "OpenAI failed", detail: err }, { status: 500 });
  }

  const data = await res.json();
  const body = data.choices[0].message.content.trim();
  const title = topic.keyword.charAt(0).toUpperCase() + topic.keyword.slice(1);

  // Build new post object to append to posts array via GitHub
  const newPost = {
    slug: topic.slug,
    title,
    summary: `${topic.keyword} — practical advice from Saddie, your AI fitness coach.`,
    date: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    readTime: "4 min",
    tag: topic.tag,
    cluster: topic.cluster,
    body,
  };

  // Fetch current posts.ts from GitHub
  const getRes = await fetch("https://api.github.com/repos/davewilsn05/saddie-ai/contents/lib/posts.ts", {
    headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
  });

  if (!getRes.ok) {
    return NextResponse.json({ error: "Could not fetch posts.ts" }, { status: 500 });
  }

  const fileData = await getRes.json();
  const currentContent = Buffer.from(fileData.content, "base64").toString("utf-8");

  // Skip if slug already exists
  if (currentContent.includes(`slug: "${topic.slug}"`)) {
    return NextResponse.json({ skipped: true, slug: topic.slug, reason: "already exists" });
  }

  // Insert new post before the closing ]; of the POSTS array
  const newPostEntry = `  {
    slug: "${newPost.slug}",
    title: "${newPost.title.replace(/"/g, '\\"')}",
    summary: "${newPost.summary.replace(/"/g, '\\"')}",
    date: "${newPost.date}",
    readTime: "${newPost.readTime}",
    tag: "${newPost.tag}",
    cluster: "${newPost.cluster}",
    body: \`${newPost.body.replace(/`/g, "'")}\`,
  },`;

  const updatedContent = currentContent.replace(
    /^(export function getPost)/m,
    `${newPostEntry}\n\nexport function getPost`
  );

  // Commit updated posts.ts
  const putRes = await fetch("https://api.github.com/repos/davewilsn05/saddie-ai/contents/lib/posts.ts", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: `Auto-post: ${title}`,
      content: Buffer.from(updatedContent).toString("base64"),
      sha: fileData.sha,
    }),
  });

  if (!putRes.ok) {
    const err = await putRes.text();
    return NextResponse.json({ error: "GitHub commit failed", detail: err }, { status: 500 });
  }

  return NextResponse.json({ success: true, slug: topic.slug, title, date });
}
