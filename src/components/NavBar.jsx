import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Instagram from "../dist/img/instagram.png"
import Github from "../dist/img/github.png"
import CustomLoader from "../helpers/CustomLoader";

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
                        <Image
                            loader={CustomLoader}
                            src={Github}
                            alt="Picture of the author"
                            width={40}
                            height={40}
                            className="box-image"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/viriato_nova/" target="_blank">
                        <Image
                            loader={CustomLoader}
                            src={Instagram}
                            alt="Picture of the author"
                            width={30}
                            height={30}
                            className="box-image"
                        />
                    </a>
                </li>
            </ul>
        </nav>
    )
};
export default NavBar
