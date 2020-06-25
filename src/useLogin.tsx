import React, { useEffect, useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleServerError, API_URL, createNotifier } from "./util/api"
import { ModalContext } from "./components/ModalManager"
import { MessageContext } from "./components/MessageManager"
import LoginModal from "./components/LoginModal"
import { DispatchType, StateType } from "./state"

export default () => {
    const login = useSelector((state: StateType) => state.auth)
    const dispatch = useDispatch<DispatchType>()
    const stderr = useContext(MessageContext)
    const modal = useContext(ModalContext)

    const notifyUser = createNotifier(stderr)

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

    return login
}