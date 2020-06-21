import React from "react"

interface ItemProps {
    product: Product;
}

const Item: React.FC<ItemProps> = ({ product: {name, count, price} }) => (
    <div>
        <h1>{name}</h1>
        <span>{`${count} x ${price}$`}</span>
    </div>
)

export default Item