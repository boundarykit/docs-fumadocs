import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
export default function Layout({children}:{children:React.ReactNode}) {return <DocsLayout tree={source.pageTree} nav={{title:<><img className="block dark:hidden" width="145" src="/assets/logo/logo-wide-wordmark.svg" alt="BoundaryKit"/><img className="hidden dark:block" width="145" src="/assets/logo/logo-wide-wordmark-dark.svg" alt="BoundaryKit"/></>}}>{children}</DocsLayout>}
