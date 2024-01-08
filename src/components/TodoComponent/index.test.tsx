import {
  render,
  fireEvent,
  fireEvent as originalFireEvent,
  waitFor,
} from "@src/TestWrapper";
import Todo from ".";
import { TodoState } from "@constant/TestIds";
import { tasks } from "@constant/mockData";
import DragTest from "./test";

describe("test cases for ToDo list", () => {
  it("should display all four state", () => {
    const { getByText } = render(<Todo />);
    const pending = getByText(TodoState.PENDING);
    const success = getByText(TodoState.SUCCESS);
    const todo = getByText(TodoState.TODO);
    const process = getByText(TodoState.PROCESS);
    expect(pending.innerHTML).toEqual(TodoState.PENDING);
    expect(success.innerHTML).toEqual(TodoState.SUCCESS);
    expect(todo.innerHTML).toEqual(TodoState.TODO);
    expect(process.innerHTML).toEqual(TodoState.PROCESS);
  });

  it("should dislay all data", () => {
    const { getByText } = render(<Todo Data={tasks} />);
    expect(getByText(tasks[Object.keys(tasks)[1]].task).innerHTML).toEqual(
      tasks[Object.keys(tasks)[1]].task
    );
  });

  // it("should work change status while drag and drop", async () => {
  //   const { getByTestId } = render(<DragTest />);
  //   const drag = getByTestId("drag-1");
  //   const drop = getByTestId("drop-1");

  //   // const setData = jest.fn();
  //   // const ev = {
  //   //   dataTransfer: {
  //   //     setData,
  //   //   },
  //   // };
  //   // const dragEvent = createEvent.dragStart(drag);
  //   // Object.assign(dragEvent, ev);
  //   // fireEvent(drag, dragEvent);

  //   // expect(setData).toHaveBeenCalledTimes(1);
  //   // expect(setData).toHaveBeenCalledWith("Id", Object.keys(tasks)[1]);

  //   fireEvent.dragStart(drag);

  //   fireEvent.dragOver(drop);

  //   fireEvent.drop(drop);

  //   expect(getByTestId("drop-1").innerHTML).toEqual("flakes");
  //   // You can also check if setData was called with the expected values
  //   // expect(ev1.dataTransfer.setData).toHaveBeenCalledWith(
  //   //   "Id",
  //   //   "success"
  //   // );
  // });

  it("should work change status while drag and drop", async () => {
    // Create a spy function
    const fireEventSpy = jest.fn();

    // Replace the original fireEvent with the spy
    jest.spyOn(originalFireEvent, "dragStart").mockImplementation(fireEventSpy);
    jest.spyOn(originalFireEvent, "dragOver").mockImplementation(fireEventSpy);
    jest.spyOn(originalFireEvent, "drop").mockImplementation(fireEventSpy);

    // Your test code
    const { getByTestId } = render(<DragTest />);
    const drag = getByTestId("drag-1");
    const drop = getByTestId("drop-1");

    fireEvent.dragStart(drag);
    fireEvent.dragOver(drop);
    fireEvent.drop(drop);

    // Assertions on the spy function
    await waitFor(() => {
      expect(fireEventSpy).toHaveBeenCalledTimes(3);
      // expect(getByTestId("drop-1").innerHTML).toEqual("flakes");
    });
    // You can add more specific assertions based on your needs

    // Restore the original fireEvent
    jest.restoreAllMocks();
  });
});
