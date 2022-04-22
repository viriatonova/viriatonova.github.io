import NavBar from '../components/NavBar';
import Projetos from '../components/projetos';
import MobileNav from "../components/MobileNav"

const Portifolio = () => {
    return (
        <main className="portifolio-wraper">
            <MobileNav />
            <NavBar />
            <section>
                <Projetos />
            </section>
        </main>
    )
}

export default Portifolio
