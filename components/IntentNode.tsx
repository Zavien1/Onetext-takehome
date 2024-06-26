import cn from "@/utils/cn";
import { useCallback } from "react";
import { Connection, Handle, Position } from "reactflow";
import { useToast } from "./ui/use-toast";
import { useNodeContext } from "@/lib/NodesContext";

export const IntentNode = ({ data, isSelected }: any) => {
  const { toast } = useToast();
  const { nodes } = useNodeContext();

  const isValidTargetConnection = useCallback(
    (connection: Connection) => {
      const { source, target, sourceHandle, targetHandle } = connection;

      const sourceNode = nodes.find((node: any) => node.id === source);
      const targetNode = nodes.find((node: any) => node.id === target);

      if (targetNode?.type === "responseNode") {
        return true;
      } else {
        toast({
          variant: "destructive",
          title: "Invalid Connection",
          description: "This node can only connect to response nodes",
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
        targetNode?.type === "actionNode" ||
        targetNode?.type === "messageNode"
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
        style={{ top: "-5%", left: "50%", transform: "translate(-50%, 0)" }}
        className="z-50"
        isValidConnection={isValidTargetConnection}
      />
      <div
        className={cn(
          "w-32 h-32 bg-orange-300 text-white flex items-center justify-center transform rotate-45 mt-5 mb-5",
          isSelected ? "border-4 border-black" : "border-4 border-orange-500"
        )}
      >
        <p className="transform -rotate-45 text-sm font-semibold">
          Intent Node
        </p>{" "}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={{ bottom: "-5%", left: "50%", transform: "translate(-50%, 0)" }}
        isValidConnection={isValidSourceConnection}
      />
    </>
  );
};
