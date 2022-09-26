export type CartItemType = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
};

export type BundleItemType = {
  cart: CartItemType;
  count: number;
};

export type BundleType = {
  addedItems: Array<BundleItemType>;
  total: number;
}