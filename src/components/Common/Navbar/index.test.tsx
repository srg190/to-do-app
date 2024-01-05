import { render, screen } from "@src/TestWrapper";
import Navbar from ".";
import { Mode } from "@constant/TestIds";
import userEvent from "@testing-library/user-event";

describe("test cases for Navbar", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  it("shoud display all TODO name", () => {
    const textElement = screen.getAllByText("TODO");
    expect(textElement[0].innerHTML).toEqual("TODO");
    expect(textElement[1].innerHTML).toEqual("TODO");
  });

  it("should toggle the mode of theme dark to light and vice versa", async () => {
    const user = userEvent.setup();
    const initTheme = screen.getByTestId(Mode.TEST_ID).innerHTML;
    const changeMod = screen.getByTestId(Mode.CHANGE_MODE);

    await user.click(changeMod);
    const intermediateTheme = screen.getByTestId(Mode.TEST_ID).innerHTML;
    expect(initTheme).not.toEqual(intermediateTheme);

    await user.click(changeMod);
    const finalTheme = screen.getByTestId(Mode.TEST_ID).innerHTML;
    expect(finalTheme).toEqual(initTheme);
  });
  
});
