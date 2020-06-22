import React from "react"
import "./item.sass"
import NeumorphicBox from "../NeumorhicBox"
import FieldText from "../FieldText"

interface ItemProps {
    product: Product
}

const Item: React.FC<ItemProps> = ({
    product: { id, name, description, count, price },
}) => (
    <NeumorphicBox top="white" className="item-container">
        <div className="item-heading">
            <div className="item-id item-id-color">
                #<FieldText className="field-text item-field item-id-color" value={id} />
            </div>
            <h3 className="item-name">{name}</h3>
        </div>
        <input
            className="field-text item-desc"
            value={description}
            placeholder="No description given..."
        />
        <div className="item-count">
            <FieldText className="item-field item-accent" value={count} /> x{" "}
            <FieldText className="item-field item-accent" value={price} />$
        </div>
        {/* <span>{`${count} x ${price}$`}</span> */}
    </NeumorphicBox>
)

export default Item
