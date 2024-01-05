import { render, waitFor } from "@src/TestWrapper";
// import { render, waitFor } from "@testing-library/react";
import Home from "@pages/Home";

describe("Test cases for Home Page", () => {
  const { getByText } = render(<Home />);

  it("should display Task, Add task", async () => {
    const textElement = await waitFor(() => getByText("Add Task"));
    expect(textElement.innerHTML).toMatch("Add Task");
  });
});
