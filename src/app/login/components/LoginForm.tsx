"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { createClient } from "@/supabase/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const form = useForm<LoginFormValues>();
  const {
    handleSubmit,
    setError,
    control,
    formState: { isSubmitting },
  } = form;
  const router = useRouter();

  const onSubmit = async (values: LoginFormValues) => {
    try {
      const { error } = await createClient().auth.signInWithPassword(values);

      if (error) {
        return setError("password", { message: error.message });
      }

      router.push("/generator");
    } catch {
      setError("password", { message: "Unexpected error" });
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Увійдіть до системи</CardTitle>
        <CardDescription>
          Введіть ваші дані та натисніть кнопку &quot;увійти&quot; щоб
          продовжити
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <CardContent>
            <FormField
              control={control}
              name="email"
              rules={{ required: "Це поле обов'язкове!" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@email.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="password"
              rules={{ required: "Це поле обов'язкове!" }}
              render={({ field }) => (
                <FormItem className="mt-6">
                  <FormLabel>Пароль:</FormLabel>
                  <FormControl>
                    <Input placeholder="123456" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Увійти
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default LoginForm;
