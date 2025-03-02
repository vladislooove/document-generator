"use client";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Document,
  Page,
  View,
  Text,
  PDFDownloadLink,
} from "@react-pdf/renderer";
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

export interface FormValues {
  [key: string]: string;
}

const GeneratedDocument: FC<FormValues> = ({ field1, field2 }) => (
  <Document>
    <Page>
      <View>
        <Text>generated field1: {field1}</Text>
        <Text>generated field2: {field2}</Text>
      </View>
    </Page>
  </Document>
);

const FormComponent: FC = () => {
  const form = useForm<FormValues>();
  const {
    watch,
    control,
    formState: { isValid },
  } = form;
  const values = watch();

  // Hack to not prerender web api related components in node environment
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Form {...form}>
      <form className="space-y-6">
        <FormField
          control={control}
          name="field1"
          rules={{ required: "Це поле обов'язкове!" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Поле 1:</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="field2"
          rules={{ required: "Це поле обов'язкове!" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Поле 2:</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isClient && (
          <PDFDownloadLink
            document={<GeneratedDocument {...values} />}
            fileName="somename.pdf"
          >
            <Button disabled={!isValid} className="w-full" type="button">
              Завантажити згенерований документ
            </Button>
          </PDFDownloadLink>
        )}
      </form>
    </Form>
  );
};

export default FormComponent;
