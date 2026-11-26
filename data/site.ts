export const site = {
  name: "Al Hira Industries",
  tagline: "Your Trusted Industrial Material & Scrap Partner",
  url: "https://alhiraindustries.com",
  address: {
    lines: [
      "Plot No. 7, Mohite Industrial Estate,",
      "Near Amitasha Enterprises, MIDC, Hingna Road,",
      "Nagpur – 440016, Maharashtra, India.",
    ],
    mapQuery: "Mohite Industrial Estate, MIDC Hingna Road, Nagpur 440016",
  },
  phones: ["+91 9028070000", "+91 7020737878", "+91 7499408585", "+91 7821932283"],
  whatsapp: "919028070000",
  emails: {
    business: "alhira56@gmail.com",
    personal: "rizwan.mil77@gmail.com",
  },
};

export const registrations = [
  { label: "GSTIN", value: "27AKFPM0867Q1ZH" },
  { label: "PAN", value: "AKFPM0867Q" },
  { label: "UDYAM", value: "UDYAM-MH-20-0067373" },
  { label: "Shop & Establishment", value: "2252300316390913" },
  { label: "IEC", value: "NGPIECPAPPY00006223AM22" },
  { label: "IBM Registration No.", value: "IBM/46521/2025" },
  { label: "DGM Registration No.", value: "2395" },
  { label: "TAN", value: "NGPM10905G" },
];

export const commitments = [
  "Quality Materials",
  "Competitive Prices",
  "Reliable Supply",
  "Professional Service",
];

export const industries = [
  { name: "Hydra & Crane Manufacturers", note: "Rear and slab counterweights" },
  { name: "Tractor Manufacturers", note: "Front and bumper weights" },
  { name: "Lift & Elevator Companies", note: "Filler block counterweights" },
  { name: "Forklift & Material Handling", note: "Cast and fabricated weights" },
  { name: "Construction & Earthmoving", note: "Excavator, loader and JCB weights" },
  { name: "Foundries & Steel Plants", note: "Iron ore, raw material and scrap" },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/counterweights", label: "Counterweights" },
  { href: "/heavy-density-material", label: "Heavy Density Material" },
  { href: "/iron-ore-scrap", label: "Iron Ore & Scrap" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const tel = (p: string) => `tel:${p.replace(/\s/g, "")}`;
export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
