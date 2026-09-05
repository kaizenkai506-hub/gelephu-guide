export type Experience = {
  id: string;
  title: string;
  summary: string;
  hostId: string;
  hostName: string;
  village: string;
  durationMins: number;
  pricePerPerson: number;
  capacity: number;
  languages: string[];
  images: string[];
  status: "draft" | "pending_verification" | "active" | "rejected";
  curatedBy?: { guideId: string; guideName: string; curatedAt: string }[];
};

export type Guide = {
  id: string;
  name: string;
  verified: boolean;
  bio?: string;
  languages: string[];
  rating?: number;
  avatar?: string;
};

export type Host = {
  id: string;
  name: string;
  village: string;
  verified: boolean;
  avatar?: string;
};

export const guides: Guide[] = [
  {
    id: "guide-sonam",
    name: "Sonam Choden",
    verified: true,
    bio: "Certified local guide focused on mindful village walks, culture & craft.",
    languages: ["English", "Dzongkha"],
    rating: 4.9,
    avatar: "/images/guides/sonam.jpg"
  },
  {
    id: "guide-pek",
    name: "Pema Lhamo",
    verified: true,
    bio: "Landscape and nature guide — calm and curious.",
    languages: ["English"],
    rating: 4.8,
    avatar: "/images/guides/pema.jpg"
  }
];

export const hosts: Host[] = [
  {
    id: "host-bhom",
    name: "Bhom Dorji",
    village: "Gelephu Old Quarter",
    verified: true,
    avatar: "/images/hosts/bhom.jpg"
  },
  {
    id: "host-lhamo",
    name: "Lhamo Deki",
    village: "Nawangchi",
    verified: false,
    avatar: "/images/hosts/lhamo.jpg"
  }
];

export const experiences: Experience[] = [
  {
    id: "exp-gelephu-001",
    title: "Village Walk & Mindful Tea Ceremony",
    summary:
      "A gentle 3-hour walk exploring Gelephu's old quarter, followed by an intimate mindful tea ceremony and a handicraft demo with the host.",
    hostId: "host-bhom",
    hostName: "Bhom Dorji",
    village: "Gelephu Old Quarter",
    durationMins: 180,
    pricePerPerson: 35,
    capacity: 8,
    languages: ["Dzongkha", "English"],
    images: ["/images/experiences/gelephu-walk-1.jpg"],
    status: "active",
    curatedBy: [{ guideId: "guide-sonam", guideName: "Sonam Choden", curatedAt: new Date().toISOString() }]
  },
  {
    id: "exp-gelephu-002",
    title: "Rice Terrace Sunrise & Local Breakfast",
    summary:
      "A sunrise hike to nearby rice terraces, meet the farming family and enjoy a home-cooked breakfast with seasonal produce.",
    hostId: "host-lhamo",
    hostName: "Lhamo Deki",
    village: "Nawangchi",
    durationMins: 240,
    pricePerPerson: 48,
    capacity: 6,
    languages: ["English"],
    images: ["/images/experiences/gelephu-terrace-1.jpg"],
    status: "pending_verification"
  }
];
