/* eslint-disable react/no-unescaped-entities */
import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import type { Metadata } from "next";
import dayjs from "dayjs";
import Image from "next/image";
import HomeImage from "../../public/home.png";

export const metadata: Metadata = {
  title: "Edy's Homepage 🏠",
  description: "Welcome to my website 🦦",
};

export default function Home() {
  const posts = getAllPosts(["title", "slug", "date"]);
  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Edy's Website</h1>
      <p className="mb-4">
        Hey there 👋, I'm Edy. I'm a software engineer and I love to build
        things.
      </p>
      <Image src={HomeImage} alt="" className="mb-4" />
      <p className="text-lg mb-4">
        Not sure how you got here, but I'm glad you did. I'm currently working
        on a few projects, but I'm not sure if I can share them yet. I'll update
        this page when I can.
      </p>
      <h2 className="text-xl font-bold my-4">Latest Articles</h2>
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
        <li>
          <Link
            className="text-blue-500 hover:text-blue-600 text-lg"
            href="/blog"
          >
            View all articles →
          </Link>
        </li>
      </ul>
    </main>
  );
}
