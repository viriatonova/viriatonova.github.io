import Prefix from "../helpers/Prefix"

const Projetos = () => {
    return (
        <div className="projetos-wraper">
            <div className="projetos">
                <img
                src={`${Prefix}/personalpage.png`}
                alt="Picture of the author"
                className=""
                />
                <h3>Personal Page</h3>
                <a href="https://viriatonova.github.io/" target="_blank">www.viriatonova.github.io</a>
                <p>
                    This page was created with NextJS and Tailwindcss and deployed on Github pages.
                </p>
            </div>
            <div className="projetos">
                <img
                src={`${Prefix}/stricto.png`}
                alt="Picture of the author"
                className=""
                />
                <h3>Stricto Digital</h3>
                <a href="https://www.strictodigital.com.br/" target="_blank" >www.strictodigital.com.br</a>
                <p>
                    Stricto Digital is a journalistic plataform created by Marcos Improta and I.
                    It's a Wordpress project coded from scratch, a custom theme created
                    specially for Stricto News.
                </p>
            </div>
            <div className="projetos">
                <img
                src={`${Prefix}/megaterio.png`}
                alt="Picture of the author"
                className=""
                />
                <h3>Megaterio</h3>
                <a href="https://www.megaterio.com.br/" target="_blank">www.megaterio.com.br</a>
                <p>
                    Megaterio is a webpage created only with vanilla html, css and JavaScript.
                </p>
            </div>
        </div>
    )
}

export default Projetos
