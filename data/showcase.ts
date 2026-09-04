export type SampleWork = {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  mediaType: "image" | "video";
  src: string;
  aspectRatio?: "square" | "portrait" | "video" | "wide";
  tags: string[];
};

export type CapabilitySection = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  description: string;
  tag: string;
  coverMedia: {
    type: "image" | "video";
    src: string;
  };
  deliverables: SampleWork[];
};

export type ShowcaseCategory = {
  id: "ai-visuals" | "ai-video" | "campaigns";
  slug: string;
  label: string;
  tagline: string;
  description: string;
  longDescription: string;
  tag: string;
  featuredMedia: {
    type: "image" | "video";
    src: string;
  };
  sections: CapabilitySection[];
};

export const showcaseCategories: ShowcaseCategory[] = [
  {
    id: "ai-visuals",
    slug: "ai-visuals",
    label: "Visuals & Stills",
    tagline: "High-fashion lookbooks & creative product shots",
    description:
      "Precision brand campaigns, editorial lookbooks, and high-impact creative product shots crafted for global lifestyle and digital brands.",
    longDescription:
      "A curated collection of photographic key visuals, editorial apparel lookbooks, creative product shots, and spatial studies produced for contemporary brands.",
    tag: "STILLS",
    featuredMedia: {
      type: "image",
      src: "/1.avif",
    },
    sections: [
      // ─── 01: CLOTHING & STREETWEAR ─────────────────────────────────────────
      {
        id: "clothing",
        slug: "clothing",
        title: "Clothing & Streetwear",
        subtitle: "Bonkers Lookbook Volume 01",
        client: "Bonkers Apparel",
        year: "2024",
        tag: "LOOKBOOK",
        description:
          "Editorial fashion lookbook exploring relaxed oversized cuts, heavyweight garment drapery, and high-contrast urban portraiture.",
        coverMedia: {
          type: "image",
          src: "/bonkers.1.jpg",
        },
        deliverables: [
          {
            id: "bonkers-01",
            title: "Heavyweight Sweats & Street Editorial",
            client: "Bonkers",
            category: "Editorial Lookbook",
            year: "2024",
            description:
              "Sunlit urban street capture highlighting oversized garment silhouette, custom tailoring, and warm film-grade color.",
            mediaType: "image",
            src: "/bonkers.1.jpg",
            aspectRatio: "portrait",
            tags: ["Streetwear", "Lookbook", "Editorial"],
          },
          {
            id: "bonkers-02",
            title: "Drift Bootcut Denim Campaign",
            client: "Bonkers",
            category: "Campaign Poster",
            year: "2024",
            description:
              "High-impact denim campaign poster featuring textured washed denim, bold brutalist typography, and e-commerce launch visual.",
            mediaType: "image",
            src: "/Bonkers.2.jpg",
            aspectRatio: "portrait",
            tags: ["Denim", "Campaign", "Typography"],
          },
          {
            id: "bonkers-03",
            title: "Street Silhouette & Kinetic Fit",
            client: "Bonkers",
            category: "Streetwear Lookbook",
            year: "2024",
            description:
              "Dynamic urban angle highlighting outerwear drape, layered garment proportions, and raw street atmosphere.",
            mediaType: "image",
            src: "/bonkers.3.jpg",
            aspectRatio: "portrait",
            tags: ["Streetwear", "Outerwear", "Styling"],
          },
          {
            id: "bonkers-04",
            title: "Studio Pattern & Hoodie Series",
            client: "Bonkers",
            category: "Studio Lookbook",
            year: "2024",
            description:
              "Clean studio backdrop study focusing on embossed tonal hoodie patterns, textile detailing, and contemporary model styling.",
            mediaType: "image",
            src: "/Bonkers.4.jpg",
            aspectRatio: "portrait",
            tags: ["Studio", "Apparel", "Texture"],
          },
        ],
      },

      // ─── 02: CREATIVE PRODUCT SHOTS (ALL AVIF FILES) ───────────────────────
      {
        id: "creative-product-shots",
        slug: "creative-product-shots",
        title: "Creative Product Shots",
        subtitle: "Botanical & Studio Still Life Suite",
        client: "Creative Series",
        year: "2024",
        tag: "PRODUCT",
        description:
          "Macro botanical still lifes, studio product key visuals, and hyper-detailed commercial shots with dynamic lighting and clean composition.",
        coverMedia: {
          type: "image",
          src: "/static ad1.avif",
        },
        deliverables: [
          {
            id: "prod-static-01",
            title: "Orchard Club Sparkling Botanical Water",
            client: "Orchard Club",
            category: "Commercial Key Visual",
            year: "2024",
            description:
              "Atmospheric botanical still life with natural fruit elements and frosted aluminium can reflections.",
            mediaType: "image",
            src: "/static ad1.avif",
            aspectRatio: "portrait",
            tags: ["Botanical", "Beverage", "Key Visual"],
          },
          {
            id: "prod-01",
            title: "Creative Product Shot 01",
            client: "Studio Series",
            category: "Product Still",
            year: "2024",
            description:
              "Macro product lighting composition engineered for high-impact e-commerce and digital commercial placement.",
            mediaType: "image",
            src: "/1.avif",
            aspectRatio: "portrait",
            tags: ["Product Shot", "Studio Light", "Commercial"],
          },
          {
            id: "prod-02",
            title: "Creative Product Shot 02",
            client: "Studio Series",
            category: "Product Still",
            year: "2024",
            description:
              "Precision commercial studio placement featuring controlled reflections and sharp textural detail.",
            mediaType: "image",
            src: "/2.avif",
            aspectRatio: "portrait",
            tags: ["Product Shot", "Commercial", "Reflections"],
          },
          {
            id: "prod-03",
            title: "Creative Product Shot 03",
            client: "Studio Series",
            category: "Product Still",
            year: "2024",
            description:
              "High-contrast product visual focusing on sculptural form, premium material finishes, and balanced staging.",
            mediaType: "image",
            src: "/3 (1).avif",
            aspectRatio: "portrait",
            tags: ["Sculptural", "Material Finish", "Product"],
          },
          {
            id: "prod-04",
            title: "Creative Product Shot 04",
            client: "Studio Series",
            category: "Product Still",
            year: "2024",
            description:
              "Clean studio backdrop study with dynamic gradient lighting and focused product hero angle.",
            mediaType: "image",
            src: "/4.avif",
            aspectRatio: "portrait",
            tags: ["Studio", "Hero Angle", "Lighting"],
          },
          {
            id: "prod-05",
            title: "Creative Product Shot 05",
            client: "Studio Series",
            category: "Product Still",
            year: "2024",
            description:
              "Atmospheric lifestyle product placement highlighting organic color tones and elegant minimalism.",
            mediaType: "image",
            src: "/5.avif",
            aspectRatio: "portrait",
            tags: ["Minimalism", "Lifestyle", "Organic Tone"],
          },
          {
            id: "prod-06",
            title: "Creative Product Shot 06",
            client: "Studio Series",
            category: "Product Still",
            year: "2024",
            description:
              "Macro perspective detailing product surface geometry and pristine studio illumination.",
            mediaType: "image",
            src: "/6 (1).avif",
            aspectRatio: "portrait",
            tags: ["Macro", "Geometry", "Product"],
          },
          {
            id: "prod-07",
            title: "Creative Product Shot 07",
            client: "Studio Series",
            category: "Product Still",
            year: "2024",
            description:
              "Dynamic packaging and product hero capture tailored for modern advertising campaigns.",
            mediaType: "image",
            src: "/7.avif",
            aspectRatio: "portrait",
            tags: ["Packaging", "Advertising", "Hero"],
          },
          {
            id: "prod-08",
            title: "Creative Product Shot 08",
            client: "Studio Series",
            category: "Product Still",
            year: "2024",
            description:
              "Sophisticated studio composition highlighting contrast, refined shadows, and product depth.",
            mediaType: "image",
            src: "/8.avif",
            aspectRatio: "portrait",
            tags: ["Shadows", "Refined", "Still Life"],
          },
          {
            id: "prod-09",
            title: "Creative Product Shot 09",
            client: "Studio Series",
            category: "Product Still",
            year: "2024",
            description:
              "Sensory material composition with high-definition texture resolution and clean color grading.",
            mediaType: "image",
            src: "/9.avif",
            aspectRatio: "portrait",
            tags: ["Texture", "High-Definition", "Color Grade"],
          },
          {
            id: "prod-10",
            title: "Creative Product Shot 10",
            client: "Studio Series",
            category: "Product Still",
            year: "2024",
            description:
              "Master commercial key visual showcasing pristine surface clarity and contemporary art direction.",
            mediaType: "image",
            src: "/10.avif",
            aspectRatio: "portrait",
            tags: ["Commercial", "Key Visual", "Art Direction"],
          },
        ],
      },

      // ─── 03: FOOTWEAR & CMF ────────────────────────────────────────────────
      {
        id: "footwear",
        slug: "footwear",
        title: "Footwear & CMF",
        subtitle: "AeroStep Velocity Series",
        client: "AeroStep",
        year: "2024",
        tag: "FOOTWEAR",
        description:
          "Sculptural footwear studies highlighting midsole architecture, knit engineering, and studio product lighting.",
        coverMedia: {
          type: "image",
          src: "/sneakers.2.jpeg",
        },
        deliverables: [
          {
            id: "vis-05",
            title: "Sole Architecture Study",
            client: "AeroStep",
            category: "Macro Product",
            year: "2024",
            description:
              "Close-up focus on foam midsole geometry, tread structure, and composite material transitions.",
            mediaType: "image",
            src: "/sneaker.1.jpeg",
            aspectRatio: "portrait",
            tags: ["Footwear", "Macro", "Product"],
          },
          {
            id: "vis-06",
            title: "Studio Side Profile",
            client: "AeroStep",
            category: "Hero Still",
            year: "2024",
            description:
              "Floating hero profile with controlled rim lighting and polished reflective acrylic stage.",
            mediaType: "image",
            src: "/sneakers.2.jpeg",
            aspectRatio: "portrait",
            tags: ["Hero Still", "Studio Lighting", "Footwear"],
          },
        ],
      },

      // ─── 04: SKINCARE & BATH PRODUCTS ──────────────────────────────────────
      {
        id: "skincare-bath",
        slug: "skincare-bath",
        title: "Skincare & Bath",
        subtitle: "Lumina Organic Bath & Body Suite",
        client: "Lumina Living",
        year: "2024",
        tag: "SKINCARE",
        description:
          "Minimalist bath and body still lifes, tactile travertine textures, warm ambient lighting, and organic skincare aesthetics.",
        coverMedia: {
          type: "image",
          src: "/minimalist.1.jpeg",
        },
        deliverables: [
          {
            id: "vis-07",
            title: "Warm Concrete & Bath Suite",
            client: "Lumina",
            category: "Bath & Skincare",
            year: "2024",
            description:
              "Warm daylight bath suite with sculpted concrete, natural oak elements, and atmospheric ambient lighting.",
            mediaType: "image",
            src: "/minimalist.1.jpeg",
            aspectRatio: "portrait",
            tags: ["Bath", "Skincare", "Still Life"],
          },
          {
            id: "vis-08",
            title: "Sculptural Bathroom & Vanity Stills",
            client: "Lumina",
            category: "Vanity & Wellness",
            year: "2024",
            description:
              "Curved minimalist vanity space set against natural diffuse light and soft warm tones.",
            mediaType: "image",
            src: "/minimalist.2.jpeg",
            aspectRatio: "portrait",
            tags: ["Vanity", "Bath", "Wellness"],
          },
          {
            id: "vis-09",
            title: "Botanical Travertine & Product Detail",
            client: "Lumina",
            category: "Material & Product Study",
            year: "2024",
            description:
              "Extreme macro detailing travertine stone textures, fluted glass, and refined brass bath hardware.",
            mediaType: "image",
            src: "/minimalist.3.jpeg",
            aspectRatio: "portrait",
            tags: ["Bath & Body", "Travertine", "Detail"],
          },
        ],
      },
    ],
  },
  {
    id: "ai-video",
    slug: "ai-video",
    label: "Video & Motion",
    tagline: "Dynamic video reels & creator motion",
    description:
      "Contemporary video ads, creator reels, and kinetic product films crafted for high engagement across digital channels.",
    longDescription:
      "Selected short-form video films, creator reels, and motion showcases designed for modern lifestyle and digital-first brands.",
    tag: "MOTION",
    featuredMedia: {
      type: "video",
      src: "/Clothing UGC.mp4",
    },
    sections: [
      {
        id: "footwear-ugc",
        slug: "footwear-ugc",
        title: "Footwear & Motion Reel",
        subtitle: "Air Jordan Retro Kinetic",
        client: "Jordan",
        year: "2024",
        tag: "REEL",
        description:
          "Dynamic vertical video showcasing unboxing flow, tactical sneaker rotation, and rhythm-synced street motion.",
        coverMedia: {
          type: "video",
          src: "/Air jordan ugc.mp4",
        },
        deliverables: [
          {
            id: "vid-01",
            title: "Air Jordan Retro 4 Kinetic",
            client: "Jordan",
            category: "Motion Reel",
            year: "2024",
            description:
              "Dynamic vertical film showcasing unboxing flow, tactical sneaker rotation, and rhythm-synced styling.",
            mediaType: "video",
            src: "/Air jordan ugc.mp4",
            aspectRatio: "portrait",
            tags: ["Motion", "Footwear", "Social"],
          },
        ],
      },
      {
        id: "clothing-ugc",
        slug: "clothing-ugc",
        title: "Clothing UGC",
        subtitle: "Aura Apparel Casual Wear",
        client: "Aura Apparel",
        year: "2024",
        tag: "CLOTHING",
        description:
          "Dynamic clothing and lifestyle reel presenting casual fits, fabric drape in motion, and clean urban pacing.",
        coverMedia: {
          type: "video",
          src: "/Clothing UGC.mp4",
        },
        deliverables: [
          {
            id: "vid-02",
            title: "Aura Apparel Casual Clothing Reel",
            client: "Aura Apparel",
            category: "Clothing UGC",
            year: "2024",
            description:
              "Dynamic clothing video reel presenting casual fits, fabric drape in motion, and clean pacing.",
            mediaType: "video",
            src: "/Clothing UGC.mp4",
            aspectRatio: "portrait",
            tags: ["Clothing", "Fashion", "UGC", "Reel"],
          },
        ],
      },
      {
        id: "product-ugc",
        slug: "product-ugc",
        title: "Product Showcase Reel",
        subtitle: "PureForm Skincare Routine",
        client: "PureForm",
        year: "2024",
        tag: "PRODUCT",
        description:
          "Step-by-step product walkthrough engineered for clarity, elegant pacing, and high visual retention.",
        coverMedia: {
          type: "video",
          src: "/Tutorial UGC.mp4",
        },
        deliverables: [
          {
            id: "vid-03",
            title: "Skincare Routine Showcase",
            client: "PureForm",
            category: "Product Film",
            year: "2024",
            description:
              "Step-by-step product walkthrough engineered for clarity, elegant pacing, and high visual retention.",
            mediaType: "video",
            src: "/Tutorial UGC.mp4",
            aspectRatio: "portrait",
            tags: ["Product", "Showcase", "Social"],
          },
        ],
      },
    ],
  },
  {
    id: "campaigns",
    slug: "campaigns",
    label: "Commercials & Films",
    tagline: "End-to-end commercial productions",
    description:
      "Full product commercials from narrative storyboard to master delivery — combining cinematography, 3D motion, and sound design.",
    longDescription:
      "Master commercial spots, macro culinary films, and sensory beverage stories crafted for multi-platform broadcasting.",
    tag: "FILMS",
    featuredMedia: {
      type: "video",
      src: "/donut.mp4",
    },
    sections: [
      {
        id: "donut-commercial",
        slug: "donut-commercial",
        title: "Proof of Craft",
        subtitle: "Concept-Driven Macro Film",
        client: "Creative Series",
        year: "2024",
        tag: "CRAFT FILM",
        description:
          "A deliberate exercise in concept-first production. Every frame is intentional — proving that what separates good creative from forgettable output is how you think before you shoot.",
        coverMedia: {
          type: "video",
          src: "/donut.mp4",
        },
        deliverables: [
          {
            id: "donut-01",
            title: "Proof of Craft — Macro Film",
            client: "Creative Series",
            category: "Concept Film",
            year: "2024",
            description:
              "Macro commercial built around a single creative brief: show texture, light and timing with the same rigour applied to any premium brand campaign.",
            mediaType: "video",
            src: "/donut.mp4",
            aspectRatio: "portrait",
            tags: ["Concept Film", "Macro", "Craft", "Direction"],
          },
        ],
      },
      {
        id: "goat-life",
        slug: "goat-life",
        title: "Goat Life Campaign",
        subtitle: "High-Cadence Lifestyle & Beverage Series",
        client: "Goat Life",
        year: "2024",
        tag: "COMMERCIAL",
        description:
          "High-energy commercial series blending kinetic urban pacing, bold lifestyle framing, and dynamic motion transitions.",
        coverMedia: {
          type: "video",
          src: "/goat_life.mp4",
        },
        deliverables: [
          {
            id: "goat-01",
            title: "Goat Life — Master Commercial Film",
            client: "Goat Life",
            category: "Commercial Film",
            year: "2024",
            description:
              "Master commercial cut featuring vibrant lifestyle cinematography, dynamic motion tracking, and polished sound design.",
            mediaType: "video",
            src: "/goat_life.mp4",
            aspectRatio: "portrait",
            tags: ["Commercial", "Lifestyle", "Beverage", "Master Cut"],
          },
          {
            id: "goat-02",
            title: "Goat Life — Kinetic Motion Cut",
            client: "Goat Life",
            category: "Motion Cut",
            year: "2024",
            description:
              "Fast-paced short-form cut optimized for high retention across digital broadcast and social channels.",
            mediaType: "video",
            src: "/Goat_life2.mp4",
            aspectRatio: "portrait",
            tags: ["Motion Cut", "Social Ad", "High Retention"],
          },
        ],
      },
      {
        id: "plush",
        slug: "plush",
        title: "Plush Wellness Commercial",
        subtitle: "Organic Bodycare & Lifestyle Spot",
        client: "Plush",
        year: "2024",
        tag: "WELLNESS",
        description:
          "Sensory wellness commercial exploring gentle organic textures, warm ambient studio lighting, and elegant product storytelling.",
        coverMedia: {
          type: "video",
          src: "/plush.mp4",
        },
        deliverables: [
          {
            id: "plush-01",
            title: "Plush — Sensory Bodycare Showcase",
            client: "Plush",
            category: "Commercial Spot",
            year: "2024",
            description:
              "Elegant product commercial highlighting organic formulation, soft diffusion lighting, and clean branding.",
            mediaType: "video",
            src: "/plush.mp4",
            aspectRatio: "portrait",
            tags: ["Wellness", "Skincare", "Commercial", "Sensory"],
          },
        ],
      },
      {
        id: "good-habits",
        slug: "good-habits",
        title: "Good Habits Brand Film",
        subtitle: "Daily Routine & Nutrition Showcase",
        client: "Good Habits",
        year: "2024",
        tag: "BRAND FILM",
        description:
          "Engaging narrative commercial spot designed around daily healthy rituals, pristine product integration, and upbeat pacing.",
        coverMedia: {
          type: "video",
          src: "/good_habbits.mp4",
        },
        deliverables: [
          {
            id: "habits-01",
            title: "Good Habits — Master Brand Film",
            client: "Good Habits",
            category: "Brand Commercial",
            year: "2024",
            description:
              "Dynamic daily routine visual spot capturing genuine lifestyle moments and clear product benefit communication.",
            mediaType: "video",
            src: "/good_habbits.mp4",
            aspectRatio: "portrait",
            tags: ["Brand Film", "Nutrition", "Lifestyle", "Routine"],
          },
        ],
      },
      {
        id: "oatly",
        slug: "oatly",
        title: "Oatly Precision Commercial",
        subtitle: "Broadcast Fluid & Typography Spot",
        client: "Oatly",
        year: "2024",
        tag: "BROADCAST",
        description:
          "Broadcast commercial blending playful kinetic typography, photorealistic fluid physics, and pristine color grading.",
        coverMedia: {
          type: "video",
          src: "/Oatly Product Ad.mp4",
        },
        deliverables: [
          {
            id: "camp-01",
            title: "Oatly Precision Commercial",
            client: "Oatly",
            category: "Broadcast Spot",
            year: "2024",
            description:
              "Broadcast commercial blending playful kinetic typography, photorealistic fluid physics, and pristine color grading.",
            mediaType: "video",
            src: "/Oatly Product Ad.mp4",
            aspectRatio: "portrait",
            tags: ["Commercial", "Broadcast", "Typography"],
          },
        ],
      },
      {
        id: "beverage-sensory",
        slug: "beverage-sensory",
        title: "Sensory Beverage & Culinary Spots",
        subtitle: "Drift Botanical & Velvet Gelato Films",
        client: "Drift & Velvet",
        year: "2024",
        tag: "SENSORY",
        description:
          "Sensory macro food and beverage spots featuring macro condensation droplets, carbonation dynamics, and slow-motion texture ribbons.",
        coverMedia: {
          type: "video",
          src: "/Beverage Product Ad.mp4",
        },
        deliverables: [
          {
            id: "camp-02",
            title: "Drift Botanical Refreshment",
            client: "Drift",
            category: "Commercial Spot",
            year: "2024",
            description:
              "Sensory beverage film with macro condensation droplets, carbonation dynamics, and rich ambient audio master.",
            mediaType: "video",
            src: "/Beverage Product Ad.mp4",
            aspectRatio: "portrait",
            tags: ["Beverage", "Macro", "Sound Design"],
          },
          {
            id: "camp-03",
            title: "Velvet Gelato Macro Showcase",
            client: "Velvet",
            category: "Culinary Film",
            year: "2023",
            description:
              "Macro food commercial featuring decadent texture ribbons, slow-motion scoops, and warm studio lighting.",
            mediaType: "video",
            src: "/Ice-Cream Product Ad.mp4",
            aspectRatio: "portrait",
            tags: ["Food", "Slow Motion", "Commercial"],
          },
        ],
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): ShowcaseCategory | undefined {
  return showcaseCategories.find((c) => c.slug === slug || c.id === slug);
}

export function getSectionBySlug(
  categorySlug: string,
  sectionSlug: string
): { category: ShowcaseCategory; section: CapabilitySection } | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const section = category.sections.find(
    (s) => s.slug === sectionSlug || s.id === sectionSlug
  );
  if (!section) return undefined;
  return { category, section };
}
