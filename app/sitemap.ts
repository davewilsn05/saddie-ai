import type { MetadataRoute } from "next";
import { POSTS } from "../lib/posts";
import { COMPETITORS } from "../lib/competitors";
import { GOALS } from "../lib/goals";
import { TOPICS } from "../lib/topics";
import { WORKOUT_TYPES } from "../lib/workoutTypes";
import { FEATURES } from "../lib/features";

const BASE = "https://saddie.ai";
const now = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const statics = [
    { url: BASE, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${BASE}/vs`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE}/topics`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
  ];

  const posts = POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const competitors = COMPETITORS.map((c) => ({
    url: `${BASE}/vs/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const goals = GOALS.map((g) => ({
    url: `${BASE}/for/${g.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const topics = TOPICS.map((t) => ({
    url: `${BASE}/topics/${t.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const workoutTypes = WORKOUT_TYPES.map((w) => ({
    url: `${BASE}/workout-type/${w.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const features = FEATURES.map((f) => ({
    url: `${BASE}/feature/${f.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...statics, ...posts, ...competitors, ...goals, ...topics, ...workoutTypes, ...features];
}
