import Image from 'next/image'
import CustomLoader from '../helpers/CustomLoader'
import Prefix from "../helpers/Prefix"


const ImageHome = () => {
    return (
        <div className="w-auto h-auto relative">
            <Image
                loader={CustomLoader}
                src={`${Prefix}/me.png`}
                alt="Picture of the author"
                width={315}
                height={420}
                className="z-20 rounded-md"
            />
            <span className="image-back"></span>
            <span className="image-back-2"></span>
        </div>
  )
}

export default ImageHome
