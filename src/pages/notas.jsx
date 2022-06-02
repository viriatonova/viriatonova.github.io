import NavBar from '../components/NavBar';
import React, { useState, useEffect } from 'react'
import MobileNav from "../components/MobileNav"

const calcular = (peso, valor) => {
    const pesoMedia = ((peso/2) * 100) / 48; 
    const pesoFamilia = ((peso/2) * 100) / 84; 
    const valorMedia = ((valor/2)*100)/(pesoMedia*100) || 0;
    const valorFamilia = ((valor/2)*100)/(pesoFamilia*100) || 0;

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
    const [inputPeso, setInputPeso] = useState(0);
    const [inputValor, setInputValor] = useState(0);

    const handleClick = () => {
        setPeso(document.querySelector('.input-quantidade').value);
        setValor(document.querySelector('.input-valor').value);
    }

    const handleClear = (e) => {
        setInputPeso("");
        setInputValor("")
    };

    useEffect(() => {
        const result = calcular(peso, valor);
        setPesoFamilia(result.familia);
        setValorFamilia(result.valorFamilia);
        setPesoMedia(result.media);
        setValorMedia(result.valorMedia);
    })

    return (
        <main className="notas-wraper">
            <MobileNav />
            <NavBar />
            <section className="notas">
                <article className="notas-article-form">
                    <h3>Calculo para receita de pizzas</h3>
                    <div
                        className="notas-form"
                    >
                        <div className="notas-input-wraper">
                            <label to="peso">Peso do Produto</label>
                            <input
                                className="input-quantidade notas-input" t
                                ype="text"
                                name="peso"
                                placeholder="ex.: 900 (Kg)"
                                onChange={ (e) => setInputPeso(e.target.value)}
                                value={inputPeso}
                            />
                        </div>
                        <div className="notas-input-wraper mt-12">
                            <label to="valor">Valor do Produto</label>
                            <input
                                className="input-valor notas-input"
                                type="text"
                                name="valor"
                                placeholder="ex.: 6000 (R$)"
                                onChange={ (e) => setInputValor(e.target.value)}
                                value={inputValor}
                            />
                        </div>
                        <div className="notas-button">
                            <button
                                onClick={handleClick}
                                className="bt-submit contact"
                            >
                                Calcular
                            </button>
                            <button
                                onClick={handleClear}
                                className="bt-clear contact"
                                >
                                Limpar
                            </button>
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
        </main>
    )
}

export default Notas
