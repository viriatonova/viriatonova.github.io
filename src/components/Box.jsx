import Prefix from "../helpers/Prefix"

const Box = () => {
    return (
        <div className="box-wraper">
            <div className="box">
                <h3>JavaScript</h3>
                <img
                src={`${Prefix}/js.png`}
                alt="Picture of the author"
                className="box-image"
                />
            </div>
            <div className="box">
                <h3>ReactJS</h3>
                <img
                    src={`${Prefix}/react.png`}
                    alt="Picture of the author"
                    className="w-24 h-auto App-logo"
                />
            </div>
            <div className="box">
                <h3>NextJS</h3>
                <img
                    src={`${Prefix}/next.png`}
                    alt="Picture of the author"
                    className="box-image bg-white"
                />
            </div>
            <div className="box">
                <h3>Node JS</h3>
                <img
                    src={`${Prefix}/node.png`}
                    alt="Picture of the author"
                    className="box-image bg-white"
                />
            </div>
            <div className="box">
                <h3>TailwindCss</h3>
                <img
                    src={`${Prefix}/tailwind.png`}
                    alt="Picture of the author"
                    className="box-image"
                />
            </div>
        </div>
  )
}

export default Box
