"use client";

import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "@/components/chatbot/botConfig";
import MessageParser from "@/components/chatbot/MessageParser";
import ActionProvider from "@/components/chatbot/ActionProvider";
import { Bot, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {!isOpen && (
        <a
          href="https://wa.me/+264811450254?text=Hi,%20I%20need%20help%20with..."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-[88px] right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg z-[9999] transition"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-[#4F3996] hover:bg-[#F47C20] text-white p-4 rounded-full shadow-lg z-[9999] transition"
        aria-label="Open Chatbot"
      >
        <Bot size={28} />
      </button>

      {/* Chatbot popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 w-[270px] h-[520px] bg-white rounded-2xl shadow-2xl overflow-hidden z-[9998] border border-gray-200"
          >
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
