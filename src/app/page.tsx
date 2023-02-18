import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Blog",
  description: "Welcome to my blog",
};

export default function Home() {
  const posts = getAllPosts(["title", "slug", "date"]);
  console.log(posts);
  return (
    <main>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="
          flex
          justify-between
          "
          >
            <Link
              className="text-blue-500 hover:text-blue-600"
              href={`/blog/${post.slug}`}
            >
              {post.title}
            </Link>
            {/* date */}
            <span className="text-gray-500 text-sm">
              {new Date(post.date).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
