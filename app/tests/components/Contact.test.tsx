import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { it, describe, vi } from "vitest";
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

const mockFetch = (): Promise<Response> => {
  return Promise.resolve(new Response(JSON.stringify({ ok: true })));
};

global.fetch = vi.fn().mockImplementation(mockFetch);


describe("Contact ", () => {
  it("Should Render", () => {
    render(<Contact />);
    const home = screen.getByTestId("contact");
    expect(home).toBeVisible();
  });
  it("Should Submit Form Success", async () => {
    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText(/Your awesome name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/your@email.com/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Your thoughts here.../i), { target: { value: 'Hello!' } });
    fireEvent.click(screen.getByText(/send/i));
    const modal = await screen.findByText(/Message Sent Success/i);
    expect(modal).toBeInTheDocument();
  });
});
