import AppBarBack from "@/components/appbar/appbar";
import InputGroup from "@/components/input/input-group";
import InputSelect from "@/components/input/input-select";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <main className="pb-20">
      <AppBarBack menu="Tambah Anggota Keluarga" />
      <div className="mx-6 mt-5">
        <div className="mb-5">
          <InputGroup
            id="name"
            name="name"
            label="Nama Lengkap (Sesuai KTP)"
            type="text"
            placeholder="Gia L Ayura"
          />
          <span className="text-gray-400 text-xs mt-2 block">
            *akan ditampilkan pada hasil pemeriksaan
          </span>
        </div>

        <div className="mb-5">
          <InputSelect
            id="status"
            name="status"
            label="Status"
            options={[
              {
                value: "Belum Kawin",
                label: "Belum Kawin",
              },
              {
                value: "Kawin",
                label: "Kawin",
              },
            ]}
          />
        </div>

        <div className="mb-5">
          <InputGroup
            id="tmpt_lahir"
            name="tmpt_lahir"
            label="Tempat Lahir"
            type="text"
            placeholder="Sumedang"
          />
        </div>

        <div className="mb-5">
          <InputSelect
            id="gender"
            name="gender"
            label="Jenis Kelamin"
            options={[
              {
                value: "Pria",
                label: "Pria",
              },
              {
                value: "Perempuan",
                label: "Perempuan",
              },
            ]}
          />
        </div>

        <div className="mb-5">
          <InputGroup id="tgl" name="tgl" label="Tanggal Lahir" type="date" />
          <span className="text-gray-400 text-xs mt-2 block">
            *tanggal-bulan-tahun (10-10-2023)
          </span>
        </div>

        <div className="mb-5 flex flex-col w-full gap-2">
          <label htmlFor="">Provinsi</label>
          <select
            name="provinsi"
            id="provinsi"
            className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
          >
            <option value="Jawa Barat">Jawa Barat</option>
            <option value="Jawa Tengah">Jawa Tengah</option>
            <option value="Jawa Timur">Jawa Timur</option>
          </select>
        </div>

        <div className="mb-5 flex flex-col w-full gap-2">
          <label htmlFor="">Kabupaten</label>
          <select
            name="kabupaten"
            id="kabupaten"
            className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
          >
            <option value="Sumedang">Sumedang</option>
            <option value="Cirebon">Cirebon</option>
            <option value="Bogor">Bogor</option>
          </select>
        </div>

        <div className="mb-5 flex flex-col w-full gap-2">
          <label htmlFor="">Kecamatan</label>
          <select
            name="kecamatan"
            id="kecamatan"
            className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
          >
            <option value="Sumedang Utara">Sumedang Utara</option>
            <option value="Sumedang Selatan">Sumedang Selatan</option>
            <option value="Sumedang Barat">Sumedang Barat</option>
          </select>
        </div>

        <div className="mb-5 flex flex-col w-full gap-2">
          <label htmlFor="">Kelurahan</label>
          <select
            name="Kelurahan"
            id="Kelurahan"
            className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
          >
            <option value="Situ">Situ</option>
            <option value="Curah Takir">Curah Takir</option>
            <option value="Ambulu">Ambulu</option>
          </select>
        </div>

        <div className="mb-5">
          <InputSelect
            id="hubungan"
            name="hubungan"
            label="Hubungan Dengan Keluarga"
            options={[
              {
                value: "Anak",
                label: "Anak",
              },
              {
                value: "Adik",
                label: "Adik",
              },
              {
                value: "Kakak",
                label: "Kakak",
              },
              {
                value: "Ayah",
                label: "Ayah",
              },
              {
                value: "Ibu",
                label: "Ibu",
              },
              {
                value: "Kakek",
                label: "Kakek",
              },
              {
                value: "Nenek",
                label: "Nenek",
              },
            ]}
          />
        </div>

        <div className="mb-5">
          <Link
            href={"/profile/anggota-keluarga"}
            className="px-6 py-4 mx-auto rounded-full block text-center text-white font-semibold w-full hover:scale-105 duration-300"
            style={{
              background:
                "linear-gradient(91.65deg, #F11A0C 0%, #FF2E00 104.11%)",
            }}
          >
            Simpan Anggota Keluarga
          </Link>
        </div>

        <div className="mb-5">
          <Link
            href={"/profile/anggota-keluarga"}
            className="px-6 py-4 mx-auto rounded-full block text-center border border-[#F11A0C] text-[#F11A0C] font-semibold w-full hover:scale-105 duration-300"
          >
            Batalkan
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Page;
