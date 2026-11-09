import { BusConfig } from "../BusSeatSelect/types";
import { BusSeatLayoutDesignerCustomStyles } from "./types";
interface BusSeatLayoutDesignerProps {
  config?: BusConfig;
  onChange?: (config: BusConfig) => void;
  customStyles?: BusSeatLayoutDesignerCustomStyles;
}
export declare const BusSeatLayoutDesigner: ({
  config,
  onChange,
  customStyles,
}: BusSeatLayoutDesignerProps) => import("react/jsx-runtime").JSX.Element;
export {};
