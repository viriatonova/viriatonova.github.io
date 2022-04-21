import Image from "next/image"
import Stricto from "../dist/img/stricto.png"
import Megaterio from "../dist/img/megaterio.png"
import Personal from "../dist/img/personalpage.png"
import CustomLoader from "../helpers/CustomLoader"

const Projetos = () => {
    return (
        <div className="projetos-wraper">
            <div className="projetos">
                <Image
                loader={CustomLoader}
                src={Personal}
                alt="Picture of the author"
                width={480}
                height={270}
                className=""
                />
                <h3>Personal Page</h3>
                <a href="https://viriatonova.github.io/" target="_blank">www.viriatonova.github.io</a>
                <p>
                    This personal page was maded with NextJS and Tailwindcss.
                    Deployed on Github pages.
                </p>
            </div>
            <div className="projetos">
                <Image
                loader={CustomLoader}
                src={Stricto}
                alt="Picture of the author"
                width={480}
                height={270}
                className=""
                />
                <h3>Stricto Digital</h3>
                <a href="https://www.strictodigital.com.br/" target="_blank" >www.strictodigital.com.br</a>
                <p>
                    Stricto Digital it's a journalistic plataform create by me and
                    Marcos Improta. It's a Wordpress project coded from scratch,
                    a custom theme maded to Strico.
                </p>
            </div>
            <div className="projetos">
                <Image
                loader={CustomLoader}
                src={Megaterio}
                alt="Picture of the author"
                width={480}
                height={270}
                className=""
                />
                <h3>Megaterio</h3>
                <a href="https://www.megaterio.com.br/" target="_blank">www.megaterio.com.br</a>
                <p>
                    Megaterio is a webpage just used vanilla html, css and
                    JavaScript.
                </p>
            </div>
        </div>
    )
}

export default Projetos
