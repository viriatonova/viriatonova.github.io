import Image from 'next/image'
import facebook from "../dist/svg/facebook.svg"
import instagram from "../dist/svg/instagram.png"
import github from "../dist/svg/github.png"

const Social = () => {
    return (
        <div className="py-2 flex justtify-start items-center">
            <span className="font-ibm-mono text-md">Follow me:</span>
            <ul className="flex items-center ml-4">
                <li>
                    <a href="">
                        <Image
                            src={github}
                            width={30}
                            height={30}
                        />
                    </a>
                </li>
                <li className="ml-4">
                    <a href="">
                        <Image
                            src={instagram}
                            width={30}
                            height={30}
                        />
                    </a>
                </li>
                <li className="ml-4">
                    <a href="">
                        <Image
                            src={facebook}
                            width={30}
                            height={30}
                        />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Social
