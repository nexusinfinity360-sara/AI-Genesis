import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <main className="flex h-screen bg-gray-100">
      <Sidebar />

      <section className="flex flex-1 flex-col">
        <Header />

        <div className="flex flex-1 items-center justify-center">
          <div className="rounded-xl bg-white p-10 shadow-lg">
            <h2 className="text-3xl font-bold">
              Welcome to Genesis AI 🚀
            </h2>

            <p className="mt-4 text-gray-600">
              Professional AI Platform is under construction.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}