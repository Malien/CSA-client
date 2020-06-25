import React from "react"
import ReactDOM from "react-dom"
import { useDispatch } from "react-redux"
import "./app.sass"
import FilterTab from "./components/FilterTab"
import GroupsBar from "./components/GroupsBar"
import Header from "./components/Header"
import Products from "./components/Products"
import Providers from "./components/Providers"
import { store } from "./state"
import useLogin from "./useLogin"

const App: React.FC = () => {
    const { login } = useLogin()
    const dispatch = useDispatch()

    return (
        <div className="app-container">
            <Header
                username={login}
                onLogout={() => dispatch({ type: "logout" })}
            />
            <div className="items-container">
                <FilterTab className="items-sticky"/>
                <Products />
            </div>
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
