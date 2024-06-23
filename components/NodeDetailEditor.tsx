import React, { useState } from "react";
import { ActionSelect } from "./ActionSelect";

interface NodeDetailEditorProps {
  nodeData: any;
  updateNode: (id: string, data: any) => void;
}

export const NodeDetailEditor = ({
  nodeData,
  updateNode,
}: NodeDetailEditorProps) => {
  const [message, setMessage] = useState(nodeData.data.label);

  const handleSave = () => {
    updateNode(nodeData.id, { ...nodeData.data, label: message });
  };

  return (
    <aside className="flex">
      {nodeData.type === "responseNode" && (
        <div className="flex flex-col space-y-8 justify-center grow">
          {" "}
          <h1 className="text-center font-bold text-3xl">
            Cannot Edit Response Nodes
          </h1>
        </div>
      )}
      {nodeData.type === "intentNode" && (
        <div className="flex flex-col  items-center justify-between flex-grow">
          <div className="w-full space-y-8">
            <h1 className="text-center font-bold text-3xl">Edit Intent Node</h1>
            <div className="w-full space-y-2">
              <h2>Determine Intent From Response</h2>
              <textarea
                placeholder="Example: User wants to know the weather"
                onChange={(e) => setMessage(e.target.value)}
                className="border rounded-lg p-2 w-full"
              />
            </div>
          </div>

          <div className="w-full flex flex-col space-y-4">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white rounded-lg p-2"
            >
              Save
            </button>
            <button
              onClick={handleSave}
              className="bg-red-500 text-white rounded-lg p-2"
            >
              Delete Node
            </button>
          </div>
        </div>
      )}

      {nodeData.type === "actionNode" && (
        <div className="flex flex-col  items-center justify-between flex-grow">
          <div className="w-full space-y-8">
            <h1 className="text-center font-bold text-3xl">Edit Action Node</h1>
            <div className="w-full space-y-2">
              <h2>Select Action</h2>
              <ActionSelect />
            </div>
          </div>

          <div className="w-full flex flex-col space-y-4">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white rounded-lg p-2"
            >
              Save
            </button>
            <button
              onClick={handleSave}
              className="bg-red-500 text-white rounded-lg p-2"
            >
              Delete Node
            </button>
          </div>
        </div>
      )}

      {(nodeData.type === "initialMessageNode" ||
        nodeData.type === "messageNode") && (
        <div className="flex flex-col  items-center justify-between flex-grow">
          <div className="w-full space-y-8">
            <h1 className="text-center font-bold text-3xl">Edit Node</h1>
            <div className="w-full space-y-2">
              <h2>Enter Message</h2>
              <textarea
                placeholder="Enter message here"
                // value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border rounded-lg p-2 w-full"
              />
            </div>
          </div>

          <div className="w-full flex flex-col space-y-4">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white rounded-lg p-2"
            >
              Save
            </button>
            <button
              onClick={handleSave}
              className="bg-red-500 text-white rounded-lg p-2"
            >
              Delete Node
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};
