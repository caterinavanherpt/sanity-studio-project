// import Link from "next/link";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";

const PAGES_QUERY = defineQuery(`*[
  _type == "pageType"
][0]{title}`);

export default async function IndexPage() {
  const { data: pages } = await sanityFetch({ query: PAGES_QUERY });
  console.log("here", pages)

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col p-24 gap-12">
      <h1 className="text-4xl font-bold tracking-tighter">Pages</h1>
      <p>
        {pages.title}
      </p>
    </main>
  );
}