import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';
import { Button } from '../button';
import './game-buy.css';
export const GameBuy = ({ game }) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const disPatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      disPatch(deleteItemFromCart(game.id));
    } else {
      disPatch(setItemInCart(game));
    }
  };
  const isItemInCart = items.some((item) => item.id === game.id);

  return (
    <div>
      <span className="game-buy_price">{game.price}руб.</span>
      <Button
        type={isItemInCart ? 'secondary' : 'primary'}
        onClick={handleClick}
      >
        {isItemInCart ? 'Убрать из козины' : 'В корзину'}
      </Button>
    </div>
  );
};
