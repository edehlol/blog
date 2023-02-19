import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-4xl font-bold text-gray-900 my-4">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl text-gray-900 my-4">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-2xl text-gray-900 my-4">{children}</h3>
  ),
  // code
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-gray-100 p-1 rounded-md text-sm">{children}</code>
  ),
  // pre with overflow scroll
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre
      className="bg-gray-100 p-2 py-8 rounded-md my-4 
        overflow-auto text-sm
        "
    >
      {children}
    </pre>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="list-disc list-inside text-lg">{children}</li>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="my-4 text-lg">{children}</p>
  ),
  a: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <Link
      className="
        text-blue-500 hover:text-blue-600"
      href={href as string}
      target="_blank"
    >
      {children}
    </Link>
  ),
};

export function CustomMDX(props: any) {
  return (
    // @ts-expect-error Server Component
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
