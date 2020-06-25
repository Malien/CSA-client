import React, { useRef, useState, useEffect } from "react"
import ContentEditable from "react-contenteditable"
import sanitizeHtml from "sanitize-html"
import "./item.sass"
import NeumorphicBox from "../NeumorphicBox"
import FieldText from "../FieldText"
import GroupShim from "../GroupShim"
import CloseButton from "../CloseButton"
import { toCountNumber } from "../../util/numbers"

interface ItemProps {
    product: Product
    onDelete?: () => void
    onNameChange?: (name: string) => void
    onCountChange?: (count: number) => void
    onPriceChange?: (price: number) => void
}

const Item: React.FC<ItemProps> = ({
    product,
    onDelete,
    onNameChange,
    onCountChange,
    onPriceChange,
}) => {
    const name = useRef(product.name)
    const [count, setCount] = useState(product.count)
    const [price, setPrice] = useState(String(product.price))
    const [description, setDescription] = useState(product.description)

    return (
        <NeumorphicBox top="white" className="item-container">
            <div className="item-heading item-margin">
                <span className="item-id item-id-color">#{product.id}</span>
                <ContentEditable
                    contentEditable
                    html={name.current}
                    onChange={event => {
                        name.current = event.target.value
                    }}
                    onBlur={event => {
                        if (name.current) onNameChange?.(name.current)
                    }}
                    tagName="h3"
                    className="item-name"
                />
            </div>
            <input
                className="item-margin field-text item-desc"
                value={description}
                onChange={event => setDescription(event.target.name)}
                placeholder="No description given..."
            />
            <GroupShim groups={product.groups} />
            <div className="item-count item-margin">
                <FieldText
                    className="item-field item-accent"
                    onChange={event => setCount(toCountNumber(event.target.value))}
                    onBlur={() => {
                        if (count != product.count) onCountChange?.(count)
                    }}
                    value={count}
                />{" "}
                x{" "}
                <FieldText
                    className="item-field item-accent"
                    onChange={event => {
                        const re = /^\d+\.?\d*$/
                        if (event.target.value === " " || re.test(event.target.value)) {
                            setPrice(event.target.value)
                        }
                    }}
                    onBlur={() => {
                        const parsed = Number.parseFloat(price)
                        if (!Number.isNaN(parsed) && parsed !== product.price) onPriceChange?.(parsed)
                    }}
                    value={price}
                />
                $
            </div>
            <CloseButton onClick={onDelete} className="item-delete" />
        </NeumorphicBox>
    )
}

export default Item
