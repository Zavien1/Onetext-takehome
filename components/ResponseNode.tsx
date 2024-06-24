import cn from "@/utils/cn";
import { useCallback } from "react";
import { Connection, Handle, Position } from "reactflow";
import { useToast } from "./ui/use-toast";
import { useNodeContext } from "@/lib/NodesContext";

const handleStyle = { left: 10 };

export const ResponseNode = ({ data, isSelected }: any) => {
  const { nodes } = useNodeContext();
  const { toast } = useToast();

  const isValidTargetConnection = useCallback(
    (connection: Connection) => {
      const { source, target, sourceHandle, targetHandle } = connection;

      const sourceNode = nodes.find((node: any) => node.id === source);
      const targetNode = nodes.find((node: any) => node.id === target);

      if (
        sourceNode?.type === "initialMessageNode" ||
        sourceNode?.type === "messageNode"
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
      const { source, target } = connection;

      const sourceNode = nodes.find((node: any) => node.id === source);
      const targetNode = nodes.find((node: any) => node.id === target);

      if (
        targetNode?.type === "messageNode" ||
        targetNode?.type === "intentNode" ||
        targetNode?.type === "endNode" ||
        targetNode?.type === "actionNode"
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
          "rounded-lg bg-green-300 text-white p-4 min-w-[200px] items-center justify-center flex",
          isSelected ? "border-4 border-black" : "border-4 border-green-500"
        )}
      >
        <p className="font-medium">Response Node</p>
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
