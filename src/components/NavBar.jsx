import { useRouter } from "next/router";
import Link from "next/link";
import Prefix from "../helpers/Prefix"

const NavBar = () => {
    const router = useRouter();

    return (
        <nav className="vt-nav">
            <div>
                <a href="mailto:viriatosampaio@gmail.com" className="contact">
                    Contact me
                </a>
            </div>
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
            <ul className="nav-social">
                <li>
                    <a href="https://github.com/viriatonova" target="_blank">
                        <img
                            src={`${Prefix}/github.png`}
                            alt="Picture of the author"
                            className="box-image w-10"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/viriato_nova/" target="_blank">
                        <img
                            src={`${Prefix}/instagram.png`}
                            alt="Picture of the author"
                            className="box-image w-8"
                        />
                    </a>
                </li>
            </ul>
        </nav>
    )
};
export default NavBar
