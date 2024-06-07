import AppBarBack from "@/components/appbar/appbar";

export default function Page() {
  return (
    <main className="w-full h-full flex justify-center items-center bg-white text-black">
      <AppBarBack menu="Offline" />
      <h1 className="font-semibold text-lg">No Internet!</h1>
    </main>
  );
}
