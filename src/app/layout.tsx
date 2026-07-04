import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vishvraj Rathod | Premium Full-Stack & AI Developer Portfolio",
  description: "A world-class interactive portfolio website by Vishvraj Rathod.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
