import React from "react"
import "./header.sass"

interface HeaderProps {
    username?: string;
    onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ username, onLogout }) => (
    <header className="header">
        <a href="/" className="header-logo strong">
            <span className="reset-text">Product</span>
            <span className="accent"> Store</span>
        </a>
        <div className="header-user">
            {username
                ? <>
                    <span>Hello,</span>
                    {/* TODO: Add modal window for logging out */}
                    <button onClick={onLogout} className="text-button accent">{username}</button>
                </>
                : <button className="text-button accent">Log In</button>
            }
        </div>
    </header>
)

export default Header