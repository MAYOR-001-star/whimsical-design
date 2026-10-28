import type { Metadata } from "next";
import { hangoutHtml } from "@/content/pages";

export const metadata: Metadata = {
  title: "The Hangout — start.ng",
};

export default function Page() {
  return (
    <main
      dangerouslySetInnerHTML={{ __html: hangoutHtml }}
      suppressHydrationWarning
    />
  );
}
