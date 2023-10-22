/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { screen, render } from "@testing-library/react";
import { it, describe } from "vitest";

import Home from "../../components/Home";

describe("Home ", () => {
  it("Should Render", () => {
    render(<Home />);
    const home = screen.getByTestId("home");
    expect(home).toBeVisible();
  });
});
