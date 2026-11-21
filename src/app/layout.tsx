import "./global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";

export const metadata = {
  title: "BoundaryKit documentation",
  icons: "/assets/favicon.svg",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const brand = (
    <span>
      <img
        src="/assets/logo/logo-light.svg"
        alt="BoundaryKit"
        className="h-7 dark:hidden"
      />
      <img
        src="/assets/logo/logo-dark.svg"
        alt="BoundaryKit"
        className="hidden h-7 dark:block"
      />
    </span>
  );
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider search={{ enabled: false }}>
          <DocsLayout tree={source.pageTree} nav={{ title: brand }}>
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
