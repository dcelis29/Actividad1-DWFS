import React, { useState } from 'react';
import '../styles/Header.css';
import { MenuAccount } from './MenuAccount';

export const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <nav>
            <div className="nav-principal">
                <ul>
                    <a href="/"><li>Productos</li></a>
                    <a href="/shopping-cart"><li>Carrito de compras</li></a>
                </ul>
            </div>

            <div className="nav-account">
                <p onClick={handleClick}>Mi cuenta</p>
            </div>
            {toggle && <MenuAccount></MenuAccount>}
        </nav>
    )
}
