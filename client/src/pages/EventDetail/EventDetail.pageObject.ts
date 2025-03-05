import { BasePageObject } from "../../testutils/BasePageObject";
import { waitFor } from "@testing-library/react";

export class EventDetailPageObject extends BasePageObject {
  async assertName(location: string) {
    await waitFor(() => {
      expect(this.getBySelector(EventDetailPageObject.CSS_SELECTORS.name)).toHaveTextContent(location);
    });
  }

  static CSS_SELECTORS = {
    name: ".event"
  };
}
