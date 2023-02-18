import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import type { Metadata } from "next";
import dayjs from "dayjs";

export const metadata: Metadata = {
  title: "Edy's Blog 📚",
  description: "Welcome to my blog",
};

export default function Blog() {
  const posts = getAllPosts(["title", "slug", "date"]);
  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="
          flex
          flex-col
          justify-between
          "
          >
            <span className="text-gray-500 text-sm">
              {dayjs(post.date).format("D MMMM YYYY")}
            </span>
            <Link
              className="text-blue-500 hover:text-blue-600 text-lg"
              href={`/blog/${post.slug}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
