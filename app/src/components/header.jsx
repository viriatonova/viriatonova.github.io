import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';

const NavBar = () => {
    const { asPath } = useRouter();
    const [name, setName] = useState('');

    useEffect(() =>{
        const navLink = document.querySelector('.nav-link');
        navLink.addEventListener('click', () => {
            setName('border-pink-400')
        });
    },[name]);

    return (
        <nav className="vt-nav">
            <div>
                <h2>Frontend Web Developer</h2>
            </div>
            <ul className="nav-list">
                <li><a className={`nav-link ${name}`} href="/">Home</a></li>
                <li><a className={`nav-link ${name}`} href="/portifolio">Portifolio</a></li>
                <li><a className={`nav-link ${name}`} href="/smallapps">Smallapps</a></li>
            </ul>
            <ul className="nav-social">
                <li>Instagram</li>
                <li>Github</li>
            </ul>
        </nav>
    )
};
export default NavBar
