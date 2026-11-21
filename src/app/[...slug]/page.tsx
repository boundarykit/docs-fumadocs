import { PolicyScenario } from "../PolicyScenario";
import { notFound } from "next/navigation";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import components from "fumadocs-ui/mdx";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import { Steps, Step } from "fumadocs-ui/components/steps";
import { Accordions, Accordion } from "fumadocs-ui/components/accordion";
import { Files, Folder, File } from "fumadocs-ui/components/files";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { source } from "@/lib/source";

export const generateStaticParams = () => source.generateParams().filter(p => p.slug?.length);

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const page = source.getPage((await params).slug);
  if (!page) notFound();
  const Content = page.data.body;
  return (
    <DocsPage toc={page.data.toc}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <Content
          components={{
            ...components,
            PolicyScenario,
            Tabs,
            Tab,
            Steps,
            Step,
            Accordions,
            Accordion,
            Files,
            Folder,
            File,
            TypeTable,
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}
