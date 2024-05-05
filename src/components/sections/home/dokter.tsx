import Link from "next/link";
// dokter
import Nindya from "@/assets/dokter/nindya.png";
import Bagus from "@/assets/dokter/bagus.png";
import Riana from "@/assets/dokter/riana.png";
import Mulfi from "@/assets/dokter/mulfi.png";
import CardDokter from "@/components/card/dokter";

function Dokter() {
  return (
    <>
        <div className="flex justify-between mt-5">
            <h1 className="font-bold">Dokter Kami</h1>
            <Link href={'/promise'} className="text-[#F7490D] font-medium text-sm">Lihat Semua</Link>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
            <CardDokter image={Nindya}>
                <p className="text-[10px] mt-3 text-center">drg. Nindya Puspita Ayu</p>
            </CardDokter>
            <CardDokter image={Bagus}>
                <p className="text-[10px] mt-3 text-center">drg. Nindya Puspita Ayu</p>
            </CardDokter>
            <CardDokter image={Riana}>
                <p className="text-[10px] mt-3 text-center">drg. Nindya Puspita Ayu</p>
            </CardDokter>
            <CardDokter image={Mulfi}>
                <p className="text-[10px] mt-3 text-center">drg. Nindya Puspita Ayu</p>
            </CardDokter>
        </div>
    </>
  )
}

export default Dokter