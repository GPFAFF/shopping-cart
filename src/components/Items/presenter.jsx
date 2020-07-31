import React from 'react'

export const Item = ({ data }) => {
  const { x, y, z } = data;
  console.log(x, y, z)
  return (
    <div>
      <h2>Meh</h2>
    </div>
  )
}
