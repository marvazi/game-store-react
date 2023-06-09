import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { CartBlock } from '../cart-block/cart-block';

export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header_store-title">
          Game Store
        </Link>
      </div>
      <div className="wrapper header_cart-btn-wrapper">
        <CartBlock></CartBlock>
      </div>
    </div>
  );
};
