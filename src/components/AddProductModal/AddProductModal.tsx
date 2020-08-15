import React, { useState } from "react"
import { toCountNumber } from "../../util/numbers"
import Plus from "../icons/Plus"
import Neumorphic from "../Neumorphic"
import NeumorphicField from "../NeumorphicField"
import "./add-product-modal.sass"

interface AddProductModalProps {
    onAdd?: (
        name: string,
        description: string | undefined,
        count: number,
        price: number
    ) => void
}

const AddProductModal: React.FC<AddProductModalProps> = ({ onAdd }) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [count, setCount] = useState<number>()

    return (
        <Neumorphic top="light">
            <form
                onSubmit={event => {
                    event.preventDefault()
                    const pricenum = price && Number.parseFloat(price)
                    if (
                        name &&
                        pricenum &&
                        count !== undefined &&
                        onAdd
                    ) {
                        onAdd(name, description || undefined, count, pricenum)
                    }
                }}
                className="product-modal-container"
            >
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
                    step={0.01}
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
                <Neumorphic active top="accent" >
                    <button type="submit" className="add-button">
                        <Plus className="add-button-icon" />
                        Add
                    </button>
                </Neumorphic>
            </form>
        </Neumorphic>
    )
}

export default AddProductModal
