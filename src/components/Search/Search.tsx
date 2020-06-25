import React from "react"
import classnames from "classnames"
import "./search.sass"
import LookingGlass from "../icons/LookingGlass"

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onSubmit?: (event: React.FormEvent<HTMLInputElement>) => void
}

const Search: React.FC<SearchProps> = ({ className, onSubmit, ...props }) => (
    <form onSubmit={onSubmit as any} className="search-container">
        <LookingGlass className={classnames("search-button", className)} strokeClassName="search-icon-stroke" />
        <input className="search-field field-text" type="text" {...props} />
    </form>
)

export default Search