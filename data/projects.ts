export type Project = {
  id: string;
  name: string;
  category: string;
  year: string;
  services: string[];
  description: string;
  image?: string;
  video?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: "01",
    name: "Air Jordan UGC",
    category: "AI Video",
    year: "2024",
    services: ["Concept", "AI Video Synthesis", "Art Direction"],
    description:
      "Dynamic UGC-style generative video campaign engineered for Air Jordan footwear.",
    video: "/Air jordan ugc.mp4",
    link: "#",
  },
  {
    id: "02",
    name: "Oatly Product Ad",
    category: "Commercials & Ads",
    year: "2024",
    services: ["Brand Story", "AI Motion", "Sound Design"],
    description:
      "High-production generative product commercial tailored for digital broadcast and social channels.",
    video: "/Oatly Product Ad.mp4",
    link: "#",
  },
  {
    id: "03",
    name: "Proof of Craft",
    category: "Commercials & Ads",
    year: "2024",
    services: ["Concept Development", "Macro Direction", "Color Grading"],
    description:
      "A deliberate craft exercise — concept-driven macro commercial demonstrating that great output starts with how you think, not just what tools you use.",
    video: "/donut.mp4",
    link: "#",
  },
  {
    id: "04",
    name: "Ice-Cream Product Spot",
    category: "Commercials & Ads",
    year: "2023",
    services: ["Macro AI Video", "Color Grading", "Art Direction"],
    description:
      "Sensory macro food advertising produced through rapid generative synthesis workflows.",
    video: "/Ice-Cream Product Ad.mp4",
    link: "#",
  },
  {
    id: "05",
    name: "Apparel & Clothing UGC",
    category: "AI Video",
    year: "2023",
    services: ["Fashion Gen", "UGC Synthesis", "Social Ad"],
    description:
      "Next-generation creator UGC generated for modern fashion and streetwear brands.",
    video: "/Clothing UGC.mp4",
    link: "#",
  },
  {
    id: "06",
    name: "Tutorial & Interactive UGC",
    category: "Commercials & Ads",
    year: "2023",
    services: ["Explainer Script", "AI Video", "Conversion Tuning"],
    description:
      "Engaging step-by-step UGC format designed for direct response and high conversion social ads.",
    video: "/Tutorial UGC.mp4",
    link: "#",
  },
];
