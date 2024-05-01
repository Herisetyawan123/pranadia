import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/legacy/image"

type Props = {
  image: StaticImport,
  children: string | JSX.Element | JSX.Element[],
}
function CardDokter({ image, children } : Props) {
  return (
    <div className='bg-white p-4 shadow-xl rounded-lg flex flex-col justify-start items-center'>
      <Image src={image} />
      { children }
    </div>
  )
}

export default CardDokter