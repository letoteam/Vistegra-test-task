import React from "react";
import { FormattedItem } from "../../../types/FormattedItem";
import ListItem from "./ListItem/ListItem";

type ListViewProps = {
  items: FormattedItem[];
  addItem: Function;
};

function ListView({ items, addItem }: ListViewProps) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {items.length ? (
        <>
          {items.map((item) => (
            <ListItem key={item.id} item={item} addItem={() => addItem(item)} />
          ))}
        </>
      ) : (
        <p>No Items Yet</p>
      )}
    </>
  );
}

export default ListView;
