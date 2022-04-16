import Image from 'next/image'
import facebook from "../dist/svg/facebook.svg"
import instagram from "../dist/svg/instagram.png"
import github from "../dist/svg/github.png"

const Social = () => {
    return (
        <div className="py-4 flex justtify-start items-center">
            <span className="font-ibm-mono text-lg">Follow me:</span>
            <ul className="flex items-center ml-4">
                <li>
                    <a href="">
                        <Image
                            src={github}
                            width={35}
                            height={35}
                        />
                    </a>
                </li>
                <li className="ml-4">
                    <a href="">
                        <Image
                            src={instagram}
                            width={35}
                            height={35}
                        />
                    </a>
                </li>
                <li className="ml-4">
                    <a href="">
                        <Image
                            src={facebook}
                            width={35}
                            height={35}
                        />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Social
