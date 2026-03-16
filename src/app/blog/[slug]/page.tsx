import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  const { title, excerpt, author, date } = post.frontmatter;
  return {
    title: `${title} | BenK Tech Labs Blog`,
    description: excerpt,
    authors: [{ name: author }],
    openGraph: {
      title,
      description: excerpt,
      type: "article",
      publishedTime: date,
      authors: [author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { frontmatter, content, readTime } = post;
  const { title, author, date, tags } = frontmatter;
  const firstTag = tags?.[0] ?? "your project";

  return (
    <div className="min-h-screen bg-surface">
      <article className="mx-auto max-w-3xl px-4 py-16">
        <div className="rounded-xl border border-border bg-white p-6 shadow-sm md:p-10">
          <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            {title}
          </h1>
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span>{author}</span>
            <span>·</span>
            <time dateTime={date}>
              {new Date(date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{readTime}</span>
          </div>
          {tags && tags.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
            <MDXRemote source={content} />
          </div>
          <div className="mt-12 rounded-lg border-l-4 border-accent bg-surface p-6">
            <p className="mb-4 font-semibold text-primary">
              Need help with {firstTag}? Let&apos;s talk.
            </p>
            <Link
              href="/#enquiry-form"
              className="inline-flex items-center rounded-lg bg-accent px-6 py-2.5 font-semibold text-white transition hover:bg-accentLight"
            >
              Get a Free Quote →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
