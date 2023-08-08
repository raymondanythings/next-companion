"use client";

import ChatHeader from "@/components/chat-header";
import { Companion, Message } from "@/prisma";

interface ChatClientProps {
  companion: Companion & {
    messages: Message[];
    _count: {
      messages: number;
    };
  };
}

const ChatClient = ({ companion }: ChatClientProps) => {
  return (
    <div className="flex flex-col h-full p-4 psace-y-2">
      <ChatHeader companion={companion} />
    </div>
  );
};

export default ChatClient;
