export type Service = {
  id: string;
  title: string;
  description: string;
  detail: string;
  preview: string;
};

export const services: Service[] = [
  {
    id: "01",
    title: "AI Creative & Visuals",
    description:
      "Generative image, graphic, and asset production at volume, on brand, without the lag of traditional photo shoots.",
    detail:
      "We produce high-fidelity visuals tuned to your brand aesthetic. Consistent output across social, digital campaigns, and product launches.",
    preview: "[SERVICE PREVIEW: AI Creative]",
  },
  {
    id: "02",
    title: "AI Video & UGC",
    description:
      "Short-form brand films, creator-style UGC, and social video produced with AI synthesis in days, not weeks.",
    detail:
      "From storyboard to delivery, our AI video workflow produces scroll-stopping video ads without massive production crews.",
    preview: "[SERVICE PREVIEW: AI Video]",
  },
  {
    id: "03",
    title: "Commercials & Ads",
    description:
      "Full digital ad campaigns, product spotlights, and multi-channel creative built to engage and convert.",
    detail:
      "High-impact commercial spots, dynamic product animations, and creative iterations tailored for top-performing ad channels.",
    preview: "[SERVICE PREVIEW: Commercials & Ads]",
  },
];
