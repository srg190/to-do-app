import { render, screen } from "@src/TestWrapper";
import AreYouSure from ".";
import { AreYouSureConstant } from "@constant/TestIds";
import userEvent from "@testing-library/user-event";

describe("test cases for are you sure", () => {
  let textElement: HTMLElement;
  let textElement2: HTMLElement;

  beforeAll(() => {
    const { getByTestId } = render(<AreYouSure test={true} />);
    textElement = getByTestId(AreYouSureConstant.CANCEL);
    textElement2 = getByTestId(AreYouSureConstant.SURE);
  });

  it("should show Cancel option on display", () => {
    expect(textElement.innerHTML).toEqual("Cancel");
  });

  it("should show Sure option on display", () => {
    expect(textElement2.innerHTML).toEqual("Sure");
  });
});

describe("test cases for are you sure", () => {
  const user = userEvent.setup();

  it("should close on Sure button click", async () => {
    const { rerender } = render(<AreYouSure test={true} />);
    const textElement = screen.getByText("Sure");

    expect(textElement.innerHTML).toMatch("Sure");

    rerender(<AreYouSure test={false} />);
    await user.click(textElement);

    // const reTextElement = screen.getByText("Sure");
    expect(screen.queryByText("Sure")).toBeNull();
  });

  it("should close on Cancel button click", async () => {
    const { rerender } = render(<AreYouSure test={true} />);
    const textElement = screen.getByText("Cancel");

    expect(textElement.innerHTML).toMatch("Cancel");

    rerender(<AreYouSure test={false} />);
    await user.click(textElement);

    // const reTextElement = screen.getByText("Cancel");
    expect(screen.queryByText("Cancel")).toBeNull();
  });
});
