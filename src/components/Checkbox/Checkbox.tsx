import React from "react"
import "./checkbox.sass"
import classnames from "classnames"

interface CheckboxProps {
    checked?: boolean
    className?: string
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, className }) => (
    <input checked={checked} className={classnames(className, "checkbox")} type="checkbox"/>
)

export default Checkbox