import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vishvrajrathod.netlify.app"),
  title: "Vishvraj Rathod | Full Stack AI Developer",
  description:
    "Vishvraj Rathod is a Full Stack AI Developer and MSc IT student from Ahmedabad, India, building web apps, mobile apps, and AI agent platforms. View projects, services, and get in touch.",
  keywords: [
    "Vishvraj Rathod",
    "Vishvrajsinh Rathod",
    "Vishvraj Rathod portfolio",
    "Vishvraj Rathod developer",
    "Full Stack Developer Ahmedabad",
    "AI Developer India",
  ],
  authors: [{ name: "Vishvraj Rathod", url: "https://vishvrajrathod.netlify.app" }],
  creator: "Vishvraj Rathod",
  publisher: "Vishvraj Rathod",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    url: "https://vishvrajrathod.netlify.app",
    title: "Vishvraj Rathod | Full Stack AI Developer",
    description:
      "Full Stack AI Developer and MSc IT student building web apps, mobile apps, and AI agent platforms.",
    siteName: "Vishvraj Rathod",
    images: [{ url: "/profile-photo.jpg", width: 1200, height: 630, alt: "Vishvraj Rathod" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishvraj Rathod | Full Stack AI Developer",
    description: "Full Stack AI Developer and MSc IT student building web apps, mobile apps, and AI agent platforms.",
    images: ["/profile-photo.jpg"],
  },
  alternates: {
    canonical: "https://vishvrajrathod.netlify.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vishvraj Rathod",
              alternateName: "Vishvrajsinh Rathod",
              url: "https://vishvrajrathod.netlify.app",
              image: "https://vishvrajrathod.netlify.app/profile-photo.jpg",
              jobTitle: "Full Stack AI Developer",
              description:
                "Full Stack AI Developer and MSc IT student building web apps, mobile apps, and AI agent platforms.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Silver Oak University",
              },
              sameAs: [
                "https://github.com/Vishvrajsinh2003-Rathod",
                "https://www.linkedin.com/in/vishvrajsinh-rathod-8588322",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
