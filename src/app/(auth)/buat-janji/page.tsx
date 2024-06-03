"use client";
import React, { FormEvent } from "react";
import AppBarBack from "@/components/appbar/appbar";
import InputDate from "@/components/input/input-date";
import InputGroup from "@/components/input/input-group";
import InputSelect from "@/components/input/input-select";
import docters from "@/constant/data/dokter";
import InputTime from "@/components/input/input-time";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/buat-janji/pembayaran");
  };
  return (
    <main>
      <AppBarBack menu="Buat Janji" />
      <form className="mx-6 mt-6 space-y-6" onSubmit={handleSubmit}>
        <InputSelect
          name="name"
          id="name"
          label="Pilih Pasien"
          options={[
            {
              value: "1",
              label: "Gia L Ayu",
            },
            {
              value: "1",
              label: "Hendra Mahendra",
            },
          ]}
        />
        <InputSelect
          name="poli"
          id="poli"
          label="Pilih Poli"
          options={[
            {
              value: "1",
              label: "Poli Penyakit Dalam",
            },
            {
              value: "1",
              label: "Poliklinik Paru",
            },
            {
              value: "1",
              label: "Poliklinik Jantung",
            },
            {
              value: "1",
              label: "Poliklinik Gigi & Mulut",
            },
            {
              value: "1",
              label: "Poliklinik Umum",
            },
          ]}
        />
        <InputGroup
          name="medrek"
          label="No. Rekam Medik (Otomatis)"
          type="text"
          placeholder="00-88-18-56"
          disable={true}
        />
        <InputDate />
        <InputSelect
          name="dokter"
          id="dokter"
          label="Pilih Dokter"
          options={docters.reverse().map((docter, index) => ({
            label: docter.name,
            value: index.toLocaleString(),
          }))}
        />
        <InputTime />

        <div className="border-y-2 border-dashed border-slate-300 py-3">
          <div className="flex justify-between">
            <p>Biaya Layanan</p>
            <p>Rp. 6.000</p>
          </div>
          <div className="flex justify-between">
            <p>Biaya Administrasi</p>
            <p>Rp. 50.000</p>
          </div>
        </div>

        <div className="flex justify-between">
          <h1 className="font-bold text-sm">Total</h1>
          <h1 className="font-bold text-sm text-red-500">Rp. 56.000</h1>
        </div>

        <div className="w-full">
          <button className="w-full bg-red-600 py-4 rounded-full text-white font-bold text-base">
            Selanjutnya
          </button>
        </div>
      </form>

      <div className="h-10"></div>
    </main>
  );
}

export default page;
