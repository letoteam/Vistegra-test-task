import React from "react";
import { FormattedItem } from "../../../types/FormattedItem";
import TableItem from "./TableItem/TableItem";
import styles from "./styles.module.css";

type TableViewProps = {
  items: FormattedItem[];
  addItem: Function;
};

function TableView({ items, addItem }: TableViewProps) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div className={styles.tableView}>
      {items.length ? (
        <>
          {items.map((item) => (
            <TableItem
              key={item.id}
              item={item}
              addItem={() => addItem(item)}
            />
          ))}
        </>
      ) : (
        <p>No Items Yet</p>
      )}
    </div>
  );
}

export default TableView;
