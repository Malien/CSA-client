import React from "react"
import "./group-shim.sass"
import Cross from "../icons/Cross"
import Plus from "../icons/Plus"
import NeumorphicBox from "../NeumorphicBox"
import { StateType } from "../../state"
import deepEqual from "deep-equal"
import { useSelector } from "react-redux"

interface GroupShimProps {
    groups: GroupID[]
}

const GroupShim: React.FC<GroupShimProps> = ({ groups }) => {
    const groupNames = useSelector(
        (state: StateType) => groups.map(id => state.groups[id]).filter(v => v),
        deepEqual
    )
    return (
        <div className="shim-container">
            {groupNames.map(({ id, name }) => (
                <NeumorphicBox top="accent" key={id} className="shim">
                    <span className="shim-name">{name}</span>
                    <Cross className="shim-cross" />
                </NeumorphicBox>
            ))}
            <NeumorphicBox top="accent" className="shim-add">
                <Plus className="shim-add-icon" />
            </NeumorphicBox>
        </div>
    )
}

export default GroupShim
