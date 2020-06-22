import React from "react"
import "./price-filter.sass"

interface PriceFilterProps {}

const PriceFilter: React.FC<PriceFilterProps> = ({}) => (
    <>
        <span>From </span>
        <input className="field-text price-field" type="number" min={0} placeholder="min" />
        <span> $ to </span>
        <input className="field-text price-field" type="number" min={0} placeholder="max" />
        <span> $</span>
    </>
)

export default PriceFilter
