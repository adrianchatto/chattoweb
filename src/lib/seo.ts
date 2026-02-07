import { Metadata } from 'next';
import { profileData } from '@/content/profile';

export function generateMetadata(): Metadata {
  const { seo, personal } = profileData;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: personal.name }],
    creator: personal.name,
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      url: 'https://adrianchatto.com', // Update with actual domain
      title: seo.title,
      description: seo.description,
      siteName: personal.name,
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
          alt: `${personal.name} - ${personal.title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage],
      creator: personal.links.twitter
        ? `@${personal.links.twitter.split('/').pop()}`
        : undefined,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
  };
}

export function generatePersonSchema() {
  const { personal } = profileData;

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personal.name,
    jobTitle: personal.title,
    email: personal.email,
    telephone: personal.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: personal.location,
    },
    url: 'https://adrianchatto.com', // Update with actual domain
    image: personal.headshot,
    sameAs: [
      personal.links.linkedin,
      personal.links.github,
      personal.links.twitter,
    ].filter(Boolean),
    alumniOf: {
      '@type': 'Organization',
      name: 'Professional Experience',
    },
    knowsAbout: profileData.skills,
  };
}
