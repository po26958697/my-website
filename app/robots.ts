import type { MetadataRoute } from "next";

// TODO: 部署後將此處替換為你的正式網域
const BASE_URL = "https://my-website-po26958697.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
