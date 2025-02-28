import { render } from "@testing-library/react";
import { Props, Pocasi } from "./GetWeather";
import { GetWeatherPageObject } from "./GetWeather.pageObject";
;

describe("GetWeather component", () => {
  const baseProps: Props = {
    location: "Mělník",
  };

  const renderComponent = (props = baseProps) => {
    return new GetWeatherPageObject(render(<Pocasi {...props} />));
  };

  it(`should render °C`, async () => {
    const weather = renderComponent();
    await weather.assertTemp("°C");
    weather.debug();
  });
});
