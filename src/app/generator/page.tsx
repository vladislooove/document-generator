import type { Metadata } from "next";
import Form from "./components/Form";
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Generate document",
  description: "Generate document",
};

export default async function Generator() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/");
  }

  return (
    <main className="p-6">
      <Form />
    </main>
  );
}
