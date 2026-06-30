export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4">
      <h2 className="mb-6 text-2xl font-bold">🧠 Genesis AI</h2>

      <button className="mb-6 w-full rounded-lg bg-blue-600 py-2 hover:bg-blue-700">
        + New Chat
      </button>

      <div className="space-y-2">
        <div className="rounded-lg bg-gray-800 p-3 hover:bg-gray-700 cursor-pointer">
          Chat 1
        </div>

        <div className="rounded-lg bg-gray-800 p-3 hover:bg-gray-700 cursor-pointer">
          Chat 2
        </div>
      </div>
    </aside>
  );
}