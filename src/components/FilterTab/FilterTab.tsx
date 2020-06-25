import React, { useContext, useState } from "react"
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
    onName?: (name?: string) => void
    onFrom?: (from?: number) => void
    onTo?: (to?: number) => void
}

const FilterTab: React.FC<FilterTabProps> = ({ className, onProduct, onName, onTo, onFrom }) => {
    const modal = useContext(ModalContext)
    const [name, setName] = useState("")

    return (
        <div className={classnames(className, "filter-container")}>
            <NeumorphicBox inner top="white" className="filter-search">
                <Search
                    placeholder="Search"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    onSubmit={event => {
                        event.preventDefault()
                        onName?.(name || undefined)
                    }}
                />
            </NeumorphicBox>
            <NeumorphicBox top="white" className="filter-price">
                <PriceFilter onTo={onTo} onFrom={onFrom} />
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
