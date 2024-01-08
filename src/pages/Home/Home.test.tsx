import {
  render,
  waitFor,
  // fireEvent
} from "@src/TestWrapper";
// import { render, waitFor } from "@testing-library/react";
import Home from "@pages/Home";
// import { tasks } from "@constant/mockData";
// import { InputId } from "@constant/TestIds";
// import userEvent from "@testing-library/user-event";

describe("Test cases for Home Page", () => {
  const { getByText } = render(<Home />);

  it("should display Task, Add task", async () => {
    const textElement = await waitFor(() => getByText("Add Task"));
    expect(textElement.innerHTML).toMatch("Add Task");
  });

  // it("should modify the data", async () => {
  //   const user = userEvent.setup();
  //   const { getByText, getByTestId } = await waitFor(() =>
  //     render(<Home Data={tasks} />)
  //   );
  //   const task = getByText(tasks[Object.keys(tasks)[1]].task);
  //   await fireEvent.dblClick(task);
  //   const modifyButton = getByText("MODIFY");
  //   await fireEvent.click(modifyButton);
  //   const taskInput = getByTestId(InputId.TASK);
  //   await user.type(taskInput, "Hyderabad");
  //   const modifySubmitButton = getByText("MODIFY");
  //   await user.click(modifySubmitButton);
  //   const inputText = getByText("Hyderabad");
  //   expect(inputText.innerHTML).toEqual("Hyderabad");
  // });

  // it("should cancel the data", async () => {
  //   const user = userEvent.setup();
  //   const { getByText, getByTestId } = await waitFor(() =>
  //     render(<Home Data={tasks} />)
  //   );
  //   const task = getByText(tasks[Object.keys(tasks)[1]].task);
  //   await fireEvent.dblClick(task);
  //   const modifyButton = getByText("CANCEL");
  //   await fireEvent.click(modifyButton);
  //   expect(getByText("CANCEL") || getByText("MODIFY")).toBeNull();
  // });

  // it("should remove the task", () => {
  //   const user = userEvent.setup();
  //   const { getByText, getByTestId } = await waitFor(() =>
  //     render(<Home Data={tasks} />)
  //   );
  //   const task = getByText(tasks[Object.keys(tasks)[1]].task);
  //   await fireEvent.dblClick(task);
  //   const removeButton = getByText("REMOVE");
  //   await fireEvent.click(removeButton);
  //   const sureButton = getByText('Sure');
  //   await user.click(sureButton);
  //   expect(getByText(tasks[Object.keys(tasks)[1]].task).innerHTML).toBeNull();
  // });
});
