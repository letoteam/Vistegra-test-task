import React, { useEffect, useState } from "react";
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
  const [sum, setSum] = useState<Number>(0);

  useEffect(() => {
    const newSum = items.reduce((result, currentItem) => {
      let price: number = +currentItem.price;
      if (currentItem.amount > 1) {
        price *= currentItem.amount;
      }

      return result + price;
    }, 0);

    setSum(newSum);
  }, [items]);

  const renderSum = () => {
    // @ts-ignore
    return <p className={styles.sum}>Sum: {sum}</p>;
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div className={styles.cart}>
      {items.length ? (
        <>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              setCartItemAmount={setCartItemAmount}
              deleteItem={deleteItem}
            />
          ))}

          {renderSum()}
        </>
      ) : (
        <p className={styles.noItemsText}>No Items Yet</p>
      )}
    </div>
  );
}
