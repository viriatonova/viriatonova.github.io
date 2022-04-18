import { useRouter } from "next/router";
import Link from "next/link";

const NavBar = () => {
    const router = useRouter();

    return (
        <nav className="vt-nav">
            <div>
                <h2>Frontend Web Developer</h2>
            </div>
            <ul className="nav-list">
                <li className={router.pathname == "/" ? "nav-link-active" : "nav-link-inactive link-underline link-underline-black"}>
                    <Link className="nav-link-text" href="/">Home</Link>
                </li>
                <li className={router.pathname == "/portifolio" ? "nav-link-active" : "nav-link-inactive link-underline link-underline-black"}>
                    <Link className="nav-link-text" href="/portifolio">Portifolio</Link>
                </li>
                <li className={router.pathname == "/smallapps" ? "nav-link-active" : "nav-link-inactive link-underline link-underline-black"}>
                    <Link className="nav-link-text" href="/smallapps">Smallapps</Link>
                </li>
            </ul>
            <ul className="nav-social">
                <li>Instagram</li>
                <li>Github</li>
            </ul>
        </nav>
    )
};
export default NavBar
