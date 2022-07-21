import React, { MouseEventHandler } from "react";
import { FormattedItem } from "../../types/FormattedItem";
import styles from "./styles.module.css";
import ItemRow from "../shared/ItemRow/ItemRow";

type CatalogProps = {
  items: FormattedItem[];
  addItem: MouseEventHandler<HTMLButtonElement>;
};

export default function Catalog({ items, addItem }: CatalogProps) {
  // TODO: implement view selector
  // const [view, setView] = useState<View>("table");

  return (
    <div className={styles.catalog}>
      {items.map((item) => (
        <ItemRow key={item.id} item={item} onClick={() => addItem(item)} />
      ))}
    </div>
  );
}
