import React from "react"
import classnames from "classnames"
import "./neumorphic-box.sass"

interface NeumorphicBoxProps {
    base: "dark" | "light";
    top: "light" | "white" | "accent";
    className?: string;
    inner?: boolean;
    tag?: "div" | "span" | "button" | "a";
    onClick?: () => void;
}

const NeumorphicBox: React.FC<NeumorphicBoxProps> = ({ base, top, inner, onClick, tag: Tag = "div", className, children }) => (
    <Tag onClick={() => onClick?.()} className={classnames(
        className,
        "neu-box",
        { "neu-box-inner": inner },
        `neu-top-${top}`,
        `neu-base-${base}`)}>
        {children}
    </Tag>
)

export default NeumorphicBox