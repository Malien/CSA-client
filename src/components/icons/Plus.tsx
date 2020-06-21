import React from "react"
import classnames from "classnames"
import "./icons.sass"

interface PlusProps {
    className?: string
    strokeClassName?: string
}

const Plus: React.FC<PlusProps> = ({ className, strokeClassName }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 106 106"
        className={className}
    >
        <g className={classnames(strokeClassName, "icon-trace")}>
            <line x1="53" y1="18" x2="53" y2="87" />
            <line x1="13" y1="53" x2="11" y2="53" />
            <line x1="87" y1="53" x2="32" y2="53" />
        </g>
    </svg>
)

export default Plus
