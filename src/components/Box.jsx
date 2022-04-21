import Image from "next/image"
import CustomLoader from "../helpers/CustomLoader"
import Prefix from "../helpers/Prefix"

const Box = () => {
    return (
        <div className="box-wraper">
            <div className="box">
                <h3>JavaScript</h3>
                <Image
                loader={CustomLoader}
                src={`${Prefix}/js.png`}
                alt="Picture of the author"
                width={100}
                height={100}
                className="box-image"
            />
            </div>
            <div className="box">
                <h3>ReactJS</h3>
                <Image
                    loader={CustomLoader}
                    src={`${Prefix}/react.png`}
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    className="box-image App-logo"
                />
            </div>
            <div className="box">
                <h3>NextJS</h3>
                <Image
                    loader={CustomLoader}
                    src={`${Prefix}/next.png`}
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    className="box-image bg-white"
                />
            </div>
            <div className="box">
                <h3>Node JS</h3>
                <Image
                    loader={CustomLoader}
                    src={`${Prefix}/node.png`}
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    className="box-image bg-white"
                />
            </div>
            <div className="box">
                <h3>TailwindCss</h3>
                <Image
                    loader={CustomLoader}
                    src={`${Prefix}/tailwind.png`}
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    className="box-image"
                />
            </div>
        </div>
  )
}

export default Box
