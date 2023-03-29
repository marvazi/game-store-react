import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import './cart-block.css';
import { BiCartAlt } from 'react-icons/bi';
import { CartMenu } from '../CartMenu';
import { cartTotalPrice } from '../utils';
import { ItemsInCart } from '../items-cart';
import { useHistory } from 'react-router-dom';
export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = cartTotalPrice(items);
  const history = useHistory();
  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    history.push('/order');
  }, [history]);
  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
        size={25}
        className="cart-block_icon"
      />
      <span className="cart-block_total-price">{totalPrice} руб.</span>
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};
