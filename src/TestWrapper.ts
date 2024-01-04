import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import TestWrapper from "./Test";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  return render(ui, {
    wrapper: TestWrapper,
    ...options,
  });
};

export * from "@testing-library/react";
export { customRender as render };
