import cn from "@/utils/cn";
import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

export const MessageNode = ({ data, isSelected }: any) => {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div
        className={cn(
          "rounded-lg bg-blue-300 text-white p-4 min-w-[200px] items-center justify-center flex",
          isSelected ? "border-4 border-black" : "border-4 border-blue-500"
        )}
      >
        <p>Message Node</p>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      {/* <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={handleStyle}
      /> */}
    </>
  );
};
