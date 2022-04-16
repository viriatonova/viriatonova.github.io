import Navbar from '../components/header';
import ImageCapa from '../components/imagecapa';
import Social from '../components/social';
import Post from '../components/post';
import Footer from '../components/footer';

export default function Home() {
    return (
        <main>
            <Navbar />
            <div className="section-wraper">
                <aside className="w-2/5 ml-4 mt-4 section-display relative">
                    <ImageCapa />
                    <p className="py-6 font-ibm-sans text-xl">
                        Trabalho como technologia desde 2020, atuando como Desenvolvedor de Teste,
                        Analista de Qualidade (QA) e Desenvolvedor Web Front-End
                    </p>
                    <p className="py-6 font-ibm-mono text-lg">
                        JavaScript | NodeJS | ReactJS | NextJS | Python | Django
                    </p>
                </aside>
                <section className="w-3/5 section-display ml-6 px-4 py-4">
                    <Post />
                </section>
            </div>
            <Footer />
        </main>
  )
}
