import Image from "next/image"
import Js from "../../public/js.png"
import Next from "../../public/next.png"
import React from "../../public/react.png"
import Node from "../../public/node.png"
import Tailwind from "../../public/tailwind.png"
import CustomLoader from "../helpers/CustomLoader"

const Box = () => {
    return (
        <div className="box-wraper">
            <div className="box">
                <h3>JavaScript</h3>
                <Image
                loader={CustomLoader}
                src={Js}
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
                    src={React}
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
                    src={Next}
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
                    src={Node}
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
                    src={Tailwind}
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
