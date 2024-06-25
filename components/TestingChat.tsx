import React, { useEffect, useState, useRef } from "react";
import { AvatarIcon } from "./AvatarIcon";
import cn from "@/utils/cn";

export const TestingChat = ({ nodes }: any) => {
  const [messages, setMessages] = useState<any>([]);
  const [inputText, setInputText] = useState("");
  const [currentNodeIndex, setCurrentNodeIndex] = useState(0);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      processNode(0);
      initialized.current = true;
    }
  }, [nodes]);

  const processNode = (index: number) => {
    if (index < nodes.length) {
      const node = nodes[index];
      if (node.type === "initialMessageNode" || node.type === "messageNode") {
        setTimeout(() => {
          setMessages((msgs: any) => [
            ...msgs,
            { text: node.data.label, sender: "receiver" },
          ]);
          processNode(index + 1); // Automatically proceed to the next node
        }, node.data.delay || 1000);
      } else if (node.type === "responseNode") {
        setCurrentNodeIndex(index);
      }
    }
  };

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, sender: "sender" }]);
      setInputText("");
      // After sending a message, process the next node
      processNode(currentNodeIndex + 1);
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
