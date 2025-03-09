import { BasePageObject } from "../../testutils/BasePageObject";
import { waitFor } from "@testing-library/react";

export class EventsPageObject extends BasePageObject {
  async assertEventTitle(title: string) {
    await waitFor(() => {
      expect(
        this.getBySelector(EventsPageObject.CSS_SELECTORS.eventTitle)
      ).toHaveTextContent(title);
    });
  }

  async assertLoadingMessage() {
    await waitFor(() => {
      expect(
        this.getBySelector(EventsPageObject.CSS_SELECTORS.loadingMessage)
      ).toHaveTextContent("Loading...");
    });
  }

  async assertErrorMessage(errorMessage: string) {
    await waitFor(() => {
      expect(
        this.getBySelector(EventsPageObject.CSS_SELECTORS.errorMessage)
      ).toHaveTextContent(errorMessage);
    });
  }

  async assertEventsListExist() {
    await waitFor(() => {
      expect(
        this.getBySelector(EventsPageObject.CSS_SELECTORS.eventList)
      ).toBeInTheDocument();
    });
  }

  static CSS_SELECTORS = {
    eventTitle: ".event-list li a", // Selector for the event title link
    loadingMessage: ".events-container", // Selector for the loading message container, might need to change to class of span.
    errorMessage: ".events-container", // Selector for error message
    eventList: ".event-list"
  };
}
