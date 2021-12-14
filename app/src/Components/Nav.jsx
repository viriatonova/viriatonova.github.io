import React from "react";

const Nav = () => {
    return(
        <nav className="w-full h-full flex justify-end">
            <ul className="w-full h-full flex justify-center items-center space-x-12">
                <li><a href="/">Home</a></li>
                <li><a href="/">Projetos</a></li>
                <li><a href="/">Sobre</a></li>
            </ul>
        </nav>
    );
};
export default Nav;
