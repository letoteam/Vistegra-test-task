import data from "../api/data.json";
import { Maybe } from "../types/Maybe";
import { FormattedItem } from "../types/FormattedItem";

type Item = {
  ID: string;
  NAME: string;
  PRICE: string;
  PICTURE?: string;
  PART?: string;
  SORT?: string;
  TYPE?: string;
  WEIGHT?: string;
  COLOR_CODE?: string;
  COLOR_SAMPLE?: string;
  COVER_SIDE?: string;
  STOCK?: string;
  DEEP?: number;
  SKU?: SkuItem;
};

type SkuItem = {
  [key: string]: Item;
};

export default function getItems() {
  // TODO: figure out with types
  // @ts-ignore
  const items: FormattedItem[] = data.reduce((result: any[], item: Item) => {
    if (item.SKU) {
      const pictureUrl: Maybe<string> = item.PICTURE;
      const itemKeys = Object.keys(item.SKU);

      itemKeys.forEach((key) => {
        const skuItem = item.SKU![key];

        const formattedItem: FormattedItem = {
          id: skuItem.ID,
          name: skuItem.NAME,
          price: skuItem.PRICE,
          pictureUrl,
          amount: 0,
        };

        result.push(formattedItem);
      });
      return result;
    }

    const formattedItem = {
      id: item.ID,
      name: item.NAME,
      price: item.PRICE,
      pictureUrl: item.PICTURE,
      amount: 0,
    };
    result.push(formattedItem);
    return result;
  }, []);

  return items;
}
