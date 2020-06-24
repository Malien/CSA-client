import React from "react"
import "./item.sass"
import NeumorphicBox from "../NeumorphicBox"
import FieldText from "../FieldText"
import GroupShim from "../GroupShim"

interface ItemProps {
    product: Product
}

const Item: React.FC<ItemProps> = ({
    product: { id, name, description, count, price, groups },
}) => (
    <NeumorphicBox top="white" className="item-container">
        <div className="item-heading item-margin">
            <div className="item-id item-id-color">
                #<FieldText className="field-text item-field item-id-color" value={id} />
            </div>
            <h3 className="item-name">{name}</h3>
        </div>
        <input
            className="item-margin field-text item-desc"
            value={description}
            placeholder="No description given..."
        />
        <GroupShim groups={groups}/>
        <div className="item-count item-margin">
            <FieldText className="item-field item-accent" value={count} /> x{" "}
            <FieldText className="item-field item-accent" value={price} />$
        </div>
    </NeumorphicBox>
)

export default Item
