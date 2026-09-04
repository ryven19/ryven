import { notFound } from "next/navigation";
import { Metadata } from "next";
import { showcaseCategories, getSectionBySlug } from "@/data/showcase";
import SectionDetailView from "@/components/SectionDetailView";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  const params: { slug: string; sectionSlug: string }[] = [];
  for (const category of showcaseCategories) {
    for (const section of category.sections) {
      params.push({
        slug: category.slug,
        sectionSlug: section.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; sectionSlug: string }>;
}): Promise<Metadata> {
  const { slug, sectionSlug } = await params;
  const data = getSectionBySlug(slug, sectionSlug);

  if (!data) {
    return {
      title: "Section Not Found | Ryven",
    };
  }

  return {
    title: `${data.section.title} — ${data.category.label} | Ryven`,
    description: data.section.description,
  };
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ slug: string; sectionSlug: string }>;
}) {
  const { slug, sectionSlug } = await params;
  const data = getSectionBySlug(slug, sectionSlug);

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="pt-16 md:pt-20">
        <SectionDetailView category={data.category} section={data.section} />
      </div>
      <Footer />
    </>
  );
}
