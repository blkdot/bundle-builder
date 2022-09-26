import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BundleType } from "../../utils/types";
import { Wrapper } from "./styles";

const Recipe = () => {

  const bundle: BundleType = useSelector((state: any) => state.bundle);
  
  const [totalPrice, setTotalPrice] = useState<number> (0);

  useEffect(() => {
    let _price = 0;
    for (let i = 0; i < bundle.addedItems.length; i++) {
      _price += bundle.addedItems[i].cart.price * bundle.addedItems[i].count;
    }
    setTotalPrice(Number(_price.toFixed(2)));
  }, [bundle]);

  return (
    <Wrapper>
      <div className="pack">
        BUILD YOUR PACK
        <p className="price">${totalPrice}</p>
      </div>
      <div className="bundle">
        <div className="bundle-img">
          {bundle.total > 0 && <img src={bundle.addedItems[0].cart.image} alt="" />}
        </div>
        <div className="bundle-img">
          {bundle.total > 1 && <img src={bundle.addedItems[1].cart.image} alt="" />}
        </div>
        <div className="bundle-img">
          {bundle.total > 2 && <img src={bundle.addedItems[2].cart.image} alt="" />}
        </div>
      </div>
      <button className={bundle.total < 3 ? "add-cart" : "add-cart-red"}>
        ADD TO CART
      </button>
    </Wrapper>
  );
};

export default Recipe;