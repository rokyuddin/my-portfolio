import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import HomePage from "../app/page";
import "@testing-library/jest-dom";

// Mock the components used in HomePage
vi.mock("@/components/About", () => ({
  default: () => <div data-testid="mock-about">About Component</div>,
}));
vi.mock("@/components/Hero", () => ({
  default: () => <div data-testid="mock-hero">Hero Component</div>,
}));
vi.mock("@/components/Projects", () => ({
  default: () => <div data-testid="mock-projects">Projects Component</div>,
}));
vi.mock("@/components/Services", () => ({
  default: () => <div data-testid="mock-services">Services Component</div>,
}));
vi.mock("@/components/ui/floating-navbar", () => ({
  FloatingNav: () => <nav data-testid="mock-floating-nav">Floating Nav</nav>,
}));
vi.mock("@/components/ui/footer", () => ({
  default: () => <footer data-testid="mock-footer">Footer</footer>,
}));
vi.mock("@/data", () => ({
  navItems: [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
  ],
}));

describe("HomePage", () => {
  it("renders all components", () => {
    render(<HomePage />);

    expect(screen.getByTestId("mock-floating-nav")).toBeInTheDocument();
    expect(screen.getByTestId("mock-hero")).toBeInTheDocument();
    expect(screen.getByTestId("mock-about")).toBeInTheDocument();
    expect(screen.getByTestId("mock-projects")).toBeInTheDocument();
    expect(screen.getByTestId("mock-services")).toBeInTheDocument();
    expect(screen.getByTestId("mock-footer")).toBeInTheDocument();
  });

  it("has the correct structure and attributes", () => {
    render(<HomePage />);

    const mainContainer = screen.getByTestId("top");
    expect(mainContainer).toHaveClass(
      "relative min-h-screen bg-zinc-900 overflow-hidden"
    );
  });
});
