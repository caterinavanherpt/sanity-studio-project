import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "2pterscv",
  dataset: "production",
  apiVersion: "2024-12-01",
  useCdn: true,
  stega: { studioUrl: '/studio' },
})