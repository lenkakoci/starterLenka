import { render } from "@testing-library/react";
import { Props, Pocasi } from "./GetWeather";
import { GetWeatherPageObject } from "./GetWeather.pageObject";
import * as pocasiUtils from "./pocasi";

describe("GetWeather component", () => {
  const baseProps: Props = {
    location: "Mělník",
  };

  const renderComponent = (props = baseProps) => {
    return new GetWeatherPageObject(render(<Pocasi {...props} />));
  };
  // let getCityCoordsMock: jest.SpyInstance;
  let getForecastMock: jest.SpyInstance;

  beforeEach(() => {
    // getCityCoordsMock = jest.spyOn(pocasiUtils, "getCityCoords").mockImplementation(() => {
    //   return Promise.reject("Oops");
    // });
    getForecastMock = jest.spyOn(pocasiUtils, "getForecast").mockImplementation(() => {
      return Promise.resolve("10°C");
    });
  });

  afterEach(() => {
    // getCityCoordsMock?.mockRestore();
    getForecastMock?.mockRestore();
  });

  it(`should render °C`, async () => {
    const weather = renderComponent();
    await weather.assertTemp("10°C");
  });
});
