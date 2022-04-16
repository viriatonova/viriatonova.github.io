import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/header'

export default function Home() {
    return (
        <main className="home">
            <div>
                <Navbar />
                <div className="section-wraper">
                    <aside className="w-1/3 h-full flex flex-col justify-center px-6 py-2">
                        <h1 className="title-h1">Hello World</h1>
                    </aside>
                    <section className="w-2/3 h-full flex flex-col justify-center px-6 py-2">
                        <h1 className="title-h1">Hello World</h1>
                    </section>
                </div>
            </div>
        </main>
  )
}
