import React from "react";
import { screen, render } from "@testing-library/react";
import { it, describe } from "vitest";
import Contact from "../../components/Contact";

vi.mock("@supabase/supabase-js", () => {
  return {
    createClient: vi.fn().mockReturnValue({
      auth: {
        signIn: vi.fn(),
        signOut: vi.fn(),
      },
      from: vi.fn().mockReturnValue({
        select: vi.fn().mockResolvedValue({ data: [], error: null }),
      }),
    }),
  };
});


describe("Contact ", () => {
  it("Should Render", () => {
    render(<Contact />);
    const home = screen.getByTestId("contact");
    expect(home).toBeVisible();
  });
});
