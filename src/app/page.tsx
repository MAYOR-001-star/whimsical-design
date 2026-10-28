import type { Metadata } from "next";
import { homeHtml } from "@/content/pages";

export const metadata: Metadata = {
  title: "start.ng — Nigeria's home for browser games",
};

export default function Page() {
  return (
    <main
      dangerouslySetInnerHTML={{ __html: homeHtml }}
      suppressHydrationWarning
    />
  );
}
