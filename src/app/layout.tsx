import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="px-4">
        <nav className="py-4">My Blog</nav>
        <div
          className="
        max-w-2xl mx-auto
        "
        >
          {children}
        </div>
      </body>
    </html>
  );
}
