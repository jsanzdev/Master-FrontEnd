import { renderHook, act } from "@testing-library/react";
import { useConfirmationDialog } from "./confirmation-dialog.hook";
import { createEmptyLookup } from "#common/models";

describe("useConfirmationDialog", () => {
  it("should initialize with default values", () => {
    // Arrange & Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
  });

  it("should update state when onOpenDialog is called", () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    const mockItem = { id: "1", name: "Test Item" };

    // Act
    act(() => {
      result.current.onOpenDialog(mockItem);
    });

    // Assert
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(mockItem);
  });

  it("should reset itemToDelete when onAccept is called", () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    const mockItem = { id: "1", name: "Test Item" };

    // Act
    act(() => {
      result.current.onOpenDialog(mockItem);
    });
    act(() => {
      result.current.onAccept();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
  });

  it("should close dialog when onClose is called", () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    const mockItem = { id: "1", name: "Test Item" };

    // Act
    act(() => {
      result.current.onOpenDialog(mockItem);
    });
    act(() => {
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(mockItem); // itemToDelete remains unchanged
  });

  it("should maintain state consistency through multiple operations", () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    const mockItem1 = { id: "1", name: "Test Item 1" };
    const mockItem2 = { id: "2", name: "Test Item 2" };

    // Act & Assert - First operation
    act(() => {
      result.current.onOpenDialog(mockItem1);
    });
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(mockItem1);

    // Act & Assert - Close dialog
    act(() => {
      result.current.onClose();
    });
    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(mockItem1);

    // Act & Assert - Open with different item
    act(() => {
      result.current.onOpenDialog(mockItem2);
    });
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(mockItem2);
  });
});
