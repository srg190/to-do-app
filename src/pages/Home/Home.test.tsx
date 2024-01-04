import { render, waitFor } from "@src/TestWrapper";
import Home from "@pages/Home";

describe("Test cases for Home Page", () => {
  const { getByText } = render(<Home />);

  it("should display Task, Add task", async () => {
    const textElement = await waitFor(() => getByText("Add Task"));
    expect(textElement).toBeInTheDocument();
  });

  it("should display Task in the documents", () => {
    const textElement = getByText("Task");
    expect(textElement).toBeInTheDocument();
  });
  
});
