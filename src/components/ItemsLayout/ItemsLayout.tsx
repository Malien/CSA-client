import React from "react"
import FilterTab from "../FilterTab"
import Item from "../Item"
import "./items-layout.sass"

interface ItemsLayoutProps {
    items: Product[];
}

const ItemsLayout: React.FC<ItemsLayoutProps> = ({ items }) => (
    <div className="items-container">
        <FilterTab className="items-sticky"/>
        <div className="items-grid">
            {items.map(product => <Item key={product.id} product={product} />)}
        </div>
    </div>
)

export default ItemsLayout