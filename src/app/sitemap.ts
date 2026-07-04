import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vishvrajrathod.netlify.app";

  const serviceUrls = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const projectUrls = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), priority: 0.9 },
    ...serviceUrls,
    ...projectUrls,
  ];
}