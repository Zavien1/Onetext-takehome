"use client";

import React, { useState, useRef, useCallback, useMemo } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  NodeProps,
} from "reactflow";
import "reactflow/dist/style.css";

import { Sidebar } from "./Sidebar";
import { NodeDetailEditor } from "./NodeDetailEditor";
import { MessageNode } from "./MessageNode";
import { InitialMessageNode } from "./InitialMessageNode";
import { ResponseNode } from "./ResponseNode";
import { IntentNode } from "./IntentNode";
import { EndNode } from "./EndNode";
import { ActionNode } from "./ActionNode";

const initialNodes = [
  {
    id: "1",
    type: "initialMessageNode",
    data: { label: "initial message node" },
    position: { x: 250, y: 5 },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

export const DropContainer = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [selectedNode, setSelectedNode] = useState<NodeProps | null>(null);

  const nodeTypes = useMemo(
    () => ({
      messageNode: (nodeProps: NodeProps) => (
        <MessageNode
          {...nodeProps}
          isSelected={nodeProps.id === selectedNode?.id}
        />
      ),
      initialMessageNode: (nodeProps: NodeProps) => (
        <InitialMessageNode
          {...nodeProps}
          isSelected={nodeProps.id === selectedNode?.id}
        />
      ),
      responseNode: (nodeProps: NodeProps) => (
        <ResponseNode
          {...nodeProps}
          isSelected={nodeProps.id === selectedNode?.id}
        />
      ),
      intentNode: (nodeProps: NodeProps) => (
        <IntentNode
          {...nodeProps}
          isSelected={nodeProps.id === selectedNode?.id}
        />
      ),
      actionNode: (nodeProps: NodeProps) => (
        <ActionNode
          {...nodeProps}
          isSelected={nodeProps.id === selectedNode?.id}
        />
      ),
      endNode: (nodeProps: NodeProps) => (
        <EndNode
          {...nodeProps}
          isSelected={nodeProps.id === selectedNode?.id}
        />
      ),
    }),
    [selectedNode]
  );
  const onNodeClick = (event: any, node: any) => {
    setSelectedNode(node);
  };

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const updateNode = useCallback(
    (id: string, data: any) => {
      setNodes((nds) =>
        nds.map((node) => (node.id === id ? { ...node, data } : node))
      );
    },
    [setNodes]
  );

  const serializeFlow = () => {
    const serializedData = {
      nodes: nodes.map((node) => ({
        id: node.id,
        type: node.type,
        position: node.position,
      })),
      edges: edges.map((edge) => ({
        id: edge.id,
        source: edge.source,
        target: edge.target,
      })),
    };
    console.log(JSON.stringify(serializedData));
  };

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <Sidebar serializeFlow={serializeFlow} />

        <div
          className="reactflow-wrapper component gridded-background bg-[#F2F6F8]"
          ref={reactFlowWrapper}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            fitView
          >
            <Controls />
          </ReactFlow>
        </div>
        {selectedNode && (
          <NodeDetailEditor nodeData={selectedNode} updateNode={updateNode} />
        )}
      </ReactFlowProvider>
    </div>
  );
};
