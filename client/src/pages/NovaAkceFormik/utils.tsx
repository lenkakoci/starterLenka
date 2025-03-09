import { useNavigate } from "react-router-dom";

export const useForm = () => {
  const navigate = useNavigate();

  const submitForm = async (values: Record<string, string | number | string[]>) => {
    try {
      const response = await fetch("http://localhost:4000/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        navigate("/events");
      }
      if (!response.ok) {
        throw new Error("Chyba při odesílání akce.");
      }

      // alert("Akce byla úspěšně přidána!");
    } catch (error) {
      alert("Nastala chyba: " + error.message);
    }
  };
  return { submitForm };
};
