import React from "react";
import "./styles.css";
import { useState, useEffect, useRef, FormEvent } from "react";


export type Props = {
  name: string;
};
export const Demo: React.FC<Props> = ({ name }) => {


  // const visibleTodos = useMemo(() => {
  //     return getFilteredTodos(todos, filter);
  // }, [todos, filter]); //pokud se změní dependence, zavolej funkci, která vrací a ukládá do proměnné visibleTodos, takže pokud není změna v dependencích, funkce se nevolá
  //   // visibleTodos je ted read only a můžu s ní pracovat, pokud by metoda vracela jen [], tak mám na visibleTodos funkce pole
  // console.log(visibleTodos);

  const [bydliste, setBydliste] = useState<string>("");
  const renderCounter = useRef(0);
  const [counter, setCounter] = useState<number>(0);
  const [disabled, setDisabled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);


    const handle = async (event: FormEvent) => {

        console.log("REF " + inputRef.current?.value);

        event.preventDefault();

        setDisabled(true);
        // fake submit async action
        // await waitMs(3000);
        // setDisabled(false);
        setSubmitted(true);
    };
  let n = 1;
  n += 1;
  useEffect(() => {
    renderCounter.current = renderCounter.current + 1;
  });
  console.log("renderCounter: " + renderCounter.current + ", n:" + n);

  useEffect(() => {
    console.log("counter: " + counter + name.toUpperCase());
    setBydliste("Brno");
    const handle = () => { console.log("handle funkce"); };
    document.getElementById("test")?.addEventListener("click", handle);
    return () => {
      console.log("ODEBIRAM");
      document.getElementById("test")?.removeEventListener("click", handle);
    };
  }, [counter, name]); // toto je pole dependencí, kdyby prázdné, bude se volat funkce jednou

    return (
      <div className="moje-trida" id="test">
          <button onClick={() => setCounter(
              (counterOld) => counterOld + 1)}
          >CounterState: {counter}
          </button>
          <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>
          <button onClick={() => {
              renderCounter.current = renderCounter.current + 1;
          }}
          >{renderCounter.current}
          </button>
          <button onClick={() => {
              setTimeout(() => {
                  window.alert(counter);
              }, 3000);
          }}
          >set timeout, CounterState: {counter}
          </button>

          <span className="name"> {name}</span>
          <span className="bydliste"> {bydliste}</span>
          <span className="counter"> po {counter}x</span>
          <h1>Uncontrolled</h1>
          <form onSubmit={handle}>
              <input ref={inputRef} type="text" name="myName" defaultValue="AHOJ" placeholder="Name" required />
              <button type="submit" disabled={disabled}>Submit</button>
          </form>
          {submitted && <h3>Odeslano</h3>}

      </div>
  );
};
