import { CustomMDX } from "@/components/CustomMDX";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: {
    post: string;
  };
}): Promise<Metadata> {
  const post = getPostBySlug(params.post, ["title", "description"]);
  return { title: post.title, description: post.title };
}

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);

  return posts.map((post) => ({
    post: post.slug,
  }));
}

export default function Post({
  params,
}: {
  params: {
    post: string;
  };
}) {
  const post = getPostBySlug(params.post, ["title", "content"]);

  return <main>{<CustomMDX source={post.content} />}</main>;
}
