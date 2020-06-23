import React, { useContext } from "react"
import classnames from "classnames"
import NeumorphicBox from "../NeumorhicBox"
import Search from "../Search"
import Plus from "../icons/Plus"
import PriceFilter from "../PriceFilter"
import ModalContext from "../ModalManager/ModalContext"
import "./filter-tab.sass"
import AddProductModal from "../AddProductModal"
import { MessageContext } from "../MessageManager"

interface FilterTabProps {
    className?: string
}

const FilterTab: React.FC<FilterTabProps> = ({ className }) => {
    const dispatcher = useContext(ModalContext)
    const stdout = useContext(MessageContext)

    return (
        <div className={classnames(className, "filter-container")}>
            <NeumorphicBox inner top="white" className="filter-search">
                <Search placeholder="Search" />
            </NeumorphicBox>
            <NeumorphicBox top="white" className="filter-price">
                <PriceFilter />
            </NeumorphicBox>
            <NeumorphicBox
                onClick={() => {
                    dispatcher((dismiss) => (
                        <AddProductModal
                            onAdd={(...args) => {
                                stdout(args.join(", "))
                            }}
                        />
                    ))
                }}
                tag="button"
                top="white"
                className="filter-add"
            >
                <Plus className="filter-plus" strokeClassName="filter-plus-stroke" />
            </NeumorphicBox>
        </div>
    )
}

export default FilterTab
