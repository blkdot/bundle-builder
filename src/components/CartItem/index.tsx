import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { CartItemType, BundleType  } from "../../utils/types";
import { addToBundle, removeFromBundle } from '../../state/bundle';
import { Wrapper } from "./styles";

type Props = {
  item: CartItemType;
};

const CartItem = ({ item }: Props) => {

  const dispatch = useDispatch();
  const bundle: BundleType = useSelector((state: any) => state.bundle);
  const [count, setCount] = useState(0);

  const handleAddToBundle = (item: CartItemType) => {
    setCount(count + 1);
    dispatch(addToBundle(item))
  };

  const handleRemoveFromBundle = (item: CartItemType) => {
    if (count > 0) {
      setCount(count - 1);
      dispatch(removeFromBundle(item))
    }
  };

  return (
    <Wrapper>
        <h4 className={bundle.total > 2 && !bundle.addedItems.some(e => e.cart === item) ? "disabled-title" : "title"}>{item.title}</h4>
        <img className={bundle.total > 2 && !bundle.addedItems.some(e => e.cart === item) ? "disabled-img" : "img"} src={item.image} alt={item.title} />
        <div className="price-container">
          <p>price: <span className={bundle.total > 2 && !bundle.addedItems.some(e => e.cart === item) ? "disabled-price" : "price"}>${item.price.toFixed(2)}</span></p>
          <div className="amount-spin">
            <button onClick={() => handleRemoveFromBundle(item)}>&#45;</button>
            <span className={count > 0 ? "amount" : (bundle.total === 3 ? "disabled-amount": "no-amount")}>{count}</span>
            <button onClick={() => handleAddToBundle(item)} disabled={bundle.total > 2 && !bundle.addedItems.some(e => e.cart === item)}>&#43;</button>
          </div>
        </div>
    </Wrapper>
  );
};

export default CartItem;
