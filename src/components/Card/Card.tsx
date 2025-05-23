import React from 'react'

interface CardProps {
    title: string;
    price: number;
    image: string;
}

function Card({title, price, image}:CardProps) {
  return (
    <div>
        {title}
        <p>{price}</p>
        <img src={image} alt="" />
    </div>
  )
}

export default Card
