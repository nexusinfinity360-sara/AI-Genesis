export default function ChatInput() {
  return (
    <div className="border-t bg-white p-4">
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700">
          Send
        </button>
      </div>
    </div>
  );
}