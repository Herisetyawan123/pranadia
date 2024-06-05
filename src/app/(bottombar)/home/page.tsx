import Link from "next/link";
import Image from "next/legacy/image";
import Pranadia from "@/assets/prandia-logo.png";

import Search from "@/components/input/search";
import Category from "@/components/box/category";
import BannerHome from "@/components/banner/banner-home";
import Poliklinik from "@/components/sections/home/poliklinik";
import Dokter from "@/components/sections/home/dokter";
import LiterasiArtikel from "@/components/sections/home/literasi-artikel";

export default function Home() {
  return (
    <main className="p-5 pb-20">
      <Image src={Pranadia} />

      <Search />
      <Category />

      <BannerHome />
      <Poliklinik />
      <Dokter />
      <LiterasiArtikel />
    </main>
  );
}
