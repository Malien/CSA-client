import classnames from "classnames"
import React, { useEffect, useState } from "react"
import Neumorphic from "../Neumorphic"
import "./message-manager.sass"
import MessageContext from "./MessageContext"

const MessageProvider: React.FC = ({ children }) => {
    const [message, setMessage] = useState<string>()
    const [hidden, setHidden] = useState(true)

    useEffect(() => {
        if (message) {
            setHidden(false)
            const timeout = setTimeout(() => {
                setHidden(true)
                setTimeout(() => {
                    setMessage(undefined)
                }, 200)
            }, 6000)
            return () => clearTimeout(timeout)
        }
    }, [message])

    return (
        <MessageContext.Provider value={setMessage}>
            {children}
            <Neumorphic top="white">
                <div className={classnames("message-canvas", { hidden })}>{message}</div>
            </Neumorphic>
        </MessageContext.Provider>
    )
}

export default MessageProvider
