import cn from "@/utils/cn";
import { useCallback } from "react";
import { Connection, Handle, Position } from "reactflow";
import { useToast } from "./ui/use-toast";
import { useNodeContext } from "@/lib/NodesContext";

export const EndNode = ({ data, isSelected }: any) => {
  const { nodes } = useNodeContext();
  const { toast } = useToast();

  const isValidConnection = useCallback(
    (connection: Connection) => {
      const { source } = connection;

      const sourceNode = nodes.find((node: any) => node.id === source);

      if (
        sourceNode?.type === "actionNode" ||
        sourceNode?.type === "messageNode" ||
        sourceNode?.type === "responseNode"
      ) {
        return true;
      } else {
        toast({
          variant: "destructive",
          title: "Invalid Connection",
          description:
            "This node can only connect to a message, action, or response node",
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
