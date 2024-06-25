import cn from "@/utils/cn";
import { useCallback } from "react";
import { Connection, Handle, Position } from "reactflow";
import { useToast } from "./ui/use-toast";
import { useNodeContext } from "@/lib/NodesContext";

export const ActionNode = ({ data, isSelected }: any) => {
  const { nodes } = useNodeContext();
  const { toast } = useToast();

  const isValidTargetConnection = useCallback(
    (connection: Connection) => {
      const { source } = connection;

      const sourceNode = nodes.find((node: any) => node.id === source);

      if (
        sourceNode?.type === "messageNode" ||
        sourceNode?.type === "actionNode" ||
        sourceNode?.type === "responseNode" ||
        sourceNode?.type === "initialMessageNode" ||
        sourceNode?.type === "intentNode"
      ) {
        return true;
      } else {
        toast({
          variant: "destructive",
          title: "Invalid Connection",
          description:
            "This node can only connect to initial message or message nodes",
        });
        return false;
      }
    },
    [nodes]
  );

  const isValidSourceConnection = useCallback(
    (connection: Connection) => {
      const { source, target, sourceHandle, targetHandle } = connection;

      const targetNode = nodes.find((node: any) => node.id === target);

      if (
        targetNode?.type === "actionNode" ||
        targetNode?.type === "messageNode" ||
        targetNode?.type === "responseNode" ||
        targetNode?.type === "endNode"
      ) {
        return true;
      } else {
        toast({
          variant: "destructive",
          title: "Invalid Connection",
          description:
            "This node can only connect to initial message or message nodes",
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
        isValidConnection={isValidTargetConnection}
      />
      <div
        className={cn(
          "bg-purple-300 text-white py-10 px-2",
          isSelected ? "border-4 border-black" : "border-4 border-purple-500"
        )}
      >
        <p className="font-medium">Action Node</p>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        isValidConnection={isValidSourceConnection}
      />
    </>
  );
};
