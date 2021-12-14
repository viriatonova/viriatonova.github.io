import React from "react";
import Header from "../Components/Header";

const Home = () => {
    return(
        <main className="w-full h-full">
            <Header />
            <section className="mt-16">
                <h1 className="blogh2">Hello World!</h1>
                <p className="blogsup">apenas um suptitulo</p>
            </section>
        </main>
    );
}
export default Home