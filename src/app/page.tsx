import type { Metadata } from "next";
import LoginForm from "./login/components/LoginForm";

export const metadata: Metadata = {
  title: "Login",
  description: "Login into the system",
};

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center">
      <LoginForm />
    </div>
  );
}
