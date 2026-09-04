import { notFound } from "next/navigation";
import { Metadata } from "next";
import { showcaseCategories, getCategoryBySlug } from "@/data/showcase";
import CategoryDetailView from "@/components/CategoryDetailView";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return showcaseCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Work Not Found | Ryven",
    };
  }

  return {
    title: `${category.label} | Work & References | Ryven`,
    description: category.description,
  };
}

export default async function WorkCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="pt-16 md:pt-20">
        <CategoryDetailView category={category} />
      </div>
      <Footer />
    </>
  );
}
