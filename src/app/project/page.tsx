import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edy's Projects 🛠️",
  description: "Here you can find my projects",
};

export default function Project() {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <p>I should add something here 🤔</p>
    </main>
  );
}
