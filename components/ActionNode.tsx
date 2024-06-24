import { useNodeContext } from "@/lib/NodesContext";
import cn from "@/utils/cn";
import { Handle, Position } from "reactflow";

export const ActionNode = ({ data, isSelected }: any) => {
  const { nodes } = useNodeContext();

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div
        className={cn(
          "bg-purple-300 text-white py-10 px-2",
          isSelected ? "border-4 border-black" : "border-4 border-purple-500"
        )}
      >
        <p className="font-medium">Action Node</p>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
};
