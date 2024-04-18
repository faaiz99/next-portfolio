import React from "react";
import { screen, render } from "@testing-library/react";
import { it, describe } from "vitest";

import { Future } from "../../components/Future";

describe("Future ", () => {
  it("Should Render", () => {
    render(<Future />);
    const home = screen.getByTestId("future");
    expect(home).toBeVisible();
  });
});
