import type { MetadataRoute } from "next";
import { counterweights } from "@/data/products";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/counterweights", "/heavy-density-material", "/iron-ore-scrap", "/about", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}` })),
    ...counterweights.map((p) => ({ url: `${site.url}/counterweights/${p.slug}` })),
  ];
}
