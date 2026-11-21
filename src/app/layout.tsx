import "./global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";

export const metadata = {
  title: "BoundaryKit documentation",
  icons: "/assets/favicon.svg",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning><body><RootProvider search={{ enabled: false }}>{children}</RootProvider></body></html>
}
