import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/header'

export default function Home() {
    return (
        <main>
            <div className="main-wraper">
                <Navbar />
                <div className="section-wraper">
                    <aside className="w-2/5 section-display">
                        <img></img>
                        <h1 className="title-h1">Hello World</h1>
                    </aside>
                    <section className="w-3/5 border-l border-gray-900 section-display">
                        <h1 className="title-h1">Hello World</h1>
                    </section>
                </div>
            </div>
        </main>
  )
}
