import React from 'react'
import './index.scss';
import { FiShoppingCart } from 'react-icons/fi';

export const Nav = ({ title }) => {
  return (
    <nav>
      <h1>{title}</h1>
      <h2><FiShoppingCart /> <span>cart</span></h2>
    </nav>
  )
}
