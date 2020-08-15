import React, { useState } from "react"
import "./price-filter.sass"

interface PriceFilterProps {
    onFrom?: (from?: number) => void
    onTo?: (to?: number) => void
}

const PriceFilter: React.FC<PriceFilterProps> = ({ onTo, onFrom }) => {
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")

    return (
        <>
            <span>From </span>
            <input
                className="field-text price-field"
                type="number"
                value={from}
                onChange={e => {
                    const re = /^\d+\.?\d*$/
                    if (e.target.value === " " || re.test(e.target.value)) {
                        setFrom(e.target.value)
                    }
                }}
                onBlur={() => {
                    const pricenum = Number.parseFloat(from)
                    if (pricenum) {
                        onFrom?.(pricenum)
                    }
                }}
                min={0}
                placeholder="min"
            />
            <span> $ to </span>
            <input
                className="field-text price-field"
                type="number"
                value={to}
                onChange={e => {
                    const re = /^\d+\.?\d*$/
                    if (e.target.value === " " || re.test(e.target.value)) {
                        setTo(e.target.value)
                    }
                }}
                onBlur={() => {
                    const pricenum = Number.parseFloat(to)
                    if (pricenum) {
                        onTo?.(pricenum)
                    }
                }}
                min={0}
                placeholder="max"
            />
            <span> $</span>
        </>
    )
}

export default PriceFilter
