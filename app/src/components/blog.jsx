import ImageCapa from '../components/imagecapa';
import Post from '../components/post';

const Blog = () => {
    return (
        <section className="blog-wraper">
            <aside className="w-1/4 ml-4 section-display relative">
                <ImageCapa />
                <p className="description">
                    Seja bem vindo! Meu nome é
                    <span className="text-nome">Viriato Nova</span>:
                    Eengenheiro, Desenvolvedor Web, Escritor e entusiasta
                    da Cibercultura.
                </p>
                <p className="normal-text">
                    Trabalho como technologia desde 2020. Atuei como Desenvolvedor de Teste,
                    Analista de Qualidade (QA) e Desenvolvedor Web Front-End.
                </p>
                <p className="normal-text">
                    Este blog é meu portifólio pessoal, além de ser um espaço
                    para divagações, ensaios e escritos sobre tecnologia e filosofia.
                </p>
                <p className="normal-text">
                    Na área de desenvolvimento web, atuo principalmente nas
                    seguinte stack de tecnologias:
                </p>
                <p className="h-auto py-2 font-ibm-mono text-sm">
                    JavaScript | NodeJS | ReactJS | NextJS
                </p>
            </aside>
            <section className="w-3/4 section-display ml-6 px-4">
                <Post />
            </section>
        </section>
    )
}
export default Blog
