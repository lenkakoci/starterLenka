import React from "react";
import "./stylesEventTable.css";
import { DateRecord } from "../Event/Event";

export const EventTable: React.FC<{ dates: DateRecord[] }> = ({ dates }) => {
  const allUsers = Array.from(
    new Set(dates.flatMap((date) => date.records.map((r) => r.name)))
    // předchozí řádek udělá pomocí flatMap z pole polí jedno pole
    // Pro každý date v dates získáme date.records.map((r) => r.name), což vytvoří pole jmen uživatelů pro dané datum.
    // flatMap zajistí, že všechna jména ze všech date.records budou v jednom velkém poli.
    // pomocí new Set zůstanou jen unikátní hodnoty
    // pomocí Array.from se ze setu získá zpět pole prodalší práci
  );
  // v prvním řádku tabulky, hlavičce, za Jméno přijdou jednotlivá data
  return (
    <table className="event-table">
      <thead>
        <tr>
          <th>Jméno</th>
          {dates.map((date) => (
            <th key={date.timestamp}>
              {new Date(date.timestamp).toLocaleDateString()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {allUsers.map((user) => (
          <tr key={user}>
            <td>{user}</td>
            {dates.map((date) => {
              const record = date.records.find((r) => r.name === user);
              return (
                <td
                  key={date.timestamp}
                >
                  {record ? record.answer : "-"}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
