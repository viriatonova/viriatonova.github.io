import Image from "next/image"
import Link from "next/link";
import CustomLoader from "../helpers/CustomLoader";
import Prefix from "../helpers/Prefix"

const Vtapps = () => {
    return (
        <div className="vtapps-wraper">
            <Link href="/notas">
                <div className="vtapps">
                    <Image
                    loader={CustomLoader}
                    src={`${Prefix}/notas.png`}
                    alt="Picture of the author"
                    width={220}
                    height={200}
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
                    <Image
                    loader={CustomLoader}
                    src={`${Prefix}/password.png`}
                    alt="Picture of the author"
                    width={220}
                    height={200}
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
