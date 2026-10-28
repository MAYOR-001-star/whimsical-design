import type { Metadata } from "next";
import { categoriesHtml } from "@/content/pages";

export const metadata: Metadata = {
  title: "Categories — start.ng",
};

export default function Page() {
  return (
    <main
      dangerouslySetInnerHTML={{ __html: categoriesHtml }}
      suppressHydrationWarning
    />
  );
}
