import { render } from "@testing-library/react";
import FlowerIcon, { FLOWER_COLORS, FLOWER_SIZES } from "@/components/flower-icon/flower-icon";
import LegacyFlowerIcon from "@/components/flower-icon";

describe("FlowerIcon", () => {
  it("renders defaults and supplied dimensions/colors", () => {
    const { container, rerender } = render(<FlowerIcon />);
    expect(container.querySelector("svg")).toHaveAttribute("width", "35");
    rerender(<FlowerIcon color={FLOWER_COLORS.PINK} size={FLOWER_SIZES.LARGE} />);
    expect(container.querySelector("svg")).toHaveAttribute("width", "46");
    expect(container.querySelector("path")).toHaveAttribute("fill", "#EA7693");
    expect(render(<LegacyFlowerIcon />).container.querySelector("svg")).toHaveAttribute("width", "26");
  });
});
