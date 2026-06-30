export default function Header() {
  return (
    <header className="border-b bg-white shadow">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">🧠 Genesis AI</h1>

        <button className="rounded-lg bg-gray-900 px-4 py-2 text-white transition hover:bg-gray-800">
          Settings
        </button>
      </div>
    </header>
  );
}