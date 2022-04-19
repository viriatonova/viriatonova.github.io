import NavBar from '../components/NavBar';
import Vtapps from '../components/vtapps';

const Smallapps = () => {
    return (
        <main className="smallapps-wraper">
            <section className="apps">
                <Vtapps />
            </section>
            <NavBar />
        </main>
    )
}

export default Smallapps
