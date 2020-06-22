import React, { useRef, useEffect, useLayoutEffect } from "react"
import classnames from "classnames"
import "./field-text.sass"

interface FieldTextProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const FieldText: React.FC<FieldTextProps> = ({
    className,
    onChange,
    value,
    ...props
}) => {
    const hideRef = useRef<HTMLSpanElement>(null)
    const fieldRef = useRef<HTMLInputElement>(null)

    useLayoutEffect(() => {
        const hide = hideRef.current
        const field = fieldRef.current
        console.log(hide, field)
        if (hide && field) {
            hide.textContent = field.value
            field.style.width = hide.offsetWidth + "px"
        }
    }, [value, hideRef.current, fieldRef.current])

    return (
        <>
            <span ref={hideRef} className={classnames(className, "field-hidden")}></span>
            <input
                ref={fieldRef}
                onChange={(event) => {
                    const hide = hideRef.current
                    if (hide) {
                        const field = event.currentTarget
                        hide.textContent = field.value
                        field.style.width = hide.offsetWidth + "px"
                    }
                    onChange?.(event)
                }}
                type="text"
                value={value}
                className={classnames(className, "field-text")}
                {...props}
            />
        </>
    )
}

export default FieldText
