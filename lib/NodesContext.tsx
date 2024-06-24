import React, { createContext, useContext, useMemo } from "react";

interface NodeContextType {
  nodes: any[];
}

const NodeContext = createContext<NodeContextType | null>(null);

const NodeProvider: React.FC<{
  children: React.ReactNode;
  nodes: any[];
}> = ({ children, nodes }) => {
  const value = useMemo(
    () => ({
      nodes,
    }),
    [nodes]
  );

  return <NodeContext.Provider value={value}>{children}</NodeContext.Provider>;
};

const useNodeContext = () => {
  const context = useContext(NodeContext);
  if (!context) {
    throw new Error("useNodeContext must be used within a NodeProvider");
  }
  return context;
};

export { NodeProvider, useNodeContext };
