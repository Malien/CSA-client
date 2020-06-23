import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import ItemsLayout from "./components/ItemsLayout"
import GroupsBar from "./components/GroupsBar"
import { ModalProvider } from "./components/ModalManager/ModalProvider"
import { MessageProvider } from "./components/MessageManager"

const App: React.FC = () => (
    <MessageProvider>
        <ModalProvider>
            <div className="app-container">
                <Header username="Username" />
                <ItemsLayout
                    items={[
                        {
                            id: 1,
                            name: "Product name",
                            price: 12.0,
                            count: 4,
                            groups: [1, 2],
                        },
                        {
                            id: 2,
                            name: "Another one",
                            price: 24.56,
                            count: 200,
                            groups: [1],
                        },
                        { id: 3, name: "Last one", price: 33.4, count: 0, groups: [] },
                    ]}
                />
                <GroupsBar
                    groups={[
                        { id: 1, name: "Group" },
                        { id: 2, name: "Another" },
                    ]}
                />
            </div>
        </ModalProvider>
    </MessageProvider>
)

ReactDOM.render(<App />, document.getElementById("mount"))
