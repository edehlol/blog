// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

function H1({ children }: { children: React.ReactNode }) {
  return <h1 className="text-4xl font-bold text-gray-900">{children}</h1>;
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl font-bold text-gray-900">{children}</h2>;
}

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-gray-900 my-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl text-gray-900 my-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl text-gray-900 my-4">{children}</h3>
    ),
    // code
    code: ({ children }) => (
      <code className="bg-gray-100 p-1 rounded-md text-sm">{children}</code>
    ),
    // pre with overflow scroll
    pre: ({ children }) => (
      <pre
        className="bg-gray-100 p-2 py-8 rounded-md my-4 
      overflow-auto text-sm
      "
      >
        {children}
      </pre>
    ),
    li: ({ children }) => (
      <li className="list-disc list-inside text-lg">{children}</li>
    ),
    ...components,
    p: ({ children }) => <p className="my-4 text-lg">{children}</p>,
    a: ({ children, href }) => (
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
}
