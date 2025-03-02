import type { Metadata } from "next";
import LoginForm from "./login/components/LoginForm";
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login",
  description: "Login into the system",
};

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/generator");
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <LoginForm />
    </div>
  );
}
