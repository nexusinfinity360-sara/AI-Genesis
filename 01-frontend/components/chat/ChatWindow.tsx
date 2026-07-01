"use client";

import { useState } from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import { Message } from "@/types/chat";

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "👋 Hello! I am Genesis AI.",
      createdAt: new Date(),
    },
  ]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      createdAt: new Date(),
    };

    console.log("Before:", messages);

    setMessages((prev) => {
      const updated = [...prev, userMessage];
      console.log("After:", updated);
      return updated;
    });
  };

  return (
    <div className="flex h-full flex-col rounded-xl bg-gray-50 shadow-lg">
      <MessageList messages={messages} />
      <ChatInput onSend={sendMessage} />
    </div>
  );
}