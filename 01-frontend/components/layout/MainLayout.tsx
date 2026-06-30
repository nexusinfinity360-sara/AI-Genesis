import { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="flex h-screen bg-gray-100">
      <Sidebar />

      <section className="flex flex-1 flex-col">
        <Header />

        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </section>
    </main>
  );
}