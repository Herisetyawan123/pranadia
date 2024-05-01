"use client";
import AppBarRegister from '@/components/appbar/register'
import ButtonPrimary from '@/components/button/btn-primary'
import InputGroup from '@/components/input/input-group'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

function KontakDarurat() {
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/register/verifikasi-nomor')
  }
  return (
    <main>
      <AppBarRegister menu={'Profile'} section="Kontak Darurat" step={4} length={5} />
      <form className="mt-2 p-4 flex flex-col gap-5" onSubmit={handleSubmit}>
        <InputGroup name='name' type='text' label='Nama keluarga terdekat' placeholder='Tatang Sutarma'/>
        <InputGroup name='nomor' type='text' label='No. Hp Keluarga' placeholder='08746736XXXX'/>
        <InputGroup name='alamat' type='text' label='Alamat keluarga terdekat' placeholder='Lembur Situ'/>

        <div className='flex flex-col w-full gap-2'>
            <label htmlFor="">Hubungan dengan Keluarga</label>
            <select name="keluarga" id="keluarga" className='outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 '>
                <option value="Kakek">Kakek</option>
                <option value="Nenek">Nenek</option>
                <option value="Ayah">Ayah</option>
                <option value="Ibu">Ibu</option>
                <option value="Kakak">Kakak</option>
                <option value="Adek">Adek</option>
            </select>
        </div>

        <ButtonPrimary label='Selanjutnya' />
      </form>
    </main>
  )
}

export default KontakDarurat