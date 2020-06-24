import React from "react"
import "./group-shim.sass"
import Cross from "../icons/Cross"
import Plus from "../icons/Plus"
import NeumorphicBox from "../NeumorphicBox"

const mapping = ["Group", "Another"] as const

interface GroupShimProps {
    groups: GroupID[]
}

const GroupShim: React.FC<GroupShimProps> = ({ groups }) => (
    <div className="shim-container">
        {groups.map((id) => (
            <NeumorphicBox top="accent" key={id} className="shim">
                <span className="shim-name">{mapping[id - 1]}</span>
                <Cross className="shim-cross" />
            </NeumorphicBox>
        ))}
        <NeumorphicBox top="accent" className="shim-add">
            <Plus className="shim-add-icon" />
        </NeumorphicBox>
    </div>
)

export default GroupShim
