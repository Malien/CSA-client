import React from "react"
import classnames from "classnames"
import Plus from "./Plus"

interface CrossProps {
    className?: string
    strokeClassName?: string
}

const Cross: React.FC<CrossProps> = ({ className, strokeClassName }) => (
    <Plus className={classnames(className, "icon-cross")} strokeClassName={strokeClassName} />
)

export default Cross