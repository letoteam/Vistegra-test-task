import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import Section from "../../components/shared/Section/Section";
import Catalog from "../../components/Catalog/Catalog";
import { FormattedItem } from "../../types/FormattedItem";
import getItems from "../../services/getItems";
import { CartItem } from "../../types/CartItem";
import { View } from "../../types/View";
import ViewSelector from "./ViewSelector/ViewSelector";
import Cart from "../../components/Cart/Cart";

function Main() {
  const items = getItems();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [catalogView, setCatalogView] = useState<View>("list");

  const addItem = (item: FormattedItem) => {
    const cardItemIndex = cartItems.findIndex(
      (cartItem) => item.id === cartItem.id,
    );

    if (cardItemIndex === -1) {
      const cartItem = { ...item, amount: 1 };
      setCartItems([...cartItems, cartItem]);
    } else {
      const newCartItems = [...cartItems];
      newCartItems[cardItemIndex].amount += 1;
      setCartItems(newCartItems);
    }
  };

  const setCartItemAmount = (amount: number, id: string) => {
    const newCartItems = [...cartItems];
    const cartItem = newCartItems.find((item) => item.id === id);

    if (cartItem) {
      cartItem.amount = amount;
    }

    setCartItems(newCartItems);
  };

  const deleteItemFromCart = (id: string) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  return (
    <Layout>
      <Section title="Catalog" margins="20px 0">
        <ViewSelector view={catalogView} setView={setCatalogView} />
        <Catalog items={items} addItem={addItem} view={catalogView} />
      </Section>
      <Section title="Cart" margins="20px 0">
        <Cart
          items={cartItems}
          setCartItemAmount={setCartItemAmount}
          deleteItem={deleteItemFromCart}
        />
      </Section>
    </Layout>
  );
}

export default Main;
