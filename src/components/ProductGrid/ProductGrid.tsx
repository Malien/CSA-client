import React from "react"
import Item from "../Item"
import "./product-grid.sass"

interface ProductGridProps {
    products: Product[]
    onDelete?: (id: ProductID) => void
    onNameChange?: (id: ProductID, name: string) => void
    onCountChange?: (id: ProductID, count: number) => void
    onPriceChange?: (id: ProductID, price: number) => void
}

const ProductGrid: React.FC<ProductGridProps> = ({
    products,
    onDelete,
    onPriceChange,
    onNameChange,
    onCountChange,
}) => (
    <div className="product-grid">
        {products.map(product => (
            <Item
                key={product.id}
                product={product}
                onCountChange={count => onCountChange?.(product.id, count)}
                onNameChange={name => onNameChange?.(product.id, name)}
                onPriceChange={price => onPriceChange?.(product.id, price)}
                onDelete={() => onDelete?.(product.id)}
            />
        ))}
    </div>
)

export default ProductGrid
