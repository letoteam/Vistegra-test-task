import React, { MouseEventHandler, useState } from "react";
import styles from "./styles.module.css";
import Button from "../Button/Button";
import { FormattedItem } from "../../../types/FormattedItem";

type CardProps = {
  item: FormattedItem;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function ItemRow({ item, onClick }: CardProps) {
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
        onClick={onClick}
      />
    </div>
  );
}
