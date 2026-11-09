import { TheaterScreenConfig } from "./types";
export declare function getScreenSVG({
  screenVariant,
  width,
  screenColor,
  textColor,
  screenText,
}: Omit<TheaterScreenConfig, "height">): string;
