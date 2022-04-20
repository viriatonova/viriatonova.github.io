import Image from "next/image"
import Link from "next/link";
import Notas from "../dist/img/notas.jpg"
import Password from "../dist/img/password.jpeg"


const Vtapps = () => {
    return (
        <div className="vtapps-wraper">
            <Link href="/notas">
                <div className="vtapps">
                    <Image
                    src={Notas}
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
                    src={Password}
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
