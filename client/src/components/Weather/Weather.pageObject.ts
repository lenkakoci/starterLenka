import { BasePageObject } from "../../testutils/BasePageObject";

export class WeatherPageObject extends BasePageObject {
  getValue() {
    return this.getBySelector(WeatherPageObject.CSS_SELECTORS.value)?.textContent;
  }

  static CSS_SELECTORS = {
    value: "div"
  };
}
