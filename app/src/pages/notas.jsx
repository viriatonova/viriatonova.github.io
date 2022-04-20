import NavBar from '../components/NavBar';
import React, { useState, useEffect } from 'react'

const calcular = (peso, valor) => {
    const pesoMedia = (peso / 2) / 0.48;
    const pesoFamilia = (peso / 2) / 0.84;
    const valorMedia = valor/(2*pesoMedia) || 0;
    const valorFamilia = valor/(2*pesoFamilia) || 0;

    return {
        media: pesoMedia,
        familia: pesoFamilia,
        valorMedia: valorMedia,
        valorFamilia: valorFamilia
    };
}

const Notas = () => {
    const [peso, setPeso] = useState(0);
    const [valor, setValor] = useState(0);
    const [pesoFamilia, setPesoFamilia] = useState(0);
    const [valorFamilia, setValorFamilia] = useState(0);
    const [pesoMedia, setPesoMedia] = useState(0);
    const [valorMedia, setValorMedia] = useState(0);

    const handleClick = () => {
        setPeso(document.querySelector('.input-quantidade').value);
        setValor(document.querySelector('.input-valor').value)
    }

    useEffect(() => {
        const result = calcular(peso, valor);
        setPesoFamilia(result.familia.toFixed(0));
        setValorFamilia(result.valorMedia.toFixed(2));
        setPesoMedia(result.media.toFixed(0));
        setValorMedia(result.valorFamilia.toFixed(2));
    })

    return (
        <main className="notas-wraper">
            <section className="notas">
                <article className="notas-article-form">
                    <h3>Calculo para receita de pizzas</h3>
                    <div
                        className="notas-form"
                    >
                        <div className="notas-input-wraper">
                            <label to="nota">Peso do Produto</label>
                            <input className="input-quantidade notas-input" type="text" name="nota"
                            placeholder="ex.: 900 (Kg)"
                            />
                        </div>
                        <div className="notas-input-wraper mt-12">
                            <label to="nota">Valor do Produto</label>
                            <input className="input-valor notas-input" type="text" name="nota"
                            placeholder="ex.: 6000 (R$)"
                            />
                        </div>
                        <div className="notas-button">
                            <button
                                onClick={handleClick}
                                className="bt-submit contact"
                            >
                                Calcular
                            </button>
                            <button className="bt-clear contact">Limpar</button>
                        </div>
                    </div>
                </article>
                <article className="results-wraper">
                    <h3 >Pizza Família</h3>
                    <div className="results">
                        <span>Quantidade = </span>
                        <span className=" text-valor">{pesoFamilia}</span>
                    </div>
                    <div className="results">
                        <span>Valor =</span>
                        <span className="text-valor">{valorFamilia}</span>
                    </div>
                </article>
                <article className="results-wraper">
                    <h3 >Pizza Média</h3>
                    <div className="results">
                        <span>Quantidade = </span>
                        <span className="text-valor">{pesoMedia}</span>
                    </div>
                    <div className="results">
                        <span>Valor =</span>
                        <span className="text-valor">{valorMedia}</span>
                    </div>
                </article>
            </section>
            <NavBar />
        </main>
    )
}

export default Notas
