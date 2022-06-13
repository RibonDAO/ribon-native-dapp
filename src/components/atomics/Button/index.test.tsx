import React from "react";
import { renderComponent } from "config/testUtils";
import ribon from "assets/icons/ribon.svg";
import theme from "styles/theme";
import Button from ".";

describe("<Button />", () => {
  it("renders the text", () => {
    const screen = renderComponent(<Button text="button" onPress={() => {}} />);

    expect(screen.findByText("button")).toBeDefined();
  });

  it("calls the passed function when clicked", () => {
    const mockFunction = jest.fn();
    renderComponent(<Button text="button" onPress={mockFunction} />);
    clickOn("button");

    expect(mockFunction).toHaveBeenCalled();
  });

  describe("when has ribons", () => {
    it("renders ribons icon when ribons is passed", () => {
      renderComponent(<Button text="button" onPress={() => {}} ribons />);
      expectTextToBeInTheDocument("ribon.svg");
    });
  });

  describe("when has a icon", () => {
    it("renders left Icon when leftIcon is passed", () => {
      renderComponent(
        <Button text="button" onPress={() => {}} leftIcon={ribon} />,
      );
      expectImageToBeInTheDocument("left icon");
    });

    it("renders right Icon when rightIcon is passed", () => {
      renderComponent(
        <Button text="button" onPress={() => {}} rightIcon={ribon} />,
      );
      expectImageToBeInTheDocument("right icon");
    });
  });

  describe("when has a specific style", () => {
    it("renders outline button", () => {
      renderComponent(<Button text="button" onPress={() => {}} outline />);
      expect(screen.getByText("button")).toHaveStyle(
        `color: ${theme.colors.ribonBlue};`,
      );
    });

    it("renders softDisabled button", () => {
      renderComponent(<Button text="button" onPress={() => {}} softDisabled />);
      expect(screen.getByText("button")).toHaveStyle(
        `color: ${theme.colors.darkGray};`,
      );
    });

    it("renders button with border radius when round is true", () => {
      renderComponent(<Button text="button" onPress={() => {}} round />);
      expect(screen.getByText("button")).toHaveStyle(" border-radius: 80px");
    });
  });
});
