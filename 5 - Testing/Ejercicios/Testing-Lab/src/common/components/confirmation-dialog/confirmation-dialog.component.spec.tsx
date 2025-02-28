import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { ConfirmationDialogComponent } from "./confirmation-dialog.component";
import { vi } from "vitest";

describe("ConfirmationDialogComponent", () => {
  const defaultProps = {
    isOpen: true,
    onAccept: vi.fn(),
    onClose: vi.fn(),
    title: "Test Title",
    labels: {
      closeButton: "Cancel",
      acceptButton: "Accept",
    },
    children: <div>Test Content</div>,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render dialog with given title and content when isOpen is true", () => {
    // Arrange

    // Act
    render(<ConfirmationDialogComponent {...defaultProps} />);

    // Assert
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("should render buttons with given labels", () => {
    // Arrange

    // Act
    render(<ConfirmationDialogComponent {...defaultProps} />);

    // Assert
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Accept")).toBeInTheDocument();
  });

  it("should call onClose when clicking close button", () => {
    // Arrange
    render(<ConfirmationDialogComponent {...defaultProps} />);

    // Act
    fireEvent.click(screen.getByText("Cancel"));

    // Assert
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
    expect(defaultProps.onAccept).not.toHaveBeenCalled();
  });

  it("should call both onAccept and onClose when clicking accept button", () => {
    // Arrange
    render(<ConfirmationDialogComponent {...defaultProps} />);

    // Act
    fireEvent.click(screen.getByText("Accept"));

    // Assert
    expect(defaultProps.onAccept).toHaveBeenCalledTimes(1);
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it("should render dialog with ReactNode title when provided", () => {
    // Arrange
    const props = {
      ...defaultProps,
      title: <span data-testid="custom-title">Custom Title</span>,
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(screen.getByTestId("custom-title")).toBeInTheDocument();
  });
});
