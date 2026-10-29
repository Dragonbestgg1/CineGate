export { cn } from "cn"

/** Formats euro-cent values used by tickets and the checkout summary. */
export function formatPrice(priceCents: number, currency: "EUR" = "EUR") {
  return new Intl.NumberFormat("lv-LV", {
    style: "currency",
    currency,
  }).format(priceCents / 100);
}
