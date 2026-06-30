import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex h-screen bg-gray-100">
      <Sidebar />

      <section className="flex flex-1 flex-col">
        <Header />

        <div className="flex flex-1 items-center justify-center">
          <div className="rounded-xl bg-white p-8 shadow-lg">
            <h2 className="mb-2 text-2xl font-semibold">
              Welcome to Genesis AI 🚀
            </h2>

            <p className="text-gray-600">
              Professional AI Chat Interface
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}