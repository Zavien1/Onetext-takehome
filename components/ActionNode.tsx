import cn from "@/utils/cn";
import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

export const ActionNode = ({ data, isSelected }: any) => {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div
        className={cn(
          "bg-purple-500 text-white py-10 px-2",
          isSelected ? "border-4 border-black" : "border-4 border-purple-500"
        )}
      >
        <p>Action Node</p>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
};
