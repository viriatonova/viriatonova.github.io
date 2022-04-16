import Image from 'next/image'
import capa from '../dist/img/capa.jpg'

const ImageCapa = () => {
    return (
        <div className="w-full h-1/3 relative">
            <Image
                src={capa}
                width={1080}
                height={720}
                className="img-capa"
            />
            <span className="img-back">nada</span>

        </div>
    )

}

export default ImageCapa
