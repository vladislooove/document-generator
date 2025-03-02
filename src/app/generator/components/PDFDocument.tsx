import React, { FC } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { FormValues } from "./Form";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
      fontWeight: 300,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",
      fontWeight: 400,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
      fontWeight: 500,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
      fontWeight: 600,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Roboto",
    color: "#000000",
  },
  row: {
    borderBottom: "1px solid #585858",
    paddingTop: 5,
    paddingBottom: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  header: { backgroundColor: "#fef682", height: "50px" },
  content: { padding: 30 },
  label: { fontSize: 10, fontWeight: 700, width: "45%" },
  value: { fontSize: 10, fontWeight: 700 },
  topBar: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topBarLeftSection: { textAlign: "left" },
  topBarRightSection: {
    textAlign: "right",
    display: "flex",
    alignItems: "flex-end",
  },
  topBarLabel: { fontSize: 16, fontWeight: 700, textTransform: "uppercase" },
  topBarValue: { fontSize: 12, fontWeight: 700, textTransform: "uppercase" },
  name: {
    padding: 20,
    fontSize: 16,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
  },
  footer: {
    paddingTop: 40,
    color: "#585858",
    fontSize: 8,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
  },
});

const PDFDocument: FC<FormValues> = ({
  fullName,
  model,
  vin,
  modelYear,
  year,
  weight,
  wheels,
  country,
  other,
  category,
  engineDetails,
  engineNumber,
  purpose,
  seats,
  engineType,
  bodyType,
  number,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header} />
      <View style={styles.content}>
        <View style={styles.topBar}>
          <View style={styles.topBarLeftSection}>
            <Text style={styles.topBarLabel}>ТОВ “МАКС КАР”</Text>
            <Text style={styles.topBarValue}>м.РІвне, вул. млинівська</Text>
          </View>
          <View style={styles.topBarRightSection}>
            <Text style={styles.topBarLabel}>Дата</Text>
            <Text style={styles.topBarValue}>
              {new Date().toLocaleDateString("uk")}
            </Text>
          </View>
        </View>
        <View style={styles.name}>
          <Text>ДОВІДКА</Text>
          <Text>№{number}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>
            Видана про те, що належний йому (їй) КТЗ:
          </Text>
          <Text style={styles.value}>{fullName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Марка і модель</Text>
          <Text style={styles.value}>{model}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>VIN</Text>
          <Text style={styles.value}>{vin}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Модельний рік </Text>
          <Text style={styles.value}>{modelYear}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Календарний рік</Text>
          <Text style={styles.value}>{year}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Категорія транспортного засобу</Text>
          <Text style={styles.value}>{category}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Тип двигуна</Text>
          <Text style={styles.value}>{engineType}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Об’єм, см3 / потужність двигуна, кВт</Text>
          <Text style={styles.value}>{engineDetails}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Тип (номер) двигуна</Text>
          <Text style={styles.value}>{engineNumber}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Тип кузова</Text>
          <Text style={styles.value}>{bodyType}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Кількість місць для сидіння</Text>
          <Text style={styles.value}>{seats}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Колісна формула</Text>
          <Text style={styles.value}>{wheels}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Призначення</Text>
          <Text style={styles.value}>{purpose}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Власна маса ТЗ, кг</Text>
          <Text style={styles.value}>{weight}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Країна походження</Text>
          <Text style={styles.value}>{country}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Інше</Text>
          <Text style={styles.value}>{other}</Text>
        </View>
        <View style={styles.footer}>
          <Text>Підстава:</Text>
          <Text>
            1. Методика товарознавчої експертизи та оцінки колісних транспортних
            засобів, затверджена наказом Міністерства юстиції України та Фонду
            державного майна України від 24.11.2003N124/5/2092, зареєстрована в
            Міністерстві юстиції України 24.11.2003 за No 1074/8395 (у редакції
            наказу Міністерства юстиції України Фонду державного майна України
            від 24.07.2000 No 1335/5/1159 )далі методика)
          </Text>
          <Text>
            2. Довідник «Бюлетень автотоварознавця» Випуск No2. Донецький НДІСЕ,
            ІОЦ СЕУ, Донецьк.
          </Text>
          <Text>
            3. Національний стандарт No1. «Загальні принципи оцінки майна та
            майнових прав» (затверджений Постановою Кабінету міністрів України
            No 1440 від 10 вересня 2003 року
          </Text>
          <Text>4. DAT Marktspiegel Pkw. Kombi. Gelandewagen.</Text>
          <Text>5. SCHWACKE LISTE (NUTZFAHRZEUGE)</Text>
          <Text>
            6. Електронная версія періодичного видання «New Car Blue Book»,
            2013р.
          </Text>
          <Text>
            7. «Установление фактичских данних об автомобілях
            криминалистичческих експертиз». Прохоров-Лукин Г.В. Киев-2012.
            «Каталог двигателей».
          </Text>
          <Text>8. www.schwackenet.de</Text>
          <Text>9. https://autoauctions.io/</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
