import React, { useState, useEffect } from "react"
import classnames from "classnames"
import MessageContext, { MessageDispatcher } from "./MessageContext"
import "./message-manager.sass"

const MessageProvider: React.FC = ({ children }) => {
    const [message, setMessage] = useState<string>()
    const [hidden, setHidden] = useState(true)

    const dispatcher: MessageDispatcher = newMessage => {
        console.log(newMessage)
        setMessage(newMessage)
    }

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
        <MessageContext.Provider value={dispatcher}>
            {children}
            <div className={classnames("message-canvas", { hidden })}>{message}</div>
        </MessageContext.Provider>
    )
}

export default MessageProvider
