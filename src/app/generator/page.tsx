import type { Metadata } from "next";
import Form from "./components/Form";

export const metadata: Metadata = {
  title: "Generate document",
  description: "Generate document",
};

export default function Generator() {
  return (
    <main className="p-6">
      <Form />
    </main>
  );
}
