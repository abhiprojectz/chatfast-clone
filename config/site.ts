import { SiteConfig } from "@/types";
import env from "@/env";

const site_url = env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const siteConfig: SiteConfig = {
  name: "ChatFast",
  description:
    "Chatgpt for your site with values precision, security, and scalability.",
  url: site_url,
  ogImage: `${site_url}/og.jpg`,
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
  },
  mailSupport: "abc@gmail.com",
};
