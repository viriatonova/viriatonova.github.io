import React from "react";

const Nav = () => {
    return(
        <nav className="w-full h-full flex justify-end sm:container sm:mx-auto">
            <ul className="w-full h-full flex justify-center items-center space-x-12">
                <li><a href="/">Blog</a></li>
                <li><a href="/">Projetos</a></li>
                <li><a href="/">Sobre</a></li>
            </ul>
        </nav>
    );
};
export default Nav;
