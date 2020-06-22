import React from "react"
import "./groups-bar.sass"
import GroupItem from "../GroupItem"
import NeumorphicBox from "../NeumorhicBox"
import Plus from "../icons/Plus"

interface GroupsBarProps {
    groups: Group[];
}

const GroupsBar: React.FC<GroupsBarProps> = ({ groups }) => (
    <div className="groups-container">
        <h2 className="groups-header">Groups:</h2>
        {groups.map(({id, name}) => <GroupItem key={id} name={name} />)}
        <NeumorphicBox className="groups-field-container" top="light" inner>
            <Plus className="groups-field-button" />
            <input className="field-text groups-field" placeholder="Add new group"/>
        </NeumorphicBox>
    </div>
)

export default GroupsBar