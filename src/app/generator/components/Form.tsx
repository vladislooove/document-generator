"use client";
import { FC } from "react";
import { saveAs } from "file-saver";
import { useForm } from "react-hook-form";
import { pdf } from "@react-pdf/renderer";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PDFDocument from "./PDFDocument";
import { Card } from "@/components/ui/card";

export interface FormValues {
  fullName: string;
  model: string;
  vin: string;
  modelYear: string;
  year: string;
  category: string;
  engineType: string;
  engineDetails: string;
  engineNumber: string;
  bodyType: string;
  seats: string;
  wheels: string;
  weight: string;
  purpose: string;
  country: string;
  other: string;
  number: string;
}

const FormComponent: FC = () => {
  const form = useForm<FormValues>();
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = form;

  const onSubmit = async (values: FormValues) => {
    const blob = await pdf(<PDFDocument {...values} />).toBlob();
    saveAs(
      blob,
      `Довідка-${values.number}-${new Date().toLocaleDateString("uk")}.pdf`
    );
  };

  return (
    <Card className="w-4xl p-6 mx-auto">
      <Form {...form}>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            control={control}
            name="number"
            rules={{ required: "Це поле обов'язкове!" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Номер довідки:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="fullName"
            rules={{ required: "Це поле обов'язкове!" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Видана про те, що належний йому (їй) КТЗ:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="model"
            rules={{ required: "Це поле обов'язкове!" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Марка і модель:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="vin"
            rules={{ required: "Це поле обов'язкове!" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>VIN:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="modelYear"
            rules={{ required: "Це поле обов'язкове!" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Модельний рік:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="year"
            rules={{ required: "Це поле обов'язкове!" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Календарний рік:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="category"
            rules={{ required: "Це поле обов'язкове!" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Категорія транспортного засобу:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="engineType"
            rules={{ required: "Це поле обов'язкове!" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Тип двигуна:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="engineDetails"
            rules={{ required: "Це поле обов'язкове!" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Об’єм, см3 / потужність двигуна, кВт:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="engineNumber"
            rules={{ required: "Це поле обов'язкове!" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Тип (номер) двигуна:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="bodyType"
            rules={{ required: "Це поле обов'язкове!" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Тип кузова:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="seats"
            rules={{ required: "Це поле обов'язкове!" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Кількість місць для сидіння:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="wheels"
            rules={{ required: "Це поле обов'язкове!" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Колісна формула:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="purpose"
            rules={{ required: "Це поле обов'язкове!" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Призначення:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="weight"
            rules={{ required: "Це поле обов'язкове!" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Власна маса ТЗ, кг:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="country"
            rules={{ required: "Це поле обов'язкове!" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Країна походження:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="other"
            rules={{ required: "Це поле обов'язкове!" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Інше:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            Завантажити згенерований документ
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default FormComponent;
