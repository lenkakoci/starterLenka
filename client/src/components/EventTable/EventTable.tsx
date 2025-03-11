import React from "react";
import "./styles.css";
import { DateRecord } from "../../types";

export const EventTable: React.FC<{ dates: DateRecord[] }> = ({ dates }) => {
  // date.records projde všechny dates (EventDates, s vlastností timestamp a records) a získá pouze jména
  // records má vlastnost name (jméno člověka) a answer (yes, no, if-needed)
  // flatMap sloučí jména do jednoho plochého pole, tzn. není několik polé se jmény podle jednotlivých EventDates, ale jedno pole, kde je každé jméno jednou
  // const allUsers = dates.flatMap((date) => date.records.map((r) => r.name));
  const allUsers = (dates.flatMap((date) => date.records?.map((r) => r.name)) || []).filter((v) => !!v);
  // vysvětlení předchozího řádku: ?. (optional chaining) zajistí, že pokud date.records neexistuje (undefined nebo null), nebude to házet chybu.
  // || [] (fallback na prázdné pole), Kdyby flatMap() vrátilo undefined nebo null, použije se [], aby se zabránilo chybám při .filter().
  // filter((v) => !!v) Odstraní všechny falsy hodnoty (null, undefined, "" atd.). !!v je zkratka pro "převést na boolean" a odstranit false hodnoty.
  // v prvním řádku tabulky, hlavičce, za Jméno přijdou jednotlivá data
  return (
    <table className="event-table">
      <thead>
        <tr>
          <th>Jméno</th>
          {(Array.isArray(dates) && dates.length > 0)
            ? (
                dates.map((date) => (
                  <th key={date.timestamp}>
                    {(Array.isArray(date.records) && date.records.length > 0) ? date.timestamp : "bez data"}
                  </th>
                ))
              )
            : (
                <th>bez data</th>
              )}
        </tr>
      </thead>
      <tbody>
        {allUsers.map((user) => (
          <tr key={user}>
            <td>{user}</td>
            {(Array.isArray(dates) && dates.length > 0)
              ? (
                  dates.map((date) => {
                    const record = Array.isArray(date.records)
                      ? date.records.find((r) => r.name === user)
                      : null;
                    return (
                      <td key={date.timestamp}>
                        {record ? record.answer : "-"}
                      </td>
                    );
                  })
                )
              : (
                  <td>-</td>
                )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
