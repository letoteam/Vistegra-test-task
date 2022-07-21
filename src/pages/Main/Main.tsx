import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import Section from "../../components/shared/Section/Section";
import Catalog from "../../components/Catalog/Catalog";
import { FormattedItem } from "../../types/FormattedItem";
import getItems from "../../services/getItems";

function Main() {
  const [items, setItems] = useState<FormattedItem[]>(getItems());
  // const [itemsInCard, setItemsInCard] = useState<FormattedItem[]>([]);

  // const addItem = (item: FormattedItem) => {
  //   if (item) {
  //   }
  //   setItemsInCard(item);
  // };
  // console.log(itemsInCard);

  return (
    <Layout>
      <Section title="Catalog" margins="20px 0">
        <Catalog items={items} addItem={() => {}} />
      </Section>
      <Section title="Cart" margins="20px 0">
        Hello
      </Section>
    </Layout>
  );
}

export default Main;
