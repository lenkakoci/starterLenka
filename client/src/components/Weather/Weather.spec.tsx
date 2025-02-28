import { render, waitFor } from "@testing-library/react";
import { Props, Weather } from "./Weather";
import { WeatherPageObject } from "./Weather.pageObject";
import * as getWeatherUtils from "./utils";

describe("Demo component", () => {
  const baseProps: Props = {
    location: "Praha",
  };

  const renderComponent = (props = baseProps) => {
    return new WeatherPageObject(render(<Weather {...props} />));
  };

  let getWeatherMock: jest.SpyInstance;

  beforeEach(() => {
  });

  afterEach(() => {
    getWeatherMock?.mockRestore();
  });

  it("should render", async () => {
    getWeatherMock = jest.spyOn(getWeatherUtils, "getWeather")
      .mockImplementation(() => Promise.resolve("23"));

    const weather = renderComponent();
    await waitFor(() => {
      expect(getWeatherMock).toHaveBeenCalledTimes(1);
    });
    await waitFor(() => {
      expect(getWeatherMock).toHaveBeenNthCalledWith(1, "Praha");
    });
    await waitFor(() => {
      expect(weather.getValue()).toEqual("23");
    });
  });

  it("should render error", async () => {
    getWeatherMock = jest.spyOn(getWeatherUtils, "getWeather")
      .mockImplementation(() => Promise.reject("oops"));

    const weather = renderComponent();
    await waitFor(() => {
      expect(getWeatherMock).toHaveBeenCalledTimes(1);
    });
    await waitFor(() => {
      expect(getWeatherMock).toHaveBeenNthCalledWith(1, "Praha");
    });

    await waitFor(() => {
      expect(weather.getValue()).toEqual("Praha");
    });
  });

  it("should render loading", async () => {
    const pendingPromise: Promise<string> = new Promise(() => {});
    getWeatherMock = jest.spyOn(getWeatherUtils, "getWeather")
      .mockImplementation(() => pendingPromise);

    const weather = renderComponent();
    await waitFor(() => {
      expect(getWeatherMock).toHaveBeenCalledTimes(1);
    });
    await waitFor(() => {
      expect(getWeatherMock).toHaveBeenNthCalledWith(1, "Praha");
    });

    await waitFor(() => {
      expect(weather.getValue()).toEqual("Loading weather...");
    });
  });
});
