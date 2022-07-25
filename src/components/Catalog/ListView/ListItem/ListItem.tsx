import React from "react";
import styles from "./styles.module.css";
import Button from "../../../shared/Button/Button";
import { FormattedItem } from "../../../../types/FormattedItem";

type ListItemProps = {
  item: FormattedItem;
  addItem: Function;
};

export default function ListItem({ item, addItem }: ListItemProps) {
  const { pictureUrl, name, price } = item;

  return (
    <div className={styles.item}>
      <div className={styles.img}>{pictureUrl}</div>
      <div className={styles.itemInfo}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.price}>Price {price}</p>
      </div>
      <Button
        text="Add to Cart"
        round={1}
        appearance="primary"
        onClick={addItem}
      />
    </div>
  );
}
