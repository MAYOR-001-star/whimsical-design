import type { Metadata } from "next";
import { creatorsHtml } from "@/content/pages";

export const metadata: Metadata = {
  title: "Creators — start.ng",
};

export default function Page() {
  return (
    <main
      dangerouslySetInnerHTML={{ __html: creatorsHtml }}
      suppressHydrationWarning
    />
  );
}
