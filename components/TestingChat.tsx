import React, { useEffect, useState, useRef } from "react";
import { AvatarIcon } from "./AvatarIcon";
import cn from "@/utils/cn";
import { Node } from "reactflow";

export const TestingChat = ({ nodes }: any) => {
  const [messages, setMessages] = useState<any>([]);
  const [inputText, setInputText] = useState("");
  const initialized = useRef(false);

  console.log(nodes);

  useEffect(() => {
    // Only run this effect once
    if (!initialized.current) {
      const initialMessages = nodes.filter(
        (node: Node) => node.type === "initialMessageNode"
      );
      initialMessages.forEach((node: Node) => {
        setTimeout(() => {
          setMessages((msgs: any) => [
            ...msgs,
            { text: node.data.label, sender: "receiver" },
          ]);
        }, node.data.delay || 1000);
      });

      initialized.current = true; // Mark as initialized to prevent rerun
    }
  }, [nodes]); // Depend on stable `nodes`

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, sender: "sender" }]);
      setInputText("");
    }
  };

  const handleInputChange = (e: any) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[40rem] p-4 w-[57rem]">
      <div className="flex flex-1 flex-col overflow-y-auto mb-4">
        {messages.map((message: any, index: number) => (
          <div
            key={index}
            className={cn(
              "flex flex-row items-end",
              message.sender === "sender" ? "self-end" : "self-start"
            )}
          >
            {message.sender === "sender" ? null : (
              <AvatarIcon className="mr-2 w-6 h-6" />
            )}
            <div
              className={cn(
                "p-3 rounded-lg shadow",
                message.sender === "sender"
                  ? "bg-blue-500 text-white"
                  : "bg-[#F2F2F2]"
              )}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-1 rounded p-2 bg-[#F2F2F2] rounded-lg"
          value={inputText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <button
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};
