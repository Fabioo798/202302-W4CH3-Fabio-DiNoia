import { render } from "@testing-library/react";
import { Card } from "../card/card";


jest.mock("../card/card");

describe("given Cards component", () => {
  describe("when it is render", () => {
    test("Then it should call card", () => {
      render(<Card />);
      expect(Card).toHaveBeenCalled();
    });
  });
});