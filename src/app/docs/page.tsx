import type { Metadata } from "next";
import { docsHtml } from "@/content/pages";

export const metadata: Metadata = {
  title: "Docs — start.ng",
};

export default function Page() {
  return (
    <main
      dangerouslySetInnerHTML={{ __html: docsHtml }}
      suppressHydrationWarning
    />
  );
}
