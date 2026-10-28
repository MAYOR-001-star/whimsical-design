import type { Metadata } from "next";
import { gamesHtml } from "@/content/pages";

export const metadata: Metadata = {
  title: "Games — start.ng",
};

export default function Page() {
  return (
    <main
      dangerouslySetInnerHTML={{ __html: gamesHtml }}
      suppressHydrationWarning
    />
  );
}
