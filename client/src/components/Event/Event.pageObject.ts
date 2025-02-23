import { BasePageObject } from "../../testutils/BasePageObject";
import { waitFor } from "@testing-library/react";

export class EventPageObject extends BasePageObject {
  async assertName(title: string) {
    await waitFor(() => {
      expect(this.getBySelector(EventPageObject.CSS_SELECTORS.title)).toHaveTextContent(title);
    });
  }

  static CSS_SELECTORS = {
    title: ".event-title"
  };
}
