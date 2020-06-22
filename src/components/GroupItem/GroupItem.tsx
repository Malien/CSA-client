import React from "react"
import "./group-item.sass"
import Checkbox from "../Checkbox/Checkbox"
import NeumorphicBox from "../NeumorhicBox"
import Cross from "../icons/Cross"

interface GroupItemProps {
    name: string;
}

const GroupItem: React.FC<GroupItemProps> = ({ name }) => (
    <NeumorphicBox base="dark" top="light" className="group-item">
        <Checkbox className="group-item-check" />
        {name}
        <NeumorphicBox tag="button" top="accent" base="light" active className="group-cross">
            <Cross className="group-cross-icon" />
        </NeumorphicBox>
    </NeumorphicBox>
)

export default GroupItem