import React from "react"
import Item from "../Item"
import "./product-grid.sass"

interface ProductGridProps {
    products: Product[]
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => (
    <div className="product-grid">
        {products.map(product => <Item key={product.id} product={product} />)}
    </div>
)

export default ProductGrid