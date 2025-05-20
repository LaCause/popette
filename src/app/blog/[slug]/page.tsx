import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArticleBody } from "@/app/components/Article/ArticleBody/ArticleBody";
import { ArticleSuggestion } from "@/app/components/Article/ArticleSuggestion/ArticleSuggestion";
import { SEOJsonLd } from "@/app/components/JsonLd/SEOJsonLd/SEOJsonLd";
import { getPostBySlug, getRelatedPosts } from "@/app/lib/posts/post";
import Title from "@/app/components/ui/Title/Title";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

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

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);
  const relatedPosts = await getRelatedPosts(params.slug);

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
    <main className="bg-background text-on-tertiary-container py-20 px-6 sm:px-8 lg:px-16">
      <nav
        className="text-sm font-body text-on-tertiary-container/60 mb-6"
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
          <li className="text-on-tertiary-container">{post.title}</li>
        </ol>
      </nav>

      <article className="max-w-3xl mx-auto space-y-8">
        <header className="space-y-4">
          <Title className="typography-secondary-xl-bold" as="h1">
            {post.title}
          </Title>
          <p className="typography-primary-m text-on-tertiary-container/70">
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
            src={post.image ?? ""}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <ArticleBody html={post.content} />
        <div className="mt-12">
          <p className="text-sm font-body text-on-tertiary-container/60 mb-4 uppercase tracking-widest">
            Partager cet article
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://popette.brunch/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Partager sur Facebook"
              className="flex items-center gap-2 rounded-full px-4 py-2 bg-tertiary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition font-body text-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-2.9h2v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.9h2.2L15 15.9h-2v7A10 10 0 0022 12z" />
              </svg>
              Facebook
            </a>

            <a
              href={`https://twitter.com/intent/tweet?url=https://popette.brunch/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Partager sur Twitter"
              className="flex items-center gap-2 rounded-full px-4 py-2 bg-tertiary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition font-body text-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.27 4.27 0 001.88-2.36 8.4 8.4 0 01-2.7 1.03A4.2 4.2 0 0015.5 4c-2.3 0-4.2 1.9-4.2 4.2 0 .33.03.66.1.97A11.9 11.9 0 013 5.1a4.2 4.2 0 001.3 5.6 4.2 4.2 0 01-1.9-.5v.05c0 2 1.4 3.7 3.3 4.1a4.3 4.3 0 01-1.9.07 4.2 4.2 0 003.9 2.9 8.4 8.4 0 01-6.2 1.7A11.9 11.9 0 0010.3 21c7.5 0 11.6-6.3 11.6-11.6v-.5c.8-.6 1.5-1.3 2-2.1z" />
              </svg>
              Twitter
            </a>

            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=https://popette.brunch/blog/${post.slug}&title=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Partager sur LinkedIn"
              className="flex items-center gap-2 rounded-full px-4 py-2 bg-tertiary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition font-body text-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20 3A2 2 0 0122 5v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h16zM8.2 18v-7.2H5.6V18h2.6zm-1.3-8.2c.9 0 1.5-.6 1.5-1.4S7.8 7 6.9 7s-1.5.6-1.5 1.4.6 1.4 1.5 1.4zM18.4 18v-4c0-2.2-1.2-3.2-2.7-3.2-1.2 0-1.7.6-2 1v-1H11v7.2h2.7v-4c0-1 .3-1.7 1.2-1.7s1.1.7 1.1 1.7v4h2.4z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
        <ArticleSuggestion relatedPosts={relatedPosts} />
      </article>

      <SEOJsonLd json={jsonLd} />
      <SEOJsonLd json={breadcrumbLd} />
    </main>
  );
}
