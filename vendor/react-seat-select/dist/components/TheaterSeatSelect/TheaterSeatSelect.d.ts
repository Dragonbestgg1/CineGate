import { default as React } from "react";
import {
  TheaterSeatSelectCustomStyles,
  TheaterScreenConfig,
  TheaterSeat,
  TheaterSeatConfig,
} from "./types";
type Props = {
  config: TheaterSeatConfig;
  bookedSeats?: string[];
  disabledSeats?: string[];
  reservedSeats?: string[];
  onSelect?: (seat: TheaterSeat) => void;
  onUnselect?: (seat: TheaterSeat) => void;
  showRowNumbers?: boolean;
  maxSelectedSeats?: number;
  autoSeatExpansion?: boolean;
  customStyles?: TheaterSeatSelectCustomStyles;
  showBookedSeatLabel?: boolean;
  showDisabledSeatLabel?: boolean;
  showReservedSeatLabel?: boolean;
  showBlankSeatLabel?: boolean;
  showSelectedSeatLabel?: boolean;
  showDefaultScreen?: boolean;
  screenConfig?: TheaterScreenConfig;
  CustomScreenComponent?: React.ComponentType;
  CustomLegendComponent?: React.ComponentType;
  showDefaultLegend?: boolean;
  legendConfig?: {
    bookedSeatText?: string;
    selectedSeatText?: string;
    reservedSeatText?: string;
    disabledSeatText?: string;
    availableSeatText?: string;
  };
};
export declare const TheaterSeatSelect: React.FC<Props>;
export {};
