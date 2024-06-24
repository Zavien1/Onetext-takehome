import React, { useEffect, useMemo, useState } from "react";
import { ActionSelect } from "./ActionSelect";
import { XIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  ResponseNodeForm,
  InitialMessageNodeForm,
  IntentNodeForm,
  MessageNodeForm,
  ActionNodeForm,
  EndNodeForm,
} from "./NodeEditorForms";

interface NodeDetailEditorProps {
  nodeData: any;
  updateNode: (id: string, data: any) => void;
  deleteNode: (nodeId: string) => void;
  setSelectedNode: (node: any) => void;
}

const NodeTypeComponent = ({
  nodeId,
  type,
  initialMessage,
  handleSave,
  handleDeleteNode,
  setSelectedNode,
}: any) => {
  const [message, setMessage] = useState(initialMessage);
  const [activeNode, setActiveNode] = useState(null);

  useEffect(() => {
    setMessage(initialMessage);
  }, [initialMessage, type]);

  return (
    <div className="flex flex-col space-y-8 justify-between grow">
      <div>
        <div className="flex justify-end mb-2">
          <XIcon
            className="cursor-pointer h-4 w-4"
            onClick={() => setSelectedNode(null)}
          />
        </div>
        <div>
          <div className="space-y-12">
            {type === "responseNode" ? (
              <ResponseNodeForm
                nodeId={nodeId}
                message={message}
                setMessage={setMessage}
              />
            ) : type === "initialMessageNode" ? (
              <InitialMessageNodeForm
                nodeId={nodeId}
                message={message}
                setMessage={setMessage}
              />
            ) : type === "intentNode" ? (
              <IntentNodeForm
                nodeId={nodeId}
                message={message}
                setMessage={setMessage}
              />
            ) : type === "messageNode" ? (
              <MessageNodeForm
                nodeId={nodeId}
                message={message}
                setMessage={setMessage}
              />
            ) : type === "actionNode" ? (
              <ActionNodeForm
                nodeId={nodeId}
                message={message}
                setMessage={setMessage}
              />
            ) : type === "endNode" ? (
              <EndNodeForm />
            ) : (
              <div>Unknown node type</div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col space-y-4 px-12">
        {type === "initialMessageNode" && (
          <Button
            onClick={() => {
              handleSave(message);
              // setMessage(null);
            }}
            className="bg-blue-500 hover:bg-blue-400 text-white rounded-lg p-2"
          >
            Save
          </Button>
        )}
        {type !== "endNode" && type !== "initialMessageNode" && (
          <>
            <Button
              onClick={() => {
                handleSave(message);
                // setMessage(null);
              }}
              className="bg-blue-500 hover:bg-blue-400 text-white rounded-lg p-2"
            >
              Save
            </Button>
            <Button
              onClick={() => {
                handleDeleteNode();
                // setMessage(null);
              }}
              className="bg-red-500 hover:bg-red-400 text-white rounded-lg p-2"
            >
              Delete Node
            </Button>
          </>
        )}
        {type === "endNode" && (
          <Button
            onClick={() => {
              handleDeleteNode();
              // setMessage("");
            }}
            className="bg-red-500 hover:bg-red-400 text-white rounded-lg p-2"
          >
            Delete Node
          </Button>
        )}
      </div>
    </div>
  );
};

export const NodeDetailEditor = ({
  nodeData,
  updateNode,
  deleteNode,
  setSelectedNode,
}: NodeDetailEditorProps) => {
  const handleSave = (message: string) => {
    updateNode(nodeData.id, { ...nodeData.data, label: message });
    setSelectedNode(null);
  };

  const handleDeleteNode = () => {
    deleteNode(nodeData.id);
    setSelectedNode(null);
  };

  // console.log(nodeData);

  return (
    <aside className="flex min-w-[400px]">
      <NodeTypeComponent
        nodeId={nodeData.id}
        type={nodeData.type}
        initialMessage={nodeData.data.label}
        handleSave={handleSave}
        handleDeleteNode={handleDeleteNode}
        setSelectedNode={setSelectedNode}
      />
    </aside>
  );
};
