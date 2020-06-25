import React from "react"
import "./group-item.sass"
import Checkbox from "../Checkbox/Checkbox"
import NeumorphicBox from "../NeumorphicBox"
import Cross from "../icons/Cross"
import Neumorphic from "../Neumorphic"

interface GroupItemProps {
    name: string
    immutable?: boolean
    onDelete?: () => void
    onRename?: (name: string) => void
    onChange?: (checked: boolean) => void
}

const GroupItem: React.FC<GroupItemProps> = ({ name, immutable, onDelete, onChange }) => (
    <NeumorphicBox top="light" className="group-item">
        <Checkbox className="group-item-check" onChange={event => onChange?.(event.target.checked)} />
        {name}
        {!immutable && (
            <Neumorphic top="accent" active>
                <button onClick={onDelete} className="group-cross">
                    <Cross className="group-cross-icon" />
                </button>
            </Neumorphic>
        )}
    </NeumorphicBox>
)

export default GroupItem
