import React from "react"
import classnames from "classnames"
import NeumorphicBox from "../NeumorhicBox"
import Search from "../Search"
import Plus from "../icons/Plus"
import PriceFilter from "../PriceFilter"
import "./filter-tab.sass"

interface FilterTabProps {
    className?: string
}

const FilterTab: React.FC<FilterTabProps> = ({ className }) => (
    <div className={classnames(className, "filter-container")}>
        <NeumorphicBox inner top="white" className="filter-search">
            <Search placeholder="Search" />
        </NeumorphicBox>
        <NeumorphicBox top="white" className="filter-price">
            <PriceFilter />
        </NeumorphicBox>
        <NeumorphicBox tag="button" top="white" className="filter-add">
            <Plus className="filter-plus" strokeClassName="filter-plus-stroke" />
        </NeumorphicBox>
    </div>
)

export default FilterTab