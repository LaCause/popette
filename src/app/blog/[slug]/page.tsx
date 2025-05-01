import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/app/constants/blog";
import { ArticleBody } from "@/app/components/Article/ArticleBody/ArticleBody";
import { ArticleSuggestion } from "@/app/components/Article/ArticleSuggestion/ArticleSuggestion";
import { SEOJsonLd } from "@/app/components/JsonLd/SEOJsonLd/SEOJsonLd";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article introuvable" };

  const description = post.content.replace(/<[^>]+>/g, "").slice(0, 160);

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      images: [
        {
          url: `https://popette.brunch/api/og/${post.slug}`,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [`https://popette.brunch/api/og/${post.slug}`],
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post)
    return <div className="text-center py-20">Article introuvable</div>;

  const description = post.content.replace(/<[^>]+>/g, "").slice(0, 160);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    image: `https://popette.brunch/api/og/${post.slug}`,
    author: {
      "@type": "Organization",
      name: "Popette",
    },
    publisher: {
      "@type": "Organization",
      name: "Popette",
      logo: {
        "@type": "ImageObject",
        url: "/logo.svg",
      },
    },
    description: description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://popette.brunch/blog/${post.slug}`,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://popette.brunch/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://popette.brunch/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://popette.brunch/blog/${post.slug}`,
      },
    ],
  };

  return (
    <main className="bg-[var(--color-background)] text-[var(--color-on-background)] py-16 px-6 sm:px-8 lg:px-16">
      <nav
        className="text-sm font-body text-[var(--color-on-background)]/60 mb-6"
        aria-label="Fil d’Ariane"
      >
        <ol className="flex gap-2">
          <li>
            <Link href="/" className="hover:underline">
              Accueil
            </Link>{" "}
            /
          </li>
          <li>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>{" "}
            /
          </li>
          <li className="text-[var(--color-on-background)]">{post.title}</li>
        </ol>
      </nav>

      <article className="max-w-3xl mx-auto space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-title font-semibold">{post.title}</h1>
          <p className="text-base font-body text-[var(--color-on-background)]/70">
            Publié le{" "}
            {new Date(post.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            – 4 min de lecture
          </p>
        </header>

        <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <ArticleBody html={post.content} />
        <ArticleSuggestion exclude={post.slug} />
      </article>

      <SEOJsonLd json={jsonLd} />
      <SEOJsonLd json={breadcrumbLd} />
    </main>
  );
}
