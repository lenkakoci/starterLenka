import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Navigation } from "../../components/Navigation/Navigation";
import "./styles.css";

type FormValues = {
  title: string;
  misto?: string;
  dates: string[];
};

export const NovaAkceFormik: React.FC = () => {
  const [dates, setDates] = useState<string[]>([""]);
  const maxDates = 10;

  const handleSubmit = async (values: FormValues) => {
    const requestBody: Record<string, any> = {
      name: values.title,
      title: values.title,
      dates: values.dates.map((date: string) => new Date(date).getTime()),
    };

    if (values.misto) {
      requestBody.location = values.misto; // 🔹 Přidáme misto jen pokud je vyplněné
    }

    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Chyba při odesílání akce.");
      }

      alert("Akce byla úspěšně přidána!");
    } catch (error) {
      alert("Nastala chyba: " + error.message);
    }
  };

  return (
    <>
      <Navigation />
      <div>
        <h1>Přidej svoji akci</h1>
        <Formik
          initialValues={{
            title: "",
            misto: "",
            dates: [""],
          }}
          validate={(values) => {
            const errors: Record<string, string> = {};

            if (values.title && values.title.length < 3) {
              errors.title = "Zadej minimálně 3 znaky pro název akce.";
            }
            if (!values.dates.some((date) => date.trim() !== "")) {
              errors.dates = "Musíš zadat alespoň jedno datum akce.";
            }
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, isValid, values }) => (
            <Form>
              <div>
                <label htmlFor="title">Název akce: </label>
                <Field name="title" placeholder="Název akce" />
                {errors.title && <div style={{ color: "red" }}>{errors.title}</div>}
              </div>
              <div>
                <label htmlFor="misto">Místo akce: </label>
                <Field name="misto" placeholder="Místo akce" />

              </div>
              <div>
                {dates.map((_, index) => (
                  <div key={index}>
                    <label htmlFor={`dates.${index}`}>{index + 1}. datum akce: </label>
                    <Field
                      name={`dates.${index}`}
                      type="date"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        values.dates[index] = e.target.value;
                        if (index === dates.length - 1 && dates.length < maxDates) {
                          setDates([...dates, ""]);
                        }
                      }}
                    />
                  </div>
                ))}
                {errors.dates && <div style={{ color: "red" }}>{errors.dates}</div>} {/* 🔹 Zobrazení chyby */}
              </div>
              <button type="submit" disabled={isSubmitting || !isValid}>
                Zadej
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
