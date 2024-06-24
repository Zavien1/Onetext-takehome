import cn from "@/utils/cn";
import { useCallback } from "react";
import { Handle, Position, Connection } from "reactflow";
import { useToast } from "@/components/ui/use-toast";
import { useNodeContext } from "@/lib/NodesContext";

const handleStyle = { left: 10 };

export const InitialMessageNode = ({ data, isSelected }: any) => {
  const { toast } = useToast();
  const { nodes } = useNodeContext();

  const isValidConnection = useCallback(
    (connection: Connection) => {
      const { source, target } = connection;

      const sourceNode = nodes.find((node: any) => node.id === source);
      const targetNode = nodes.find((node: any) => node.id === target);

      if (
        targetNode?.type === "responseNode" ||
        targetNode?.type === "messageNode"
      ) {
        return true;
      } else {
        toast({
          variant: "destructive",
          title: "Invalid Connection",
          description:
            "This node can only connect to response nodes or message nodes",
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
