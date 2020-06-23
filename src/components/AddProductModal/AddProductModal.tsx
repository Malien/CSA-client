import React, { useState } from "react"
import NeumorphicBox from "../NeumorhicBox"
import NeumorphicField from "../NeumorphicField"
import "./add-product-modal.sass"
import Plus from "../icons/Plus"
import { toCountNumber } from "../../util/numbers"

interface AddProductModalProps {
    onAdd?: (
        name: string,
        description: string | undefined,
        count: number,
        price: number
    ) => void
}

const AddProductModal: React.FC<AddProductModalProps> = ({ onAdd }) => {
    const [name, setName] = useState<string>()
    const [description, setDescription] = useState<string>()
    const [price, setPrice] = useState<string>()
    const [count, setCount] = useState<number>()

    return (
        <NeumorphicBox top="light" className="product-modal-container">
            <NeumorphicField
                className="product-modal-field"
                top="white"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Product name"
            />
            <NeumorphicField
                className="product-modal-field"
                top="white"
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Product description"
            />
            <NeumorphicField
                className="product-modal-field"
                top="white"
                type="number"
                value={String(price)}
                onChange={e => {
                    const re = /^\d+\.?\d*$/
                    if (e.target.value === " " || re.test(e.target.value)) {
                        setPrice(e.target.value)
                    }
                }}
                min={0}
                placeholder="Price"
            />
            <NeumorphicField
                className="product-modal-field"
                top="white"
                type="number"
                value={String(count)}
                onChange={e => setCount(toCountNumber(e.target.value))}
                min={0}
                placeholder="Count"
            />
            <NeumorphicBox
                tag="button"
                active
                top="accent"
                onClick={() => {
                    const errors = onAdd
                }}
                className="add-button"
            >
                <Plus className="add-button-icon" />
                Add
            </NeumorphicBox>
        </NeumorphicBox>
    )
}

export default AddProductModal
