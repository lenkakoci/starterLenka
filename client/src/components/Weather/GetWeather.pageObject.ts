import { BasePageObject } from "../../testutils/BasePageObject";
import { waitFor } from "@testing-library/react";

export class GetWeatherPageObject extends BasePageObject {

  async assertTemp(teplota: string) {
    await waitFor(() => {
      expect(this.getBySelector(GetWeatherPageObject.CSS_SELECTORS.name)).toHaveTextContent(teplota);
    });
  }

  static CSS_SELECTORS = {
    name: ".teplota"
  };
}
