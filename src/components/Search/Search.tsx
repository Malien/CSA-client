import React from "react"
import "./search.sass"
import LookingGlass from "../icons/LookingGlass"

interface SearchProps {
    placeholder?: string;
}

const Search: React.FC<SearchProps> = ({ placeholder }) => (
    <div className="search-container">
        <LookingGlass className="search-button" strokeClassName="search-icon-stroke" />
        <input className="search-field" type="text" placeholder={placeholder} />
    </div>
)

export default Search