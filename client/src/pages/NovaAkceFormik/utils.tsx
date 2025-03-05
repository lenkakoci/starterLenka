export type FormValues = {
  title: string;
  misto?: string;
  dates: string[];
};
export const handleSubmit = async (values: FormValues) => {
  const requestBody: Record<string, string | null | string[] | number[]> = {

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
