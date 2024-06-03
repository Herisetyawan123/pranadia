import Emphatize from '@/assets/logo/poli/emphatize'
import AppBarBack from '@/components/appbar/appbar'
import TabBar from '@/components/tab-bar/tab-bar'
import TabItem from '@/components/tab-bar/tab-item'
import Link from 'next/link'
import React from 'react'

function History() {
  return (
    <main>
      <AppBarBack menu='History' />
      <div className='mx-5'>
        <TabBar items={3}>
          <TabItem title="Menunggu">
            <div className="mt-8 flex flex-col gap-3">
              <Link href={'/history/2'} className='font-normal text-xs bg-white px-5 py-3 rounded-md border flex gap-2 justify-between' style={{
                boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)"
              }}>
                <div className='w-[75%] flex gap-2 items-center'>
                  <div className="bg-[#FFF1F1] w-10 h-10 rounded-full overflow-hidden flex justify-center items-center">
                    <Emphatize />
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-xs'>22 April 2023</p>
                    <h4 className='text-xs font-bold'>Poliklinik Penyakit Dalam adas</h4>
                  </div>
                </div>
                <div>
                  <span className='bg-red-100 px-3 py-0.5 rounded-md min-h-fit block'>selesai</span>
                </div>
              </Link>
            </div>
          </TabItem>
          <TabItem title="Selesai">
            <div className="mt-8 flex flex-col gap-3">
              <Link href={'/history/2'} className='font-normal text-xs bg-white px-5 py-3 rounded-md border flex gap-2 justify-between' style={{
                boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)"
              }}>
                <div className='w-[75%] flex gap-2 items-center'>
                  <div className="bg-[#FFF1F1] w-10 h-10 rounded-full overflow-hidden flex justify-center items-center">
                    <Emphatize />
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-xs'>22 April 2023</p>
                    <h4 className='text-xs font-bold'>Poliklinik Penyakit Dalam adas</h4>
                  </div>
                </div>
                <div>
                  <span className='bg-red-100 px-3 py-0.5 rounded-md min-h-fit block'>selesai</span>
                </div>
              </Link>
              <Link href={'/history/2'} className='font-normal text-xs bg-white px-5 py-3 rounded-md border flex gap-2 justify-between' style={{
                boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)"
              }}>
                <div className='w-[75%] flex gap-2 items-center'>
                  <div className="bg-[#FFF1F1] w-10 h-10 rounded-full overflow-hidden flex justify-center items-center">
                    <Emphatize />
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-xs'>22 April 2023</p>
                    <h4 className='text-xs font-bold'>Poliklinik Penyakit Dalam adas</h4>
                  </div>
                </div>
                <div>
                  <span className='bg-red-100 text-red-700 px-3 py-0.5 rounded-md min-h-fit block'>selesai</span>
                </div>
              </Link>
            </div>
          </TabItem>
          <TabItem title="Batal">
            <div className="mt-8 flex flex-col gap-3">
              <Link href={'/history/2'} className='font-normal text-xs bg-white px-5 py-3 rounded-md border flex gap-2 justify-between' style={{
                boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)"
              }}>
                <div className='w-[75%] flex gap-2 items-center'>
                  <div className="bg-[#FFF1F1] w-10 h-10 rounded-full overflow-hidden flex justify-center items-center">
                    <Emphatize />
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-xs'>22 April 2023</p>
                    <h4 className='text-xs font-bold'>Poliklinik Penyakit Dalam adas</h4>
                  </div>
                </div>
                <div>
                  <span className='bg-yellow-100 text-yellow-600 px-3 py-0.5 rounded-md min-h-fit block'>selesai</span>
                </div>
              </Link>

              <Link href={'/history/2'} className='font-normal text-xs bg-white px-5 py-3 rounded-md border flex gap-2 justify-between' style={{
                boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)"
              }}>
                <div className='w-[75%] flex gap-2 items-center'>
                  <div className="bg-[#FFF1F1] w-10 h-10 rounded-full overflow-hidden flex justify-center items-center">
                    <Emphatize />
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-xs'>22 April 2023</p>
                    <h4 className='text-xs font-bold'>Poliklinik Penyakit Dalam adas</h4>
                  </div>
                </div>
                <div>
                  <span className='bg-yellow-100 text-yellow-600 px-3 py-0.5 rounded-md min-h-fit block'>selesai</span>
                </div>
              </Link>

              <Link href={'/history/2'} className='font-normal text-xs bg-white px-5 py-3 rounded-md border flex gap-2 justify-between' style={{
                boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)"
              }}>
                <div className='w-[75%] flex gap-2 items-center'>
                  <div className="bg-[#FFF1F1] w-10 h-10 rounded-full overflow-hidden flex justify-center items-center">
                    <Emphatize />
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-xs'>22 April 2023</p>
                    <h4 className='text-xs font-bold'>Poliklinik Penyakit Dalam adas</h4>
                  </div>
                </div>
                <div>
                  <span className='bg-yellow-100 text-yellow-600 px-3 py-0.5 rounded-md min-h-fit block'>selesai</span>
                </div>
              </Link>
            </div>
          </TabItem>
        </TabBar>
      </div>
    </main>
  )
}

export default History