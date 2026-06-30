export default function Sidebar() {
  return (
    <aside className="w-72 bg-gray-900 text-white p-5">
      <h2 className="mb-6 text-2xl font-bold">🧠 Genesis AI</h2>

      <button className="mb-6 w-full rounded-lg bg-blue-600 py-3 font-medium hover:bg-blue-700">
        + New Chat
      </button>

      <div className="space-y-2">
        <button className="w-full rounded-lg bg-gray-800 p-3 text-left hover:bg-gray-700">
          💬 Chat 1
        </button>

        <button className="w-full rounded-lg bg-gray-800 p-3 text-left hover:bg-gray-700">
          💬 Chat 2
        </button>
      </div>
    </aside>
  );
}