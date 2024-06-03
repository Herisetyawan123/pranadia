"use client";
import AppBarRegister from '@/components/appbar/register'
import ButtonPrimary from '@/components/button/btn-primary'
import InputGroup from '@/components/input/input-group'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

function DataUmum() {
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/register/alamat')
  }
  return (
    <main>
      <AppBarRegister menu={'Profile'} section="Data Umum" step={1} length={5} />
      <form className="mt-2 p-4 flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className='flex flex-col w-full gap-2'>
            <label htmlFor="">Title Pasien</label>
            <select name="title" id="title" className='outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 '>
                <option value="Nn">Nn</option>
                <option value="Tn">Tn</option>
            </select>
        </div>
        <InputGroup name='name' type='text' label='Nama Lengkap (Sesuai Ktp)' placeholder='Gia L ayura'/>
        <p className='text-[#7D7D7D] text-xs font-normal'>*akan ditampilkan pada hasil pemeriksaan</p>
        <div className='flex flex-col w-full gap-2'>
            <label htmlFor="status">Status</label>
            <select name="status" id="status" className='outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 '>
                <option value="Belum Kawin">Belum Kawin</option>
                <option value="Sudah Kawin">Sudah Kawin</option>
            </select>
        </div>
        <InputGroup name='born_place' type='text' label='Tempat Lahir' placeholder='Sumedang'/>
        <div className='flex flex-col w-full gap-2'>
            <label htmlFor="gender">Jenis Kelamin</label>
            <select name="gender" id="gender" className='outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 '>
                <option value="Perempuan">Perempuan</option>
                <option value="Laki Laki">Laki Laki</option>
            </select>
        </div>
        <InputGroup name='born_date' type='date' label='Tanggal Lahir' placeholder='23 April 2023'/>
        <ButtonPrimary label='Selanjutnya' />
      </form>
    </main>
  )
}

export default DataUmum