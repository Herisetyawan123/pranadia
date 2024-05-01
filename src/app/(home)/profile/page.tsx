import Link from 'next/link'
import { HiOutlineChevronRight } from "react-icons/hi2";
import AppBar from '@/components/appbar/appbar'
import Header from '@/components/sections/profile/header'

function Profile() {

  return (
    <main>
      <AppBar menu='Profile'/>
      <Header />
      <div className='mx-5 px-4 py-2 bg-[#FAFAFA] mt-5 rounded-3xl grid grid-cols-2 divide-x'>
        <div className="flex flex-col text-center">
          <h3 className='text-[#001533] font-semibold text-base'>2</h3>
          <p className='text-[10px] text-[#B7B7B7]'>Anggota Keluarga</p>
        </div>
        <div className="flex flex-col text-center">
          <h3 className='text-[#001533] font-semibold text-base'>6</h3>
          <p className='text-[10px] text-[#B7B7B7]'>Kunjungan</p>
        </div>
      </div>

      <div className='flex flex-col gap-2 mt-5 mx-5'>
        <Link href={'/'} className="flex justify-between py-2 items-center px-2 hover:bg-gray-50 rounded-lg">
          <div className='flex justify-center items-center gap-3'>
            <div className="w-11 h-11 bg-[#FFEBEB] rounded-full"></div>
            <span className='text-sm font-normal'>Anggota Keluarga</span>
          </div>
          <HiOutlineChevronRight color='#B7B7B7' size={24} />
        </Link>

        <Link href={'/'} className="flex justify-between py-2 items-center px-2 hover:bg-gray-50 rounded-lg">
          <div className='flex justify-center items-center gap-3'>
            <div className="w-11 h-11 bg-[#FFEBEB] rounded-full"></div>
            <span className='text-sm font-normal'>Update Profil</span>
          </div>
          <HiOutlineChevronRight color='#B7B7B7' size={24} />
        </Link>

        <Link href={'/'} className="flex justify-between py-2 items-center px-2 hover:bg-gray-50 rounded-lg">
          <div className='flex justify-center items-center gap-3'>
            <div className="w-11 h-11 bg-[#FFEBEB] rounded-full"></div>
            <span className='text-sm font-normal'>History</span>
          </div>
          <HiOutlineChevronRight color='#B7B7B7' size={24} />
        </Link>

        <Link href={'/'} className="flex justify-between py-2 items-center px-2 hover:bg-gray-50 rounded-lg">
          <div className='flex justify-center items-center gap-3'>
            <div className="w-11 h-11 bg-[#FFEBEB] rounded-full"></div>
            <span className='text-sm font-normal'>Help Center</span>
          </div>
          <HiOutlineChevronRight color='#B7B7B7' size={24} />
        </Link>

        <Link href={'/'} className="flex justify-between py-2 items-center px-2 hover:bg-gray-50 rounded-lg">
          <div className='flex justify-center items-center gap-3'>
            <div className="w-11 h-11 bg-[#FFEBEB] rounded-full"></div>
            <span className='text-sm font-normal'>Kebijakan</span>
          </div>
          <HiOutlineChevronRight color='#B7B7B7' size={24} />
        </Link>

        <Link href={'/'} className="flex justify-between py-2 items-center px-2 hover:bg-gray-50 rounded-lg">
          <div className='flex justify-center items-center gap-3'>
            <div className="w-11 h-11 bg-[#FFEBEB] rounded-full"></div>
            <span className='text-sm font-normal'>Tentang Aplikasi</span>
          </div>
          <HiOutlineChevronRight color='#B7B7B7' size={24} />
        </Link>
      </div>

      <div className="h-6"></div>
    </main>
  )
}

export default Profile