import React from "react";
import { render, screen } from "@testing-library/react";
import { usePromiseTracker } from "react-promise-tracker";
import { SpinnerComponent } from "./spinner.component";
import { vi } from "vitest";

// Mock react-promise-tracker
vi.mock("react-promise-tracker", () => ({
  usePromiseTracker: vi.fn(),
}));

describe("SpinnerComponent", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should show Modal when promise is in progress", () => {
    // Arrange
    const mockUsePromiseTracker = usePromiseTracker as jest.Mock;
    mockUsePromiseTracker.mockReturnValue({ promiseInProgress: true });

    // Act
    render(<SpinnerComponent />);

    // Assert
    const modal = screen.getByRole("presentation");
    expect(modal).toBeInTheDocument();
  });

  it("should not show Modal when promise is not in progress", () => {
    // Arrange
    const mockUsePromiseTracker = usePromiseTracker as jest.Mock;
    mockUsePromiseTracker.mockReturnValue({ promiseInProgress: false });

    // Act
    render(<SpinnerComponent />);

    // Assert
    const modal = screen.queryByRole("presentation");
    expect(modal).not.toBeInTheDocument();
  });

  it("should render Loader component inside Modal when promise is in progress", () => {
    // Arrange
    const mockUsePromiseTracker = usePromiseTracker as jest.Mock;
    mockUsePromiseTracker.mockReturnValue({ promiseInProgress: true });

    // Act
    render(<SpinnerComponent />);

    // Assert
    const loaderContainer = screen.getByTestId("loader-container");
    expect(loaderContainer).toBeInTheDocument();
  });
});
