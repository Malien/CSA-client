import React, { useState } from "react"
import "./groups-bar.sass"
import GroupItem from "../GroupItem"
import Plus from "../icons/Plus"
import Neumorphic from "../Neumorphic"

interface GroupsListProps {
    groups: Group[]
    onAdd?: (name: string) => void
    onDelete?: (id: GroupID) => void
    onRename?: (id: GroupID, newName: string) => void
    onChange?: (id: GroupID, checked: boolean) => void
}

const GroupsList: React.FC<GroupsListProps> = ({
    groups,
    onAdd,
    onDelete,
    onRename,
    onChange,
}) => {
    const [groupName, setGroupName] = useState("")

    return (
        <div className="groups-container">
            <h2 className="groups-header">Groups:</h2>
            {/* TODO: represent as unordered list */}
            <GroupItem name="Uncategorized" immutable />
            {groups.map(({ id, name }) => (
                <GroupItem
                    key={id}
                    name={name}
                    onDelete={() => onDelete?.(id)}
                    onChange={checked => onChange?.(id, checked)}
                />
            ))}
            <Neumorphic top="light" inner>
                <form
                    onSubmit={event => {
                        event.preventDefault()
                        if (groupName && onAdd) onAdd(groupName)
                        setGroupName("")
                    }}
                    className="groups-field-container"
                >
                    <button
                        type="submit"
                        disabled={!groupName}
                        className="groups-field-button"
                    >
                        <Plus className="groups-field-icon" />
                    </button>
                    <input
                        value={groupName}
                        onChange={event => setGroupName(event.target.value)}
                        className="field-text groups-field"
                        placeholder="Add new group"
                    />
                </form>
            </Neumorphic>
        </div>
    )
}

export default GroupsList
