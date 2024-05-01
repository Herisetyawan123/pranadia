import Link from 'next/link';
import React from 'react'

function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
        {children}
        <div className="h-16"></div>
        <div className="bg-white py-3 px-5 border-t fixed bottom-0 flex justify-between items-start" style={{
            width: 'inherit',
        }}>
              <Link href={'/home'} className="flex justify-center items-center flex-col">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <p className='text-[10px] mt-2 font-[400]'>Home</p>
              </Link>

              <Link href={'/medrek'} className="flex justify-center items-center flex-col">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <p className='text-[10px] mt-2 font-[400]'>Medrek</p>
              </Link>

              <Link href={'/promise'} className="flex justify-center items-center flex-col">
                <div className="w-12 h-12 bg-red-700 rounded-full"></div>
                {/* <p className='text-[10px] mt-2 font-[400]'>Home</p> */}
              </Link>

              <Link href={'/history'} className="flex justify-center items-center flex-col">
                <div className="w-8 h-8 bg-gray-300 rounded-full">

                </div>
                <p className='text-[10px] mt-2 font-[400]'>History</p>
              </Link>

              <Link href={'/profile'} className="flex justify-center items-center flex-col">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <p className='text-[10px] mt-2 font-[400]'>Profile</p>
              </Link>

            </div>
    </>
  )
}

export default Layout