import React, { useState, useEffect } from "react";
// import { PollingEvent } from "../../types";
import "./styles.css";
// import { getDataById } from "../../eventData";
import { useParams } from "react-router";
import { Weather } from "../../components/Weather/Weather";
import { Event } from "../../components/Event/Event";
import { Navigation } from "../../components/Navigation/Navigation";
import { Pocasi } from "../../components/Weather/GetWeather";
import { useFetchEvent } from "./useFetchEvent";

export const EventDetail: React.FC = () => {
  const { id } = useParams(); // V React Router je useParams() hook, který umožňuje získat parametry z URL

  const [tempEffect, setTempEffect] = useState<string>();

  const [tempHook, setTempHook] = useState<string | null>(null);

  const { fetchEvents, isLoading, error, data: item } = useFetchEvent(id as string);
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <Navigation />
      <div className="event">
        {!item && `Událost s ID ${id} neexistuje.`}
        {error ? error : ""}
        {isLoading ? "Loading..." : ""}
        {item && (
          <>
            <h2 className="loc">{item.location}</h2>
            {/* Průměrná teplota jen pomocí UseEffect */}
            <h4 className="av1">Průměrná teplota je:</h4>
            {item.location && <Pocasi location={item.location} onTemperatureChange={setTempEffect} />}
            {/* hook pro aktuální teplotu */}
            <h4 className="av2">Průměrná teplota s použitím hooku je:</h4>
            {item.location && <Weather location={item.location} onTemperatureChange={setTempHook} />}
            {/* VAROVÁNÍ PŘI ROZDÍLNÝCH HODNOTÁCH */}
            {tempEffect && tempHook && tempEffect !== tempHook && (
              <span className="warning">⚠ Jak je to možné? Hodnoty teplot se liší!</span>
            )}
            {tempEffect && tempHook && tempEffect === tempHook && (
              <span className="statement">V pořádku. Hodnoty teplot se shodují.</span>
            )}

            <Event id={item.id} title={item.title} location={item.location} dates={item.dates} />
          </>
        )}

      </div>
    </>
  );
};
