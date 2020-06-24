import React from "react"
import Neumorphic from "./Neumorphic"

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
    <Neumorphic top={top} active={active} inner={inner}>
        <Tag onClick={onClick} className={className}> {children} </Tag>
    </Neumorphic>
)

export default NeumorphicBox
