import { getPostBySlug } from "@/lib/api";
import { useMDXComponents } from "mdx-components";

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
  return <main>{}</main>;
}
