import { FormattedItem } from "./FormattedItem";

export type CartItem = FormattedItem & {
  amount: number;
};
