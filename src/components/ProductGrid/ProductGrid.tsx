import React from "react"
import Item from "../Item"
import "./product-grid.sass"

interface ProductGridProps {
    products: Product[]
    onDelete?: (id: ProductID) => void
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onDelete }) => (
    <div className="product-grid">
        {products.map(product => <Item key={product.id} product={product} onDelete={() => onDelete?.(product.id)} />)}
    </div>
)

export default ProductGrid