import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the custom landing page", () => {
    const view = render(<App />);

    expect(
      view.getByRole("heading", {
        name: /a simple starting point for managing university work/i,
      }),
    ).toBeInTheDocument();
  });

  it("keeps the call to action interactive", async () => {
    const user = userEvent.setup();
    const view = render(<App />);

    await user.click(view.getByRole("button", { name: /get started/i }));

    expect(
      view.getByRole("button", { name: /get started/i }),
    ).toBeInTheDocument();
  });
});
