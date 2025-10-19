"use client";

import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "@/components/chatbot/botConfig";
import MessageParser from "@/components/chatbot/MessageParser";
import ActionProvider from "@/components/chatbot/ActionProvider";
import { Bot, MessageCircle } from "lucide-react"; // or any chat icon you like

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-[#4F3996] z-99 hover:bg-[#F47C20] text-white p-4 rounded-full shadow-lg transition"
        aria-label="Open Chatbot"
      >
        <Bot size={30} />
      </button>

      {/* Chatbot popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-[480px] bg-white rounded-xl shadow-xl overflow-hidden z-50">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
}
