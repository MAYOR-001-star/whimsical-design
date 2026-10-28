import type { Metadata } from "next";
import { tournamentHtml } from "@/content/pages";

export const metadata: Metadata = {
  title: "Today's Tournament — start.ng",
};

export default function Page() {
  return (
    <main
      dangerouslySetInnerHTML={{ __html: tournamentHtml }}
      suppressHydrationWarning
    />
  );
}
