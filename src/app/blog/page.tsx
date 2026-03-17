import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import type { BlogPost } from "@/lib/blog";

const SITE_URL = "https://benktechlabs.com";

export const metadata: Metadata = {
  title: "Blog — Web Dev, AI & Marketing Insights | BenK Tech Labs",
  description:
    "Web dev, AI automation & digital marketing insights for Indian businesses. Tips, guides, and growth strategies from BenK Tech Labs, Vijayawada.",
  openGraph: {
    title: "Blog — Web Dev, AI & Marketing Insights | BenK Tech Labs",
    description:
      "Web dev, AI automation & digital marketing insights for Indian businesses. Tips, guides, and growth strategies from BenK Tech Labs, Vijayawada.",
    type: "website",
    url: `${SITE_URL}/blog`,
    siteName: "BenK Tech Labs",
  },
};

function PostCard({ post }: { post: BlogPost }) {
  const { frontmatter, slug, readTime } = post;
  const { title, excerpt, date, author, tags, coverImage, color } =
    frontmatter;
  const categoryTag = tags?.[0] ?? "General";

  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all hover:shadow-md"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={`Cover image for "${title}" — BenK Tech Labs blog post`}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-gradient-to-br p-6 text-center"
            style={{
              background: `linear-gradient(135deg, ${color} 0%, ${color}B3 100%)`,
            }}
          >
            <h3 className="text-lg font-bold leading-tight text-white drop-shadow-md md:text-xl">
              {title}
            </h3>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-700 backdrop-blur-sm">
          {categoryTag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h2 className="mb-2 font-bold text-primary transition-colors group-hover:text-accent">
          {title}
        </h2>
        <p className="mb-3 flex-1 text-sm text-muted line-clamp-2">{excerpt}</p>
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <time dateTime={date}>{new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</time>
          <span>·</span>
          <span>{readTime}</span>
          <span>·</span>
          <span>{author}</span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-surface">
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-2 text-4xl font-bold text-primary md:text-5xl">
            BenK Tech Labs Blog
          </h1>
          <p className="mb-12 text-lg text-muted">
            Insights on web development, AI, and digital growth in India
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          {posts.length === 0 && (
            <p className="py-12 text-center text-muted">
              No posts yet. Check back soon!
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
