import ChatBubble from "./ChatBubble";

export default function ChatWindow() {
  const messages = [
    {
      id: 1,
      role: "assistant",
      message: "👋 Hello! I am Genesis AI.",
    },
    {
      id: 2,
      role: "user",
      message: "Hi Genesis!",
    },
  ];

  return (
    <div className="flex h-full flex-col rounded-xl bg-white shadow-lg">
      <div className="flex-1 space-y-4 overflow-y-auto p-6">
        {messages.map((msg) => (
          <ChatBubble
            key={msg.id}
            message={msg.message}
            role={msg.role as "user" | "assistant"}
          />
        ))}
      </div>

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