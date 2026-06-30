export default function ChatWindow() {
  return (
    <div className="flex h-full flex-col rounded-xl bg-white shadow-lg">
      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto p-6">
        <div className="max-w-xl rounded-xl bg-gray-100 p-4">
          👋 Hello! I am Genesis AI.
        </div>

        <div className="ml-auto max-w-xl rounded-xl bg-blue-600 p-4 text-white">
          Hi Genesis!
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t p-4">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}