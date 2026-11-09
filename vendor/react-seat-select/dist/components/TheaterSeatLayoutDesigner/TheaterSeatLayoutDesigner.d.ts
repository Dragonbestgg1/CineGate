import { TheaterSeatSection } from "../TheaterSeatSelect/types";
import { TheaterSeatLayoutDesignerCustomStyles } from "./types";
interface TheaterSeatLayoutDesignerProps {
  config?: TheaterSeatSection[];
  onChange?: (config: TheaterSeatSection[]) => void;
  customStyles?: TheaterSeatLayoutDesignerCustomStyles;
}
export declare const TheaterSeatLayoutDesigner: ({
  config,
  onChange,
  customStyles,
}: TheaterSeatLayoutDesignerProps) => import("react/jsx-runtime").JSX.Element;
export {};
