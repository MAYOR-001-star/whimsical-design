import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "start.ng — Nigeria's home for browser games",
  description:
    "Games made by builders in the community. Each one lives at its own start.ng address. Pick one and play right in your browser.",
  openGraph: {
    title: "start.ng — Nigeria's home for browser games",
    description: "Good vibes. Good games. Nigeria's home for browser games.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
