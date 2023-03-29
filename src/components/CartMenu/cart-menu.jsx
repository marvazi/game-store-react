import React from 'react';
import { cartTotalPrice } from '../utils';
import { Button } from '../button';
import './cart-menu.css';
import { CartItem } from '../CartItem';
export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu_game-list">
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.title}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : 'Корзина пуста'}
      </div>
      <>
        {items.length > 0 ? (
          <div className="cart-menu_arrange">
            <div className="cart-menu_total-price">
              <span>Итого:</span>
              <span>{cartTotalPrice(items)}руб</span>
            </div>
            <Button type="primary" size="m" onClick={onClick}>
              Оформить заказ
            </Button>
          </div>
        ) : null}
      </>
    </div>
  );
};
