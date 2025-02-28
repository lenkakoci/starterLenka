import React from "react";
import "./styles.css";
import { DateRecord } from "../../types";

export const EventTable: React.FC<{ dates: DateRecord[] }> = ({ dates }) => {
  const allUsers = dates.flatMap((date) => date.records.map((r) => r.name));

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
