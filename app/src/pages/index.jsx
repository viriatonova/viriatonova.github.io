import NavBar from "../components/NavBar"
import Hello from "../components/Hello"
import ImageHome from "../components/ImageHome"
import Box from "../components/Box"

const Home = () => {
    return (
        <main className="home-wraper">
            <div className="home-principal">
                <section>
                     <Hello />
                </section>
                <aside>
                    <div className="home-box">
                        <Box />
                    </div>
                    <ImageHome />
                </aside>
            </div>
            <NavBar />
        </main>
  )
}

export default Home
