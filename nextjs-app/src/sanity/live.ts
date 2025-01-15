import { defineLive } from "next-sanity";
import { token } from "@/sanity/token";
import { client } from "@/sanity/client";

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ apiVersion: "vX" }),
  browserToken: token,
  serverToken: token,
});