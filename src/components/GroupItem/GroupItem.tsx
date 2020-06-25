import React from "react"
import "./group-item.sass"
import Checkbox from "../Checkbox/Checkbox"
import NeumorphicBox from "../NeumorphicBox"
import CloseButton from "../CloseButton"

interface GroupItemProps {
    name: string
    immutable?: boolean
    onDelete?: () => void
    onRename?: (name: string) => void
    onChange?: (checked: boolean) => void
}

const GroupItem: React.FC<GroupItemProps> = ({ name, immutable, onDelete, onChange }) => (
    <NeumorphicBox top="light" className="group-item">
        <Checkbox
            className="group-item-check"
            onChange={event => onChange?.(event.target.checked)}
        />
        {name}
        {!immutable && <CloseButton onClick={onDelete} />}
    </NeumorphicBox>
)

export default GroupItem
