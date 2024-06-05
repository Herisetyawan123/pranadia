import AppBarBack from "@/components/appbar/appbar";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <main className="relative h-full flex flex-col">
      <AppBarBack menu="Anggota Keluarga" />
      <div className="w-full flex-grow flex flex-col justify-between pb-24">
        <div className="mx-6 mt-6 space-y-5">
          <div
            className="px-6 py-4 shadow-xl rounded-xl bg-white  flex items-center gap-3"
            style={{
              boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)",
            }}
          >
            <div className="w-10 h-10 relative rounded-full overflow-hidden">
              <Image src={"/keluarga/keluarga-1.png"} layout="fill" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold">Daud Dimas Prasetyo</h2>
              <div className="text-xs text-gray-400 space-x-2">
                <span>321000218739812</span>
                <span>Laki Laki</span>
              </div>
            </div>
          </div>

          <div
            className="px-6 py-4 shadow-xl rounded-xl bg-white  flex items-center gap-3"
            style={{
              boxShadow: "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)",
            }}
          >
            <div className="w-10 h-10 relative rounded-full overflow-hidden">
              <Image src={"/keluarga/keluarga-2.png"} layout="fill" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold">Ali Imran</h2>
              <div className="text-xs text-gray-400 space-x-2">
                <span>321000218739812</span>
                <span>Laki Laki</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-6 mt-5">
          <Link
            href={"/profile/anggota-keluarga/tambah"}
            className="px-6 py-4 mx-auto rounded-full block text-center text-white font-semibold w-full hover:scale-105 duration-300"
            style={{
              background:
                "linear-gradient(91.65deg, #F11A0C 0%, #FF2E00 104.11%)",
            }}
          >
            Tambah Anggota Keluarga
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Page;
