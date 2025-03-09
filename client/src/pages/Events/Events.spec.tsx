import { render } from "@testing-library/react";
import { Events } from "./Events";
import { EventsPageObject } from "./Events.pageObject";
import * as getEventsUtils from "./useFetchEvents";

describe("Events component", () => {
  const renderComponent = () => {
    return new EventsPageObject(render(<Events />));
  };

  let getEventsMock: jest.SpyInstance;

  beforeEach(() => {
    getEventsMock = jest.spyOn(getEventsUtils, "useFetchEvents"); // Changed here!
  });

  afterEach(() => {
    getEventsMock.mockRestore();
  });

  it("should render event list name", async () => {
    const mockEvents = [
      {
        id: 1,
        title: "Event 1", // Changed to title
        description: "Description 1",
      },
      {
        id: 2,
        title: "Event 2", // Changed to title
        description: "Description 2",
      },
    ];
    getEventsMock.mockReturnValue({
      data: mockEvents,
      fetchEvents: jest.fn(),
      isLoading: false,
      error: null
    }); // Changed here
    const events = renderComponent();
    await events.assertEventTitle("Event 1"); // changed here
    await events.assertEventsListExist();
  });
  it("should render message 'Events loading'", async () => {
    getEventsMock.mockReturnValue({
      data: undefined,
      fetchEvents: jest.fn(),
      isLoading: true,
      error: null
    }); // Changed here

    const events = renderComponent();
    await events.assertLoadingMessage(); // changed here
  });
  it("should render error message", async () => {
    getEventsMock.mockReturnValue({
      data: undefined,
      fetchEvents: jest.fn(),
      isLoading: false,
      error: "Oops"
    }); // Changed here
    const events = renderComponent();
    await events.assertErrorMessage("Oops");
  });
});
