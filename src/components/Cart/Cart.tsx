import React from "react";
import { CartItem as CartItemType } from "../../types/CartItem";
import CartItem from "./CartItem/CartItem";
import styles from "./styles.module.css";

type CartProps = {
  items: CartItemType[];
  setCartItemAmount: Function;
  deleteItem: Function;
};

export default function Cart({
  items,
  setCartItemAmount,
  deleteItem,
}: CartProps) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div className={styles.cart}>
      {items.length ? (
        items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            setCartItemAmount={setCartItemAmount}
            deleteItem={deleteItem}
          />
        ))
      ) : (
        <p>No Reservations</p>
      )}
    </div>
  );
}
