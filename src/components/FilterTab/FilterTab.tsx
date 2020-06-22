import React from "react"
import NeumorphicBox from "../NeumorhicBox"
import Search from "../Search"
import Plus from "../icons/Plus"
import PriceFilter from "../PriceFilter"
import "./filter-tab.sass"

interface FilterTabProps {

}

const FilterTab: React.FC<FilterTabProps> = ({ }) => (
    <div className="filter-container">
        <NeumorphicBox inner top="white" base="light" className="filter-search">
            <Search placeholder="Search" />
        </NeumorphicBox>
        <NeumorphicBox top="white" base="light" className="filter-price">
            <PriceFilter />
        </NeumorphicBox>
        <NeumorphicBox tag="button" top="white" base="light" className="filter-add">
            <Plus className="filter-plus" strokeClassName="filter-plus-stroke" />
        </NeumorphicBox>
    </div>
)

export default FilterTab