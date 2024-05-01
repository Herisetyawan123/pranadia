import Link from 'next/link'

// asset
import lifestyle from "@/assets/literasi/life-style.png";
import BoxLiterasiArtikel from '@/components/box/literasi-artikel';

function LiterasiArtikel() {
  return (
    <>
        <div className="flex justify-between mt-5">
            <h1 className="font-bold">Literasi & Artikel</h1>
            <Link href={'/'} className="text-[#F7490D] font-medium text-sm">Lihat Semua</Link>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
            <BoxLiterasiArtikel src={lifestyle.src} />
            <BoxLiterasiArtikel src={lifestyle.src} />
        </div>
    </>
  )
}

export default LiterasiArtikel