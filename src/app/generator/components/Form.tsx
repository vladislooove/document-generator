"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import {
  PDFDownloadLink,
  Document,
  Page,
  View,
  Text,
} from "@react-pdf/renderer";

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

const Form: FC = () => {
  const { register, watch } = useForm<FormValues>();
  const values = watch();

  return (
    <div>
      <label>
        Field 1:
        <input {...register("field1", { required: true })} />
      </label>
      <label>
        field2:
        <input {...register("field2", { required: true })} />
      </label>
      <PDFDownloadLink
        document={<GeneratedDocument {...values} />}
        fileName="somename.pdf"
      >
        {({ loading }) =>
          loading ? "Generating document..." : "Download now!"
        }
      </PDFDownloadLink>

      <GeneratedDocument {...values} />
    </div>
  );
};

export default Form;
