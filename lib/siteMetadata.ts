import type { Metadata } from "next";

export const SITE_URL = "https://saddie.ai";
export const SITE_NAME = "Saddie";
export const DEFAULT_TITLE = "Saddie - AI Fitness Coach for TRL/Active";
export const DEFAULT_DESCRIPTION =
  "Saddie is the AI fitness coach behind TRL/Active. Build adaptive workout, nutrition, recovery, and progress plans around real life.";

type SiteMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  imageTitle?: string;
  imageTag?: string;
  type?: "website" | "article";
  robots?: Metadata["robots"];
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function ogImageUrl(title: string, tag = SITE_NAME) {
  const params = new URLSearchParams({ title, tag });
  return `/api/og?${params.toString()}`;
}

export function buildSiteMetadata({
  title,
  description,
  path = "/",
  imageTitle = title,
  imageTag = SITE_NAME,
  type = "website",
  robots,
}: SiteMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const image = ogImageUrl(imageTitle, imageTag);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    robots,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type,
      locale: "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${imageTitle} | ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image, alt: `${imageTitle} | ${SITE_NAME}` }],
    },
  };
}
