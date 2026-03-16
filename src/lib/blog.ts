import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  slug: string;
  coverImage?: string;
  color: string;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogPostFrontmatter;
  content: string;
  readTime: string;
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  const posts: BlogPost[] = [];

  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const slug = (data.slug as string) || getSlugFromFilename(file);
    const readTimeResult = readingTime(content);

    posts.push({
      slug,
      frontmatter: data as BlogPostFrontmatter,
      content,
      readTime: `${Math.max(1, Math.ceil(readTimeResult.minutes))} min read`,
    });
  }

  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date).getTime();
    const dateB = new Date(b.frontmatter.date).getTime();
    return dateB - dateA;
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);
  return post ?? null;
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}
