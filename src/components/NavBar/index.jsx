import React from "react";

const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav-logo">
                    <a className="nav-link" href="#"> Marca</a>
                </div>
                <ul className="nav-lista">
                    <li>
                        <a className="nav-link" href="#">Categoria 1</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#">Categoria 2</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#">Carrito</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default NavBar;