"use client";
import Emphatize from "@/assets/logo/poli/emphatize";
import AppBarBack from "@/components/appbar/appbar";
import TabBar from "@/components/tab-bar/tab-bar";
import TabItem from "@/components/tab-bar/tab-item";
import { getSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function History() {
  const [history, setHistory] = useState([]);
  const loadBooking = async () => {
    const session = await getSession();
    const token = session?.user.access_token;
    const response = await fetch("http://127.0.0.1:8000/api/bookings", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const res = await response.json();
    if (response.ok) {
      setHistory(() => res);
    }
  };
  useEffect(() => {
    loadBooking();
  }, []);
  return (
    <main>
      <AppBarBack menu="History" />
      <div className="mx-5">
        <TabBar items={3}>
          <TabItem title="Menunggu">
            <div className="mt-8 flex flex-col gap-3">
              {history
                .filter((item) => item.status == "pending")
                .map((item, index) => (
                  <Link
                    key={index}
                    href={"/history/" + item.id}
                    className="font-normal text-xs bg-white px-5 py-3 rounded-md border flex gap-2 justify-between"
                    style={{
                      boxShadow:
                        "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)",
                    }}
                  >
                    <div className="w-[75%] flex gap-2 items-center">
                      <div className="bg-[#FFF1F1] w-10 h-10 rounded-full overflow-hidden flex justify-center items-center">
                        <Emphatize />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">{item.tgl_booking}</p>
                        <h4 className="text-xs font-bold">{item.layanan}</h4>
                      </div>
                    </div>
                    <div>
                      <span className="bg-yellow-100 px-3 py-0.5 rounded-md min-h-fit block">
                        Menunggu
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </TabItem>
          <TabItem title="Selesai">
            <div className="mt-8 flex flex-col gap-3">
              {history
                .filter((item) => item.status == "done")
                .map((item, index) => (
                  <Link
                    key={index}
                    href={"/history/2"}
                    className="font-normal text-xs bg-white px-5 py-3 rounded-md border flex gap-2 justify-between"
                    style={{
                      boxShadow:
                        "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)",
                    }}
                  >
                    <div className="w-[75%] flex gap-2 items-center">
                      <div className="bg-[#FFF1F1] w-10 h-10 rounded-full overflow-hidden flex justify-center items-center">
                        <Emphatize />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">{item.tgl_booking}</p>
                        <h4 className="text-xs font-bold">{item.layanan}</h4>
                      </div>
                    </div>
                    <div>
                      <span className="bg-green-100 px-3 py-0.5 rounded-md min-h-fit block">
                        selesai
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </TabItem>
          <TabItem title="Batal">
            <div className="mt-8 flex flex-col gap-3">
              {history
                .filter((item) => item.status == "cancel")
                .map((item, index) => (
                  <Link
                    key={index}
                    href={"/history/2"}
                    className="font-normal text-xs bg-white px-5 py-3 rounded-md border flex gap-2 justify-between"
                    style={{
                      boxShadow:
                        "0px 3.57px 35.74px 0px rgba(230, 233, 238, 1)",
                    }}
                  >
                    <div className="w-[75%] flex gap-2 items-center">
                      <div className="bg-[#FFF1F1] w-10 h-10 rounded-full overflow-hidden flex justify-center items-center">
                        <Emphatize />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">{item.tgl_booking}</p>
                        <h4 className="text-xs font-bold">{item.layanan}</h4>
                      </div>
                    </div>
                    <div>
                      <span className="bg-red-100 px-3 py-0.5 rounded-md min-h-fit block">
                        batal
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </TabItem>
        </TabBar>
      </div>
    </main>
  );
}

export default History;
