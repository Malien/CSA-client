import React, { useState, useEffect } from "react"
import classnames from "classnames"
import MessageContext, { MessageDispatcher } from "./MessageContext"
import "./message-manager.sass"
import Neumorphic from "../Neumorphic"

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
