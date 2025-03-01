"use client";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import supabase from "../../supabase";
import { useRouter } from "next/navigation";

export interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const { register, handleSubmit } = useForm<LoginFormValues>();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (values: LoginFormValues) => {
    try {
      setIsLoading(true);
      await supabase.auth.signInWithPassword(values);
      router.push("/generator");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email:
        <input {...register("email", { required: true })} type="email" />
      </label>
      <label>
        Password:
        <input {...register("password", { required: true })} type="password" />
      </label>
      <button type="submit" disabled={isLoading}>
        submit
      </button>
    </form>
  );
};

export default LoginForm;
