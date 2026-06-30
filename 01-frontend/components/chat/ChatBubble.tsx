type ChatBubbleProps = {
  message: string;
  role: "user" | "assistant";
};

export default function ChatBubble({
  message,
  role,
}: ChatBubbleProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 shadow ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-white text-gray-900 border"
        }`}
      >
        {message}
      </div>
    </div>
  );
}