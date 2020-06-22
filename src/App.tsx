import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import ItemsLayout from "./components/ItemsLayout"
import GroupsBar from "./components/GroupsBar"

const App: React.FC = () => (
    <div className="app-container">
        <Header username="Username" />
        <ItemsLayout items={[]} />
        <GroupsBar
            groups={[
                { id: 1, name: "Group" },
                { id: 2, name: "Another" },
            ]}
        />
    </div>
)

ReactDOM.render(<App />, document.getElementById("mount"))
