import React, { useState, useEffect } from "react"
import classnames from "classnames"
import ModalContext, { ModalDispatcher } from "./ModalContext"
import "./modal.sass"

export const ModalProvider: React.FC = ({ children }) => {
    const [modal, setModal] = useState<JSX.Element | undefined>()
    const [hidden, setHidden] = useState(true)
    const [closable, setClosable] = useState(true)

    const dismiss = () => {
        setHidden(true)
        setTimeout(() => setModal(undefined), 200)
    }

    const dispatcher: ModalDispatcher = (newModal, persistent) => {
        if (typeof newModal === "function") setModal(newModal(dismiss))
        else setModal(newModal)
        setClosable(!persistent)
        setHidden(false)
        return dismiss
    }

    useEffect(() => {
        if (!hidden && closable) {
            const handler = (ev: KeyboardEvent) => {
                if (ev.key == "Escape") dismiss()
            }
            window.addEventListener("keydown", handler)
            return () => window.removeEventListener("keydown", handler)
        }
    }, [hidden, closable])

    return (
        <ModalContext.Provider value={dispatcher}>
            {children}
            <div className={classnames("modal-canvas", { hidden })}>
                <div
                    onClick={() => {if (closable) dismiss()}}
                    className="modal-bg"
                />
                {modal}
            </div>
        </ModalContext.Provider>
    )
}

export default ModalContext
