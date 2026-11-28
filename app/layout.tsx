import type { Metadata, Viewport } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileContactBar } from "@/components/MobileContactBar";
import { site } from "@/data/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Al Hira Industries | Counterweight Manufacturer & Heavy Density Iron Material, Nagpur",
    template: "%s | Al Hira Industries, Nagpur",
  },
  description:
    "Al Hira Industries, Nagpur: manufacturer and supplier of hydra, tractor, forklift, lift, crane and excavator counterweights, heavy density iron material (3.0 to 4.0+ kg per litre), iron ore, magnetic and non-magnetic materials and industrial scrap.",
  keywords: [
    "counterweight manufacturer Nagpur",
    "hydra counterweight",
    "tractor counterweight",
    "forklift counterweight",
    "elevator counterweight",
    "heavy density iron material",
    "counterweight filling material",
    "iron ore supplier Nagpur",
    "scrap dealer Nagpur",
  ],
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f2140",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable} antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}
