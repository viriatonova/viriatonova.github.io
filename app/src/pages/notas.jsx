import NavBar from '../components/NavBar';


const Notas = () => {
    return (
        <main className="notas-wraper">
            <section className="notas">
                <h3>Entre com os valores</h3>
                <form className="w-1/2 h-auto flex flex-col justify-center items-center">
                    <input class="input-quantidade text-black" type="text" name="nota"
                    placeholder="Entre com o valor em Quilogramas"
                    />
                    <input class="input-quantidade text-black mt-6" type="text" name="nota"
                    placeholder="Entre com o valor em Quilogramas"
                    />
                </form>

            </section>
            <NavBar />
        </main>
    )
}

export default Notas
