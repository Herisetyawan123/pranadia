import Image from 'next/legacy/image'
import Link from 'next/link'
import Foto from "@/assets/profile/foto.png";

function Header() {
  return (
    <div className="mt-6 mx-auto flex justify-center items-center flex-col">
        <Image src={Foto} className='w-28 h-28 object-cover' />
        <h1 className='text-base font-semibold mt-3'>Stefan Janoski</h1>
        <Link href={'/profile/kartu'} className='mt-3 px-4 py-1 text-xs rounded-full bg-[#FFEBEB] text-[#790707]'>Lihat Kartu Pasien</Link>
    </div>
  )
}

export default Header