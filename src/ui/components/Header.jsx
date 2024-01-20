import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="header">
            <NavLink to="/home">
                <h1 className="header__title">ATENAHS</h1>
            </NavLink>
        </header>
    );
}

export default Header;
