"use client";
import type { Metadata } from "next";
import Form from "next/form";
import { generatePDF } from "./actions";

// export const metadata: Metadata = {
//   title: "Generate document",
//   description: "Generate document",
// };

export default function Generator() {
  const onClick = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/generate-pdf-from-html`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Authorization': `Bearer ${session?.access_token}`, // User token
        },
        body: JSON.stringify({ key: "value" }),
      }
    );
  };

  return (
    <Form action={generatePDF}>
      <label>
        Field:
        <input name="field" />
      </label>
      <label>
        Another one:
        <input name="another" />
      </label>
      <button onClick={onClick}>generate</button>
    </Form>
  );
}
