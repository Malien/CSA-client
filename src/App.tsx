import React from "react"
import ReactDOM from "react-dom"
import { useDispatch } from "react-redux"
import "./app.sass"
import GroupsBar from "./components/GroupsBar"
import Header from "./components/Header"
import Providers from "./components/Providers"
import { store } from "./state"
import useLogin from "./useLogin"
import ItemsBar from "./components/ItemsBar"

const App: React.FC = () => {
    const { login } = useLogin()
    const dispatch = useDispatch()

    return (
        <div className="app-container">
            <Header username={login} onLogout={() => dispatch({ type: "logout" })} />
            <ItemsBar />
            <GroupsBar />
        </div>
    )
}

ReactDOM.render(
    <Providers store={store}>
        <App />
    </Providers>,
    document.getElementById("mount")
)
