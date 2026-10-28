import type { Metadata } from "next";
import { leaderboardHtml } from "@/content/pages";

export const metadata: Metadata = {
  title: "Leaderboard — start.ng",
};

export default function Page() {
  return (
    <main
      dangerouslySetInnerHTML={{ __html: leaderboardHtml }}
      suppressHydrationWarning
    />
  );
}
