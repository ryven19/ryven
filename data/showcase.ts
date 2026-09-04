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
    tagline: "Lookbooks, product shots & editorial stills",
    description:
      "Brand campaigns, editorial lookbooks, and product stills for lifestyle and digital brands.",
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
        subtitle: "Bonkers Lookbook Vol. 01",
        client: "Bonkers Apparel",
        year: "2024",
        tag: "LOOKBOOK",
        description:
          "Oversized cuts, heavyweight drape, and urban portraiture.",
        coverMedia: {
          type: "image",
          src: "/bonkers.1.jpg",
        },
        deliverables: [
          {
            id: "bonkers-01",
            title: "Heavyweight Sweats",
            client: "Bonkers",
            category: "Editorial Lookbook",
            year: "2024",
            description:
              "Oversized silhouette, custom tailoring, warm film color.",
            mediaType: "image",
            src: "/bonkers.1.jpg",
            aspectRatio: "portrait",
            tags: ["Streetwear", "Lookbook", "Editorial"],
          },
          {
            id: "bonkers-02",
            title: "Drift Bootcut Denim",
            client: "Bonkers",
            category: "Campaign Poster",
            year: "2024",
            description:
              "Washed denim, brutalist typography, e-commerce launch visual.",
            mediaType: "image",
            src: "/Bonkers.2.jpg",
            aspectRatio: "portrait",
            tags: ["Denim", "Campaign", "Typography"],
          },
          {
            id: "bonkers-03",
            title: "Street Silhouette",
            client: "Bonkers",
            category: "Streetwear Lookbook",
            year: "2024",
            description:
              "Outerwear drape, layered proportions, raw street atmosphere.",
            mediaType: "image",
            src: "/bonkers.3.jpg",
            aspectRatio: "portrait",
            tags: ["Streetwear", "Outerwear", "Styling"],
          },
          {
            id: "bonkers-04",
            title: "Studio Hoodie Series",
            client: "Bonkers",
            category: "Studio Lookbook",
            year: "2024",
            description:
              "Tonal hoodie patterns, textile detail, clean studio backdrop.",
            mediaType: "image",
            src: "/Bonkers.4.jpg",
            aspectRatio: "portrait",
            tags: ["Studio", "Apparel", "Texture"],
          },
        ],
      },

      // ─── 02: CREATIVE PRODUCT SHOTS ────────────────────────────────────────
      {
        id: "creative-product-shots",
        slug: "creative-product-shots",
        title: "Creative Product Shots",
        subtitle: "Studio Still Life Suite",
        client: "Creative Series",
        year: "2024",
        tag: "PRODUCT",
        description:
          "Studio product stills and macro key visuals — clean light, sharp form.",
        coverMedia: {
          type: "image",
          src: "/static ad1.avif",
        },
        deliverables: [
          {
            id: "prod-static-01",
            title: "Orchard Club Botanical Water",
            client: "Orchard Club",
            category: "Key Visual",
            year: "2024",
            description:
              "Botanical still life — fresh fruit, frosted can reflections.",
            mediaType: "image",
            src: "/static ad1.avif",
            aspectRatio: "portrait",
            tags: ["Botanical", "Beverage", "Key Visual"],
          },
          {
            id: "prod-01",
            title: "Product Still 01",
            client: "Studio Series",
            category: "Product Still",
            year: "2024",
            description: "Studio lighting for e-commerce and campaign use.",
            mediaType: "image",
            src: "/1.avif",
            aspectRatio: "portrait",
            tags: ["Product Shot", "Studio Light", "Commercial"],
          },
          {
            id: "prod-02",
            title: "Product Still 02",
            client: "Studio Series",
            category: "Product Still",
            year: "2024",
            description: "Controlled reflections, sharp textural detail.",
            mediaType: "image",
            src: "/2.avif",
            aspectRatio: "portrait",
            tags: ["Product Shot", "Commercial", "Reflections"],
          },
          {
            id: "prod-03",
            title: "Product Still 03",
            client: "Studio Series",
            category: "Product Still",
            year: "2024",
            description: "Sculptural form, premium finish, balanced staging.",
            mediaType: "image",
            src: "/3 (1).avif",
            aspectRatio: "portrait",
            tags: ["Sculptural", "Material Finish", "Product"],
          },
          {
            id: "prod-04",
            title: "Product Still 04",
            client: "Studio Series",
            category: "Product Still",
            year: "2024",
            description: "Gradient studio light, focused hero angle.",
            mediaType: "image",
            src: "/4.avif",
            aspectRatio: "portrait",
            tags: ["Studio", "Hero Angle", "Lighting"],
          },
          {
            id: "prod-05",
            title: "Product Still 05",
            client: "Studio Series",
            category: "Product Still",
            year: "2024",
            description: "Organic tones, clean minimalist placement.",
            mediaType: "image",
            src: "/5.avif",
            aspectRatio: "portrait",
            tags: ["Minimalism", "Lifestyle", "Organic Tone"],
          },
          {
            id: "prod-06",
            title: "Product Still 06",
            client: "Studio Series",
            category: "Product Still",
            year: "2024",
            description: "Surface geometry and pristine studio illumination.",
            mediaType: "image",
            src: "/6 (1).avif",
            aspectRatio: "portrait",
            tags: ["Macro", "Geometry", "Product"],
          },
          {
            id: "prod-07",
            title: "Product Still 07",
            client: "Studio Series",
            category: "Product Still",
            year: "2024",
            description: "Packaging hero angle for modern advertising.",
            mediaType: "image",
            src: "/7.avif",
            aspectRatio: "portrait",
            tags: ["Packaging", "Advertising", "Hero"],
          },
          {
            id: "prod-08",
            title: "Product Still 08",
            client: "Studio Series",
            category: "Product Still",
            year: "2024",
            description: "High-contrast composition, refined shadow depth.",
            mediaType: "image",
            src: "/8.avif",
            aspectRatio: "portrait",
            tags: ["Shadows", "Refined", "Still Life"],
          },
          {
            id: "prod-09",
            title: "Product Still 09",
            client: "Studio Series",
            category: "Product Still",
            year: "2024",
            description: "Texture-forward material study, clean color grade.",
            mediaType: "image",
            src: "/9.avif",
            aspectRatio: "portrait",
            tags: ["Texture", "High-Definition", "Color Grade"],
          },
          {
            id: "prod-10",
            title: "Product Still 10",
            client: "Studio Series",
            category: "Product Still",
            year: "2024",
            description: "Surface clarity, contemporary art direction.",
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
        subtitle: "AeroStep",
        client: "AeroStep",
        year: "2024",
        tag: "FOOTWEAR",
        description:
          "Midsole architecture and studio hero angles.",
        coverMedia: {
          type: "image",
          src: "/sneakers.2.jpeg",
        },
        deliverables: [
          {
            id: "vis-05",
            title: "Sole Architecture",
            client: "AeroStep",
            category: "Macro Product",
            year: "2024",
            description: "Midsole geometry, tread structure, material transitions.",
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
            description: "Floating hero with rim lighting on reflective stage.",
            mediaType: "image",
            src: "/sneakers.2.jpeg",
            aspectRatio: "portrait",
            tags: ["Hero Still", "Studio Lighting", "Footwear"],
          },
        ],
      },

      // ─── 04: SKINCARE & BATH ───────────────────────────────────────────────
      {
        id: "skincare-bath",
        slug: "skincare-bath",
        title: "Skincare & Bath",
        subtitle: "Lumina Living",
        client: "Lumina Living",
        year: "2024",
        tag: "SKINCARE",
        description:
          "Warm light, organic textures, minimalist bath stills.",
        coverMedia: {
          type: "image",
          src: "/minimalist.1.jpeg",
        },
        deliverables: [
          {
            id: "vis-07",
            title: "Concrete & Bath Suite",
            client: "Lumina",
            category: "Bath & Skincare",
            year: "2024",
            description: "Daylight setting — sculpted concrete, natural oak.",
            mediaType: "image",
            src: "/minimalist.1.jpeg",
            aspectRatio: "portrait",
            tags: ["Bath", "Skincare", "Still Life"],
          },
          {
            id: "vis-08",
            title: "Vanity & Wellness",
            client: "Lumina",
            category: "Vanity & Wellness",
            year: "2024",
            description: "Curved minimalist vanity in diffuse natural light.",
            mediaType: "image",
            src: "/minimalist.2.jpeg",
            aspectRatio: "portrait",
            tags: ["Vanity", "Bath", "Wellness"],
          },
          {
            id: "vis-09",
            title: "Travertine Detail",
            client: "Lumina",
            category: "Material Study",
            year: "2024",
            description: "Stone, fluted glass, and brass hardware — macro.",
            mediaType: "image",
            src: "/minimalist.3.jpeg",
            aspectRatio: "portrait",
            tags: ["Bath & Body", "Travertine", "Detail"],
          },
        ],
      },

      // ─── 05: FASHION SHOTS ──────────────────────────────────────────────────
      {
        id: "fashion-shots",
        slug: "fashion-shots",
        title: "Fashion Shots",
        subtitle: "Editorial Portraiture",
        client: "Creative Series",
        year: "2024",
        tag: "FASHION",
        description:
          "Bold editorial portraits and campaign stills.",
        coverMedia: {
          type: "image",
          src: "/fashion shot 1.png",
        },
        deliverables: [
          {
            id: "fashion-01",
            title: "Fashion Shot 01",
            client: "Creative Series",
            category: "Fashion Editorial",
            year: "2024",
            description: "Bold styling, editorial-grade light.",
            mediaType: "image",
            src: "/fashion shot 1.png",
            aspectRatio: "portrait",
            tags: ["Fashion", "Editorial", "Portrait"],
          },
          {
            id: "fashion-02",
            title: "Fashion Shot 02",
            client: "Creative Series",
            category: "Fashion Editorial",
            year: "2024",
            description: "Sculptural garment form, controlled studio light.",
            mediaType: "image",
            src: "/fashion shot 2.png",
            aspectRatio: "portrait",
            tags: ["Fashion", "Studio", "Garment"],
          },
          {
            id: "fashion-03",
            title: "Fashion Shot 03",
            client: "Creative Series",
            category: "Fashion Editorial",
            year: "2024",
            description: "Movement, texture, and contrast.",
            mediaType: "image",
            src: "/fashion shot 3.png",
            aspectRatio: "portrait",
            tags: ["Fashion", "Movement", "Texture"],
          },
          {
            id: "fashion-04",
            title: "Fashion Shot 04",
            client: "Creative Series",
            category: "Fashion Editorial",
            year: "2024",
            description: "High-contrast tones, precise art direction.",
            mediaType: "image",
            src: "/fashion shot 4.png",
            aspectRatio: "portrait",
            tags: ["Fashion", "Drama", "Art Direction"],
          },
          {
            id: "fashion-05",
            title: "Fashion Shot 05",
            client: "Creative Series",
            category: "Fashion Editorial",
            year: "2024",
            description: "Silhouette, proportion, and tone.",
            mediaType: "image",
            src: "/fashion shot 5.png",
            aspectRatio: "portrait",
            tags: ["Fashion", "Silhouette", "Composition"],
          },
          {
            id: "fashion-06",
            title: "Fashion Shot 06",
            client: "Creative Series",
            category: "Fashion Editorial",
            year: "2024",
            description: "Refined palette, sharp editorial framing.",
            mediaType: "image",
            src: "/fashion shot 6.png",
            aspectRatio: "portrait",
            tags: ["Fashion", "Campaign", "Color"],
          },
          {
            id: "fashion-07",
            title: "Fashion Shot 07",
            client: "Creative Series",
            category: "Fashion Editorial",
            year: "2024",
            description: "Maximalist styling, graphic presence.",
            mediaType: "image",
            src: "/fashion shot 7.png",
            aspectRatio: "portrait",
            tags: ["Fashion", "Statement", "Graphic"],
          },
          {
            id: "fashion-08",
            title: "Fashion Shot 08",
            client: "Creative Series",
            category: "Fashion Editorial",
            year: "2024",
            description: "Layered depth and moody editorial tone.",
            mediaType: "image",
            src: "/fashion shot 8.png",
            aspectRatio: "portrait",
            tags: ["Fashion", "Atmosphere", "Mood"],
          },
          {
            id: "fashion-09",
            title: "Fashion Shot 09",
            client: "Creative Series",
            category: "Fashion Editorial",
            year: "2024",
            description: "Garment detail — craft, material, finesse.",
            mediaType: "image",
            src: "/fashion shot 9.png",
            aspectRatio: "portrait",
            tags: ["Fashion", "Detail", "Craft"],
          },
        ],
      },
    ],
  },
  {
    id: "ai-video",
    slug: "ai-video",
    label: "Video & Motion",
    tagline: "Creator reels & short-form video ads",
    description:
      "Short-form video ads, creator reels, and product films for digital-first brands.",
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
        title: "Footwear Motion Reel",
        subtitle: "Air Jordan Retro",
        client: "Jordan",
        year: "2024",
        tag: "REEL",
        description:
          "Unboxing flow, sneaker rotation, rhythm-synced street motion.",
        coverMedia: {
          type: "video",
          src: "/Air jordan ugc.mp4",
        },
        deliverables: [
          {
            id: "vid-01",
            title: "Air Jordan Retro 4",
            client: "Jordan",
            category: "Motion Reel",
            year: "2024",
            description: "Unboxing, rotation, rhythm-synced styling.",
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
        subtitle: "Aura Apparel",
        client: "Aura Apparel",
        year: "2024",
        tag: "CLOTHING",
        description: "Casual fits and fabric in motion — clean urban pacing.",
        coverMedia: {
          type: "video",
          src: "/Clothing UGC.mp4",
        },
        deliverables: [
          {
            id: "vid-02",
            title: "Casual Clothing Reel",
            client: "Aura Apparel",
            category: "Clothing UGC",
            year: "2024",
            description: "Casual fits, fabric drape, clean pacing.",
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
        title: "Product Showcase",
        subtitle: "PureForm Skincare",
        client: "PureForm",
        year: "2024",
        tag: "PRODUCT",
        description: "Step-by-step product walkthrough — clarity and pacing.",
        coverMedia: {
          type: "video",
          src: "/Tutorial UGC.mp4",
        },
        deliverables: [
          {
            id: "vid-03",
            title: "Skincare Routine",
            client: "PureForm",
            category: "Product Film",
            year: "2024",
            description: "Step-by-step walkthrough, elegant pacing.",
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
      "Full commercials — concept to delivery. Cinematography, motion, sound.",
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
          "Every frame intentional — concept first, execution second.",
        coverMedia: {
          type: "video",
          src: "/donut.mp4",
        },
        deliverables: [
          {
            id: "donut-01",
            title: "Proof of Craft",
            client: "Creative Series",
            category: "Concept Film",
            year: "2024",
            description:
              "Macro film — texture, light, and timing at full rigor.",
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
        subtitle: "Lifestyle & Beverage",
        client: "Goat Life",
        year: "2024",
        tag: "COMMERCIAL",
        description: "Kinetic pacing, bold lifestyle framing, dynamic cuts.",
        coverMedia: {
          type: "video",
          src: "/goat_life.mp4",
        },
        deliverables: [
          {
            id: "goat-01",
            title: "Master Commercial",
            client: "Goat Life",
            category: "Commercial Film",
            year: "2024",
            description: "Vibrant lifestyle cinematography, polished sound.",
            mediaType: "video",
            src: "/goat_life.mp4",
            aspectRatio: "portrait",
            tags: ["Commercial", "Lifestyle", "Beverage", "Master Cut"],
          },
          {
            id: "goat-02",
            title: "Kinetic Cut",
            client: "Goat Life",
            category: "Motion Cut",
            year: "2024",
            description: "Fast-paced short-form cut for social and broadcast.",
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
        title: "Plush Wellness",
        subtitle: "Organic Bodycare Spot",
        client: "Plush",
        year: "2024",
        tag: "WELLNESS",
        description: "Organic textures, warm studio light, clean brand story.",
        coverMedia: {
          type: "video",
          src: "/plush.mp4",
        },
        deliverables: [
          {
            id: "plush-01",
            title: "Bodycare Spot",
            client: "Plush",
            category: "Commercial Spot",
            year: "2024",
            description: "Soft diffusion, organic formulation, clean branding.",
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
        title: "Good Habits",
        subtitle: "Daily Nutrition Brand Film",
        client: "Good Habits",
        year: "2024",
        tag: "BRAND FILM",
        description: "Daily rituals, product integration, upbeat rhythm.",
        coverMedia: {
          type: "video",
          src: "/good_habbits.mp4",
        },
        deliverables: [
          {
            id: "habits-01",
            title: "Brand Film",
            client: "Good Habits",
            category: "Brand Commercial",
            year: "2024",
            description: "Lifestyle moments and product benefit, in motion.",
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
        title: "Oatly Commercial",
        subtitle: "Fluid & Typography Spot",
        client: "Oatly",
        year: "2024",
        tag: "BROADCAST",
        description: "Kinetic typography, fluid physics, pristine grade.",
        coverMedia: {
          type: "video",
          src: "/Oatly Product Ad.mp4",
        },
        deliverables: [
          {
            id: "camp-01",
            title: "Oatly Broadcast Spot",
            client: "Oatly",
            category: "Broadcast Spot",
            year: "2024",
            description: "Kinetic type, fluid physics, clean color grade.",
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
        title: "Beverage & Culinary",
        subtitle: "Drift Botanical & Velvet Gelato",
        client: "Drift & Velvet",
        year: "2024",
        tag: "SENSORY",
        description: "Macro condensation, carbonation, slow-motion texture.",
        coverMedia: {
          type: "video",
          src: "/Beverage Product Ad.mp4",
        },
        deliverables: [
          {
            id: "camp-02",
            title: "Drift Botanical",
            client: "Drift",
            category: "Commercial Spot",
            year: "2024",
            description: "Condensation droplets, carbonation, ambient audio.",
            mediaType: "video",
            src: "/Beverage Product Ad.mp4",
            aspectRatio: "portrait",
            tags: ["Beverage", "Macro", "Sound Design"],
          },
          {
            id: "camp-03",
            title: "Velvet Gelato",
            client: "Velvet",
            category: "Culinary Film",
            year: "2023",
            description: "Slow-motion scoops, texture ribbons, warm light.",
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
