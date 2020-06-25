import React, { useContext } from "react"
import classnames from "classnames"
import NeumorphicBox from "../NeumorphicBox"
import Search from "../Search"
import Plus from "../icons/Plus"
import PriceFilter from "../PriceFilter"
import ModalContext from "../ModalManager/ModalContext"
import "./filter-tab.sass"
import AddProductModal from "../AddProductModal"
import Neumorphic from "../Neumorphic"

interface FilterTabProps {
    className?: string
    onProduct?: (
        name: string,
        description: string | undefined,
        count: number,
        price: number
    ) => void
}

const FilterTab: React.FC<FilterTabProps> = ({ className, onProduct }) => {
    const modal = useContext(ModalContext)

    return (
        <div className={classnames(className, "filter-container")}>
            <NeumorphicBox inner top="white" className="filter-search">
                <Search placeholder="Search" />
            </NeumorphicBox>
            <NeumorphicBox top="white" className="filter-price">
                <PriceFilter />
            </NeumorphicBox>
            <Neumorphic top="white">
                <button
                    onClick={() =>
                        modal(dismiss => (
                            <AddProductModal
                                onAdd={(...args) => {
                                    onProduct?.(...args)
                                    dismiss()
                                }}
                            />
                        ))
                    }
                    className="filter-add"
                >
                    <Plus className="filter-plus" strokeClassName="filter-plus-stroke" />
                </button>
            </Neumorphic>
        </div>
    )
}

export default FilterTab
