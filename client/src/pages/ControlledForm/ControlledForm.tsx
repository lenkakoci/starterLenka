import React, { useState, FormEvent, ChangeEvent } from "react";
import { waitMs } from "../../utils";
import { Navigation } from "../../components/Navigation/Navigation";

export const ControlledForm: React.FC = () => {
  const [disabled, setDisabled] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [validationError, setValidationError] = useState<string>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "a") {
      setValidationError("Nepovoleny znak");
      // return;
    }
    setInputValue(event.target.value);
  };

  const handle = async (event: FormEvent) => {
    console.log(inputValue);
    event.preventDefault(); // neudělá submit, takže nespadne

    setDisabled(true);
    // fake submit async action
    await waitMs(3000);
    setDisabled(false);
    setSubmitted(true);
  };

  return (
    <div>
      <Navigation />
      <h1>Controlled</h1>
      <form onSubmit={handle}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder="Name" required />
        {validationError && <span>{validationError}</span>}
        <button type="submit" disabled={disabled}>Submit</button>
      </form>
      {submitted && <h3>Odeslano</h3>}
    </div>
  );
};
