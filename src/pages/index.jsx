import NavBar from "../components/NavBar"
import Hello from "../components/Hello"
import Box from "../components/Box"
import Prefix from "../helpers/Prefix"

const Home = () => {
    return (
        <main className="home-wraper">
            <div className="home-principal">
                <section>
                    <Hello />
                    <div className="w-full h-auto flex mt-8 justtify-center items-start">
                        <img
                            src={`${Prefix}/me.jpg`}
                            alt="Picture of the author"
                            className="z-0 rounded-md w-80 h-auto"
                        />
                        <div className="w-auto h-auto px-6">
                            <p className="home-text-area">
                                I'm a curious, creative and analityc person.
                                Always researching for new knowledges, studing about
                                any thing that open my mind
                            </p>
                            <p className="home-text-area mt-6">
                                I started my carieer as project engineer in the
                                civil construction but always stay in touch width
                                tecnology. In 2020 finally migrated to Web Development,
                                where now I thing make me feel like "one with the force", as
                                a geek that I ever was. :)
                            </p>
                            <p className="home-text-area mt-6">
                                May the force be with you, let's code!
                            </p>
                        </div>
                    </div>
                    <span className="h-full"></span>
                        <p className="home-text-area-out">
                            This website was maded with NextJS, and deployed in Github pages.
                        </p>
                </section>
                <aside>
                    <div className="home-box">
                        <Box />
                    </div>
                </aside>
            </div>
            <NavBar />
        </main>
  )
}

export default Home
