import React, { useContext, useEffect } from "react"
import ReactDOM from "react-dom"
import { useSelector, useDispatch } from "react-redux"
import Header from "./components/Header"
import GroupsBar from "./components/GroupsBar"
import Providers from "./components/Providers"
import { store, StateType, DispatchType } from "./state"
import { ModalContext } from "./components/ModalManager"
import LoginModal from "./components/LoginModal"
import ProductGrid from "./components/ProductGrid"
import FilterTab from "./components/FilterTab"
import "./app.sass"
import { MessageContext } from "./components/MessageManager"

const { API_URL } = process.env

const App: React.FC = () => {
    const login = useSelector((state: StateType) => state.auth)
    const products = Object.values(useSelector((state: StateType) => state.products))
    const groups = Object.values(useSelector((state: StateType) => state.groups))
    const dispatch = useDispatch<DispatchType>()
    const stderr = useContext(MessageContext)
    const modal = useContext(ModalContext)

    const handleServerError = (res: any) => {
        if (!res.ok) throw res
        else return res
    }

    const notifyUser = (err: any) => stderr(err.message || "Unknown error occurred")

    const loginHandler = (login: string, password: string) => {
        dispatch({ type: "login", login })
        fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ login: login, password: password }),
        })
            .then(res => res.json())
            .then(handleServerError)
            .then(({ accessToken }) => {
                dispatch({ type: "auth", token: accessToken })
            })
            .catch(notifyUser)
    }

    useEffect(() => {
        if (!login.token) {
            return modal(<LoginModal onLogin={loginHandler} />, true)
        }
    }, [login.token])

    useEffect(() => {
        if (login.token) {
            fetch(`${API_URL}/api/goods`, {
                headers: {
                    "Authorization": `Bearer ${login.token}`
                }
            })
                .then(res => res.json())
                .then(handleServerError)
                .then(({ products }) => {
                    dispatch({ type: "set-products", products })
                })
                .catch(notifyUser)
        }
    }, [login.token])

    useEffect(() => {
        if (login.token) {
            fetch(`${API_URL}/api/groups`, {
                headers: {
                    "Authorization": `Bearer ${login.token}`
                }
            })
                .then(res => res.json())
                .then(handleServerError)
                .then(({ groups }) => {
                    dispatch({ type: "set-groups", groups })
                })
                .catch(notifyUser)
        }
    }, [login.token])

    return (
        <div className="app-container">
            <Header
                username={login.login}
                onLogout={() => dispatch({ type: "logout" })}
            />
            <div className="items-container">
                <FilterTab className="items-sticky"/>
                <ProductGrid products={products} />
            </div>
            <GroupsBar groups={groups} />
        </div>
    )
}

ReactDOM.render(
    <Providers store={store}>
        <App />
    </Providers>,
    document.getElementById("mount")
)
