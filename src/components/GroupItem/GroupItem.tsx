import React from "react"
import "./group-item.sass"
import Checkbox from "../Checkbox/Checkbox"
import NeumorphicBox from "../NeumorhicBox"
import Cross from "../icons/Cross"

interface GroupItemProps {
    name: string
    immutable?: boolean
}

const GroupItem: React.FC<GroupItemProps> = ({ name, immutable }) => (
    <NeumorphicBox top="light" className="group-item">
        <Checkbox className="group-item-check" />
        {name}
        {!immutable && (
            <NeumorphicBox tag="button" top="accent" active className="group-cross">
                <Cross className="group-cross-icon" />
            </NeumorphicBox>
        )}
    </NeumorphicBox>
)

export default GroupItem
