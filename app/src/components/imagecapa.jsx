import Image from 'next/image'
import capa from '../dist/img/capa.png'

const ImageCapa = () => {
    return (
        <div className="w-auto h-auto relative">
            <Image
                src={capa}
                width={540}
                height={301}
                className="img-capa"
            />
            <span className="img-back">nada</span>

        </div>
    )

}

export default ImageCapa
