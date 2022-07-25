import React from "react";
import styles from "./styles.module.css";
import { CartItem as CartItemType } from "../../../types/CartItem";
import Button from "../../shared/Button/Button";

type CartItemProps = {
  item: CartItemType;
  setCartItemAmount: Function;
  deleteItem: Function;
};

export default function CartItem({
  item,
  setCartItemAmount,
  deleteItem,
}: CartItemProps) {
  const { pictureUrl, name, price } = item;

  const handleMinus = () => {
    const newItemAmount = item.amount - 1;

    if (newItemAmount > 0) {
      return setCartItemAmount(newItemAmount, item.id);
    }

    return null;
  };

  const handlePlus = () => {
    const newItemAmount = item.amount + 1;

    return setCartItemAmount(newItemAmount, item.id);
  };

  return (
    <div className={styles.item}>
      <div className={styles.img}>{pictureUrl}</div>
      <div className={styles.itemInfo}>
        <div>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.price}>Price {price}</p>
        </div>
        <div className={styles.amount}>
          <Button
            text="-"
            round={2}
            appearance="danger"
            onClick={handleMinus}
          />
          <span>{item.amount}</span>
          <Button
            text="+"
            round={2}
            appearance="success"
            onClick={handlePlus}
          />
        </div>
      </div>
      <Button
        text="Delete from cart"
        round={1}
        appearance="danger"
        onClick={() => deleteItem(item.id)}
      />
    </div>
  );
}
