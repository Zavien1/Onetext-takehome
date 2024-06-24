import cn from "@/utils/cn";
import { useCallback } from "react";
import { Handle, Position, Connection } from "reactflow";
import { useToast } from "@/components/ui/use-toast";

const handleStyle = { left: 10 };

export const InitialMessageNode = ({ data, isSelected, nodes }: any) => {
  const { toast } = useToast();

  const isValidConnection = useCallback(
    (connection: Connection) => {
      const { source, target, sourceHandle, targetHandle } = connection;

      // Retrieve nodes from state or context to check their types

      const sourceNode = nodes.find((node: any) => node.id === source);
      const targetNode = nodes.find((node: any) => node.id === target);

      // Example condition: Allow connection only if target is a 'responseNode'
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

  return (
    <>
      <Handle
        type="source"
        position={Position.Bottom}
        isValidConnection={isValidConnection}
      />
      <div
        className={cn(
          "rounded-lg bg-blue-200 text-white p-4 min-w-[200px] items-center justify-center flex",
          isSelected ? "border-4 border-black" : "border-4 border-blue-500"
        )}
      >
        <p className="font-medium">Initial Message Node</p>
      </div>
    </>
  );
};
