"use client";
import AppBarRegister from "@/components/appbar/register";
import ButtonPrimary from "@/components/button/btn-primary";
import InputGroup from "@/components/input/input-group";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import Pranadia from "@/assets/prandia-logo.png";
import Image from "next/legacy/image";
import CountDown from "./(component)/count-down";

function VErifikasiDarurat() {
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/home");
  };
  return (
    <main>
      <AppBarRegister
        menu={"Profile"}
        section="Verfikasi Nomer"
        step={5}
        length={5}
      />
      <div className="flex flex-col gap-8 px-6 items-center h-[100%] pt-20">
        <Image src={Pranadia} />
        <p className="text-center w-full font-normal text-sm">
          Kami mengirim kode Auth ke nomor:
          <br />
          <strong>08387547XXXX</strong>
          <br />
          Silakan cek pesan Anda
        </p>

        <CountDown />

        {/* form */}
        <form
          className="w-full flex flex-col gap-5"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="grid grid-cols-5 gap-3">
            <input
              name="otp[]"
              className="p-5 border h-14 rounded-md focus:outline-red-500"
              maxLength={1}
            ></input>
            <input
              name="otp[]"
              className="p-5 border h-14 rounded-md focus:outline-red-500"
              maxLength={1}
            ></input>
            <input
              name="otp[]"
              className="p-5 border h-14 rounded-md focus:outline-red-500"
              maxLength={1}
            ></input>
            <input
              name="otp[]"
              className="p-5 border h-14 rounded-md focus:outline-red-500"
              maxLength={1}
            ></input>
            <input
              name="otp[]"
              className="p-5 border h-14 rounded-md focus:outline-red-500"
              maxLength={1}
            ></input>
          </div>
          <button className="bg-[#D41F13] w-full py-3 rounded-full text-white mt-10">
            Verifikasi Kode
          </button>
        </form>
      </div>
    </main>
  );
}

export default VErifikasiDarurat;
