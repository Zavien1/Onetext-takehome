import { useCallback } from "react";

import { Connection, Handle, Position } from "reactflow";
import { useToast } from "./ui/use-toast";
import cn from "@/utils/cn";

export const EndNode = ({ data, nodes, isSelected }: any) => {
  const { toast } = useToast();
  const isValidConnection = useCallback(
    (connection: Connection) => {
      const { source, target, sourceHandle, targetHandle } = connection;

      // Retrieve nodes from state or context to check their types
      const sourceNode = nodes.find((node: any) => node.id === source);

      // Example condition: Allow connection only if target is a 'responseNode'
      if (
        sourceNode?.type === "actionNode" ||
        sourceNode?.type === "messageNode"
      ) {
        return true;
      } else {
        toast({
          variant: "destructive",
          title: "Invalid Connection",
          description: "This node can only connect to a message or action node",
        });
        return false;
      }
    },
    [nodes]
  );

  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        isValidConnection={isValidConnection}
      />
      <div
        className={cn(
          "rounded-full bg-red-300 text-white p-8",
          isSelected ? "border-4 border-black" : "border-4 border-red-500"
        )}
      >
        <p className="">End</p>
      </div>
    </>
  );
};
