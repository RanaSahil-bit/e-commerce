import React from "react";
import "./chatbot.css";

function ChatBotButton({ toggleChat, isOpen }) {
  return (
    <button className="chatbot-button" onClick={toggleChat}>
      {isOpen ? "×" : "💬"}
    </button>
  );
}

export default ChatBotButton;
