import { render } from "@testing-library/react";
import { EventDetail } from "./EventDetail";
import { EventDetailPageObject } from "./EventDetail.pageObject";
import { BrowserRouter } from "react-router";

// mocknu si useParams(), ze kterého v komponentě získávám id, jinak není,
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useParams: () => ({ id: "1" }),
}));

describe("Event Detil component", () => {
  const baseProps = {
    location: "Praha",
  };

  const renderComponent = () => {
    return new EventDetailPageObject(render(<BrowserRouter><EventDetail /></BrowserRouter>));
  };

  it(`should render ${baseProps.location}`, async () => {
    const evDet = renderComponent();
    await evDet.assertName(baseProps.location);
  });
});
