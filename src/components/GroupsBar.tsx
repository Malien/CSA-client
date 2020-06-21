import React from "react"

interface GroupsBarProps {
    groups: Group[];
}

const GroupsBar: React.FC<GroupsBarProps> = ({ groups }) => (
    <div className="groups-container">
        <h2 className="groups-header">Groups:</h2>
        {groups.map(({id, name}) => <div key={id}>{name}</div>)}
    </div>
)

export default GroupsBar