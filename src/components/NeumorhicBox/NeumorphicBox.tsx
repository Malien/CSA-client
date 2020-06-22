import React from "react"
import classnames from "classnames"
import "./neumorphic-box.sass"

interface NeumorphicBoxProps {
    top: "light" | "white" | "accent"
    className?: string
    inner?: boolean
    active?: boolean
    tag?: "div" | "span" | "button" | "a"
    onClick?: () => void
}

const NeumorphicBox: React.FC<NeumorphicBoxProps> = ({
    top,
    inner,
    onClick,
    active,
    tag: Tag = "div",
    className,
    children,
}) => (
    <Tag
        onClick={() => onClick?.()}
        className={classnames(
            className,
            "neu-box",
            { "neu-box-inner": inner },
            { "nue-active": active },
            `neu-top-${top}`
        )}
    >
        {children}
    </Tag>
)

export default NeumorphicBox
