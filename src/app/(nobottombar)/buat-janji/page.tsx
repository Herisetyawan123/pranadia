"use client";
import React, { FormEvent, useRef } from "react";
import AppBarBack from "@/components/appbar/appbar";
import InputDate from "@/components/input/input-date";
import InputGroup from "@/components/input/input-group";
import InputSelect from "@/components/input/input-select";
import docters from "@/constant/data/dokter";
import InputTime from "@/components/input/input-time";
import { useRouter } from "next/navigation";
import useCreatePromise from "@/store/use-create-promise";

function page() {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const { addPromise } = useCreatePromise();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData.entries());
      // console.log("Form data:", data);
      if (
        data.name != undefined &&
        data.date != undefined &&
        data.dokter != undefined &&
        data.poli != undefined &&
        data.time != undefined
      ) {
        addPromise({
          date: data.date as string,
          administrasi: "50000",
          docter: docters[parseInt(data.dokter as string)],
          layanan: "6000",
          pasien: data.name as string,
          poli: data.poli as string,
          time: data.time as string,
          total: 56000,
        });
        router.push("/buat-janji/pembayaran");
      } else {
        alert("isi semua field");
      }
    }
    // router.push("/buat-janji/pembayaran");
  };
  return (
    <main>
      <AppBarBack menu="Buat Janji" />
      <form
        className="mx-6 mt-6 space-y-6"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <InputSelect
          name="name"
          id="name"
          label="Pilih Pasien"
          options={[
            {
              value: "Gia L Ayu",
              label: "Gia L Ayu",
            },
            {
              value: "Hendra Mahendra",
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
              value: "Poli Penyakit Dalam",
              label: "Poli Penyakit Dalam",
            },
            {
              value: "Poliklinik Paru",
              label: "Poliklinik Paru",
            },
            {
              value: "Poliklinik Jantung",
              label: "Poliklinik Jantung",
            },
            {
              value: "Poliklinik Gigi & Mulut",
              label: "Poliklinik Gigi & Mulut",
            },
            {
              value: "Poliklinik Umum",
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
