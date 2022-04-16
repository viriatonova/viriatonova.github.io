export default function Navbar () {
    return (
        <nav className="vt-nav">
            <secttion className="w-1/2 flex">
                <h1 className="title-nav">Viriato Nova</h1>
            </secttion>
            <secttion className="w-1/2 flex justify-end">
                <ul className="flex justify-center items-center space-x-6">
                    <li><a className="nav-link"><span>Portifólio</span></a></li>
                    <li><a className="nav-link"><span>Small-Apps</span></a></li>
                </ul>
            </secttion>
        </nav>
    )
}
