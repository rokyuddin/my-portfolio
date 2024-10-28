import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import About from "@/components/About";
import "@testing-library/jest-dom";

// Mock the next/link component
vi.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => {
    return <a href={href}>{children}</a>;
  },
}));

// Mock the custom components
vi.mock("./ui/link-preview", () => ({
  LinkPreview: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));
vi.mock("./ui/background-beams-with-collision", () => ({
  BackgroundBeamsWithCollision: ({
    children,
  }: {
    children: React.ReactNode;
  }) => <div>{children}</div>,
}));
vi.mock("./ui/spotlight", () => ({
  Spotlight: () => <div>Spotlight</div>,
}));
vi.mock(import("@/components/Experiences"), async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    Experiences: () => <div>Experiences</div>,
  };
});

vi.mock("./ui/split-text", () => ({
  SplitWords: ({ children }: { children: React.ReactNode }) => (
    <span>{children}</span>
  ),
}));

describe("About Component", () => {
  it("renders without crashing", () => {
    render(<About />);
    expect(screen.getByTestId("about-section")).toBeInTheDocument();
  });

  it("displays the correct heading", () => {
    render(<About />);

    const heading = screen.getByRole("heading", {
      name: /Learn To Develop Sites With Expertise Developer/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("displays contact information", () => {
    render(<About />);
    expect(screen.getByText("arfanroky.dev@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("+8801611695544")).toBeInTheDocument();
  });

  it("displays social media links", () => {
    render(<About />);
    expect(screen.getByText("Social")).toBeInTheDocument();
  });

  it("renders the list of technologies", () => {
    render(<About />);
    const technologies = [
      "Javascript",
      "Typescript",
      "React",
      "React Query",
      "Next.js",
      "Redux",
      "Tailwind",
      "Material UI",
    ];
    technologies.forEach((tech) => {
      const techElement = screen.getByText(tech, { selector: "li" });
      expect(techElement).toBeInTheDocument();
    });
  });

  it("renders the profile image", () => {
    render(<About />);
    const image = screen.getByAltText("Arfan Roky Profile Image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
  });

  it("renders the Experiences component", () => {
    render(<About />);
    expect(screen.getByTestId("experiences-section")).toBeInTheDocument();
  });
});
