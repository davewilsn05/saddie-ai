import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tag: string;
  cluster: string;
  readingTime: string;
  content: string;
};

function getAllFiles(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
}

export function getAllPosts(): Omit<BlogPost, "content">[] {
  return getAllFiles()
    .map((file) => {
      const slug = file.replace(/\.(mdx|md)$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        date: data.date ?? "2025-01-01",
        tag: data.tag ?? "General",
        cluster: data.cluster ?? "general",
        readingTime: readingTime(content).text,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): BlogPost | undefined {
  const files = getAllFiles();
  const file = files.find((f) => f.replace(/\.(mdx|md)$/, "") === slug);
  if (!file) return undefined;
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "2025-01-01",
    tag: data.tag ?? "General",
    cluster: data.cluster ?? "general",
    readingTime: readingTime(content).text,
    content,
  };
}
