"use client";
import AppBarRegister from '@/components/appbar/register'
import ButtonPrimary from '@/components/button/btn-primary'
import InputGroup from '@/components/input/input-group'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

function DataKtp() {
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/register/kontak-darurat')
  }
  return (
    <main>
      <AppBarRegister menu={'Profile'} section="Foto Ktp" step={3} length={5} />
      <form className="mt-2 p-4 flex flex-col gap-5" onSubmit={handleSubmit}>
        <InputGroup name='name' type='text' label='Foto Ktp' placeholder='Perum Putra Citra Lestari'/>
        <InputGroup name='nomor' type='text' label='Nomor Ktp' placeholder='3129182917317'/>
        <div className='flex flex-col w-full gap-2'>
            <label htmlFor="">Pekerjaan</label>
            <select name="pekerjaan" id="pekerjaan" className='outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 '>
                <option value="Dokter">Dokter</option>
                <option value="Polisi">Polisi</option>
                <option value="Pilot">Pilot</option>
            </select>
        </div>

        <div className='flex flex-col w-full gap-2'>
            <label htmlFor="">Pendidikan Terkahir</label>
            <select name="pendidikan-terkahir" id="pendidikan-terkahir" className='outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 '>
                <option value="S2">S2</option>
                <option value="S1/D4">S1/D4</option>
                <option value="D3">D3</option>
                <option value="D2">D2</option>
                <option value="D1">D1</option>
                <option value="SMA/SMK">SMA/SMK</option>
            </select>
        </div>

        <div className='flex flex-col w-full gap-2'>
            <label htmlFor="">Agama</label>
            <select name="Agama" id="Agama" className='outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 '>
                <option value="Islam">Islam</option>
                <option value="Khatolik">Khatolik</option>
                <option value="Kristen Prostestan">Kristen Prostestan</option>
                <option value="Hindu">Hindu</option>
                <option value="Budha">Budha</option>
                <option value="Konghucu">Konghucu</option>
            </select>
        </div>

        <InputGroup name='nomor' type='text' label='No. Telepon' placeholder='08387547XXXX'/>
        <div className='flex flex-col w-full gap-2'>
            <label htmlFor="">Pernah berobat atau mendapatkan pelayanan lainnya di Pranadia Medika?</label>
            <select name="berobat" id="berobat" className='outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 '>
                <option value="Tidak">Tidak</option>
                <option value="Iya">Iya</option>
            </select>
        </div>

        <ButtonPrimary label='Selanjutnya' />
      </form>
    </main>
  )
}

export default DataKtp