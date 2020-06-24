import React, { useState } from "react"
import NeumorphicField from "../NeumorphicField"
import "./login-modal.sass"
import Neumorphic from "../Neumorphic"

interface LoginModalProps {
    onLogin?: (login: string, password: string) => void
}

const LoginModal: React.FC<LoginModalProps> = ({ onLogin }) => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Neumorphic top="light">
            <form
                className="login-container"
                onSubmit={(event) => {
                    event.preventDefault()
                    if (login && password && onLogin) onLogin(login, password)
                }}
            >
                <NeumorphicField
                    className="login-field"
                    top="white"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    placeholder="Login"
                />
                <NeumorphicField
                    className="login-field"
                    top="white"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <Neumorphic top="accent">
                    <button type="submit" className="login-button">Login</button>
                </Neumorphic>
            </form>
        </Neumorphic>
    )
}

export default LoginModal
