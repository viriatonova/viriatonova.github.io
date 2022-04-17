import { useState } from 'react';
import { useRouter } from "next/router";

export default function Navbar ({ router }) {
    const { asPath } = useRouter()
    const name = asPath.match(/[A-Za-z]/g);

    return (
        <nav className="vt-nav">
            <div className="menu-left">
                <h1 className="title-nav">{name}</h1>
            </div>
            <ul className="nav-ul">
                <li><a href="/" className="nav-link"><span>Home</span></a></li>
                <li><a href="/portifolio" className="nav-link"><span>Portifólio</span></a></li>
                <li><a href="/smallapps" className="nav-link"><span>Small-Apps</span></a></li>
            </ul>
        </nav>
    )
}
