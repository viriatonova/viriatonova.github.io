import Link from "next/link";
import Prefix from "../helpers/Prefix"

const Vtapps = () => {
    return (
        <div className="vtapps-wraper">
            <Link href="/notas">
                <div className="vtapps">
                    <img
                    src={`${Prefix}/notas.jpg`}
                    alt="Picture of the author"
                    className=""
                    />
                    <h3>Pizzas Calculator</h3>
                    <p>
                        A form that automatize calculation of pizzas
                        based on supplies amount
                    </p>
                </div>
            </Link>
            <Link href="/">
                <div className="vtapps">
                    <img
                    src={`${Prefix}/password.jpeg`}
                    alt="Picture of the author"
                    className=""
                    />
                    <h3>Password Generator</h3>
                    <p>
                        Simple form for generate passwords
                        on one click
                    </p>
                </div>
            </Link>
        </div>

    )
}

export default Vtapps
