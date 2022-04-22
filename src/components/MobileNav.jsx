import { useRouter } from "next/router";
import Link from "next/link";
import Prefix from "../helpers/Prefix"

const MobileNav = () => {
    const router = useRouter();

    return (
        <nav className="nav-mobile">
            <ul className="nav-list">
                <li className={router.pathname == "/" ? "nav-link-active" : "nav-link-inactive link-underline link-underline-black"}>
                    <Link className="nav-link-text" href="/">Home</Link>
                </li>
                <li className={router.pathname == "/portifolio" ? "nav-link-active" : "nav-link-inactive link-underline link-underline-black"}>
                    <Link className="nav-link-text" href="/portifolio">Portfolio</Link>
                </li>
                <li className={router.pathname == "/smallapps" ? "nav-link-active" : "nav-link-inactive link-underline link-underline-black"}>
                    <Link className="nav-link-text" href="/smallapps">Smallapps</Link>
                </li>
            </ul>
        </nav>
    )
};
export default MobileNav
