import React from "react"
import NeumorphicBox from "../NeumorhicBox"
import Search from "../Search"
import "./filter-tab.sass"
import Plus from "../icons/Plus"

interface FilterTabProps {

}

const FilterTab: React.FC<FilterTabProps> = ({ }) => (
    <div className="filter-container">
        <NeumorphicBox inner top="white" base="light" className="filter-search">
            <Search placeholder="Search" />
        </NeumorphicBox>
        <NeumorphicBox top="white" base="light" className="filter-price">
            <span>From </span>
            <span className="accent">34.0</span>
            <span>$ to </span>
            <span className="accent">50.4</span>
            <span>$</span>
        </NeumorphicBox>
        <NeumorphicBox tag="button" top="white" base="light" className="filter-add">
            <Plus className="filter-plus" strokeClassName="filter-plus-stroke" />
        </NeumorphicBox>
    </div>
)

export default FilterTab