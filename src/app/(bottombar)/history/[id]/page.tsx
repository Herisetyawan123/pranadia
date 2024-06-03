import AppBarBack from '@/components/appbar/appbar'
import CardDropdown from '@/components/card/card-dropdown'
import React from 'react'
import Nindya from "@/assets/dokter/nindya.png";
import Image from 'next/legacy/image';

function Page() {
    return (
        <main>
            <AppBarBack menu='Detail History' />
            <div className='mx-5 mt-5'>
                <CardDropdown title="Informasi Pasien">
                    <div className="flex justify-between">
                        <div className={`flex px-1 py-2 gap-2 items-center`}>
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <Image src={Nindya} alt='Nindya' className='w-full h-full' />
                            </div>
                            <div className="flex flex-col">
                                <h4 className='text-xs font-bold'>Tn. Hadi Akbar</h4>
                                <p className='text-xs font-normal text-[#505050]'>Laki-laki 23 Tahun </p>
                            </div>
                        </div>
                        <h6 className='text-[#D41F13] text-xs mt-1'>PRM012821</h6>
                    </div>
                </CardDropdown>


                <div className="rounded-md bg-white py-3 px-6 mt-3" style={{
                    boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)"
                }}>
                    <div className="w-full py-2 flex">
                        <div className='flex basis-[95%] gap-2 items-center'>
                            <div className='w-10 h-10 rounded-full overflow-hidden bg-slate-300'>

                            </div>
                            <div className='space-y-1'>
                                <p className='text-[10px]'>22 April 2023</p>
                                <h2 className='font-bold text-xs'>Poliklinik Penyakit Dalam</h2>
                            </div>
                        </div>
                        <div className="basis-[5%]">
                            <p className="px-2 py-1 bg-red-100 text-red-600 text-[10px] font-medium rounded-full    ">selesai</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 grid-rows-2">
                        <div className="py-3 px-2 border-t">
                            <p className='text-sm text-[#767676]'>Kode Booking</p>
                            <p className='text-sm'>NP0112</p>
                        </div>
                        <div className="py-3 px-2 border-t border-l">
                            <p className='text-sm text-[#767676]'>Tanggal Booking</p>
                            <p className='text-sm'>22 April 2023</p>
                        </div>
                        <div className="py-3 px-2 border-t">
                            <p className='text-sm text-[#767676]'>No. Antrian</p>
                            <p className='text-sm'>PD-001</p>
                        </div>
                        <div className="py-3 px-2 border-t border-l">
                            <p className='text-sm text-[#767676]'>Tanggal Antrian</p>
                            <p className='text-sm'>23 April 2023</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-md bg-white py-3 px-6 mt-3 flex items-center gap-2" style={{
                    boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)"
                }}>
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <Image src={Nindya} alt='Nindya' className='w-full h-full' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-xs'>Dr. Dinar Agustina L</h1>
                        <span className='text-[10px] text-red-600'>Dokter Umum</span>
                    </div>
                </div>

                <CardDropdown title="Status Pembayaran" className='mt-3'>
                    <div className='flex flex-col py-2 w-full border-b border-dashed mt-2'>
                        <div className="flex justify-between items-center w-full">
                            <h4 className='text-xs font-bold'>Metode Pemabayaran</h4>
                            <p className='px-3 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full'>umum</p>
                        </div>
                    </div>
                    <div className='flex flex-col py-2 w-full border-b border-dashed'>
                        <div className="flex justify-between items-center w-full">
                            <h4 className='text-xs'>Konsultasi</h4>
                            <p className='px-3 py-1 text-xs font-medium rounded-full'>Rp. 175.000</p>
                        </div>
                    </div>
                    <div className='flex flex-col py-2 w-full border-b border-dashed'>
                        <div className="flex justify-between items-center w-full">
                            <h4 className='text-xs'>Lab</h4>
                            <p className='px-3 py-1 text-xs font-medium rounded-full'>Rp. 175.000</p>
                        </div>
                    </div>
                    <div className='flex flex-col py-2 w-full border-b border-dashed'>
                        <div className="flex justify-between items-center w-full">
                            <h4 className='text-xs'>Obat</h4>
                            <p className='px-3 py-1 text-xs font-medium rounded-full'>Rp. 175.000</p>
                        </div>
                    </div>
                    <div className='flex flex-col py-2 w-full border-b border-dashed'>
                        <div className="flex justify-between items-center w-full">
                            <h4 className='text-xs font-bold'>Sub Total</h4>
                            <p className='px-3 py-1 text-xs font-bold rounded-full'>Rp. 35.000</p>
                        </div>
                    </div>
                    <div className='flex flex-col py-2 w-full border-b border-solid'>
                        <div className="flex justify-between items-center w-full">
                            <h4 className='text-xs font-bold'>Discount</h4>
                            <p className='px-3 py-1 text-xs font-bold rounded-full'>Rp. 0</p>
                        </div>
                    </div>
                    <div className='flex flex-col py-2 w-full'>
                        <div className="flex justify-between items-center w-full">
                            <h4 className='text-xs font-bold'>Discount</h4>
                            <p className='px-3 py-1 text-xs font-bold rounded-full'>Rp. 350.000</p>
                        </div>
                    </div>
                </CardDropdown>

                <CardDropdown title="Hasil Rekam Medis" className='mt-3'>
                    <div className="py-3">
                        <h1 className='text-sm text-center'>Tidak ada Data</h1>
                    </div>
                </CardDropdown>
            </div>
            <div className='h-16'></div>
        </main>
    )
}

export default Page