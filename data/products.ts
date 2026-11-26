export type Product = {
  slug: string;
  name: string;
  short: string;
  description: string;
  usedIn: string[];
  /** Main image in /public/images. null = photo coming soon */
  image: string | null;
  /** true when the main image is an AI-generated representation, not the client's own product photo */
  representative?: boolean;
  /** Real product photos from the client */
  gallery?: string[];
};

export const counterweights: Product[] = [
  {
    slug: "tractor-front-bumper-counterweights",
    name: "Tractor Front Bumper Counterweights",
    short: "Cast bumper weights that balance the tractor's front axle.",
    description:
      "Heavy cast front bumper counterweights for tractors. They keep the front axle stable when the tractor is pulling or lifting heavy implements at the rear. We make them to the OEM's mounting pattern and target weight.",
    usedIn: ["Tractor OEMs", "Agricultural equipment", "Tractor dealers"],
    image: "/images/cw-tractor-front-bumper.webp",
    representative: true,
  },
  {
    slug: "tractor-front-counterweights",
    name: "Tractor Front Counterweights",
    short: "Front-mounted weights and weight sets for tractors.",
    description:
      "Front counterweights for tractors, supplied as single blocks or stackable sets. Each one is made to the required weight, with mounting holes and lifting points to suit your model.",
    usedIn: ["Tractor OEMs", "Implement makers"],
    image: "/images/cw-tractor-front.webp",
    representative: true,
  },
  {
    slug: "hydra-rear-counterweights",
    name: "Hydra Rear Counterweights",
    short: "Steel box rear counterweights for hydra cranes, filled with heavy density material.",
    description:
      "Rear counterweights for hydra (pick & carry) cranes. The steel shell is fabricated with lifting lugs and mounting slots, then filled with our heavy density iron material to reach the exact weight. We supply them painted and ready to fit.",
    usedIn: ["Hydra crane manufacturers", "Crane rental fleets", "Rebuild & repair workshops"],
    image: "/images/cw-hydra-rear.webp",
    representative: true,
    gallery: [
      "/images/real-hydra-1.webp",
      "/images/real-hydra-2.webp",
      "/images/real-hydra-workshop.webp",
    ],
  },
  {
    slug: "forklift-counterweights",
    name: "Forklift Counterweights",
    short: "Rear counterweights for forklifts and material handling equipment.",
    description:
      "Rear counterweights for forklifts, in cast iron or steel fabricated with heavy density filling. They are built to the required weight and centre of gravity so the forklift stays stable at its rated load.",
    usedIn: ["Forklift manufacturers", "Warehousing & logistics", "Material handling OEMs"],
    image: "/images/cw-forklift.webp",
    representative: true,
  },
  {
    slug: "elevator-lift-counterweights",
    name: "Elevator / Lift Counterweights",
    short: "Stackable filler blocks for lift counterweight frames.",
    description:
      "Counterweight filler blocks for passenger and goods lifts. They are made to size so they fit your counterweight frame and stack neatly to the required balance weight.",
    usedIn: ["Elevator manufacturers", "Lift installation & service companies"],
    image: "/images/cw-elevator.webp",
    representative: true,
  },
  {
    slug: "excavator-rear-counterweights",
    name: "Excavator Rear Counterweights",
    short: "Large curved rear counterweights for excavators.",
    description:
      "Rear counterweights for excavators, made to the machine's profile, mounting points and target weight. Available cast or fabricated with heavy density filling.",
    usedIn: ["Excavator OEMs", "Earthmoving contractors", "Rebuild workshops"],
    image: "/images/cw-excavator-rear.webp",
    representative: true,
  },
  {
    slug: "crane-counterweights",
    name: "Crane Counterweights",
    short: "Stackable slab counterweights with lifting lugs for cranes.",
    description:
      "Slab and block counterweights for mobile, crawler and tower cranes. They come with lifting lugs, interlocking profiles and hazard-stripe painting as required.",
    usedIn: ["Crane manufacturers", "Crane rental companies", "Infrastructure contractors"],
    image: "/images/cw-crane.webp",
    representative: true,
  },
  {
    slug: "wheel-loader-counterweights",
    name: "Wheel Loader Counterweights",
    short: "Rear counterweights for wheel loaders.",
    description:
      "Rear counterweights for wheel loaders, made to the required weight and mounting pattern. Available cast or fabricated with heavy density filling.",
    usedIn: ["Loader manufacturers", "Mining & quarry operators"],
    image: "/images/cw-wheel-loader.webp",
  },
  {
    slug: "jcb-counterweights",
    name: "JCB Counterweights",
    short: "Counterweights for backhoe loaders and earthmoving machines.",
    description:
      "Front and rear counterweights for backhoe loaders and other earthmoving machines. We match the original mounting points and weight.",
    usedIn: ["Earthmoving contractors", "Equipment dealers", "Service workshops"],
    image: "/images/cw-jcb.webp",
  },
  {
    slug: "cast-iron-counterweights",
    name: "Cast Iron Counterweights",
    short: "Solid cast iron counterweights in standard and custom shapes.",
    description:
      "Solid cast iron counterweights in a range of shapes and sizes, from small balance blocks to heavy machine weights. You can order them raw or painted.",
    usedIn: ["Machine builders", "OEMs", "General engineering"],
    image: "/images/cw-cast-iron.webp",
    representative: true,
  },
  {
    slug: "steel-fabricated-counterweights",
    name: "Steel Fabricated Counterweights",
    short: "Welded steel shells filled with heavy density iron material.",
    description:
      "Welded steel shell counterweights filled with our heavy density iron material. This route makes it practical to build large or unusual shapes at the exact weight you need, without making a casting pattern.",
    usedIn: ["Crane & hydra OEMs", "Heavy machinery builders"],
    image: "/images/cw-steel-fabricated.webp",
  },
  {
    slug: "customized-industrial-counterweights",
    name: "Customized Industrial Counterweights",
    short: "Counterweights made to your drawing, size and weight.",
    description:
      "Send us a drawing, a sample or just the size and weight you need, and we will make the counterweight for you. We handle any shape, any weight and any finish for heavy machinery and industrial equipment.",
    usedIn: ["Any heavy machinery", "Special-purpose machines", "Industrial plants"],
    image: "/images/cw-customized.webp",
    representative: true,
  },
];

export const densityGrades = ["3.0", "3.2", "3.5", "4.0+"];

export const densityMaterials = [
  {
    name: "High Density Iron Material",
    note: "Standard filling for steel shell counterweights.",
  },
  {
    name: "Ultra Heavy Density Iron Material",
    note: "For compact counterweights where space is limited.",
  },
  {
    name: "Counterweight Raw Material",
    note: "Bulk raw material for counterweight manufacturers.",
  },
  {
    name: "Tractor & Hydra Counterweight Material",
    note: "Graded for tractor and hydra crane counterweights.",
  },
  {
    name: "Forklift & Elevator Counterweight Material",
    note: "For forklift and lift counterweight blocks.",
  },
  {
    name: "Industrial Counterweight Material",
    note: "For any other industrial balancing application.",
  },
];

export const otherBusiness = [
  {
    name: "Iron Ore Supply & Manufacturing",
    text: "Iron ore and raw materials, supplied in bulk.",
    image: "/images/real-iron-ore-1.webp",
  },
  {
    name: "Magnetic & Non-Magnetic Materials",
    text: "Supply, processing and trading.",
    image: "/images/mat-magnetic.webp",
  },
  {
    name: "Ferrous Scrap",
    text: "All types of ferrous scrap: buying and selling.",
    image: "/images/scrap-ferrous.webp",
  },
  {
    name: "Non-Ferrous Scrap",
    text: "Copper, aluminium, brass and other non-ferrous scrap.",
    image: "/images/scrap-nonferrous.webp",
  },
];

export const getProduct = (slug: string) => counterweights.find((p) => p.slug === slug);
