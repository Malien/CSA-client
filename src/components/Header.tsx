import React from "react"

interface HeaderProps {
    username?: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => (
    <header className="header">
        <a href="/" className="header-logo strong">
            <span className="reset-text">Product</span>
            <span className="accent"> Store</span>
        </a>
        <div className="header-user">
            {username
                ? <>
                    <span>Hello,</span>
                    <button className="text-button accent">{username}</button>
                </>
                : <button className="text-button accent">Log In</button>
            }
        </div>
    </header>
)

export default Header