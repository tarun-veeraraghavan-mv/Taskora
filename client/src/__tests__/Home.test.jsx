import { render, screen, waitFor } from "@testing-library/react";
import { useQuery } from "@tanstack/react-query"; // Import the useQuery hook from react-query
import Home from "../components/Home"; // Your component
import { describe, expect, it, vi } from "vitest"; // vitest's mocking function
import React from "react";

// Mock the useQuery hook
vi.mock("@tanstack/react-query", () => ({
  ...vi.importActual("@tanstack/react-query"), // Keep the actual implementation for other methods
  useQuery: vi.fn(), // Mock the useQuery hook
}));

describe("Home", () => {
  it("should render the user", async () => {
    // Mock the result of the useQuery hook
    useQuery.mockReturnValue({
      data: { user: { name: "Tarun" } }, // Simulate the data returned by the query
      isLoading: false, // Simulate that loading is false
      error: null, // Simulate no error
    });

    render(<Home />); // Render the component

    // Test that the user is rendered correctly
    await waitFor(() => {
      expect(screen.getByText("Tarun")).toBeInTheDocument();
    });
  });
});
