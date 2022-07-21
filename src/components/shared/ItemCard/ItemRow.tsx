import React from "react";
import styles from "./styles.module.css";
import Button from "../Button/Button";
import { FormattedItem } from "../../../types/FormattedItem";

type CardProps = {
  item: FormattedItem;
};

export default function ItemRow({ item }: CardProps) {
  const { pictureUrl, name, price } = item;

  return (
    <div className={styles.item}>
      <div className={styles.cardImg}>{pictureUrl}</div>
      <h2 className={styles.cardTitle}>{name}</h2>
      <p className={styles.cardPrice}>Price {price}</p>
      <Button text="Add to Cart" round={1} appearance="primary" />
    </div>
  );
}
