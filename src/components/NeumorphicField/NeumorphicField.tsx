import React from "react"
import classnames from "classnames"
import NeumorphicBox from "../NeumorhicBox"
import "./neumorphic-field.sass"

interface NeumorphicFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    top: "light" | "white"
}

const NeumorphicField: React.FC<NeumorphicFieldProps> = ({
    top,
    className,
    ...props
}) => (
    <NeumorphicBox
        className={classnames(className, "nue-field-container")}
        top={top}
        inner
    >
        <input className="field-text nue-field" {...props} />
    </NeumorphicBox>
)

export default NeumorphicField
