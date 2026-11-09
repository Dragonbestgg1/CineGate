import { default as React } from "react";
import { BusConfig, BusSeatSelectCustomStyles, BusSeat } from "./types";
type Props = {
  config: BusConfig;
  bookedSeats?: string[];
  bookedByFemaleSeats?: string[];
  bookedByMaleSeats?: string[];
  availableForFemaleSeats?: string[];
  availableForMaleSeats?: string[];
  onSelect?: (seat: BusSeat) => void;
  onUnselect?: (seat: BusSeat) => void;
  maxSelectedSeats?: number;
  customSectionWrapperStyle?: React.CSSProperties;
  SectionHeader?: React.ComponentType | null;
  customStyles?: BusSeatSelectCustomStyles;
  showBookedSeatLabel?: boolean;
  showSelectedSeatLabel?: boolean;
  CustomLegendComponent?: React.ComponentType;
  showDefaultLegend?: boolean;
  seatPriceMap?: Record<string, number>;
  legendConfig?: {
    bookedSeatText?: string;
    bookedByFemaleSeatText?: string;
    bookedByMaleSeatText?: string;
    selectedSeatText?: string;
    availableSeatText?: string;
    availableForMaleSeatText?: string;
    availableForFemaleSeatText?: string;
  };
};
export declare const BusSeatSelect: (
  props: Props,
) => import("react/jsx-runtime").JSX.Element;
export {};
