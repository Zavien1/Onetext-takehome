import React, { useState } from "react";
import { ActionSelect } from "./ActionSelect";

interface NodeDetailEditorProps {
  nodeData: any;
  updateNode: (id: string, data: any) => void;
  deleteNode: (nodeId: string) => void;
  setSelectedNode: (node: any) => void;
}

export const NodeDetailEditor = ({
  nodeData,
  updateNode,
  deleteNode,
  setSelectedNode,
}: NodeDetailEditorProps) => {
  const [message, setMessage] = useState(nodeData.data.label);

  const handleSave = () => {
    updateNode(nodeData.id, { ...nodeData.data, label: message });
    setSelectedNode(null);
  };

  const handleDeleteNode = () => {
    deleteNode(nodeData.id);
    setSelectedNode(null);
  };

  return (
    <aside className="flex">
      {nodeData.type === "responseNode" && (
        <div className="flex flex-col space-y-8 justify-center grow">
          {" "}
          <h1 className="text-center font-bold text-2xl">
            No Editing Available for Response Node
          </h1>
          <p className="text-center">
            Response nodes are response messages sent from the user, attach
            intent nodes or response nodes to handle how the flow should proceed
          </p>
          <button
            onClick={handleDeleteNode}
            className="bg-red-500 text-white rounded-lg p-2"
          >
            Delete Node
          </button>
        </div>
      )}
      {nodeData.type === "intentNode" && (
        <div className="flex flex-col  items-center justify-between flex-grow">
          <div className="w-full space-y-8">
            <h1 className="text-center font-bold text-2xl">Edit Intent Node</h1>
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
              onClick={handleDeleteNode}
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
            <h1 className="text-center font-bold text-2xl">Edit Action Node</h1>
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
              onClick={handleDeleteNode}
              className="bg-red-500 text-white rounded-lg p-2"
            >
              Delete Node
            </button>
          </div>
        </div>
      )}

      {nodeData.type === "messageNode" && (
        <div className="flex flex-col  items-center justify-between flex-grow">
          <div className="w-full space-y-8">
            <h1 className="text-center font-bold text-2xl">Edit Node</h1>
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
              onClick={handleDeleteNode}
              className="bg-red-500 text-white rounded-lg p-2"
            >
              Delete Node
            </button>
          </div>
        </div>
      )}
      {nodeData.type === "initialMessageNode" && (
        <div className="flex flex-col  items-center justify-between flex-grow">
          <div className="w-full space-y-8">
            <h1 className="text-center font-bold text-2xl">
              Edit Initial Message Node
            </h1>
            <p>The initial message users receive to begin your text flow</p>
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
          </div>
        </div>
      )}

      {nodeData.type === "endNode" && (
        <div className="flex flex-col space-y-8 justify-center grow">
          {" "}
          <h1 className="text-center font-bold text-2xl">
            No Editing Available for End Node
          </h1>
          <p className="text-center">
            End Nodes mark the end of your flow. This marks the flow as
            completed via one path. You may have multiple end paths to denote
            when the flow has completed.
          </p>
          <button
            onClick={handleDeleteNode}
            className="bg-red-500 text-white rounded-lg p-2"
          >
            Delete Node
          </button>
        </div>
      )}
    </aside>
  );
};
