// components
import FlowerIcon, {
  FLOWER_COLORS,
  FLOWER_SIZES,
} from "@/components/flower-icon/flower-icon";

// fonts
import { PINYON_SCRIPT } from "@/util/fonts";

export default function IntroText() {
  const text = {
    sm: (
      <span className="inline md:hidden">
        a <span className="text-pink">product designer</span>
        <br />
        who creates for
        <br />
        delight and function
      </span>
    ),
    md: (
      <span className="hidden md:block home:hidden">
        a <span className="text-pink">product designer</span> who creates
        <br />
        for delight and function
      </span>
    ),
    lg: (
      <span className="hidden home:block">
        a <span className="text-pink">product designer</span> who creates for
        delight and function
      </span>
    ),
  };

  const flowers = (
    <div style={{ position: "absolute", top: 0, right: -10 }}>
      <div style={{ position: "absolute", top: -20, right: -15 }}>
        <FlowerIcon color={FLOWER_COLORS.PURPLE} />
      </div>
      <div style={{ position: "absolute", top: 10, right: -22 }}>
        <FlowerIcon color={FLOWER_COLORS.ORANGE} size={FLOWER_SIZES.SMALL} />
      </div>
    </div>
  );

  return (
    <div>
      <h1 className="text-5xl">
        hi, I&apos;m{" "}
        <span className={`text-6xl ${PINYON_SCRIPT.className}`}>A</span>
        nna&nbsp;Ji
      </h1>
      <h1 className="relative w-fit text-nowrap">
        <>
          {text.sm}
          {text.md}
          {text.lg}
        </>
        {flowers}
      </h1>
    </div>
  );
}
