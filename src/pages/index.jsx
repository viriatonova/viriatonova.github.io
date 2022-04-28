import NavBar from "../components/NavBar"
import Hello from "../components/Hello"
import Box from "../components/Box"
import Prefix from "../helpers/Prefix"
import MobileNav from "../components/MobileNav"

const Home = () => {
    return (
        <main className="home-wraper">
            <MobileNav />
            <NavBar />
            <div className="home-principal">
                <section>
                    <Hello />
                    <div className="home-component-wraper">
                        <img
                            src={`${Prefix}/me.jpg`}
                            alt="Picture of the author"
                            className="home-image"
                        />
                        <div className="home-text-wraper">
                            <p className="home-text-area">
                                I'm a curious, creative and analityc person,
                                always researching for new information and experiences.
                                I like to study about everything that opens my mind.
                            </p>
                            <p className="home-text-area mt-6">
                                I started my carieer as project engineer in the
                                civil construction but always stayed in touch with
                                tecnology. In 2020 finally migrated to Web Development,
                                where now I think it makes me feel like "one with the force", as
                                a geek that I ever was. :)
                            </p>
                            <p className="home-text-area mt-6">
                                May the force be with you, let's code!
                            </p>
                        </div>
                    </div>
                </section>
                <aside>
                    <div className="home-box">
                        <Box />
                    </div>
                </aside>
            </div>
        </main>
  )
}

export default Home
