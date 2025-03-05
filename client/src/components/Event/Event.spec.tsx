import { render } from "@testing-library/react";
import { Event } from "./Event";
import { EventPageObject } from "./Event.pageObject";
import { PollingEvent } from "../../types";

describe("Event component", () => {
  const baseProps: PollingEvent = {
    dates: [{
      timestamp: new Date("2025-7-27").getTime(),
      records: [ // toto je pole objektů UserRecord, každý objekt má vlastnosti name a answer
        { name: "Pavel", answer: "ano" as const }, // as const zařídí, že se nejedná o string ale jednu z předdefinovaných hodnot
        { name: "Lukáš", answer: "ne" as const },
      ],
    }], id: "event-1", location: "Matterhorn",
    title: "Výstup na Matterhorn"
  };

  const renderComponent = (props = baseProps) => {
    return new EventPageObject(render(<Event {...props} />));
  };

  it("should render Výstup na Matterhorn", async () => {
    const event = renderComponent();
    await event.assertName(baseProps.title);
  });

  it("should render test title", async () => {
    const event = renderComponent({ dates: [], id: "", location: "", title: "test title" });
    await event.assertName("test title");
  });
});
