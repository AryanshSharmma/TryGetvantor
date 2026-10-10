import type { MetadataRoute } from "next";
import { site, DEMO_HREF, PREVIEW_PAGE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", PREVIEW_PAGE, DEMO_HREF].map((p) => ({ url: `${site.url}${p}` }));
}
