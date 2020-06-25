import React from "react"
import "./checkbox.sass"
import classnames from "classnames"

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox: React.FC<CheckboxProps> = ({ checked, className, ...props }) => (
    <input checked={checked} className={classnames(className, "checkbox")} type="checkbox" {...props} />
)

export default Checkbox