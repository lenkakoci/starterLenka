import { BasePageObject } from "../../testutils/BasePageObject";
import { waitFor } from "@testing-library/react";

export class DemoPageObject extends BasePageObject {
  async assertName(location: string) {
    await waitFor(() => {
      expect(this.getBySelector(DemoPageObject.CSS_SELECTORS.name)).toHaveTextContent(location);
    });
  }

  static CSS_SELECTORS = {
    name: ".name"
  };
}
