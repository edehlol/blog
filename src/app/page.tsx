import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import FirstPost from "../posts/first-post.mdx";

export default function Home() {
  const posts = getAllPosts(["title", "slug"]);
  console.log(posts);
  return (
    <main>
      {posts.map((post) => (
        <Link
          className="text-blue-500 hover:text-blue-600"
          href={`/blog/${post.slug}`}
          key={post.slug}
        >
          {post.title}
        </Link>
      ))}
    </main>
  );
}
