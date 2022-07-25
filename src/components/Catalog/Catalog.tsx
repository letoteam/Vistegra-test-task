import React from "react";
import { FormattedItem } from "../../types/FormattedItem";
import styles from "./styles.module.css";
import { View } from "../../types/View";
import ListView from "./ListView/ListView";
import TableView from "./TableView/TableView";

type CatalogProps = {
  items: FormattedItem[] | [];
  addItem: Function;
  view: View;
};

export default function Catalog({ items, addItem, view }: CatalogProps) {
  const renderView = () => {
    if (view === "list") {
      return <ListView items={items} addItem={addItem} />;
    }

    return <TableView items={items} addItem={addItem} />;
  };

  return <div className={styles.catalog}>{renderView()}</div>;
}
