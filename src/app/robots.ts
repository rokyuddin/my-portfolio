import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: "/nogooglebot/",
      },
    ],
    sitemap: "https://arfanroky.cloud/sitemap.xml",
    host: "https://arfanroky.cloud",
  };
}
