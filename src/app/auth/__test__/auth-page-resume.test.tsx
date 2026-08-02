import { fireEvent, render, screen, waitFor } from "@testing-library/react";

const replace = jest.fn();
const get = jest.fn(() => "/projects/mindful");
jest.mock("next/navigation", () => ({
  useRouter: () => ({ replace }),
  useSearchParams: () => ({ get }),
  redirect: jest.fn(),
}));

import AuthPage from "@/app/auth/page";
import Resume from "@/app/resume/page";
import { redirect } from "next/navigation";

describe("auth and resume pages", () => {
  beforeEach(() => { jest.clearAllMocks(); });

  it("shows an error for rejected credentials", async () => {
    global.fetch = jest.fn().mockResolvedValue({ status: 401, ok: false, redirected: false }) as jest.Mock;
    render(<AuthPage />);
    fireEvent.change(screen.getByLabelText("secret code"), { target: { value: "bad" } });
    fireEvent.submit(screen.getByRole("button", { name: "Continue" }).closest("form")!);
    expect(await screen.findByText("Incorrect code. Please try again.")).toBeInTheDocument();
  });

  it("uses the redirect URL supplied by a successful login", async () => {
    global.fetch = jest.fn().mockResolvedValue({ status: 200, ok: true, redirected: true, url: "https://portfolio.test/projects/penella?from=login" }) as jest.Mock;
    render(<AuthPage />);
    fireEvent.submit(screen.getByRole("button", { name: "Continue" }).closest("form")!);
    await waitFor(() => expect(replace).toHaveBeenCalledWith("/projects/penella?from=login"));
  });

  it("redirects the resume route to the published document", () => {
    Resume();
    expect(redirect).toHaveBeenCalledWith(expect.stringContaining("drive.google.com"));
  });
});
