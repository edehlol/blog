import { CustomMDX } from "@/components/CustomMDX";
import { getPostBySlug } from "@/lib/api";
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

export default function Post({
  params,
}: {
  params: {
    post: string;
  };
}) {
  console.log(params);
  const post = getPostBySlug(params.post, ["title", "content"]);

  console.log(post);
  return (
    <main>
      <CustomMDX source={post.content} />
    </main>
  );
}
