import React, { ReactElement } from "react"
import classnames from "classnames"
import "./neumorphic.sass"

interface NeumorphicProps {
    children: ReactElement<{ className?: string }>
    inner?: boolean
    active?: boolean
    top: "accent" | "light" | "white"
}

const Neumorphic: React.FC<NeumorphicProps> = ({ children, inner, active, top }) =>
    React.cloneElement(children, {
        className: classnames(
            children.props.className,
            "neu-box",
            { "neu-box-inner": inner },
            { "nue-active": active },
            `neu-top-${top}`
        ),
    })

export default Neumorphic
