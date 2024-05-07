import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/legacy/image"

type Props = {
  image: StaticImport | string,
  children: string | JSX.Element | JSX.Element[],
}
function CardDokter({ image, children } : Props) {
  return (
    <div className='bg-white p-4 rounded-lg flex flex-col justify-start items-center'  style={{
      boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)"
  }}>
      <Image src={image} alt={'Dokter'} width={75} height={75} />
      { children }
    </div>
  )
}

export default CardDokter