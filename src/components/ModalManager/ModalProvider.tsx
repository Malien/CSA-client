import React, { useState, useEffect } from "react"
import classnames from "classnames"
import ModalContext, { ModalDispatcher } from "./ModalContext"
import "./modal.sass"

export const ModalProvider: React.FC = ({ children }) => {
    const [modal, setModal] = useState<JSX.Element | undefined>()
    const [hidden, setHidden] = useState(true)

    const dismiss = () => {
        setHidden(true)
        setTimeout(() => setModal(undefined), 200)
    }

    const dispatcher: ModalDispatcher = (newModal) => {
        if (typeof newModal === "function") setModal(newModal(dismiss))
        else setModal(newModal)
        setHidden(false)
        return dismiss
    }

    useEffect(() => {
        if (!hidden) {
            window.addEventListener("keydown", ev => {
                if (ev.key == "Escape") dismiss()
            })
        }
    }, [hidden])

    return (
        <ModalContext.Provider value={dispatcher}>
            {children}
            <div className={classnames("modal-canvas", { hidden })}>
                <div
                    onClick={dismiss}
                    className="modal-bg"
                />
                {modal}
            </div>
        </ModalContext.Provider>
    )
}

export default ModalContext
