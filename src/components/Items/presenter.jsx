import React from 'react'

export const Item = ({ price, qty, name }) => {

  return (
    <div>
      <span>{name}</span>
      <span>{price}</span>
      <span>{qty}</span>
    </div>
  )
}
