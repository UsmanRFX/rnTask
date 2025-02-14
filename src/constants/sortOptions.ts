export type Option = { label: string; value: string };

export const SORT_OPTIONS: Option[] = [
  { label: "Sort by", value: "" },
  { label: "Price (Low to High)", value: "price" },
  { label: "Stars (High to Low)", value: "stars" },
  { label: "User Rating (High to Low)", value: "rating" },
];
