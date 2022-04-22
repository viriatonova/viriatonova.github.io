import NavBar from '../components/NavBar';
import Vtapps from '../components/vtapps';
import MobileNav from "../components/MobileNav"

const Smallapps = () => {
    return (
        <main className="smallapps-wraper">
            <MobileNav />
            <NavBar />
            <section className="apps">
                <Vtapps />
            </section>
        </main>
    )
}

export default Smallapps
