import React from "react"
import classnames from "classnames"
import "./close-button.sass"
import Neumorphic from "../Neumorphic"
import Cross from "../icons/Cross"

interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CloseButton: React.FC<CloseButtonProps> = ({ className, ...props }) => (
    <Neumorphic top="accent" active>
        <button className={classnames(className, "close-button")} {...props} >
            <Cross className="close-button-icon" />
        </button>
    </Neumorphic>
)

export default CloseButton