import React from "react"
import FilterTab from "./FilterTab"
import Item from "./Item"

interface ItemsLayoutProps {
    items: Product[];
}

const ItemsLayout: React.FC<ItemsLayoutProps> = ({ items }) => (
    <div className="items-container">
        <FilterTab />
        <div className="items-grid">
            {items.map(product => <Item key={product.id} product={product} />)}
        </div>
    </div>
)

export default ItemsLayout